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
import { reservationsSteps } from '@/data/reservationsSteps';

export default function ReservationsCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % reservationsSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + reservationsSteps.length) % reservationsSteps.length);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={reservationsSteps.length}
        onNext={nextStep}
        onPrev={prevStep}
      />
      
      <MenuStep step={reservationsSteps[currentStep]} />
    </div>
  );
}
