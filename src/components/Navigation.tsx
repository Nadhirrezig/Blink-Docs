/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { navigationStructure, NavigationItem } from '@/data/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActivePath = useCallback((href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  }, [pathname]);

  // Helper function to check if a section should be expanded based on current path
  const shouldExpandSection = useCallback((item: NavigationItem) => {
    if (!item.children) return false;
    return item.children.some((child) => isActivePath(child.href)) || isActivePath(item.href);
  }, [isActivePath]);

  // Auto-expand sections based on current path
  useEffect(() => {
    const sectionsToExpand: string[] = [];
    navigationStructure.forEach(item => {
      if (shouldExpandSection(item)) {
        sectionsToExpand.push(item.title);
      }
    });
    setExpandedSections(sectionsToExpand);
  }, [pathname, shouldExpandSection]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto shadow-lg lg:shadow-none ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <Link
            href="/"
            className={`block mb-8 p-3 rounded-lg transition-colors duration-200 ${
              pathname === '/'
                ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            onClick={closeMobileMenu}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Image
                src="/logo1.png"
                alt="Blink Logo"
                width={40}
                height={40}

              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Blink Docs
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Venue Store ERP System
                </p>
              </div>
            </div>
          </Link>

          {/* Google Translate hobi hobi */}
          <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Translate
              </span>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <div className="mb-2">
              <span className="block text-xs text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30 rounded px-2 py-1">
                Note: Translation is experimental and may contain bugs or errors.
              </span>
            </div>
            <LanguageSwitcher className="w-full" />
          </div>

          <div className="space-y-2">
            {navigationStructure.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block p-3 rounded-lg transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {item.title}
                    </span>
                    {item.children && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleSection(item.title);
                        }}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-200"
                        aria-label={`${expandedSections.includes(item.title) ? 'Collapse' : 'Expand'} ${item.title} section`}
                        aria-expanded={expandedSections.includes(item.title)}
                      >
                        <svg
                          className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${
                            expandedSections.includes(item.title) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </Link>

                {item.children && expandedSections.includes(item.title) && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block p-2 rounded-lg transition-colors duration-200 text-sm ${
                          isActivePath(child.href)
                            ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
