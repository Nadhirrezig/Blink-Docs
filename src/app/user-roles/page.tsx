import DocsLayout from '@/components/DocsLayout';

export default function UserRoles() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          👤 User Roles & Permissions
        </h1>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
            Role Overview
          </h2>
          <p className="text-purple-800 dark:text-purple-200">
            [ADD YOUR TEXT HERE]
          </p>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add user roles diagram screenshot here
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              👨‍💼 Admin Role
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Permissions
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Responsibilities
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              👨‍💻 Staff Role
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Permissions
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Responsibilities
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              👨‍🍳 Kitchen Role
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Permissions
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Responsibilities
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              👤 Customer Role
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Permissions
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Access Levels
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Managing User Permissions
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            How to Assign Roles
          </h3>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add role assignment interface screenshot here
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
            How to Modify Permissions
          </h3>
          <ol className="list-decimal list-inside text-green-800 dark:text-green-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Security Guidelines
        </h2>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <ul className="space-y-2 text-red-800 dark:text-red-200">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
