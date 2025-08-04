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
import MenuManagementCarousel from '@/components/MenuManagementCarousel';

export default function MenuManagement() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Menu Management Guide
        </h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Complete Menu Creation Workflow
          </h2>
          <p className="text-blue-800 dark:text-blue-200 text-sm md:text-base">
            Follow this step-by-step guide to create a comprehensive menu system. Each step builds upon the previous one, creating a complete ordering experience for your customers.
          </p>
        </div>

        <MenuManagementCarousel />

        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Related Documentation
              </h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li>• Inventory Management Guide</li>
                <li>• Pricing Strategy Best Practices</li>
                <li>• Menu Optimization Tips</li>
                <li>• Customer Feedback Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Support Resources
              </h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li>• Video Tutorials</li>
                <li>• Live Chat Support</li>
                <li>• Community Forum</li>
                <li>• Training Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
