/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */
import DocsLayout from '@/components/DocsLayout';
import { ClickableImage } from '@/components/ClickableImage';
import Link from 'next/link';
import { UserCheck } from 'lucide-react';

export default function AdminGuide() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <UserCheck className="w-10 h-10 text-blue-600" />
          Admin Guide
        </h1>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
            Admin Dashboard Overview
          </h2>
          <p className="text-indigo-800 dark:text-indigo-200">
            Welcome to the admin guide for the restaurant management system. This guide will help you navigate the admin dashboard and understand the different sections and features.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <ClickableImage src="/screenshots/dashboard.png" alt="Admin Dashboard" width={800} height={400} className="w-full h-auto rounded-lg mb-8" hoverEffect="subtle" />
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Navigation
        </h2>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Navigation Bar
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Dashboard</li>
            <li>• Menu Management</li>
            <li>• Table Management</li>
            <li>• waiter requests</li>
            <li>• Orders</li>
            <li>• POS</li>
            <li>• Inventory(Curretly under development)</li>
            <li>• Payment Reports</li>
            <li>• Reports</li>
            <li>• Settings</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
          <li>• View orders</li>
          <li>• View waiter requests</li>
          <li>• View reservations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Admin Guide Sections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/basic-information" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3.1 Basic Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Restaurant profile setup, location settings, and branding customization.
            </p>
          </Link>

          <Link href="/admin/menu-management" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3.2 Menu Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Menu structure, adding items, pricing, modifiers, and inventory management.
            </p>
          </Link>

          <Link href="/admin/staff-management" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3.3 Staff Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Adding staff members, role assignment, schedules, and performance tracking.
            </p>
          </Link>

          <Link href="/admin/payment-configuration" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3.4 Payment Configuration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Payment methods, tax configuration, and receipt settings.
            </p>
          </Link>

          <Link href="/admin/reports-analytics" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3.5 Reports & Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Dashboard analytics, sales reports, performance metrics, and data export.
            </p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
