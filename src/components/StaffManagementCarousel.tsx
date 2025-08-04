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
import { staffSteps } from '@/data/staffSteps';

export default function StaffManagementCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % staffSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + staffSteps.length) % staffSteps.length);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={staffSteps.length}
        onNext={nextStep}
        onPrev={prevStep}
      />
      
      <MenuStep step={staffSteps[currentStep]} />
    </div>
  );
}
