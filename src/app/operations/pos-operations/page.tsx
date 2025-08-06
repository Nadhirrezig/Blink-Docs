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
import PosOperationsCarousel from '@/components/PosOperationsCarousel';
import { Monitor } from 'lucide-react';

export default function POSOperations() {
  return (
    <DocsLayout>
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center justify-center gap-2">
            <Monitor className="w-8 h-8 md:w-10 md:h-10 text-primary" aria-label="POS Operations" />
            POS Operations Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Master the point-of-sale system with step-by-step guidance on order taking, menu navigation,
            customizations, and payment processing to ensure efficient and accurate service.
          </p>
        </div>

        {/* POS Operations Carousel */}
        <PosOperationsCarousel />
        
      </div>
    </DocsLayout>
  );
}
