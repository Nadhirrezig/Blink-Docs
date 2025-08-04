/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import { ScreenshotCarousel } from './ScreenshotCarousel';
import { MenuStep as MenuStepType } from '@/types/menu';

interface MenuStepProps {
  step: MenuStepType;
}

export function MenuStep({ step }: MenuStepProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {step.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
          {step.subtitle}
        </p>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          {step.description}
        </p>
      </div>

      {step.screenshots && step.screenshots.length > 0 && (
        <div className="mb-6 md:mb-8">
          <ScreenshotCarousel screenshots={step.screenshots} />
        </div>
      )}

      <div className="space-y-4 md:space-y-6">
        {step.content.process && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {step.title} Process
            </h4>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1 md:space-y-2 text-sm md:text-base">
              {step.content.process.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        )}

        {step.content.considerations && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Key Considerations
            </h4>
            <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm md:text-base">
              {step.content.considerations.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {step.content.categories && step.content.bestPractices && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                Common Categories
              </h4>
              <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm md:text-base">
                {step.content.categories.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                Best Practices
              </h4>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm md:text-base">
                {step.content.bestPractices.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step.content.required && step.content.optional && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                Required Fields
              </h4>
              <ul className="text-yellow-800 dark:text-yellow-200 space-y-1 text-sm md:text-base">
                {step.content.required.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Optional Features
              </h4>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm md:text-base">
                {step.content.optional.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step.content.commonGroups && step.content.tips && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                Common Modifier Groups
              </h4>
              <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm md:text-base">
                {step.content.commonGroups.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                Configuration Tips
              </h4>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm md:text-base">
                {step.content.tips.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step.content.examples && step.content.pricing && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
                Example Modifiers
              </h4>
              <ul className="text-orange-800 dark:text-orange-200 space-y-1 text-sm md:text-base">
                {step.content.examples.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold text-teal-900 dark:text-teal-100 mb-2">
                Pricing Strategy
              </h4>
              <ul className="text-teal-800 dark:text-teal-200 space-y-1 text-sm md:text-base">
                {step.content.pricing.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 