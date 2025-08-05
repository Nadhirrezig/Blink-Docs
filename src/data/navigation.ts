/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

// Navigation item type definition
export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

// Shared navigation structure
export const navigationStructure: NavigationItem[] = [
  {
    title: '01. Getting Started',
    href: '/getting-started',
  },
  {
    title: '02. Admin Guide',
    href: '/admin',
    children: [
      { title: 'Basic Information', href: '/admin/basic-information' },
      { title: 'Menu Management', href: '/admin/menu-management' },
      { title: 'Staff Roles & Permissions', href: '/admin/staff-roles' },
      { title: 'Payment Configuration', href: '/admin/payment-configuration' },
      { title: 'Reports & Analytics', href: '/admin/reports-analytics' },
    ],
  },
  {
    title: '03. Operations Guide',
    href: '/operations',
    children: [
      { title: 'POS Operations', href: '/operations/pos-operations' },
      { title: 'Payment Processing', href: '/operations/payment-processing' },
      { title: 'Table Management', href: '/operations/table-management' },
      { title: 'Customer Service', href: '/operations/customer-service' },
    ],
  },
  {
    title: '04. Kitchen Guide',
    href: '/kitchen',
    children: [
      { title: 'Kitchen Display System (KDS)', href: '/kitchen/kds' },
    ],
  },
  {
    title: '05. Customer Guide',
    href: '/customer',
    children: [
      { title: 'Online Ordering', href: '/customer/online-ordering' },
      { title: 'Reservations', href: '/customer/reservations' },
      { title: 'Account Management', href: '/customer/account-management' },
    ],
  },
]; 