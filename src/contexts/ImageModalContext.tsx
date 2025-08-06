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

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface ImageModalData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ImageModalContextType {
  isOpen: boolean;
  imageData: ImageModalData | null;
  openModal: (imageData: ImageModalData) => void;
  closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export function useImageModal() {
  const context = useContext(ImageModalContext);
  if (context === undefined) {
    throw new Error('useImageModal must be used within an ImageModalProvider');
  }
  return context;
}

interface ImageModalProviderProps {
  children: ReactNode;
}

export function ImageModalProvider({ children }: ImageModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState<ImageModalData | null>(null);

  const openModal = useCallback((data: ImageModalData) => {
    setImageData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Delay clearing image data to allow exit animation
    setTimeout(() => setImageData(null), 300);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ImageModalContext.Provider value={{ isOpen, imageData, openModal, closeModal }}>
      {children}
      
      {/* Global Image Modal */}
      {isOpen && imageData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 modal-backdrop"
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
                src={imageData.src} 
                alt={imageData.alt} 
                width={imageData.width || 1200} 
                height={imageData.height || 800} 
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full modal-controls">
              <span className="text-sm">
                {imageData.alt}
              </span>
            </div>
          </div>
        </div>
      )}
    </ImageModalContext.Provider>
  );
}
