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

export const kitchenopetations: MenuStep[] = [
  {
    id: 0,
    title: "Kitchen Dashboard",
    subtitle: "Access the Kitchen Dashboard",
    description: "Learn how to properly use the Kitchen Dashboard, verify your permissions, and ensure all necessary components are ready for taking orders.",
    screenshots: [
      { src: "/screenshots/kotorders.png", alt: "Kitchen Dashboard" },
    ],
    content: {
      process: [
        "In the navigation bar you will find the Kitchen Dashboard, click on it to access the Kitchen Dashboard",
        "You will be redirected to the Kitchen Dashboard",
        "all kitchen tickets will be displayed here",
        "Select start cooking to move ticket to cooking",
      ],
    }
  },
  {
    id: 1,
    title: "Food is ready",
    subtitle: "food is ready to serve",
    description: "Master the kitchen dashboard, and start serving the order.",
    screenshots: [
      { src: "/screenshots/food_ready.png", alt: "Food ready" },
      { src: "/screenshots/done_with_kot.png", alt: "Done with kot" },
    ],
    content: {
      process: [
        "when the food is ready, select Food is ready to move ticket to done",
        "You can now serve the food to the customer and mark the ticket as done",
      ],
    }
  },

];
