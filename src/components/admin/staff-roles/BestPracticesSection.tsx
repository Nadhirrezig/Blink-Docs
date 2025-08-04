/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

export default function BestPracticesSection() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Best Practices & Security Guidelines
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recommended Practices
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
            <li>• Follow principle of least privilege</li>
            <li>• Regularly review and audit permissions</li>
            <li>• Use role templates as starting points</li>
            <li>• Document custom role purposes</li>
            <li>• Train staff on their access levels</li>
            <li>• Monitor access logs regularly</li>
            <li>• Update permissions when roles change</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Security Warnings
          </h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
            <li>• Never share admin credentials</li>
            <li>• Avoid giving excessive permissions</li>
            <li>• Remove access for terminated staff immediately</li>
            <li>• Don&apos;t use generic shared accounts</li>
            <li>• Monitor for unusual access patterns</li>
            <li>• Require strong passwords</li>
            <li>• Enable two-factor authentication</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Important Notes
            </h3>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
              <li>• Permission changes take effect immediately</li>
              <li>• Staff members will be notified of permission updates</li>
              <li>• All permission changes are logged for audit purposes</li>
              <li>• Contact support if you need assistance with complex role setups</li>
              <li>• Consider creating test accounts to verify permission sets</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
