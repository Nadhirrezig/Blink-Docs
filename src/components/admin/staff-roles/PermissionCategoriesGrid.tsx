/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import { permissionCategories, colorClasses } from '@/data/permissionCategories';

export default function PermissionCategoriesGrid() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Permission Organization Guidelines
      </h2>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Flexible Permission Structure
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              The categories below are <strong>examples</strong> of how you might organize permissions.
              Your actual permission structure should reflect your specific business operations and organizational needs.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {permissionCategories.map((category) => {
          const colors = colorClasses[category.color];
          return (
            <div key={category.id} className={`${colors.bg} border ${colors.border} rounded-lg p-6`}>
              <h3 className={`text-lg font-semibold ${colors.titleText} mb-3 flex items-center`}>
                <span className={`inline-flex p-3 rounded-xl ${colors.text} bg-white dark:bg-gray-800 shadow-md mr-2`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.iconPath} />
                  </svg>
                </span>
                {category.title}
              </h3>
              <ul className={`space-y-1 ${colors.textSecondary} text-sm`}>
                {category.permissions.map((permission, index) => (
                  <li key={index}>• {permission}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
