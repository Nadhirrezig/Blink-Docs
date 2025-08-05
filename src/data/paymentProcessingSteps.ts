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
    title: "Cash Drawer Setup & Management",
    subtitle: "Properly set up and manage the cash drawer throughout your shift",
    description: "Learn how to open, organize, and maintain the cash drawer, including starting cash counts and proper bill organization for efficient transactions.",
    screenshots: [
      { src: "/screenshots/cash-drawer-setup.png", alt: "Cash Drawer Organization" },
      { src: "/screenshots/starting-cash-count.png", alt: "Starting Cash Count Process" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Count and verify starting cash amount at shift beginning",
        "[PLACEHOLDER] Organize bills by denomination with all facing same direction",
        "[PLACEHOLDER] Ensure adequate change supply (coins and small bills)",
        "[PLACEHOLDER] Test cash drawer opening mechanism",
        "[PLACEHOLDER] Record starting cash amount in system or log"
      ],
      bestPractices: [
        "[PLACEHOLDER] Keep large bills ($50, $100) separate until transaction complete",
        "[PLACEHOLDER] Never leave cash drawer open unattended",
        "[PLACEHOLDER] Organize coins in proper compartments for quick access",
        "[PLACEHOLDER] Keep drawer neat and organized throughout shift"
      ],
      tips: [
        "[PLACEHOLDER] Face all bills in same direction for faster counting",
        "[PLACEHOLDER] Keep frequently used denominations easily accessible",
        "[PLACEHOLDER] Report any cash drawer malfunctions immediately"
      ]
    }
  },
  {
    id: 1,
    title: "Processing Cash Payments",
    subtitle: "Handle cash transactions accurately and efficiently",
    description: "Master the process of accepting cash payments, calculating change, and completing transactions while maintaining accuracy and security.",
    screenshots: [
      { src: "/screenshots/cash-payment-screen.png", alt: "Cash Payment Interface" },
      { src: "/screenshots/change-calculation.png", alt: "Change Calculation Display" },
      { src: "/screenshots/cash-handling.png", alt: "Proper Cash Handling Technique" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Announce total amount clearly to customer",
        "[PLACEHOLDER] Accept cash payment and count money received",
        "[PLACEHOLDER] Enter payment amount in POS system",
        "[PLACEHOLDER] Calculate change amount (system will display)",
        "[PLACEHOLDER] Count change back to customer starting with coins"
      ],
      bestPractices: [
        "[PLACEHOLDER] Count money twice - once received, once when giving change",
        "[PLACEHOLDER] Place received bills on cash drawer ledge until transaction complete",
        "[PLACEHOLDER] Count change aloud to customer for transparency",
        "[PLACEHOLDER] Always provide receipt unless customer declines"
      ],
      tips: [
        "[PLACEHOLDER] Start change counting with largest denominations first",
        "[PLACEHOLDER] Use phrases like 'Out of $20, your change is $7.50'",
        "[PLACEHOLDER] Keep received payment visible until change is given"
      ]
    }
  },
  {
    id: 2,
    title: "Receipt Printing & Management",
    subtitle: "Handle receipt printing, reprints, and customer receipt needs",
    description: "Learn to print receipts, handle reprint requests, manage receipt paper, and troubleshoot common printing issues.",
    screenshots: [
      { src: "/screenshots/receipt-printing.png", alt: "Receipt Printing Process" },
      { src: "/screenshots/receipt-options.png", alt: "Receipt Options Menu" },
      { src: "/screenshots/receipt-troubleshooting.png", alt: "Receipt Printer Troubleshooting" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Automatically print receipt after payment completion",
        "[PLACEHOLDER] Tear receipt cleanly from printer",
        "[PLACEHOLDER] Hand receipt to customer with thank you",
        "[PLACEHOLDER] Handle reprint requests using order lookup",
        "[PLACEHOLDER] Check receipt paper levels regularly"
      ],
      bestPractices: [
        "[PLACEHOLDER] Always offer receipt to customer",
        "[PLACEHOLDER] Keep receipt paper stocked and ready",
        "[PLACEHOLDER] Check receipt quality and readability",
        "[PLACEHOLDER] Store receipt copies as required by policy"
      ],
      tips: [
        "[PLACEHOLDER] Replace receipt paper before it runs completely out",
        "[PLACEHOLDER] Keep spare receipt paper rolls nearby",
        "[PLACEHOLDER] Clean printer head regularly for clear printing"
      ]
    }
  },
  {
    id: 3,
    title: "Handling Discounts & Promotions",
    subtitle: "Apply discounts, coupons, and promotional offers correctly",
    description: "Learn to apply various types of discounts, validate coupons, handle promotional codes, and ensure proper authorization for discounts.",
    screenshots: [
      { src: "/screenshots/discount-application.png", alt: "Discount Application Interface" },
      { src: "/screenshots/coupon-validation.png", alt: "Coupon Validation Process" },
      { src: "/screenshots/promotion-codes.png", alt: "Promotional Code Entry" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Verify discount eligibility and terms",
        "[PLACEHOLDER] Apply discount using appropriate POS function",
        "[PLACEHOLDER] Confirm discount amount with customer",
        "[PLACEHOLDER] Obtain manager approval for large discounts if required",
        "[PLACEHOLDER] Process payment on discounted total"
      ],
      bestPractices: [
        "[PLACEHOLDER] Always verify coupon validity and expiration dates",
        "[PLACEHOLDER] Explain discount terms clearly to customer",
        "[PLACEHOLDER] Get manager approval for discounts over policy limits",
        "[PLACEHOLDER] Document discount reasons in system when required"
      ],
      tips: [
        "[PLACEHOLDER] Learn common discount codes and shortcuts",
        "[PLACEHOLDER] Keep current promotion information easily accessible",
        "[PLACEHOLDER] Ask customers about available discounts they may qualify for"
      ]
    }
  },
  {
    id: 4,
    title: "End-of-Shift Cash Reconciliation",
    subtitle: "Complete cash counting and reconciliation procedures",
    description: "Perform end-of-shift cash counting, reconcile transactions, complete required paperwork, and secure cash properly.",
    screenshots: [
      { src: "/screenshots/cash-reconciliation.png", alt: "Cash Reconciliation Process" },
      { src: "/screenshots/shift-report.png", alt: "End of Shift Report" },
      { src: "/screenshots/cash-deposit.png", alt: "Cash Deposit Preparation" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Count all cash in drawer by denomination",
        "[PLACEHOLDER] Run end-of-shift report from POS system",
        "[PLACEHOLDER] Compare cash count to system sales total",
        "[PLACEHOLDER] Complete cash reconciliation form",
        "[PLACEHOLDER] Prepare cash deposit and secure remaining cash"
      ],
      bestPractices: [
        "[PLACEHOLDER] Count cash in a secure, private area",
        "[PLACEHOLDER] Double-check all calculations before submitting",
        "[PLACEHOLDER] Report any discrepancies immediately to management",
        "[PLACEHOLDER] Follow proper cash security procedures"
      ],
      tips: [
        "[PLACEHOLDER] Count cash systematically to avoid errors",
        "[PLACEHOLDER] Keep detailed notes of any unusual transactions",
        "[PLACEHOLDER] Ensure all paperwork is complete before leaving"
      ]
    }
  }
];
