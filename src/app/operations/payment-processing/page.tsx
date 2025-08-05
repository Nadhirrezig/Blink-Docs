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
import PaymentProcessingCarousel from '@/components/PaymentProcessingCarousel';

export default function PaymentProcessing() {
  return (
    <DocsLayout>
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            💰 Payment Processing Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn secure cash handling procedures, drawer management, receipt processing,
            and end-of-shift reconciliation to ensure accurate financial transactions.
          </p>
        </div>

        {/* Payment Processing Carousel */}
        <PaymentProcessingCarousel />

        {/* Security Reminders Section */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 md:p-6 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-red-900 dark:text-red-100 mb-3">
            🔒 Security Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-red-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cash Handling</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] Always count cash twice and keep large bills secure
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-red-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Drawer Security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] Never leave cash drawer open or unattended
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
