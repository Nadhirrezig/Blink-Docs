import DocsLayout from '@/components/DocsLayout';

export default function POSOperations() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          4.1 POS Operations
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          POS System Overview
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          [ADD YOUR TEXT HERE]
        </p>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add POS system interface screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Taking Orders
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Customer Approach
            </h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Menu Selection
            </h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Order Customization
            </h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Order Review
            </h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Managing Order Items
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Adding Items
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Modifying Items
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Removing Items
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add order management interface screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Order Types
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
              Dine-In Orders
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
              Takeout Orders
            </h3>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Delivery Orders
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Special Requests
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Handling Modifications
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
              Allergy Notifications
            </h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Order Status Management
        </h2>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
            Status Updates
          </h3>
          <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Communication with Kitchen
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
