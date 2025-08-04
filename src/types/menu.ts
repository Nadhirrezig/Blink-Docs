/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

export interface StepContent {
  process?: string[];
  considerations?: string[];
  categories?: string[];
  bestPractices?: string[];
  required?: string[];
  optional?: string[];
  pricing?: string[];
  commonGroups?: string[];
  tips?: string[];
  examples?: string[];
  roleTemplates?: string[];
  commonChanges?: string[];
  workflow?: string[];
  notifications?: string[];
  accessActions?: string[];
  securityFeatures?: string[];
  roleUpdates?: string[];
  staffUpdates?: string[];
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface MenuStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  screenshots: Screenshot[];
  content: StepContent;
}
