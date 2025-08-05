/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Modern Language Switcher Component
 * Uses URL-based language switching like modern websites
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
];

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  // Ensure client-side rendering consistency
  useEffect(() => {
    setIsClient(true);
  }, []);

  const applyTranslation = useCallback(async (targetLang: string) => {
    setIsTranslating(true);
    setTranslationError(null);

    // Block page interactions during translation
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';

    try {
      console.log(`Starting translation to ${targetLang}...`);

      // Minimum loading time to prevent flickering
      const minLoadingTime = 800;
      const startTime = Date.now();

      // Use Google Translate's automatic translation
      await loadGoogleTranslate(targetLang);

      // Wait for translation to be fully applied
      await waitForTranslationComplete(targetLang);

      // Ensure minimum loading time
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      console.log(`Translation to ${targetLang} completed successfully`);

    } catch (error) {
      console.error('Translation failed:', error);
      setTranslationError(`Failed to translate to ${targetLang}. Please try again.`);

      // Revert to English on error
      const url = new URL(window.location.href);
      url.searchParams.delete('hl');
      window.history.pushState({}, '', url.toString());
      setCurrentLanguage(SUPPORTED_LANGUAGES[0]);

    } finally {
      // Re-enable page interactions
      document.body.style.pointerEvents = '';
      document.body.style.userSelect = '';
      setIsTranslating(false);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Get language from URL parameter
    const langParam = searchParams.get('hl');
    if (langParam) {
      const language = SUPPORTED_LANGUAGES.find(lang => lang.code === langParam);
      if (language) {
        setCurrentLanguage(language);
        // Apply translation if not English and not already translating
        if (langParam !== 'en' && !isTranslating) {
          applyTranslation(langParam);
        }
      }
    }
  }, [searchParams, isClient, isTranslating, applyTranslation]);

  const waitForTranslationComplete = (targetLang: string): Promise<void> => {
    return new Promise((resolve) => {
      let attempts = 0;
      const maxAttempts = 50; // 10 seconds max wait

      const checkTranslation = () => {
        attempts++;

        // Check if translation is applied by looking for translated elements
        const translatedElements = document.querySelectorAll('[class*="translated"], [style*="translated"]');
        const hasTranslatedContent = document.body.innerHTML.includes('goog-te-');

        // Also check if the page language has changed
        const htmlLang = document.documentElement.lang;
        const isTranslated = translatedElements.length > 0 || hasTranslatedContent || htmlLang === targetLang;

        if (isTranslated || attempts >= maxAttempts) {
          console.log(`Translation check completed after ${attempts} attempts`);
          resolve();
        } else {
          setTimeout(checkTranslation, 200);
        }
      };

      // Start checking after a short delay
      setTimeout(checkTranslation, 500);
    });
  };

  const loadGoogleTranslate = (targetLang: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      console.log('Loading Google Translate script...');

      // Clean up any existing Google Translate elements
      const existingElements = document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame, .skiptranslate');
      existingElements.forEach(el => el.remove());

      // Remove existing script
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create hidden container
      let container = document.getElementById('google_translate_element');
      if (!container) {
        container = document.createElement('div');
        container.id = 'google_translate_element';
        container.style.display = 'none';
        document.body.appendChild(container);
      }

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        console.log('Google Translate initialized, creating element...');

        try {
          if (!window.google?.translate?.TranslateElement) {
            throw new Error('Google Translate API not available');
          }

          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,de,it',
            layout: 0, // SIMPLE
            autoDisplay: false,
          }, 'google_translate_element');

          // Auto-trigger translation after element is created
          setTimeout(() => {
            console.log('Triggering translation...');
            const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (select) {
              for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value.includes(targetLang)) {
                  console.log(`Found target language option: ${select.options[i].value}`);
                  select.selectedIndex = i;
                  select.dispatchEvent(new Event('change'));
                  break;
                }
              }
              resolve();
            } else {
              console.error('Google Translate select element not found');
              reject(new Error('Translation select not found'));
            }
          }, 1500); // Increased delay to ensure element is ready

        } catch (error) {
          console.error('Error creating Google Translate element:', error);
          reject(error);
        }
      };

      // Load script with timeout
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

      const timeout = setTimeout(() => {
        console.error('Google Translate script loading timeout');
        reject(new Error('Script loading timeout'));
      }, 10000);

      script.onload = () => {
        console.log('Google Translate script loaded successfully');
        clearTimeout(timeout);
      };

      script.onerror = (error) => {
        console.error('Failed to load Google Translate script:', error);
        clearTimeout(timeout);
        reject(new Error('Failed to load translation script'));
      };

      document.head.appendChild(script);
    });
  };

  const handleLanguageChange = async (language: Language) => {
    // Prevent interaction during translation
    if (isTranslating) {
      return;
    }

    setIsOpen(false);
    setTranslationError(null);

    // Update URL with language parameter (like Google does)
    const url = new URL(window.location.href);
    if (language.code === 'en') {
      url.searchParams.delete('hl');
    } else {
      url.searchParams.set('hl', language.code);
    }

    // Update URL without page reload
    window.history.pushState({}, '', url.toString());

    // Update current language immediately for UI feedback
    setCurrentLanguage(language);

    // Apply translation
    if (language.code !== 'en') {
      await applyTranslation(language.code);
    } else {
      // Reset to English - reload page to clear translations
      setIsTranslating(true);
      setTimeout(() => {
        window.location.reload();
      }, 300); // Small delay to show loading state
    }
  };

  // Prevent hydration mismatch by only showing dynamic content on client
  if (!isClient) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          <button
            disabled
            className="flex items-center justify-between w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm opacity-50 cursor-not-allowed"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇺🇸</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                English
              </span>
            </div>
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Global Translation Overlay */}
      {isTranslating && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9999] flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-sm mx-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin h-8 w-8 border-3 border-blue-500 border-t-transparent rounded-full"></div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Translating Page
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Translating to {currentLanguage.nativeName}...
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Please wait while we translate the content
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`relative ${className}`}>
        {/* Translation Error Message */}
        {translationError && (
          <div className="mb-2 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-xs text-red-700 dark:text-red-300">{translationError}</p>
          </div>
        )}

      {/* Translation Loading Overlay */}
      {isTranslating && (
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg z-50 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              Translating...
            </span>
          </div>
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => !isTranslating && setIsOpen(!isOpen)}
          disabled={isTranslating}
          className={`flex items-center justify-between w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm transition-all duration-200 ${
            isTranslating
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {isTranslating ? 'Translating...' : currentLanguage.nativeName}
            </span>
          </div>
          {isTranslating ? (
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
          ) : (
            <svg
              className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>

        {isOpen && !isTranslating && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                disabled={isTranslating}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  currentLanguage.code === language.code
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{language.nativeName}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{language.name}</div>
                </div>
                {currentLanguage.code === language.code && !isTranslating && (
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hide Google Translate UI */}
      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-menu-frame,
        .skiptranslate {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
        
        #google_translate_element {
          display: none !important;
        }
      `}</style>
      </div>
    </>
  );
}

// Global interface for Google Translate
interface GoogleTranslateOptions {
  pageLanguage: string;
  includedLanguages: string;
  layout: number;
  autoDisplay: boolean;
}

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (options: GoogleTranslateOptions, elementId: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}
