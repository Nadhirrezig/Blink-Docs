/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

export default function QuickActionsSection() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Quick Actions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/admin/staff-management" className="block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Manage Staff Accounts
          </h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            Create, edit, and manage staff user accounts
          </p>
        </a>
        
        <a href="/admin" className="block bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Back to Admin Guide
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Return to the main admin documentation
          </p>
        </a>
      </div>
    </>
  );
}
