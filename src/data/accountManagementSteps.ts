/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Comprehensive account management documentation data structure
 * Customer account and profile management workflow documentation
 */

import { MenuStep } from '@/types/menu';

export const accountManagementSteps: MenuStep[] = [
  {
    id: 0,
    title: "Account Information Management",
    subtitle: "Update your personal details and preferences",
    description: "Manage your personal information, contact details, and account preferences. Keep your profile up-to-date for the best ordering experience.",
    screenshots: [
      { src: "/screenshots/account-profile.png", alt: "Account profile management" },
      { src: "/screenshots/personal-info.png", alt: "Personal information form" }
    ],
    content: {
      process: [
        "Access your account settings from the profile menu",
        "Update personal information (name, email, phone)",
        "Set dietary preferences and allergies",
        "Configure notification preferences",
        "Update password and security settings",
        "Save changes to apply updates"
      ],
      features: [
        "Personal information editing",
        "Dietary preference settings",
        "Notification controls",
        "Password management",
        "Account security options"
      ]
    }
  },
  {
    id: 1,
    title: "My Address Settings",
    subtitle: "Manage your saved addresses",
    description: "Add, edit, and organize your saved addresses for faster ordering. Set default addresses and manage multiple locations for convenient ordering.",
    screenshots: [
      { src: "/screenshots/address-management.png", alt: "Address management interface" },
      { src: "/screenshots/add-address.png", alt: "Add new address form" }
    ],
    content: {
      process: [
        "Navigate to 'My Addresses' in account settings",
        "Add new addresses with complete details",
        "Set a default address for quick ordering",
        "Edit existing addresses as needed",
        "Delete outdated or unused addresses",
        "Organize addresses by type (home, work, etc.)"
      ],
      tips: [
        "Keep addresses current for accurate service",
        "Add delivery instructions for each address",
        "Set your most-used address as default"
      ]
    }
  },
  {
    id: 2,
    title: "My Orders History",
    subtitle: "View and manage your past orders",
    description: "Access your complete order history, reorder favorite meals, track past purchases, and manage receipts. Your ordering history helps you discover patterns and reorder easily.",
    screenshots: [
      { src: "/screenshots/order-history.png", alt: "Order history interface" },
      { src: "/screenshots/order-details.png", alt: "Individual order details" }
    ],
    content: {
      process: [
        "Access 'Order History' from your account menu",
        "Browse orders by date or search for specific items",
        "View detailed information for each order",
        "Reorder previous meals with one click",
        "Download receipts for expense tracking",
        "Rate and review past orders"
      ],
      features: [
        "Complete order history",
        "One-click reordering",
        "Receipt downloads",
        "Order search and filtering",
        "Rating and review system"
      ]
    }
  },
  {
    id: 3,
    title: "My Bookings Overview",
    subtitle: "Manage your table reservations",
    description: "View upcoming reservations, modify booking details, and track your reservation history. Stay organized with all your dining plans in one place.",
    screenshots: [
      { src: "/screenshots/bookings-overview.png", alt: "Bookings overview interface" },
      { src: "/screenshots/reservation-details.png", alt: "Reservation details view" }
    ],
    content: {
      process: [
        "Access 'My Bookings' from your account dashboard",
        "View upcoming reservations with details",
        "Modify reservation times or party size",
        "Cancel reservations if plans change",
        "View past reservation history",
        "Add special requests to existing bookings"
      ],
      workflow: [
        "Upcoming reservations displayed prominently",
        "Easy modification options available",
        "Cancellation policies clearly stated",
        "History tracking for reference"
      ]
    }
  },
  {
    id: 4,
    title: "Logout Functionality",
    subtitle: "Securely sign out of your account",
    description: "Safely log out of your account to protect your personal information, especially when using shared devices. Learn about session management and security best practices.",
    screenshots: [
      { src: "/screenshots/logout-process.png", alt: "Logout confirmation screen" }
    ],
    content: {
      process: [
        "Locate the logout option in your account menu",
        "Confirm logout action if prompted",
        "Ensure all personal data is cleared from device",
        "Return to login screen or homepage",
        "Verify successful logout completion"
      ],
      securityFeatures: [
        "Automatic session timeout for security",
        "Clear browsing data option",
        "Secure logout confirmation",
        "Session management across devices"
      ],
      bestPractices: [
        "Always logout on shared computers",
        "Use logout when finished ordering",
        "Check for successful logout confirmation"
      ]
    }
  }
];
