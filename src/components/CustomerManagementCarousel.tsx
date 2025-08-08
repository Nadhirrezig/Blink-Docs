/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 */

'use client'

import { useState } from 'react';
import { MenuStep } from './MenuStep';
import { ProgressIndicator } from './ProgressIndicator';
import { customerManagementSteps } from '@/data/customerManagementSteps';

export default function CustomerManagementCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % customerManagementSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + customerManagementSteps.length) % customerManagementSteps.length);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={customerManagementSteps.length}
        onNext={nextStep}
        onPrev={prevStep}
      />
      
      <MenuStep step={customerManagementSteps[currentStep]} />
    </div>
  );
}
