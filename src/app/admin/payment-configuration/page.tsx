import DocsLayout from '@/components/DocsLayout';

export default function PaymentConfiguration() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.4 Payment Configuration
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Payment Methods Overview
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          [ADD YOUR TEXT HERE]
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
            Currently Supported
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li>• Cash payments ✅</li>
            <li>• Credit/Debit cards (Coming soon)</li>
            <li>• Digital wallets (Coming soon)</li>
          </ul>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add payment configuration interface screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Cash Payment Setup
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Configuration Steps
          </h3>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Cash Drawer Settings
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Tax Configuration
        </h2>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
            Setting Tax Rates
          </h3>
          <ol className="list-decimal list-inside text-purple-800 dark:text-purple-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Multiple Tax Types
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Receipt Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Receipt Customization
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Print Settings
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        {/* ADD CODE EXAMPLE HERE */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Payment Configuration Example
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {/* ADD CODE EXAMPLE HERE */}
          </p>
          <pre className="text-green-400 text-sm">
            <code>
{`{
  "payment_methods": {
    "cash": {
      "enabled": true,
      "cash_drawer": true
    }
  },
  "tax_settings": {
    "default_rate": 8.25,
    "tax_inclusive": false
  },
  "receipt": {
    "show_logo": true,
    "footer_text": "Thank you for your business!"
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Future Payment Methods
        </h2>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
            Planned Integrations
          </h3>
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
