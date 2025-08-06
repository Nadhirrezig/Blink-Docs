import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';
import { ChefHat, Clock } from 'lucide-react';
import { ClickableImage } from '@/components/ClickableImage';

export default function KitchenGuide() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <ChefHat className="w-10 h-10 text-orange-600" />
          Kitchen Guide
        </h1>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-2">
            Kitchen System Overview
          </h2>
          <p className="text-orange-800 dark:text-orange-200">
            In this section, we highlight how the kitchen system is designed for simplicity, allowing chefs to focus on cooking rather than being burdened by ticket and order management.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            <ClickableImage 
              src="/screenshots/kotorders.png" 
              alt="Kitchen on ticket Overview" 
              width={800}
              height={400}
              className="w-full h-auto" 
            />
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Kitchen Workflow
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Order Flow
          </h3>

          <p className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-800/40 text-blue-900 dark:text-blue-100 font-semibold px-4 py-2 rounded-full shadow-sm mb-4 text-base tracking-wide border border-blue-300 dark:border-blue-700">
            <Clock className="w-5 h-5 text-blue-500 dark:text-blue-300" />
            Simple workflow to follow
          </p>
          
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-2">
            <li>Start cooking</li>
            <li>Food is ready</li>
            <li>Order served</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Kitchen Guide Sections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/kitchen/kds" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              5.1 Kitchen Display System (KDS)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              KDS interface, order management, status updates, and kitchen communication.
            </p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
