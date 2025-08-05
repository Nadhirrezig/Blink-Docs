/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import { MenuStep } from '@/types/menu';

export const paymentProcessingSteps: MenuStep[] = [
  {
    id: 0,
    title: "Bill the Order",
    subtitle: "Create and present the bill to the customer",
    description: "Learn how to generate bills, review order details, apply any discounts, and present the final bill to customers for payment.",
    screenshots: [
      { src: "/screenshots/bill_order.png", alt: "Bill Order Interface" },
    ],
    content: {
      process: [
        "Review complete order details and items",
        "Click Payment button to proceed",
      ],
    }
  },
  {
    id: 1,
    title: "Pay the Order",
    subtitle: "Process customer payment using various payment methods",
    description: "Handle different payment methods including cash, card, digital payments, and ensure accurate transaction processing with proper change calculation.",
    screenshots: [
      { src: "/screenshots/pay_order.png", alt: "Payment Processing Screen" },
      { src: "/screenshots/splitbill.png", alt: "Split Bill Interface" },
    ],
    content: {
      process: [
        "Confirm payment method with customer",
        "Process payment (split bill, cash, card, etc.)",
        "Handle cash payments with accurate change calculation"
      ],
    }
  },
  {
    id: 2,
    title: "Print Receipt",
    subtitle: "Generate and provide receipt to customer",
    description: "Print receipts automatically or on demand, handle reprint requests, manage receipt paper, and ensure proper receipt delivery to customers.",
    screenshots: [
      { src: "/screenshots/printorder.png", alt: "Receipt Printing Process" },
      { src: "/screenshots/printedwithsuccess.png", alt: "Receipt Successfully Printed" }
    ],
    content: {                        
      process: [
        "Once the bill is paid , Print the receipt",
      ],
    }
  }
];
