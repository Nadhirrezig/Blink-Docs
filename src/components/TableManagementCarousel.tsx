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
import { tableManagementSteps } from '@/data/tableManagementSteps';

export default function TableManagementCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % tableManagementSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + tableManagementSteps.length) % tableManagementSteps.length);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={tableManagementSteps.length}
        onNext={nextStep}
        onPrev={prevStep}
      />
      
      <MenuStep step={tableManagementSteps[currentStep]} />
    </div>
  );
}
