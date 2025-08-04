'use client'

/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Screenshot } from '@/types/menu';

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
}

export function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (screenshots.length <= 1) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenshots.length, nextImage, prevImage]);

  if (screenshots.length === 0) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          Add screenshots here to show the process
        </p>
      </div>
    );
  }

  if (screenshots.length === 1) {
    return (
      <div className="space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
          <Image 
            src={screenshots[0].src} 
            alt={screenshots[0].alt} 
            width={800} 
            height={400} 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
        <Image 
          src={screenshots[currentImage].src} 
          alt={screenshots[currentImage].alt} 
          width={800} 
          height={400} 
          className="w-full h-auto rounded-lg"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image Counter */}
      <div className="flex justify-center items-center space-x-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentImage + 1} of {screenshots.length}
        </span>
      </div>

      {/* Thumbnail Navigation */}
      {screenshots.length > 1 && (
        <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-15 rounded border-2 transition-all ${
                index === currentImage
                  ? 'border-blue-500'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
              }`}
              aria-label={`View screenshot ${index + 1}: ${screenshot.alt}`}
            >
              <Image 
                src={screenshot.src} 
                alt={screenshot.alt} 
                width={80} 
                height={60} 
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}