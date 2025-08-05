/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Language Switcher Test Page
 * Tests the enhanced LanguageSwitcher component functionality
 */

'use client';

import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LanguageTestPage() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Language Switcher Test Page
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This page tests the enhanced LanguageSwitcher component with proper loading states,
              error handling, and user interaction blocking during translation.
            </p>
            
            {/* Language Switcher Component */}
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Language Switcher
              </h2>
              <div className="max-w-xs">
                <LanguageSwitcher className="w-full" />
              </div>
            </div>
          </div>

          {/* Test Content for Translation */}
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Welcome to Blink Documentation
              </h2>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Blink is a comprehensive venue store ERP system that provides almost everything 
                a venue needs for efficient operations. Our platform includes point-of-sale, 
                inventory management, staff scheduling, customer relationship management, and 
                detailed analytics.
              </p>
              <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-2">
                <li>Point of Sale (POS) Operations</li>
                <li>Inventory and Menu Management</li>
                <li>Staff Roles and Permissions</li>
                <li>Customer Account Management</li>
                <li>Kitchen Display System (KDS)</li>
                <li>Payment Processing</li>
                <li>Reports and Analytics</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                Getting Started Guide
              </h2>
              <p className="text-green-800 dark:text-green-200 mb-4">
                Follow these steps to set up your venue with Blink:
              </p>
              <ol className="list-decimal list-inside text-green-700 dark:text-green-300 space-y-2">
                <li>Configure your basic venue information</li>
                <li>Set up your menu items and categories</li>
                <li>Create staff accounts and assign roles</li>
                <li>Configure payment methods</li>
                <li>Test your POS system</li>
                <li>Train your staff on the system</li>
                <li>Go live with your operations</li>
              </ol>
            </div>

            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                Advanced Features
              </h2>
              <p className="text-purple-800 dark:text-purple-200 mb-4">
                Blink offers advanced features for sophisticated venue operations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-700 dark:text-purple-300">
                <div>
                  <h3 className="font-semibold mb-2">Analytics & Reporting</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Sales performance tracking</li>
                    <li>• Customer behavior analysis</li>
                    <li>• Inventory turnover reports</li>
                    <li>• Staff productivity metrics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Integration Capabilities</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Third-party payment processors</li>
                    <li>• Accounting software integration</li>
                    <li>• Loyalty program systems</li>
                    <li>• Online ordering platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h2 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                Support and Resources
              </h2>
              <p className="text-orange-800 dark:text-orange-200 mb-4">
                Need help? We provide comprehensive support for all Blink users:
              </p>
              <div className="text-orange-700 dark:text-orange-300 space-y-2">
                <p><strong>24/7 Technical Support:</strong> Get help whenever you need it</p>
                <p><strong>Training Resources:</strong> Video tutorials and documentation</p>
                <p><strong>Community Forum:</strong> Connect with other Blink users</p>
                <p><strong>Regular Updates:</strong> New features and improvements</p>
              </div>
            </div>
          </div>

          {/* Translation Test Instructions */}
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Translation Test Instructions
            </h3>
            <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>1. Click on the language switcher above</li>
              <li>2. Select a language (French, Spanish, German, or Italian)</li>
              <li>3. Observe the loading overlay that blocks all interactions</li>
              <li>4. Wait for the translation to complete</li>
              <li>5. Verify that all content on this page is translated</li>
              <li>6. Test switching back to English</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
