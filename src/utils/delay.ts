/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

/**
 * Creates a Promise that resolves after the specified delay
 * @param ms - Delay in milliseconds
 * @returns Promise that resolves after the delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Simulates loading time for development/demo purposes
 * @param ms - Delay in milliseconds (default: 2000ms)
 * @returns Promise that resolves after the delay
 */
export async function simulateLoading(ms: number = 2000): Promise<void> {
  // Only add delay in development mode
  if (process.env.NODE_ENV === 'development') {
    await delay(ms);
  }
}
