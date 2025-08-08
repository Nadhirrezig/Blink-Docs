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
import { MenuStep } from '@/components/MenuStep';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { onlineOrderingSteps } from '@/data/onlineOrderingSteps';

export default function OnlineOrderingCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % onlineOrderingSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + onlineOrderingSteps.length) % onlineOrderingSteps.length);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={onlineOrderingSteps.length}
        onNext={nextStep}
        onPrev={prevStep}
      />
      
      <MenuStep step={onlineOrderingSteps[currentStep]} />
    </div>
  );
}
