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

// Google Translate options interface
interface GoogleTranslateOptions {
  pageLanguage: string;
  includedLanguages: string;
  layout: number;
  autoDisplay: boolean;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const searchParams = useSearchParams();

  const applyTranslation = useCallback(async (targetLang: string) => {
    setIsTranslating(true);
    
    try {
      // Use Google Translate's automatic translation
      await loadGoogleTranslate(targetLang);
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  }, []);

  useEffect(() => {
    // Get language from URL parameter
    const langParam = searchParams.get('hl');
    if (langParam) {
      const language = SUPPORTED_LANGUAGES.find(lang => lang.code === langParam);
      if (language) {
        setCurrentLanguage(language);
        // Apply translation if not English
        if (langParam !== 'en') {
          applyTranslation(langParam);
        }
      }
    }
  }, [searchParams, applyTranslation]);

  const loadGoogleTranslate = (targetLang: string): Promise<void> => {
    return new Promise((resolve) => {
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

      // Initialize Google Translate with proper type checking
      window.googleTranslateElementInit = () => {
        // Check if Google Translate is available
        if (!window.google?.translate?.TranslateElement) {
          console.warn('Google Translate not available');
          resolve();
          return;
        }

        try {
          const options: GoogleTranslateOptions = {
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,de,it',
            layout: 0, // SIMPLE
            autoDisplay: false,
          };

          new window.google.translate.TranslateElement(options, 'google_translate_element');

          // Auto-trigger translation
          setTimeout(() => {
            const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (select) {
              for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value.includes(targetLang)) {
                  select.selectedIndex = i;
                  select.dispatchEvent(new Event('change'));
                  break;
                }
              }
            }
            resolve();
          }, 1000);
        } catch (error) {
          console.error('Failed to initialize Google Translate:', error);
          resolve(); // Don't fail the promise, just log the error
        }
      };

      // Load script with error handling
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.onload = () => setTimeout(resolve, 500);
      script.onerror = () => {
        console.warn('Failed to load Google Translate script');
        resolve(); // Don't fail if Google Translate is unavailable
      };
      document.head.appendChild(script);
    });
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);

    // Update URL with language parameter (like Google does)
    const url = new URL(window.location.href);
    if (language.code === 'en') {
      url.searchParams.delete('hl');
    } else {
      url.searchParams.set('hl', language.code);
    }
    
    // Update URL without page reload
    window.history.pushState({}, '', url.toString());
    
    // Apply translation
    if (language.code !== 'en') {
      applyTranslation(language.code);
    } else {
      // Reset to English
      window.location.reload();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isTranslating}
          className="flex items-center justify-between w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 disabled:opacity-50"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {currentLanguage.nativeName}
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

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
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
                {currentLanguage.code === language.code && (
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
  );
}

// Global interface for Google Translate
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
