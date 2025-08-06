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

import Image, { ImageProps } from 'next/image';
import { useImageModal } from '@/contexts/ImageModalContext';

interface ClickableImageProps extends Omit<ImageProps, 'onClick'> {
  /**
   * Whether the image should be clickable to open in modal
   * @default true
   */
  clickable?: boolean;
  /**
   * Custom hover effect intensity
   * @default 'subtle' - slight scale on hover
   * @options 'none', 'subtle', 'medium', 'strong'
   */
  hoverEffect?: 'none' | 'subtle' | 'medium' | 'strong';
  /**
   * Custom click handler - if provided, modal won't open automatically
   */
  onClick?: () => void;
  /**
   * Additional CSS classes for the wrapper div
   */
  wrapperClassName?: string;
}

const hoverEffectClasses = {
  none: '',
  subtle: 'hover:scale-[1.02] active:scale-[0.98]',
  medium: 'hover:scale-[1.05] active:scale-[0.95]',
  strong: 'hover:scale-[1.08] active:scale-[0.92]'
};

export function ClickableImage({
  clickable = true,
  hoverEffect = 'subtle',
  onClick,
  wrapperClassName = '',
  src,
  alt,
  width,
  height,
  className = '',
  ...imageProps
}: ClickableImageProps) {
  const { openModal } = useImageModal();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (clickable) {
      openModal({
        src: src.toString(),
        alt,
        width: typeof width === 'number' ? width : undefined,
        height: typeof height === 'number' ? height : undefined,
      });
    }
  };

  const shouldBeClickable = clickable || onClick;
  const baseClasses = shouldBeClickable 
    ? `cursor-pointer transition-transform duration-200 ${hoverEffectClasses[hoverEffect]}`
    : '';

  if (shouldBeClickable) {
    return (
      <div 
        className={`${baseClasses} ${wrapperClassName}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={clickable ? `Click to enlarge: ${alt}` : alt}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          {...imageProps}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...imageProps}
    />
  );
}
