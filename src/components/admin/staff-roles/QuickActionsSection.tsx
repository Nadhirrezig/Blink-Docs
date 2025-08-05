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

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navigationStructure, NavigationItem } from '@/data/navigation';

export default function QuickActionsSection() {
  const pathname = usePathname();
  
  // Find the admin section and get its children
  const adminSection = navigationStructure.find((item: NavigationItem) => item.href === '/admin');
  const adminNavigation = adminSection?.children || [];
  
  // Find current page index
  const currentIndex = adminNavigation.findIndex((item: NavigationItem) => item.href === pathname);
  
  // Get previous and next navigation items
  const getNavigationItems = (): Array<NavigationItem & { type: 'previous' | 'next' }> => {
    const items: Array<NavigationItem & { type: 'previous' | 'next' }> = [];
    
    // Add previous item if exists
    if (currentIndex > 0) {
      items.push({
        ...adminNavigation[currentIndex - 1],
        type: 'previous'
      });
    }
    
    // Add next item if exists
    if (currentIndex < adminNavigation.length - 1) {
      items.push({
        ...adminNavigation[currentIndex + 1],
        type: 'next'
      });
    }
    
    return items;
  };
  
  const quickNavigationItems = getNavigationItems();
  
  // If no navigation items found (e.g., not on an admin page), show default actions
  if (quickNavigationItems.length === 0) {
    return (
      <>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/admin/staff-management" className="block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Manage Staff Accounts
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Create, edit, and manage staff user accounts
            </p>
          </Link>
          
          <Link href="/admin" className="block bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Back to Admin Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Return to the main admin documentation
            </p>
          </Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Quick Navigation
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickNavigationItems.map((item: NavigationItem & { type: 'previous' | 'next' }) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`block rounded-lg p-4 transition-colors ${
              item.type === 'previous'
                ? 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold mb-2 ${
                item.type === 'previous'
                  ? 'text-gray-900 dark:text-white'
                  : 'text-blue-900 dark:text-blue-100'
              }`}>
                {item.type === 'previous' ? '← ' : '→ '}{item.title}
              </h3>
              <span className={`text-xs px-2 py-1 rounded ${
                item.type === 'previous'
                  ? 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  : 'bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300'
              }`}>
                {item.type === 'previous' ? 'Previous' : 'Next'}
              </span>
            </div>
            <p className={`text-sm ${
              item.type === 'previous'
                ? 'text-gray-600 dark:text-gray-300'
                : 'text-blue-800 dark:text-blue-200'
            }`}>
              {item.type === 'previous' 
                ? 'Navigate to the previous section'
                : 'Continue to the next section'
              }
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
