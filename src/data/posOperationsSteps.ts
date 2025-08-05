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

export const posOperationsSteps: MenuStep[] = [
  {
    id: 0,
    title: "POS System Setup",
    subtitle: "Access the POS system and prepare for service",
    description: "Learn how to properly use the POS system, verify your permissions, and ensure all necessary components are ready for taking orders.",
    screenshots: [
      { src: "/screenshots/pos.png", alt: "POS System" },
    ],
    content: {
      process: [
        "In the navigation bar you will find the POS system, click on it to access the POS system",
        "You will be redirected to the POS system, you will see the POS system dashboard",
        "on the right side of the screen you will see the items",
        "on the left side of the screen you will see the order",
      ],
    }
  },
  {
    id: 1,
    title: "Menu Navigation & Item Selection",
    subtitle: "Efficiently navigate menus and select items for orders",
    description: "Master the menu structure, category navigation, and item selection process to quickly build customer orders with accuracy.",
    screenshots: [
      { src: "/screenshots/item_selection.png", alt: "Item Selection Interface" },
    ],
    content: {
      process: [
        "at the top of the screen you will see the categories of the items and search bar",
        "by default you will see the items of the category 'All Items'",
        "You can click on the item to add it to the order",
      ],
    }
  },
  {
    id: 2,
    title: "Order Customization & Modifications",
    subtitle: "Handle special requests and order modifications",
    description: "Learn to apply modifiers, handle special requests, manage allergies, and customize orders according to customer preferences.",
    screenshots: [
      { src: "/screenshots/create_order.png", alt: "Order creation Interface" },
      { src: "/screenshots/custom1.png", alt: "Special Requests Entry" },
      { src: "/screenshots/custom2.png", alt: "Allergy Alert System" }
    ],
    content: {
      process: [
        "Start by selecting the item you want to order",
        "select the type of order (pick up, dine in, delivery)",
        "assign the order to the table (optional)",
        "select a waiter (optional)",
        "click on \"Add note\" button to add a note to the order",
        "Click on the \"Add to discount\" button to add the item to the discount",
      ],
    }
  },
  {
    id: 3,
    title: "Order Review & Confirmation",
    subtitle: "Verify order accuracy and confirm with customer",
    description: "Review the complete order with the customer, verify all details, make final adjustments, and confirm the order before processing payment.",
    screenshots: [
      { src: "/screenshots/confirme.png", alt: "Order Confirmation" },
      { src: "/screenshots/kotsent.png", alt: "kot sent to kitchen" }
    ],
    content: {
      process: [
        "Verify the order details before confirming",
        "You will see several option (select KOT to send ticket order to kitchen)",
      ],
    }
  },
  {
    id: 4,
    title: "Order status",
    subtitle: "Control the order status",
    description: "Control the order status, you can cancel the order, you can edit the order, you can send the order to kitchen, you can mark the order as paid, you can mark the order as completed, you can mark the order as cancelled.",
    screenshots: [
      { src: "/screenshots/vieworders.png", alt: "Order viewer" },
      { src: "/screenshots/trackorder.png", alt: "Order tracker" },
      { src: "/screenshots/served.png", alt: "Order served" },
    ],
    content: {
      process: [
        "You can view the orders by clicking on the quick action on the top \"View Orders\"",
        "Click on the order to view the order details",
        "You can now edit/bill/delete the order",
      ],
    }
  }
];
