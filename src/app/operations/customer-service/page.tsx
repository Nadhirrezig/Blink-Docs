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
import CustomerServiceCarousel from '@/components/CustomerServiceCarousel';
import { Handshake, AlertTriangle } from 'lucide-react';

export default function CustomerService() {
  return (
    <DocsLayout>
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center justify-center gap-3">
            <Handshake className="w-8 h-8 text-blue-600" />
            Customer Service Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deliver exceptional customer service with professional communication, complaint resolution,
            refund procedures, and emergency response protocols for positive customer experiences.
          </p>
        </div>

        {/* Customer Service Carousel */}
        <CustomerServiceCarousel />

        {/* Emergency Contacts Section */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 md:p-6 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-orange-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Emergency Services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] 911 for emergencies, Poison Control: 1-800-222-1222
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-orange-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Management</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] Manager contact numbers and escalation procedures
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
