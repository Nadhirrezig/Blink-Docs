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

export const customerServiceSteps: MenuStep[] = [
  {
    id: 0,
    title: "Customer Interaction Guidelines",
    subtitle: "Professional communication and service standards",
    description: "Master the fundamentals of professional customer interaction, including greeting customers, active listening, and maintaining positive communication throughout the service experience.",
    screenshots: [
      { src: "/screenshots/customer-greeting.png", alt: "Customer Greeting Best Practices" },
      { src: "/screenshots/active-listening.png", alt: "Active Listening Techniques" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Greet customers warmly within 30 seconds of arrival",
        "[PLACEHOLDER] Make eye contact and use welcoming body language",
        "[PLACEHOLDER] Listen actively to customer needs and requests",
        "[PLACEHOLDER] Speak clearly and at appropriate volume",
        "[PLACEHOLDER] Thank customers and invite them to return"
      ],
      bestPractices: [
        "[PLACEHOLDER] Use positive language even when delivering difficult news",
        "[PLACEHOLDER] Remain calm and professional in all interactions",
        "[PLACEHOLDER] Show empathy and understanding for customer concerns",
        "[PLACEHOLDER] Follow up to ensure customer satisfaction"
      ],
      tips: [
        "[PLACEHOLDER] Smile genuinely - customers can hear it in your voice",
        "[PLACEHOLDER] Use customer names when possible to personalize service",
        "[PLACEHOLDER] Ask open-ended questions to better understand needs"
      ]
    }
  },
  {
    id: 1,
    title: "Complaint Handling & Resolution",
    subtitle: "Turn customer complaints into positive experiences",
    description: "Learn the systematic approach to handling customer complaints, from initial listening through resolution, ensuring customer satisfaction and loyalty.",
    screenshots: [
      { src: "/screenshots/complaint-process.png", alt: "Complaint Resolution Process" },
      { src: "/screenshots/customer-feedback.png", alt: "Customer Feedback Documentation" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Listen to the complete complaint without interrupting",
        "[PLACEHOLDER] Acknowledge the customer's feelings and apologize for inconvenience",
        "[PLACEHOLDER] Ask clarifying questions to fully understand the issue",
        "[PLACEHOLDER] Offer appropriate solutions or alternatives",
        "[PLACEHOLDER] Follow up to ensure the resolution was satisfactory"
      ],
      bestPractices: [
        "[PLACEHOLDER] Stay calm and avoid taking complaints personally",
        "[PLACEHOLDER] Focus on finding solutions rather than assigning blame",
        "[PLACEHOLDER] Escalate to management when necessary",
        "[PLACEHOLDER] Document complaints for future improvement"
      ],
      tips: [
        "[PLACEHOLDER] Use phrases like 'I understand' and 'Let me help you'",
        "[PLACEHOLDER] Offer multiple solutions when possible",
        "[PLACEHOLDER] Turn complaints into opportunities to exceed expectations"
      ]
    }
  },
  {
    id: 2,
    title: "Refund & Void Procedures",
    subtitle: "Process refunds and voids accurately and efficiently",
    description: "Handle refund requests, void transactions, and process returns while following proper authorization procedures and maintaining accurate records.",
    screenshots: [
      { src: "/screenshots/refund-process.png", alt: "Refund Processing Interface" },
      { src: "/screenshots/void-transaction.png", alt: "Transaction Void Process" },
      { src: "/screenshots/manager-approval.png", alt: "Manager Approval System" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Verify the reason for refund and check return policy",
        "[PLACEHOLDER] Obtain manager approval for refunds over policy limits",
        "[PLACEHOLDER] Process refund through POS system",
        "[PLACEHOLDER] Count and return cash or process card refund",
        "[PLACEHOLDER] Provide refund receipt and document transaction"
      ],
      bestPractices: [
        "[PLACEHOLDER] Always check ID for large cash refunds",
        "[PLACEHOLDER] Explain refund policy clearly to customers",
        "[PLACEHOLDER] Get proper authorization before processing",
        "[PLACEHOLDER] Keep detailed records of all refund transactions"
      ],
      tips: [
        "[PLACEHOLDER] Know your refund policy limits and requirements",
        "[PLACEHOLDER] Be empathetic while following company policies",
        "[PLACEHOLDER] Offer alternatives like store credit when appropriate"
      ]
    }
  },
  {
    id: 3,
    title: "Handling Special Dietary Needs",
    subtitle: "Manage allergies, dietary restrictions, and special requests",
    description: "Safely handle customer allergies, dietary restrictions, and special dietary needs while ensuring proper communication with kitchen staff.",
    screenshots: [
      { src: "/screenshots/allergy-protocol.png", alt: "Allergy Handling Protocol" },
      { src: "/screenshots/dietary-restrictions.png", alt: "Dietary Restrictions Menu" },
      { src: "/screenshots/kitchen-communication.png", alt: "Kitchen Communication System" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Ask about allergies and dietary restrictions when taking orders",
        "[PLACEHOLDER] Clearly mark allergy alerts on order tickets",
        "[PLACEHOLDER] Communicate special dietary needs to kitchen staff",
        "[PLACEHOLDER] Verify ingredients and preparation methods when uncertain",
        "[PLACEHOLDER] Double-check orders before serving to customers with allergies"
      ],
      bestPractices: [
        "[PLACEHOLDER] Take all allergy concerns seriously, no matter how minor",
        "[PLACEHOLDER] Never guess about ingredients - always verify",
        "[PLACEHOLDER] Use separate preparation areas for severe allergies when possible",
        "[PLACEHOLDER] Keep updated allergen information easily accessible"
      ],
      tips: [
        "[PLACEHOLDER] Learn common allergens and which menu items contain them",
        "[PLACEHOLDER] Suggest safe alternatives for customers with restrictions",
        "[PLACEHOLDER] Maintain clear communication chain from order to kitchen to service"
      ]
    }
  },
  {
    id: 4,
    title: "Emergency Procedures & Crisis Management",
    subtitle: "Handle emergencies and crisis situations professionally",
    description: "Respond appropriately to various emergency situations including medical emergencies, accidents, and security issues while ensuring customer and staff safety.",
    screenshots: [
      { src: "/screenshots/emergency-contacts.png", alt: "Emergency Contact Information" },
      { src: "/screenshots/incident-report.png", alt: "Incident Report Form" },
      { src: "/screenshots/first-aid.png", alt: "Basic First Aid Procedures" }
    ],
    content: {
      process: [
        "[PLACEHOLDER] Assess the situation quickly and ensure immediate safety",
        "[PLACEHOLDER] Call appropriate emergency services (911, poison control, etc.)",
        "[PLACEHOLDER] Notify management immediately of any emergency",
        "[PLACEHOLDER] Provide basic first aid if trained and safe to do so",
        "[PLACEHOLDER] Document incident thoroughly after situation is resolved"
      ],
      bestPractices: [
        "[PLACEHOLDER] Stay calm and think clearly during emergencies",
        "[PLACEHOLDER] Prioritize safety of customers and staff above all else",
        "[PLACEHOLDER] Follow established emergency protocols exactly",
        "[PLACEHOLDER] Keep emergency contact numbers easily accessible"
      ],
      tips: [
        "[PLACEHOLDER] Know location of first aid kit and emergency exits",
        "[PLACEHOLDER] Practice emergency scenarios during training",
        "[PLACEHOLDER] Never hesitate to call for help when in doubt"
      ]
    }
  }
];
