import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';

export default function CustomerGuide() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          👤 Customer Guide
        </h1>
        
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-2">
            Customer Portal Overview
          </h2>
          <p className="text-teal-800 dark:text-teal-200">
            [ADD YOUR TEXT HERE]
          </p>
        </div>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add customer portal screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Account Creation
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Registration Process
          </h3>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-2">
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
            <li>[ADD YOUR TEXT HERE]</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Customer Guide Sections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/customer/online-ordering" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              6.1 Online Ordering
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Ordering process, menu browsing, customizing orders, and order tracking.
            </p>
          </Link>

          <Link href="/customer/reservations" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              6.2 Reservations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Making reservations, managing bookings, and special occasion planning.
            </p>
          </Link>

          <Link href="/customer/account-management" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              6.3 Account Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Profile management, order history, favorites, and loyalty program.
            </p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
