import Link from "next/link";
import { Smartphone, Calendar , Settings } from "lucide-react";
export default function DetailedGuide() {
  return (
    <>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get Started in Minutes
        </h2>
        
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Browse & Order
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore menus, customize your order, and place it with ease.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Enjoy & Repeat
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Track your order, enjoy your meal, and earn rewards for next time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Detailed Guides
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/customer/online-ordering" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Online Ordering
            </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Master the complete ordering process from menu browsing to checkout.
            </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Learn more →
                </div>
              </div>
          </Link>

            <Link href="/customer/reservations" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Reservations
            </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Book tables, manage reservations, and plan special occasions.
            </p>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                  Learn more →
                </div>
              </div>
          </Link>

            <Link href="/customer/account-management" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Account Management
            </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Manage your profile, preferences, and loyalty program benefits.
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium">
                  Learn more →
                </div>
              </div>
            </Link>
          </div>
        </div>
    </>

  )
}
