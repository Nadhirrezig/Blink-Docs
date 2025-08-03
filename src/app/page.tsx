import DocsLayout from '@/components/DocsLayout';

export default function Home() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Restaurant Management System Documentation
        </h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Welcome to the Documentation
          </h2>
          <p className="text-blue-800 dark:text-blue-200">
            This comprehensive guide will help you understand and use all features of the Restaurant Management System.
            Navigate through the sections using the sidebar menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🚀 Getting Started
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              [ADD YOUR TEXT HERE]
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              👨‍💼 Admin Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              [ADD YOUR TEXT HERE]
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              👨‍💻 Staff Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              [ADD YOUR TEXT HERE]
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              👨‍🍳 Kitchen Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              [ADD YOUR TEXT HERE]
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              👤 Customer Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              [ADD YOUR TEXT HERE]
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              👤 User Roles
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              [ADD YOUR TEXT HERE]
            </p>
          </div>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Screenshot placeholder - Add your main dashboard screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Navigation
        </h2>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Use the sidebar navigation to browse through different sections</li>
          <li>• Each section contains detailed guides and examples</li>
          <li>• Look for placeholder text marked with [ADD YOUR TEXT HERE]</li>
          <li>• Screenshots and code examples are marked with comments</li>
        </ul>

        {/* ADD CODE EXAMPLE HERE */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mt-8">
          <p className="text-gray-400 text-sm mb-2">
            {/* ADD CODE EXAMPLE HERE */}
          </p>
          <pre className="text-green-400 text-sm">
            <code>
{`// Example API endpoint structure
GET /api/orders
POST /api/orders
PUT /api/orders/:id
DELETE /api/orders/:id`}
            </code>
          </pre>
        </div>
      </div>
    </DocsLayout>
  );
}
