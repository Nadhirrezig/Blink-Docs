import DocsLayout from '@/components/DocsLayout';
import Image from 'next/image';

export default function BasicInformation() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.1 Basic Information
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Venue Profile Setup
        </h2>
        
        <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-blue-900/30 dark:via-gray-800 dark:to-blue-900/10 border-2 border-blue-300 dark:border-blue-800 shadow-xl rounded-2xl p-6 md:p-10 mb-10 overflow-hidden">
          <div className="md:w-1/2 w-full flex flex-col items-start z-10">
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 tracking-tight">
              Welcome to Your Venue Profile
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-4">
              This is the heart of your restaurant’s digital identity. Setting up your profile ensures your customers and staff have the right information at their fingertips.
            </p>
            <div className="bg-white/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4 w-full">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Required Information
              </h3>
              <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-base">
                <li>• <span className="font-medium">Restaurant Name</span></li>
                <li>• <span className="font-medium">Restaurant Address</span></li>
                <li>• <span className="font-medium">Restaurant Phone Number</span></li>
                <li>• <span className="font-medium">Restaurant Email</span></li>
              </ul>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300 italic">
              <span className="font-semibold">Tip:</span> Accurate information helps build trust and ensures smooth operations.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 z-10">
            <Image 
              src="/screenshots/Profile.png" 
              alt="Profile Setup" 
              width={500} 
              height={300} 
              className="w-full max-w-md h-auto rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-700"
              priority
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-2xl opacity-40 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 dark:bg-blue-800/30 rounded-full blur-2xl opacity-30 pointer-events-none" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Step-by-Step Configuration
        </h3>
        
        <div className="space-y-6 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 rounded-lg p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="lg:w-1/2 w-full">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Business Details
                </h4>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Click on the business details section</li>
                  <li>Enter the business details of the restaurant</li>
                  <li>Click Save</li>
                </ol>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  src="/screenshots/settings.png"
                  alt="Business Settings"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Location Settings
        </h2>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-1/2 w-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Location Configuration
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Enter the location of the restaurant</li>
                <li>• Click Save</li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image 
                src="/screenshots/location.png" 
                alt="Location Settings" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Branding & Customization
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="lg:w-1/2 w-full">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  Logo Upload
                </h3>
                <ol className="list-decimal list-inside text-purple-800 dark:text-purple-200 space-y-2">
                  <li>Click on the logo section</li>
                  <li>Upload the logo of the restaurant</li>
                  <li>Click Save</li>
                </ol>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  src="/screenshots/logobranding.png"
                  alt="Logo Branding"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="lg:w-1/2 w-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Color Scheme
                </h3>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Click on the color scheme section</li>
                  <li>Select the color scheme of the restaurant</li>
                  <li>Click Save</li>
                </ol>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  src="/screenshots/themebranding.png"
                  alt="Theme Branding"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Troubleshooting
        </h2>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
            Common Issues
          </h3>
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
            <li>• If the theme section is not available, check your subscription plan</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
