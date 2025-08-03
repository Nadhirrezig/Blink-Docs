import DocsLayout from '@/components/DocsLayout';

export default function StaffManagement() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.3 Staff Management
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Staff Overview
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          [ADD YOUR TEXT HERE]
        </p>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add staff management interface screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Adding New Staff Members
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Required Information
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
            Registration Process
          </h3>
          <ol className="list-decimal list-inside text-green-800 dark:text-green-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Role Assignment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Available Roles
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Assigning Roles
            </h3>
            <ol className="list-decimal list-inside text-purple-800 dark:text-purple-200 space-y-2">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ol>
          </div>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add role assignment screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Schedule Management
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Creating Schedules
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Shift Management
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Performance Tracking
        </h2>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
            Metrics Available
          </h3>
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
            Generating Reports
          </h3>
          <ol className="list-decimal list-inside text-indigo-800 dark:text-indigo-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Staff Training Resources
        </h2>
        
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• [ADD YOUR TEXT HERE]</li>
          <li>• [ADD YOUR TEXT HERE]</li>
          <li>• [ADD YOUR TEXT HERE]</li>
        </ul>
      </div>
    </DocsLayout>
  );
}
