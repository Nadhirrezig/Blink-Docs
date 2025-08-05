import DocsLayout from '@/components/DocsLayout';
import Image from 'next/image';
import { Rocket, Bug, Mail } from 'lucide-react';

export default function GettingStarted() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <Rocket className="w-10 h-10 text-green-600" />
          Getting Started
        </h1>
        
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
            Welcome to Restaurant Management System
          </h2>
          <p className="text-green-800 dark:text-green-200">
            Blink is a designed to help you manage your restaurant more efficiently. It is a work in progress and is not yet ready for production use. However, you can try it out and provide feedback to help us improve it.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Blink, as the name suggests, is designed for lightning-fast restaurant operations. It&apos;s an all-in-one restaurant management system that seamlessly integrates POS, kitchen operations, inventory management, and customer service. With its intuitive interface and real-time synchronization, Blink helps streamline your restaurant&apos;s workflow from order taking to payment processing. The system is built with modern web technologies, ensuring responsive performance across all devices and providing a smooth experience for both staff and customers.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <Image src="/screenshots/overview1.png" alt="Blink Overview" width={800} height={400} className="w-full h-auto rounded-lg mb-8" />
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          System Requirements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Minimum Requirements
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Old laptop/Pc to run the server</li>
              <li>• Php 8+</li>
              <li>• MySQL installed</li>
              <li>• No Internet connection (if running locally)</li>
              <li>• 1GB RAM</li>
              <li>• 10GB Storage</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Recommended Requirements
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Better Laptop/Pc</li>
              <li>• +10mbps internet connection</li>
              <li>• Php 8.2+ (recommended)</li>
              <li>• MySQL installed</li>
              <li>• 2GB/4GB RAM</li>
              <li>• 50/70GB Storage (optional)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Setup Guide
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Step 1: Account Creation
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              Create a new account by clicking on the &ldquo;Sign Up&rdquo; button in the top right corner of the screen.
            </p>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
              <li>Click on the &ldquo;Sign Up&rdquo; button in the top right corner of the screen.</li>
              <li>Fill in the required information and click on the &ldquo;Next branch details&rdquo; button.</li>
              <li>You will be redirected to the setting up branch details.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <Image src="/screenshots/signup.png" alt="Sign Up" width={800} height={400} className="w-full h-auto rounded-lg mb-8" />
          </p>
        </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Step 2: System Configuration
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              Setting up branch details
            </p>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
              <li>once you are redirected to the setting up branch details, fill in the required information</li>
              <li>click on the &ldquo;Sign Up&rdquo; button.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <Image src="/screenshots/branch.png" alt="Branch" width={800} height={400} className="w-full h-auto rounded-lg mb-8" />
          </p>
        </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Step 3: User Setup
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              Once Signing up, you will be redirected to set up your first branch details.
            </p>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
              <li>Fill in the required information</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <Image src="/screenshots/signup1.png" alt="Branch" width={800} height={400} className="w-full h-auto rounded-lg mb-8" />
          </p>
        </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Troubleshooting Common Issues
        </h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Issue 1: the system is not responding
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Solution: try to refresh the page or clear the cache of your browser.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Issue 2: An application is running slowly
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Solution: Close and reopen the application.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 via-yellow-50 to-blue-100 dark:from-yellow-900/30 dark:via-yellow-900/10 dark:to-blue-900/20 border-2 border-dashed border-green-300 dark:border-yellow-700 rounded-xl p-6 flex items-center space-x-4 shadow-lg">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-green-400 dark:text-yellow-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <path d="M8 12l2 2l4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900 dark:text-yellow-100 mb-1">
                Help Us Find Bugs &amp; Make Blink Better!
              </h3>
              <p className="text-green-800 dark:text-yellow-200 text-base">
                If you notice something not working as expected,
                please let us know! Your feedback helps us improve Blink for everyone. 
                Click the
                <span className="font-semibold text-blue-700 dark:text-blue-200">&ldquo;Report a Bug&rdquo;</span>
                button below or email our support team. Thank you for making Blink awesome!
              </p>
              <div className="mt-3">
                <a
                  href="mailto:support@blink.com?subject=Bug%20Report"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors duration-200"
                >
                  <Bug className="w-4 h-4" />
                  Report a Bug
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-r from-blue-50 via-gray-50 to-blue-100 dark:from-gray-900/40 dark:via-gray-800/60 dark:to-blue-900/20 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-8 flex items-center space-x-6 shadow-lg mb-8">
          <div className="flex-shrink-0">
            <svg className="w-14 h-14 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path d="M3 7l9 6l9-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
              Contact Information
            </h2>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Support Team
            </h3>
            <ul className="space-y-1 text-base">
              <li>
                <span className="font-medium text-blue-700 dark:text-blue-200">Email:</span>
                <a href="mailto:support@blink.com" className="ml-2 underline hover:text-blue-900 dark:hover:text-blue-100 transition-colors">support@blink.com</a>
              </li>
              <li>
                <span className="font-medium text-blue-700 dark:text-blue-200">Phone:</span>
                <a href="tel:+21627820232" className="ml-2 underline hover:text-blue-900 dark:hover:text-blue-100 transition-colors">(+216)-27-820-232</a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="mailto:support@blink.com?subject=Support%20Request"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
