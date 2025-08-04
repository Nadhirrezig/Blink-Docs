/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

interface LoadingSpinnerProps {
  onComplete?: () => void;
  delay?: number;
}

export default function LoadingSpinner({ onComplete, delay = 2000 }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Initializing Blink...');

  const loadingMessages = useMemo(() => [
    'Initializing Blink...',
    'Loading restaurant modules...',
    'Setting up your dashboard...',
    'Preparing your experience...',
    'Almost ready!'
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 200);
          }
          return 100;
        }

        // Update loading message based on progress
        const messageIndex = Math.floor((prev / 100) * (loadingMessages.length - 1));
        setLoadingMessage(loadingMessages[messageIndex]);

        return prev + 2;
      });
    }, delay / 50);

    return () => clearInterval(interval);
  }, [delay, onComplete, loadingMessages]);

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo1.png"
            alt="Blink Logo"
            width={80}
            height={80}
            className="mx-auto rounded-xl shadow-lg animate-pulse"
          />
        </div>
        
        {/* Company Name */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Blink
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Venue Store ERP System
        </p>
        
        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[20px] transition-all duration-300">
          {loadingMessage}
        </p>
        
        {/* Progress Percentage */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          {progress}%
        </p>
      </div>
    </div>
  );
}
