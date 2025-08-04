/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

export interface RoleTemplate {
  id: string;
  title: string;
  badge: string;
  badgeColor: 'green' | 'orange' | 'blue';
  description: string;
  includedPermissions: string[];
  restrictedAccess: string[];
}

export const roleTemplates: RoleTemplate[] = [
  {
    id: 'branch-head',
    title: 'Branch Head',
    badge: 'Management',
    badgeColor: 'blue',
    description: 'Senior management role with comprehensive access to branch operations and staff oversight.',
    includedPermissions: [
      'Full operational access',
      'Staff management capabilities',
      'Financial reporting access',
      'System configuration rights',
      'Override permissions for special cases',
      'Branch-level administrative functions'
    ],
    restrictedAccess: [
      'System-wide configuration changes',
      'Multi-branch administrative functions',
      'Core system settings modification'
    ]
  },
  {
    id: 'waiter',
    title: 'Waiter',
    badge: 'Front of House',
    badgeColor: 'green',
    description: 'Customer-facing role focused on order management and customer service operations.',
    includedPermissions: [
      'Order management and processing',
      'Customer interaction capabilities',
      'Basic payment processing',
      'Table and seating management',
      'Customer service functions',
      'Basic reporting access'
    ],
    restrictedAccess: [
      'Staff management functions',
      'Financial reporting access',
      'System configuration changes',
      'Administrative functions',
      'Kitchen management operations'
    ]
  },
  {
    id: 'chef',
    title: 'Chef',
    badge: 'Kitchen Operations',
    badgeColor: 'orange',
    description: 'Kitchen-focused role with access to food preparation, inventory, and kitchen management systems.',
    includedPermissions: [
      'Kitchen operations management',
      'Inventory and ingredient tracking',
      'Recipe and menu item management',
      'Kitchen staff coordination',
      'Food preparation workflows',
      'Kitchen reporting and analytics'
    ],
    restrictedAccess: [
      'Customer-facing operations',
      'Payment processing systems',
      'Staff hiring and management',
      'Financial reporting access',
      'System-wide configuration changes'
    ]
  },
];

export const badgeColorClasses = {
  green: 'text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full',
  orange: 'text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full',
  blue: 'text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full'
};
