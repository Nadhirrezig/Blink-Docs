/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

export default function StaffPermissionWorkflow() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Staff Permission Assignment
      </h2>
      
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Step-by-Step Permission Assignment
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Navigate to Staff Management</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Go to Admin → Staff Management → User Roles & Permissions
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Select Staff Member</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Choose the staff member you want to assign permissions to, or create a new staff account
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Choose Role Template</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Select from predefined roles (Server, Kitchen Staff, Manager) or create a custom role
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Customize Permissions</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Fine-tune specific permissions by checking/unchecking individual capabilities
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-semibold">
              5
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Save & Apply</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Save the permission set and notify the staff member of their new access level
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
