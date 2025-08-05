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

export const operationsSteps: MenuStep[] = [
  {
    id: 0,
    title: "POS Operations & Order Taking",
    subtitle: "Master the point-of-sale system and order management",
    description: "Learn how to efficiently take orders, manage order items, handle different order types, and maintain smooth POS operations during busy periods.",
    screenshots: [
      { src: "/screenshots/pos-interface.png", alt: "POS System Main Interface" },
      { src: "/screenshots/order-taking.png", alt: "Order Taking Process" },
      { src: "/screenshots/order-customization.png", alt: "Order Customization Options" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Navigate to POS system and log in with staff credentials",
        "[PLACEHOLDER] Greet customer and begin order taking process",
        "[PLACEHOLDER] Select menu items and apply customizations",
        "[PLACEHOLDER] Review order details with customer",
        "[PLACEHOLDER] Confirm order and proceed to payment"
      ],
      bestPractices: [
        "[PLACEHOLDER] Always confirm special requests and allergies",
        "[PLACEHOLDER] Double-check order accuracy before finalizing",
        "[PLACEHOLDER] Maintain friendly and professional demeanor",
        "[PLACEHOLDER] Keep POS system organized and clean"
      ],
      tips: [
        "[PLACEHOLDER] Use keyboard shortcuts for faster order entry",
        "[PLACEHOLDER] Group similar items together for kitchen efficiency",
        "[PLACEHOLDER] Always repeat order back to customer"
      ]
    }
  },
  {
    id: 1,
    title: "Payment Processing & Cash Management",
    subtitle: "Handle payments securely and manage cash drawer operations",
    description: "Master cash payment processing, drawer management, discount applications, receipt handling, and end-of-shift cash reconciliation procedures.",
    screenshots: [
      { src: "/screenshots/payment-screen.png", alt: "Payment Processing Interface" },
      { src: "/screenshots/cash-drawer.png", alt: "Cash Drawer Management" },
      { src: "/screenshots/receipt-printing.png", alt: "Receipt Generation" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Calculate total amount and announce to customer",
        "[PLACEHOLDER] Accept cash payment and count money received",
        "[PLACEHOLDER] Enter payment amount in POS system",
        "[PLACEHOLDER] Calculate and provide correct change",
        "[PLACEHOLDER] Print and provide receipt to customer"
      ],
      bestPractices: [
        "[PLACEHOLDER] Count money twice - once when received, once when giving change",
        "[PLACEHOLDER] Keep large bills separate until transaction is complete",
        "[PLACEHOLDER] Always provide receipts unless customer declines",
        "[PLACEHOLDER] Secure cash drawer immediately after each transaction"
      ],
      tips: [
        "[PLACEHOLDER] Keep cash drawer organized with bills facing same direction",
        "[PLACEHOLDER] Announce change amount clearly to customer",
        "[PLACEHOLDER] Report any discrepancies immediately to management"
      ]
    }
  },
  {
    id: 2,
    title: "Table Management & Service Flow",
    subtitle: "Efficiently manage table assignments and dining service",
    description: "Learn table assignment procedures, order tracking for dine-in customers, bill splitting, table turnover optimization, and maintaining service quality.",
    screenshots: [
      { src: "/screenshots/table-layout.png", alt: "Restaurant Table Layout" },
      { src: "/screenshots/table-assignment.png", alt: "Table Assignment System" },
      { src: "/screenshots/order-tracking.png", alt: "Order Status Tracking" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Assess available tables and seating capacity",
        "[PLACEHOLDER] Assign customers to appropriate table size",
        "[PLACEHOLDER] Update table status in POS system",
        "[PLACEHOLDER] Track order progress and delivery times",
        "[PLACEHOLDER] Process payment and clear table for next customers"
      ],
      bestPractices: [
        "[PLACEHOLDER] Seat customers at tables appropriate for party size",
        "[PLACEHOLDER] Keep table status updated in real-time",
        "[PLACEHOLDER] Communicate with kitchen about table-specific timing",
        "[PLACEHOLDER] Clear and sanitize tables promptly after customers leave"
      ],
      tips: [
        "[PLACEHOLDER] Use table numbers consistently across all systems",
        "[PLACEHOLDER] Monitor table turnover times during peak hours",
        "[PLACEHOLDER] Coordinate with kitchen for synchronized food delivery"
      ]
    }
  },
  {
    id: 3,
    title: "Customer Service & Issue Resolution",
    subtitle: "Provide excellent customer service and handle complaints professionally",
    description: "Master customer interaction guidelines, complaint handling procedures, refund processing, and emergency response protocols to maintain high service standards.",
    screenshots: [
      { src: "/screenshots/customer-interaction.png", alt: "Customer Service Interface" },
      { src: "/screenshots/complaint-handling.png", alt: "Complaint Resolution Process" },
      { src: "/screenshots/refund-process.png", alt: "Refund Processing Screen" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Listen actively to customer concerns without interrupting",
        "[PLACEHOLDER] Acknowledge the issue and apologize for inconvenience",
        "[PLACEHOLDER] Investigate the problem and determine appropriate solution",
        "[PLACEHOLDER] Implement resolution (refund, replacement, discount)",
        "[PLACEHOLDER] Follow up to ensure customer satisfaction"
      ],
      bestPractices: [
        "[PLACEHOLDER] Remain calm and professional during difficult situations",
        "[PLACEHOLDER] Escalate to management when necessary",
        "[PLACEHOLDER] Document incidents for future reference",
        "[PLACEHOLDER] Always prioritize customer safety and satisfaction"
      ],
      tips: [
        "[PLACEHOLDER] Use positive language even when delivering bad news",
        "[PLACEHOLDER] Offer alternatives when primary solution isn't available",
        "[PLACEHOLDER] Thank customers for their patience and feedback"
      ]
    }
  },
  {
    id: 4,
    title: "Inventory Awareness & Stock Management",
    subtitle: "Monitor inventory levels and communicate stock issues",
    description: "Learn to track inventory levels, identify low-stock items, communicate with management about supply needs, and handle out-of-stock situations with customers.",
    screenshots: [
      { src: "/screenshots/inventory-screen.png", alt: "Inventory Management Interface" },
      { src: "/screenshots/stock-alerts.png", alt: "Low Stock Alert System" },
      { src: "/screenshots/item-availability.png", alt: "Menu Item Availability" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Check inventory levels at start of shift",
        "[PLACEHOLDER] Monitor stock alerts throughout service",
        "[PLACEHOLDER] Communicate low stock to kitchen and management",
        "[PLACEHOLDER] Update menu availability in POS system",
        "[PLACEHOLDER] Inform customers of unavailable items professionally"
      ],
      bestPractices: [
        "[PLACEHOLDER] Proactively check popular item availability",
        "[PLACEHOLDER] Suggest alternatives for out-of-stock items",
        "[PLACEHOLDER] Keep accurate records of inventory usage",
        "[PLACEHOLDER] Report discrepancies immediately"
      ],
      tips: [
        "[PLACEHOLDER] Learn which items typically run out first",
        "[PLACEHOLDER] Offer similar alternatives when items are unavailable",
        "[PLACEHOLDER] Use inventory alerts to prevent customer disappointment"
      ]
    }
  },
  {
    id: 5,
    title: "Opening & Closing Procedures",
    subtitle: "Execute daily opening and closing routines efficiently",
    description: "Master the essential daily procedures for opening and closing the venue, including system startup, cash drawer setup, equipment checks, and end-of-day reconciliation.",
    screenshots: [
      { src: "/screenshots/opening-checklist.png", alt: "Daily Opening Checklist" },
      { src: "/screenshots/system-startup.png", alt: "System Startup Process" },
      { src: "/screenshots/closing-procedures.png", alt: "End of Day Closing" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Complete opening checklist and equipment inspection",
        "[PLACEHOLDER] Start POS system and verify all functions",
        "[PLACEHOLDER] Set up cash drawer with proper starting amounts",
        "[PLACEHOLDER] Review daily specials and menu changes",
        "[PLACEHOLDER] Coordinate with kitchen staff for prep status"
      ],
      bestPractices: [
        "[PLACEHOLDER] Follow opening/closing checklists systematically",
        "[PLACEHOLDER] Document any equipment issues or concerns",
        "[PLACEHOLDER] Ensure all cash handling procedures are followed",
        "[PLACEHOLDER] Communicate shift notes to incoming/outgoing staff"
      ],
      tips: [
        "[PLACEHOLDER] Arrive early to complete opening procedures calmly",
        "[PLACEHOLDER] Keep detailed records of daily cash reconciliation",
        "[PLACEHOLDER] Report any discrepancies or issues immediately"
      ]
    }
  }
];
