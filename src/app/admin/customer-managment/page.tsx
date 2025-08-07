/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */


import DocsLayout from "@/components/DocsLayout";
import CustomerServiceCarousel from "@/components/CustomerServiceCarousel";
import QuickActionsSection from "@/components/admin/staff-roles/QuickActionsSection";
export default function customermanagment(){
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
            <CustomerServiceCarousel />
            <div className="h-10"></div>
            <QuickActionsSection />
            </div>

        </DocsLayout>
    )
}