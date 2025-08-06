import DocsLayout from '@/components/DocsLayout';
import QuickActionsSection from '@/components/admin/staff-roles/QuickActionsSection';
import { ClickableImage } from '@/components/ClickableImage';

export default function ReportsAnalytics() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.5 Reports & Analytics
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Dashboard Analytics
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
        Here you can view your sales reports, inventory reports, and customer analytics. You can also export your data in various formats.
        </p>

        <ClickableImage src="/screenshots/dashboard.png" alt="Analytics Dashboard" width={1000} height={1000} hoverEffect="subtle" />

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Sales Reports
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Available Reports
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• Sales by item</li>
            <li>• Sales by category</li>
            <li>• Sales by employee</li>
            <li>• Sales by customer</li>
          </ul>
          <ClickableImage src="/screenshots/reports.png" alt="Sales Reports" width={1000} height={1000} hoverEffect="subtle" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Performance Metrics
        </h2>
        
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tracking Methods
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Track sales trends</li>
              <li>• Analyze customer behavior</li>
              <li>• Monitor employee performance</li>
              <li>• Identify top-selling items</li>
              <li>• Generate sales forecasts</li>
              <li>• Analyze inventory levels</li>
              <li>• Track customer loyalty</li>
              <li>• Analyze employee productivity</li>
            </ul>
          </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Customer Analytics
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Customer Insights
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Track customer spending patterns</li>
              <li>• Identify top-spending customers</li>
              <li>• Track customer retention</li>
              <li>• Track customer purchase history</li>
            </ul>
          </div>

        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Inventory Reports <span className="ml-2 text-sm font-normal text-yellow-600 dark:text-yellow-300">(Premium Module Coming Soon)</span>
        </h2>
        
        <div className="mb-8">
          <div className="relative bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border border-yellow-200 dark:border-yellow-800 rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition-all hover:shadow-xl">
            {/* Decorative Ribbon */}
            <div className="absolute -top-3 -left-3">
              <span className="bg-yellow-400 dark:bg-yellow-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                New Soon
              </span>
            </div>
            {/* Icon Section */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/40 border-2 border-yellow-200 dark:border-yellow-700 shadow-inner">
              <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            {/* Content Section */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-1">
                Inventory Reports Module
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-1 text-base">
                Advanced inventory and cost analysis reports will soon be available as a standalone premium module.
              </p>
              <ul className="text-yellow-700 dark:text-yellow-300 text-sm mb-2 list-disc list-inside">
                <li>Stock level insights</li>
                <li>Cost and margin analysis</li>
                <li>Inventory turnover trends</li>
                <li>Automated restock alerts</li>
              </ul>
              <p className="text-yellow-700 dark:text-yellow-300 text-xs">
                Stay tuned for powerful insights into your stock, costs, and inventory performance—coming soon for premium subscribers!
              </p>
            </div>
            {/* Premium Badge */}
            <div className="flex flex-col items-center sm:items-end">
              <span className="inline-block bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 px-4 py-1 rounded-full text-xs font-semibold shadow">
                Premium Feature
              </span>
            </div>
          </div>
        </div>



        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Exporting Data
        </h2>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
            Export Formats
          </h3>
          <ul className="space-y-2 text-purple-800 dark:text-purple-200">
            <li>• xlsx (Excel)</li>
            <li>• csv (Comma Separated Values)</li>
            <li>• pdf (Portable Document Format)</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
            Export Process
          </h3>
          <ol className="list-decimal list-inside text-indigo-800 dark:text-indigo-200 space-y-2">
            <li>• Click on the export button</li>
            <li>• Select the format you want to export</li>
            <li>• Click on the export button</li>
          </ol>
          <ClickableImage src="/screenshots/export.png" alt="Export Process" width={1000} height={1000} hoverEffect="subtle" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Automated Reports
        </h2>
        
        <div className="space-y-6">
          <div className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md">
            <div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-yellow-500 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <span className="inline-block bg-yellow-200 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow">
                  Hot Premium Feature
                </span>
                <span className="ml-2 inline-block bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200 px-2 py-0.5 rounded text-xs font-semibold">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                Scheduling Reports
              </h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
                <li>• Set up automatic report generation on a daily, weekly, or monthly basis</li>
                <li>• Customize which reports are included and when they&apos;re delivered</li>
              </ul>
              <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-2 font-medium">
                Unlock effortless business insights with automated scheduling—coming soon for premium users!
              </p>
            </div>
            <div className="absolute top-4 right-4 hidden sm:block">
              <svg className="w-8 h-8 text-yellow-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 01.993.883L11 3v2a1 1 0 01-1.993.117L9 5V3a1 1 0 011-1zm4.243 2.757a1 1 0 011.32-.083l.094.083 1.414 1.414a1 1 0 01-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 010-1.414zm-8.486 0a1 1 0 01.083 1.32l-.083.094-1.414 1.414a1 1 0 01-1.497-1.32l.083-.094 1.414-1.414a1 1 0 011.414 0zM10 15a1 1 0 01.993.883L11 16v2a1 1 0 01-1.993.117L9 18v-2a1 1 0 011-1zm7-5a1 1 0 01.117 1.993L17 12h-2a1 1 0 01-.117-1.993L15 10h2zm-12 0a1 1 0 01.117 1.993L5 12H3a1 1 0 01-.117-1.993L3 10h2zm11.071 4.243a1 1 0 01.083 1.32l-.083.094-1.414 1.414a1 1 0 01-1.497-1.32l.083-.094 1.414-1.414a1 1 0 011.414 0zm-10.142 0a1 1 0 01.083 1.32l-.083.094-1.414 1.414a1 1 0 01-1.497-1.32l.083-.094 1.414-1.414a1 1 0 011.414 0z" />
              </svg>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 border border-pink-300 dark:border-pink-700 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md">
            <div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-pink-500 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <span className="inline-block bg-pink-200 dark:bg-pink-700 text-pink-900 dark:text-pink-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow">
                  Hot Premium Feature
                </span>
                <span className="ml-2 inline-block bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-200 px-2 py-0.5 rounded text-xs font-semibold">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-100 mb-3">
                Email Delivery
              </h3>
              <ul className="space-y-2 text-pink-800 dark:text-pink-200">
                <li>• Receive scheduled reports directly in your inbox</li>
                <li>• Share automated analytics with your team or management</li>
              </ul>
              <p className="text-xs text-pink-700 dark:text-pink-300 mt-2 font-medium">
                This too will be coming as a hot premium feature—get ready for seamless, automated insights!
              </p>
            </div>
            <div className="absolute top-4 right-4 hidden sm:block">
              <svg className="w-8 h-8 text-pink-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 01.993.883L11 3v2a1 1 0 01-1.993.117L9 5V3a1 1 0 011-1zm4.243 2.757a1 1 0 011.32-.083l.094.083 1.414 1.414a1 1 0 01-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 010-1.414zm-8.486 0a1 1 0 01.083 1.32l-.083.094-1.414 1.414a1 1 0 01-1.497-1.32l.083-.094 1.414-1.414a1 1 0 011.414 0zM10 15a1 1 0 01.993.883L11 16v2a1 1 0 01-1.993.117L9 18v-2a1 1 0 011-1zm7-5a1 1 0 01.117 1.993L17 12h-2a1 1 0 01-.117-1.993L15 10h2zm-12 0a1 1 0 01.117 1.993L5 12H3a1 1 0 01-.117-1.993L3 10h2zm11.071 4.243a1 1 0 01.083 1.32l-.083.094-1.414 1.414a1 1 0 01-1.497-1.32l.083-.094 1.414-1.414a1 1 0 011.414 0zm-10.142 0a1 1 0 01.083 1.32l-.083.094-1.414 1.414a1 1 0 01-1.497-1.32l.083-.094 1.414-1.414a1 1 0 011.414 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-10"></div>
        <QuickActionsSection />
      </div>
    </DocsLayout>
  );
}
