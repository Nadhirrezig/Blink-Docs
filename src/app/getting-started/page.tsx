import DocsLayout from '@/components/DocsLayout';

export default function GettingStarted() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          🚀 Getting Started
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
          Blink, as the name suggests, is designed for lightning-fast restaurant operations. It's an all-in-one restaurant management system that seamlessly integrates POS, kitchen operations, inventory management, and customer service. With its intuitive interface and real-time synchronization, Blink helps streamline your restaurant's workflow from order taking to payment processing. The system is built with modern web technologies, ensuring responsive performance across all devices and providing a smooth experience for both staff and customers.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <img src="/screenshots/overview1.png" alt="Blink Overview" className="w-full h-auto rounded-lg mb-8" />
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
              Create a new account by clicking on the "Sign Up" button in the top right corner of the screen.
            </p>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
              <li>Click on the "Sign Up" button in the top right corner of the screen.</li>
              <li>Fill in the required information and click on the "Next branch details" button.</li>
              <li>You will be redirected to the setting up branch details.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <img src="/screenshots/signup.png" alt="Sign Up" className="w-full h-auto rounded-lg mb-8" />
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
              <li>click on the "Sign Up" button.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <img src="/screenshots/branch.png" alt="Branch" className="w-full h-auto rounded-lg mb-8" />
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
            <img src="/screenshots/signup1.png" alt="Branch" className="w-full h-auto rounded-lg mb-8" />
          </p>
        </div>
        </div>

        {/* ADD CODE EXAMPLE HERE */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Initial Configuration Example
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {/* ADD CODE EXAMPLE HERE */}
          </p>
          <pre className="text-green-400 text-sm">
            <code>
{``}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Troubleshooting Common Issues
        </h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Issue 1: [ADD YOUR TEXT HERE]
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Solution: [ADD YOUR TEXT HERE]
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Issue 2: [ADD YOUR TEXT HERE]
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Solution: [ADD YOUR TEXT HERE]
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Tips & Best Practices
        </h2>
        
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
          <li>• [ADD YOUR TEXT HERE]</li>
          <li>• [ADD YOUR TEXT HERE]</li>
          <li>• [ADD YOUR TEXT HERE]</li>
          <li>• [ADD YOUR TEXT HERE]</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Contact Information
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Support Team
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Email: [ADD YOUR TEXT HERE]</li>
            <li>• Phone: [ADD YOUR TEXT HERE]</li>
            <li>• Hours: [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
