import DocsLayout from '@/components/DocsLayout';
import QuickActionsSection from '@/components/admin/staff-roles/QuickActionsSection';
import Image from 'next/image';

export default function PaymentConfiguration() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.4 Payment Configuration
        </h1>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Current Payment Support
              </h2>
              <p className="text-blue-800 dark:text-blue-200 mb-3">
                We currently support <strong>cash payments only</strong> to ensure a stable and reliable experience for all users. This allows us to focus on perfecting the core functionality while maintaining the highest standards of service.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-white">Cash Payments - Fully Supported</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Secure cash drawer integration with detailed transaction tracking and receipt generation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
                Premium Features Coming Soon
              </h2>
              <p className="text-purple-800 dark:text-purple-200 mb-4">
                We&apos;re excited to announce that advanced payment technologies are in development. These premium features will enhance your business operations with cutting-edge security and convenience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">NFC Tap Payments</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Secure contactless payments with instant transaction processing and enhanced security protocols.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">Digital Wallets</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Support for Apple Pay, Google Pay,Flouci TN and other popular digital payment methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              <li>• Add your logo and branding</li>
              <li>• Customize receipt header and footer text</li>
              <li>• Include promotional messages or special offers</li>
              <li>• Set up receipt printing</li>
            </ul>
            <Image src="/screenshots/reciptsettings.png" alt="Receipt Settings" width={1000} height={1000} />
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Print Settings
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Configure printer connection</li>
              <li>• Set printer to direct print</li>
              <li>• Configure printer settings (paper size, etc.)</li>
            </ul>
            <Image src="/screenshots/printsettings.png" alt="Print Settings" width={1000} height={1000} />
          </div>
        </div>


        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                Stay Updated
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                We&apos;re committed to bringing you the latest payment technologies. Follow our updates to be among the first to experience our new premium payment features when they launch.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Coming Soon:</strong> NFC tap payments, digital wallet integration, and enhanced security features will be available as premium add-ons to enhance your business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-10"></div>
        <QuickActionsSection />
      </div>
    </DocsLayout>
  );
}
