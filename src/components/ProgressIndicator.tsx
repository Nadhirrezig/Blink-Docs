/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

export function ProgressIndicator({ currentStep, totalSteps, onNext, onPrev }: ProgressIndicatorProps) {
  return (
    <div className="space-y-4 md:space-y-6" role="navigation" aria-label="Step navigation">
      {/* Mobile Progress Bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
          </span>
        </div>
        <div
          className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"
          role="progressbar"
          aria-valuenow={currentStep + 1}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Step ${currentStep + 1} of ${totalSteps}`}
        >
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop Progress Steps */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-4">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                index <= currentStep 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
              }`}>
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  index < currentStep ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          disabled={currentStep === 0}
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to previous step"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to next step"
        >
          Next
        </button>
      </div>
    </div>
  );
} 