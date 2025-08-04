/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

export interface PermissionCategory {
  id: string;
  title: string;
  iconPath: string;
  color: 'purple' | 'green' | 'blue' | 'orange' | 'indigo' | 'red';
  permissions: string[];
}

export const permissionCategories: PermissionCategory[] = [
  {
    id: 'operational',
    title: 'Operational Functions',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    color: 'purple',
    permissions: [
      'Core business operations',
      'Daily workflow management',
      'Customer interaction capabilities',
      'Basic system functions',
      'Standard reporting access',
      'Essential tools and features'
    ]
  },
  {
    id: 'management',
    title: 'Management Functions',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    color: 'blue',
    permissions: [
      'Staff oversight capabilities',
      'Performance monitoring',
      'Advanced reporting access',
      'Workflow coordination',
      'Decision-making tools',
      'Supervisory functions'
    ]
  },
  {
    id: 'administrative',
    title: 'Administrative Functions',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: 'red',
    permissions: [
      'System configuration access',
      'User and role management',
      'Security settings control',
      'Data backup and recovery',
      'System maintenance tools',
      'Full administrative privileges'
    ]
  },
  {
    id: 'financial',
    title: 'Financial Functions',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: 'green',
    permissions: [
      'Financial reporting access',
      'Revenue and sales analytics',
      'Cost management tools',
      'Payment processing oversight',
      'Financial data export',
      'Accounting integration features'
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Functions',
    iconPath: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    color: 'orange',
    permissions: [
      'Department-specific tools',
      'Specialized workflow access',
      'Custom feature sets',
      'Industry-specific functions',
      'Advanced operational tools',
      'Specialized reporting capabilities'
    ]
  },
  {
    id: 'integration',
    title: 'Integration & External Systems',
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4',
    color: 'indigo',
    permissions: [
      'Third-party system access',
      'API and integration management',
      'External service configuration',
      'Data synchronization tools',
      'Import/export capabilities',
      'System connectivity features'
    ]
  }
];

export const colorClasses = {
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    textSecondary: 'text-purple-800 dark:text-purple-200',
    titleText: 'text-purple-900 dark:text-purple-100'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    textSecondary: 'text-green-800 dark:text-green-200',
    titleText: 'text-green-900 dark:text-green-100'
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    textSecondary: 'text-blue-800 dark:text-blue-200',
    titleText: 'text-blue-900 dark:text-blue-100'
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
    textSecondary: 'text-orange-800 dark:text-orange-200',
    titleText: 'text-orange-900 dark:text-orange-100'
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-800',
    textSecondary: 'text-indigo-800 dark:text-indigo-200',
    titleText: 'text-indigo-900 dark:text-indigo-100'
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
    textSecondary: 'text-red-800 dark:text-red-200',
    titleText: 'text-red-900 dark:text-red-100'
  }
};
