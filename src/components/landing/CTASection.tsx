/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
          Ready to Transform Your Restaurant?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-2">
          Join the digital revolution and transform your restaurant with Blink.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-8 max-w-md sm:max-w-none mx-auto">
          <Link
            href="/getting-started"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Start Your Journey
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <Link
            href="/admin"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg transition-all duration-200 w-full sm:w-auto"
          >
            Explore Features
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-blue-100">
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Free Setup & Training</span>
          </div>

          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">30-Day Money Back</span>
          </div>

          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
