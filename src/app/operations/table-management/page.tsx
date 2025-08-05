/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import DocsLayout from '@/components/DocsLayout';
import TableManagementCarousel from '@/components/TableManagementCarousel';

export default function TableManagement() {
  return (
    <DocsLayout>
      <div className="space-y-6 md:space-y-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900/20 dark:via-gray-900 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 mb-8">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-indigo-400 rounded transform rotate-45"></div>
            <div className="absolute top-12 right-8 w-6 h-6 bg-purple-400 rounded-full"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-indigo-400 rounded"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-purple-400 rounded-full"></div>
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  QR Code Table Management
                </h1>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  Powered by Blink ERP System
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your venue with <span className="font-semibold text-indigo-600 dark:text-indigo-400">contactless ordering technology</span>.
              Create dining areas, configure smart tables, generate branded QR codes, and deploy a seamless
              <span className="font-semibold text-purple-600 dark:text-purple-400"> digital ordering experience</span> that your customers will love.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-200 dark:border-indigo-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Zero Contact</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200 dark:border-purple-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Instant Setup</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-200 dark:border-indigo-800">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Smart Analytics</span>
              </div>
            </div>
          </div>
        </div>

        <TableManagementCarousel />

        {/* Advanced Setup & Tips Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Setup Checklist */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Setup Checklist</h3>
                  <p className="text-green-100 text-sm">Essential steps for success</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">WiFi Network Optimization</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ensure strong, reliable WiFi coverage at all tables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Menu Photography</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">High-quality images increase orders by 30%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Staff Training</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Train team to assist customers with QR ordering</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Testing Phase</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Test all QR codes before customer deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="space-y-6">
            {/* QR Code Design Tips */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100">Design Pro Tips</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Make your QR codes stand out</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-orange-800 dark:text-orange-200">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Use high contrast colors for better scanning</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-800 dark:text-orange-200">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Include your logo but keep it small</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-800 dark:text-orange-200">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Add clear &quot;Scan to Order&quot; instructions</span>
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Customer Support</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Help customers succeed</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>Provide WiFi password prominently</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>Have backup paper menus available</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>Train staff to assist with QR scanning</span>
                </div>
              </div>
            </div>

            {/* Analytics Preview */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100">Smart Analytics</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Track performance metrics</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">89%</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300">QR Adoption Rate</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">3.2x</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300">Faster Ordering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
