import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';

export default function StaffGuide() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          👨‍💻 Staff Guide
        </h1>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
            Staff Dashboard Overview
          </h2>
          <p className="text-emerald-800 dark:text-emerald-200">
            [ADD YOUR TEXT HERE]
          </p>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add staff dashboard screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Getting Started
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            First Login
          </h3>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Dashboard Navigation
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Staff Guide Sections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/staff/pos-operations" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              4.1 POS Operations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Taking orders, managing order items, order types, and status management.
            </p>
          </Link>

          <Link href="/staff/payment-processing" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              4.2 Payment Processing (only cash for now)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Cash payment processing, drawer management, discounts, and receipts.
            </p>
          </Link>

          <Link href="/staff/table-management" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              4.3 Table Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Table assignment, managing table orders, bill splitting, and turnover.
            </p>
          </Link>

          <Link href="/staff/customer-service" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              4.4 Customer Service
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Customer interaction guidelines, handling complaints, refunds, and emergency procedures.
            </p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
