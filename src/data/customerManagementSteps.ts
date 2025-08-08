/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Customer Management steps data
 */

import { MenuStep } from '@/types/menu';

export const customerManagementSteps: MenuStep[] = [
  {
    id: 0,
    title: "Customer Order Settings",
    subtitle: "Control How Customers Place Orders",
    description:
      "Easily enable or disable customer ordering, allow dine-in, pickup, or delivery, and manage tipping options. Fine-tune the customer experience to match your business needs.",
    screenshots: [{ src: "/screenshots/customer_order.png", alt: "Order Settings Panel" }],
    content: {
      process: [
        "Toggle whether customers can place orders from your website.",
        "Enable or disable dine-in, pickup, and delivery order types.",
        "Allow customers to add a tip during checkout, or disable tipping.",
        "Set orders to auto-confirm or require manual approval.",
      ],
      tips: [
        "Disable order types you don't offer to avoid confusion.",
        "Enable auto-confirm for faster service, or manual for more control.",
      ],
    },
  },
  {
    id: 1,
    title: "Call Waiter Settings",
    subtitle: "Empower Guests to Request Service",
    description:
      "Let customers call a waiter from their table using their phone. Choose where and when this feature is available for maximum flexibility.",
    screenshots: [{ src: "/screenshots/customer_waiter.png", alt: "Call Waiter Feature" }],
    content: {
      process: [
        "Enable or disable the 'Call Waiter' button on the customer site.",
        "Restrict the feature to mobile, desktop, or only when accessed via QR code.",
      ],
      tips: [
        "Limiting to QR code ensures only in-venue guests can call a waiter.",
        "Disable on desktop if you want to encourage mobile/tablet use.",
      ],
    },
  },
  {
    id: 2,
    title: "Dine-In Table Selection",
    subtitle: "Require Table Selection for Dine-In",
    description:
      "Ask customers to select their table when placing a dine-in order, ensuring accurate service and order delivery.",
    screenshots: [
      { src: "/screenshots/customer_dinein1.png", alt: "Table Selection" },
      { src: "/screenshots/customer_dinein2.png", alt: "dropdown menu selection" },
    ],
    content: {
      process: [
        "Enable the setting to require table selection for dine-in orders.",
        "Customers will be prompted to choose their table before ordering.",
      ],
      tips: ["This helps staff deliver orders to the correct table efficiently."],
    },
  },
  {
    id: 3,
    title: "Reservation Status & Time Settings",
    subtitle: "Customize Reservation Experience",
    description:
      "Let customers select reservation status, set available times, and manage cancellation reasons for a seamless booking process.",
    screenshots: [{ src: "/screenshots/customer_reserve.png", alt: "Reservation Settings" }],
    content: {
      process: [
        "Add or edit reservation statuses using the dropdown component.",
        "Set available reservation times to match your business hours.",
        "Manage cancellation reasons (add, edit, delete) for better tracking.",
      ],
      tips: ["Clear cancellation reasons help you improve your service."],
    },
  },
  {
    id: 4,
    title: "Social Media & About Us",
    subtitle: "Showcase Your Brand",
    description:
      "Add your social media links and a custom 'About Us' section to your customer site, building trust and engagement.",
    screenshots: [
      { src: "/screenshots/customer_social.png", alt: "Social Media Links" },
      { src: "/screenshots/customer_about.png", alt: "About us" },
    ],
    content: {
      process: [
        "Add links to your Facebook, Instagram, Twitter, and more.",
        "Write a compelling 'About Us' to introduce your venue to customers.",
      ],
      tips: [
        "Keep your social links updated to grow your online presence.",
        "A friendly 'About Us' builds customer trust and loyalty.",
      ],
    },
  },
];
