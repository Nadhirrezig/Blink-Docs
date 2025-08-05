/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Test page for Google Translate functionality
 */

import DocsLayout from '@/components/DocsLayout';

export default function TranslateTestPage() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Google Translate Test Page
        </h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Test Content for Translation
          </h2>
          <p className="text-blue-800 dark:text-blue-200 mb-3">
            This page contains various types of content to test Google Translate functionality.
            The translate widget should appear in the navigation sidebar on the left.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Sample Headings
        </h2>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Payment Configuration
        </h3>
        
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Receipt Settings
        </h4>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This is a paragraph with regular text content. It should be translated when you select
          a different language from the Google Translate widget in the navigation.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li>First list item for translation testing</li>
          <li>Second list item with different content</li>
          <li>Third list item to verify list translation</li>
          <li>Fourth item with technical terms: POS, ERP, KDS</li>
        </ul>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            Success Message
          </h3>
          <p className="text-green-800 dark:text-green-200">
            If you can see the Google Translate dropdown in the navigation and can select languages
            like French, Spanish, German, or Italian, then the implementation is working correctly.
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
            Expected Languages
          </h3>
          <p className="text-yellow-800 dark:text-yellow-200 mb-3">
            The Google Translate widget should support these languages:
          </p>
          <ul className="list-disc list-inside space-y-1 text-yellow-800 dark:text-yellow-200">
            <li>English (en) - Default</li>
            <li>French (fr) - Français</li>
            <li>Spanish (es) - Español</li>
            <li>German (de) - Deutsch</li>
            <li>Italian (it) - Italiano</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            Troubleshooting
          </h3>
          <p className="text-red-800 dark:text-red-200 mb-3">
            If you see &ldquo;Translation unavailable&rdquo; instead of the language dropdown:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-red-800 dark:text-red-200">
            <li>Check the browser console for error messages</li>
            <li>Verify internet connectivity to Google&apos;s servers</li>
            <li>Check if the debug information shows any issues</li>
            <li>Try refreshing the page</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  );
}
