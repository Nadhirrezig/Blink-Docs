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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const openModal = useCallback((index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Cleanup effect to close modal when component unmounts
  useEffect(() => {
    return () => {
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    };
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextModalImage = useCallback(() => {
    setModalImageIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevModalImage = useCallback(() => {
    setModalImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  // klavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keyboard 
      if (isModalOpen) {
        switch (event.key) {
          case 'Escape':
            event.preventDefault();
            event.stopPropagation(); // Prevent
            closeModal();
            break;
          case 'ArrowLeft':
            if (screenshots.length > 1) {
              event.preventDefault();
              prevModalImage();
            }
            break;
          case 'ArrowRight':
            if (screenshots.length > 1) {
              event.preventDefault();
              nextModalImage();
            }
            break;
        }
      } else if (screenshots.length > 1) {
        // Only handle carousel navigation if modal is not open
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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenshots.length, nextImage, prevImage, isModalOpen, closeModal, nextModalImage, prevModalImage]);

  if (screenshots.length === 0) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          No screenshots for this carousel Yet..
        </p>
      </div>
    );
  }

  if (screenshots.length === 1) {
    return (
      <>
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
            <div className="flex justify-center">
              <div className="max-w-sm mx-auto">
                <div
                  className="cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => openModal(0)}
                >
                  <Image
                    src={screenshots[0].src}
                    alt={screenshots[0].alt}
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for single image */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4 modal-backdrop"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 hover:scale-110 transition-all duration-200 modal-controls"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div
                className="relative max-w-full max-h-full modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={screenshots[0].src}
                  alt={screenshots[0].alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
        <div className="flex justify-center">
          <div className="max-w-sm mx-auto">
            <div
              className="cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => openModal(currentImage)}
            >
              <Image
                src={screenshots[currentImage].src}
                alt={screenshots[currentImage].alt}
                width={400}
                height={800}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
        
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
              onDoubleClick={() => openModal(index)}
              className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-15 rounded border-2 transition-all hover:scale-105 ${
                index === currentImage
                  ? 'border-blue-500'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
              }`}
              aria-label={`View screenshot ${index + 1}: ${screenshot.alt}. Double-click to enlarge.`}
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

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4 modal-backdrop"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 hover:scale-110 transition-all duration-200 modal-controls"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div
              className="relative max-w-full max-h-full modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[modalImageIndex].src}
                alt={screenshots[modalImageIndex].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>

            {/* Navigation Arrows for Modal */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModalImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 hover:scale-110 transition-all duration-200 modal-controls"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModalImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 hover:scale-110 transition-all duration-200 modal-controls"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Modal Image Counter */}
            {screenshots.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full modal-controls">
                <span className="text-sm">
                  {modalImageIndex + 1} of {screenshots.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}