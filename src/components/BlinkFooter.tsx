/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import { ClickableImage } from './ClickableImage';

export default function BlinkFooter() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-3">
          <ClickableImage
            src="/logo1.png"
            alt="Blink Logo"
            width={24}
            height={24}
            className="rounded"
            hoverEffect="subtle"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Blink - Venue Store ERP System
          </span>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Everything your venue needs for efficient operations
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2024 Blink. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6 text-xs text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
