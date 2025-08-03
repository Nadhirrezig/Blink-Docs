import DocsLayout from '@/components/DocsLayout';

export default function BasicInformation() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.1 Basic Information
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Restaurant Profile Setup
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

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Step-by-Step Configuration
        </h3>
        
        <div className="space-y-6 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              Business Details
            </h4>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              Contact Information
            </h4>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              Operating Hours
            </h4>
            <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-1">
              <li>[ADD YOUR TEXT HERE]</li>
              <li>[ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add restaurant profile setup screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Location & Delivery Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Delivery Zones
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Pickup Options
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Branding & Customization
        </h2>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
            Logo Upload
          </h3>
          <ol className="list-decimal list-inside text-purple-800 dark:text-purple-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Color Scheme
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add branding customization screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Troubleshooting
        </h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Common Issues
            </h3>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
