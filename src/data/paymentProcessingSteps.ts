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
    title: 'Find the Order',
    subtitle: 'Locate the correct order in the POS',
    description: 'Start by finding the customer’s order using the POS system.',
    screenshots: [
      { src: '/screenshots/find_order.png', alt: 'Payment Processing Interface' },
    ],
    content: {
      process: [
        'Look at your Orders screen',
        'Find the order by table number (e.g., "Table 5") or order number (e.g., "ORD-001")',
        'Click on the order to open it',
      ],
    },
  },
  {
    id: 1,
    title: 'Verify the Order',
    subtitle: 'Review order details',
    description: 'Ensure all items and the total amount are correct before proceeding.',
    screenshots: [
      { src: '/screenshots/verify_order.png', alt: 'Order Taking Process' },
    ],
    content: {
      process: [
        'Review all items in the order',
        'Check the total amount at the bottom',
        'Make any necessary adjustments (add/remove items) if required',
      ],
    },
  },
  {
    id: 2,
    title: 'Generate the Bill',
    subtitle: 'Create the bill for the order',
    description: 'Generate and review the bill before payment.',
    screenshots: [
      { src: '/screenshots/select_option.png', alt: 'Receipt Generation' },
      { src: '/screenshots/add_payment.png', alt: 'Receipt Generation' },
    ],
    content: {
      process: [
        'Click the "Bill & Pay" button',
        'The system will display the final amount',
        'Print the bill if the customer requests',
        'Click the "Add payment" button to proceed',
      ],
    },
  },
  {
    id: 3,
    title: 'Select Payment Method & Pay',
    subtitle: 'Process the payment',
    description: 'Choose the payment method and complete the transaction.',
    screenshots: [
      { src: '/screenshots/payment_method.png', alt: 'Payment Processing Interface' },
      { src: '/screenshots/split_payment.png', alt: 'Payment Processing Interface' },
    ],
    content: {
      process: [
        'Select the payment method: Cash(for now)',
        'For Cash: Enter the amount received, system calculates change, confirm payment',
        'Click the "Pay" button to complete the transaction',
        'If the customer wants to split the payment, click the "Split Payment" button',
        'Select split method',
        'Click the "Pay" button to complete the transaction',
      ],
    },
  },
  {
    id: 4,
    title: 'Generate Payment Receipt',
    subtitle: 'Print and provide the receipt',
    description: 'Print the payment receipt and provide it to the customer.',
    screenshots: [
      { src: '/screenshots/print_reciept.png', alt: 'Receipt Generation' },
    ],
    content: {
      process: [
        'Click "Print Receipt"',
        'Provide the receipt to the customer',
      ],
    },
  },
];
