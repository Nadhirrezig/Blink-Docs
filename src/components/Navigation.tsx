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
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    title: '01. Getting Started',
    href: '/getting-started',
  },
  {
    title: '02. User Roles & Permissions',
    href: '/user-roles',
  },
  {
    title: '03. Admin Guide',
    href: '/admin',
    children: [
      { title: 'Basic Information', href: '/admin/basic-information' },
      { title: 'Menu Management', href: '/admin/menu-management' },
      { title: 'Staff Management', href: '/admin/staff-management' },
      { title: 'Payment Configuration', href: '/admin/payment-configuration' },
      { title: 'Reports & Analytics', href: '/admin/reports-analytics' },
    ],
  },
  {
    title: '04. Staff Guide',
    href: '/staff',
    children: [
      { title: 'POS Operations', href: '/staff/pos-operations' },
      { title: 'Payment Processing', href: '/staff/payment-processing' },
      { title: 'Table Management', href: '/staff/table-management' },
      { title: 'Customer Service', href: '/staff/customer-service' },
    ],
  },
  {
    title: '05. Kitchen Guide',
    href: '/kitchen',
    children: [
      { title: 'Kitchen Display System (KDS)', href: '/kitchen/kds' },
      { title: 'Recipe Management', href: '/kitchen/recipe-management' },
    ],
  },
  {
    title: '06. Customer Guide',
    href: '/customer',
    children: [
      { title: 'Online Ordering', href: '/customer/online-ordering' },
      { title: 'Reservations', href: '/customer/reservations' },
      { title: 'Account Management', href: '/customer/account-management' },
    ],
  },
];

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
  const shouldExpandSection = useCallback((item: { href: string; children?: { href: string; title: string }[] }) => {
    if (!item.children) return false;
    return item.children.some((child) => isActivePath(child.href)) || isActivePath(item.href);
  }, [isActivePath]);

  // Auto-expand sections based on current path
  useEffect(() => {
    const sectionsToExpand: string[] = [];
    navigationItems.forEach(item => {
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
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('keydown', handleEscape);
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors duration-200"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg
          className="w-5 h-5"
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
                width={32}
                height={32}
                className="rounded"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Blink
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Venue Store ERP
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">
              Restaurant Management Documentation
            </p>
          </Link>

          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = isActivePath(item.href);
              const hasActiveChild = item.children?.some((child) => isActivePath(child.href));
              const isExpanded = expandedSections.includes(item.title);

              return (
                <li key={item.title}>
                  <div>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`flex-1 flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive || hasActiveChild
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                        }`}
                        onClick={() => {
                          if (!item.children) {
                            closeMobileMenu();
                          }
                        }}
                      >
                        <span>{item.title}</span>
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => toggleSection(item.title)}
                          className={`ml-1 p-1 rounded transition-colors duration-200 ${
                            isActive || hasActiveChild
                              ? 'text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800'
                              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                          aria-label={`Toggle ${item.title} section`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {item.children && isExpanded && (
                    <ul className="mt-2 ml-6 space-y-1">
                      {item.children.map((child) => {
                        const isChildActive = isActivePath(child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                                isChildActive
                                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 border-l-2 border-blue-500 font-medium'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                              }`}
                              onClick={closeMobileMenu}
                            >
                              {child.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Copyright Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                © 2024 Blink - Venue Store ERP
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
