import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';

export default function KitchenGuide() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          👨‍🍳 Kitchen Guide
        </h1>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-2">
            Kitchen System Overview
          </h2>
          <p className="text-orange-800 dark:text-orange-200">
            [ADD YOUR TEXT HERE]
          </p>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add kitchen system overview screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Kitchen Workflow
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Order Flow
          </h3>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Kitchen Guide Sections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/kitchen/kds" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              5.1 Kitchen Display System (KDS)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              KDS interface, order management, status updates, and kitchen communication.
            </p>
          </Link>

          <Link href="/kitchen/recipe-management" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              5.2 Recipe Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Recipe database, creating recipes, standardization, and cost calculation.
            </p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
