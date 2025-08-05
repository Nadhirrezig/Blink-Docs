/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

'use client'

import { useState } from 'react';
import { MenuStep } from './MenuStep';
import { ProgressIndicator } from './ProgressIndicator';
import { paymentProcessingSteps } from '@/data/paymentProcessingSteps';

export default function PaymentProcessingCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % paymentProcessingSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + paymentProcessingSteps.length) % paymentProcessingSteps.length);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={paymentProcessingSteps.length}
        onNext={nextStep}
        onPrev={prevStep}
      />
      
      <MenuStep step={paymentProcessingSteps[currentStep]} />
    </div>
  );
}
