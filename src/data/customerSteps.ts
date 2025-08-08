/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Comprehensive customer-facing documentation data structure
 * Advanced categorization and interactive workflow documentation
 */

import { MenuStep } from '@/types/menu';

export const customerSteps: MenuStep[] = [
  {
    id: 0,
    title: "Getting Started with Blink",
    subtitle: "Your First Steps to Seamless Ordering",
    description: "Welcome to Blink's customer portal! Learn how to create your account, navigate the interface, and start your first order with our intuitive system.",
    screenshots: [
      { src: "/screenshots/customer-welcome.png", alt: "Welcome to Blink Customer Portal" },
      { src: "/screenshots/customer-signup.png", alt: "Account Creation Process" }
    ],
    content: {
      process: [
        "Visit your venue's unique Blink customer portal",
        "Click 'Create Account' or 'Sign Up' to begin",
        "Enter your basic information (name, email, phone)",
        "Verify your email address for account activation",
        "Set up your preferences and dietary restrictions",
        "Browse available venues and menu categories"
      ],
      tips: [
        "Use the same email for all Blink venues to sync your preferences",
        "Enable notifications to track your orders in real-time",
        "Save your favorite items for quick reordering"
      ],
      features: [
        "Multi-venue account synchronization",
        "Personalized menu recommendations",
        "Order history across all venues",
        "Loyalty points and rewards tracking"
      ]
    }
  },
  {
    id: 1,
    title: "Dine-In Ordering Experience",
    subtitle: "Contactless Ordering at Your Table",
    description: "Experience the future of dining with our QR code-powered table ordering system. No more waiting for servers - order directly from your phone!",
    screenshots: [
      { src: "/screenshots/customer-dinein1.png", alt: "QR Code Scanning Process" },
      { src: "/screenshots/customer-dinein2.png", alt: "Table-Specific Menu Interface" },
      { src: "/screenshots/customer-dinein3.png", alt: "Real-time Order Tracking" }
    ],
    content: {
      process: [
        "Scan the QR code on your table with your phone camera",
        "Select your table number and party size",
        "Browse the full menu with real-time availability",
        "Customize your order with special instructions",
        "Add items to cart and review your selection",
        "Submit order and track preparation progress",
        "Receive notification when your food is ready"
      ],
      tips: [
        "Keep your phone handy for order updates and notifications",
        "Use the 'Call Waiter' feature for special requests",
        "Split bills easily with the group ordering feature",
        "Rate your experience to help improve service"
      ],
      features: [
        "Real-time menu availability updates",
        "Allergen and dietary restriction filtering",
        "Order modification before preparation starts",
        "Automatic bill splitting and payment processing",
        "Integration with venue loyalty programs"
      ]
    }
  },
  {
    id: 2,
    title: "Pickup Ordering Workflow",
    subtitle: "Order Ahead, Pick Up When Ready",
    description: "Skip the wait with our convenient pickup ordering system. Order your favorite meals in advance and pick them up at your preferred time.",
    screenshots: [
      { src: "/screenshots/customer-pickup1.png", alt: "Pickup Time Selection" },
      { src: "/screenshots/customer-pickup2.png", alt: "Pickup Confirmation" },
      { src: "/screenshots/customer-pickup3.png", alt: "Pickup Instructions" }
    ],
    content: {
      process: [
        "Browse the menu and select your desired items",
        "Choose your preferred pickup time slot",
        "Add any special instructions or modifications",
        "Review your order and estimated pickup time",
        "Complete payment and receive confirmation",
        "Track order preparation progress in real-time",
        "Receive notification when your order is ready",
        "Show confirmation code at pickup counter"
      ],
      tips: [
        "Order 15-30 minutes ahead for best availability",
        "Save your favorite pickup locations for quick access",
        "Use the 'Rush Order' option for urgent needs",
        "Check estimated wait times before placing orders"
      ],
      features: [
        "Flexible pickup time scheduling",
        "Real-time order status tracking",
        "Contactless pickup with QR codes",
        "Integration with venue loyalty programs",
        "Automatic reordering of favorite items"
      ]
    }
  },
  {
    id: 3,
    title: "Delivery Ordering System",
    subtitle: "Food Delivered to Your Door",
    description: "Enjoy restaurant-quality meals delivered directly to your location. Track your delivery in real-time and enjoy contactless delivery options.",
    screenshots: [
      { src: "/screenshots/customer-delivery1.png", alt: "Delivery Address Setup" },
      { src: "/screenshots/customer-delivery2.png", alt: "Delivery Tracking Interface" },
      { src: "/screenshots/customer-delivery3.png", alt: "Delivery Confirmation" }
    ],
    content: {
      process: [
        "Enter your delivery address and contact information",
        "Browse available delivery menu items",
        "Select items and customize your order",
        "Choose delivery time and special instructions",
        "Review delivery fees and estimated arrival time",
        "Complete payment and receive order confirmation",
        "Track your delivery driver in real-time",
        "Receive delivery and enjoy your meal"
      ],
      tips: [
        "Save multiple delivery addresses for convenience",
        "Tip your delivery driver through the app",
        "Use contactless delivery for added safety",
        "Check delivery radius before placing orders"
      ],
      features: [
        "Real-time delivery tracking with GPS",
        "Contactless delivery options",
        "Multiple payment methods including digital wallets",
        "Delivery driver ratings and feedback",
        "Automatic delivery time estimation",
        "Integration with major delivery platforms"
      ]
    }
  },
  {
    id: 4,
    title: "Waiter Call & Service Features",
    subtitle: "Get Help When You Need It",
    description: "Need assistance? Our intelligent waiter call system ensures you get help quickly and efficiently, enhancing your dining experience.",
    screenshots: [
      { src: "/screenshots/customer-waiter1.png", alt: "Waiter Call Interface" },
      { src: "/screenshots/customer-waiter2.png", alt: "Service Request Categories" },
      { src: "/screenshots/customer-waiter3.png", alt: "Request Status Tracking" }
    ],
    content: {
      process: [
        "Access the 'Call Waiter' feature from your table interface",
        "Select the type of assistance you need",
        "Add specific details or special requests",
        "Submit your request and receive confirmation",
        "Track request status and estimated response time",
        "Receive notification when staff is on the way",
        "Rate the service quality after assistance"
      ],
      tips: [
        "Use specific request categories for faster service",
        "Include table number in special requests",
        "Be patient during peak hours",
        "Use the feedback system to improve service"
      ],
      features: [
        "Categorized service requests (refills, questions, issues)",
        "Priority-based request routing",
        "Real-time request status tracking",
        "Staff response time monitoring",
        "Service quality feedback system",
        "Integration with venue management systems"
      ]
    }
  },
  {
    id: 5,
    title: "Account Management & Preferences",
    subtitle: "Personalize Your Experience",
    description: "Take control of your Blink experience with comprehensive account management features, personalized preferences, and loyalty program integration.",
    screenshots: [
      { src: "/screenshots/customer-account1.png", alt: "Account Dashboard" },
      { src: "/screenshots/customer-account2.png", alt: "Preferences Management" },
      { src: "/screenshots/customer-account3.png", alt: "Loyalty Program Interface" }
    ],
    content: {
      process: [
        "Access your account dashboard from any Blink venue",
        "Update personal information and contact details",
        "Set dietary preferences and allergen alerts",
        "Manage payment methods and billing addresses",
        "Configure notification preferences",
        "View order history and favorite items",
        "Track loyalty points and available rewards",
        "Manage privacy settings and data preferences"
      ],
      tips: [
        "Keep your dietary preferences updated for better recommendations",
        "Enable push notifications for order updates",
        "Regularly review and update payment methods",
        "Check loyalty program benefits regularly"
      ],
      features: [
        "Multi-venue account synchronization",
        "Personalized menu recommendations",
        "Comprehensive order history tracking",
        "Loyalty points and rewards management",
        "Dietary preference and allergen filtering",
        "Advanced privacy and data control settings",
        "Integration with third-party loyalty programs"
      ]
    }
  },
  {
    id: 6,
    title: "Multi-Venue Activity Tracking",
    subtitle: "Your Journey Across All Venues",
    description: "Track your dining experiences across all Blink-powered venues with our comprehensive activity tracking and analytics system.",
    screenshots: [
      { src: "/screenshots/customer-activity1.png", alt: "Activity Dashboard" },
      { src: "/screenshots/customer-activity2.png", alt: "Venue Analytics" },
      { src: "/screenshots/customer-activity3.png", alt: "Experience Timeline" }
    ],
    content: {
      process: [
        "View your complete dining activity across all venues",
        "Track spending patterns and favorite venues",
        "Monitor loyalty points accumulation and redemption",
        "Review order history and dining preferences",
        "Analyze your dining patterns and trends",
        "Discover new venues based on your preferences",
        "Share experiences and recommendations with friends",
        "Export your dining data for personal records"
      ],
      tips: [
        "Regularly check for new venues in your area",
        "Use activity insights to discover new menu items",
        "Share positive experiences to help other customers",
        "Take advantage of cross-venue loyalty benefits"
      ],
      features: [
        "Comprehensive activity tracking across all venues",
        "Personalized venue and menu recommendations",
        "Advanced analytics and spending insights",
        "Social sharing and recommendation features",
        "Cross-venue loyalty program integration",
        "Data export and privacy controls",
        "Integration with calendar and scheduling apps"
      ]
    }
  }
];

// Advanced customer journey mapping
export const customerJourneyMap = {
  touchpoints: [
    {
      stage: "Discovery",
      actions: ["Venue Search", "Menu Preview", "Account Creation"],
      emotions: ["Curiosity", "Excitement", "Anticipation"]
    },
    {
      stage: "Ordering",
      actions: ["Menu Browsing", "Item Selection", "Customization"],
      emotions: ["Engagement", "Satisfaction", "Control"]
    },
    {
      stage: "Preparation",
      actions: ["Order Tracking", "Status Updates", "Wait Management"],
      emotions: ["Patience", "Anticipation", "Trust"]
    },
    {
      stage: "Delivery/Service",
      actions: ["Pickup/Delivery", "Dining Experience", "Service Interaction"],
      emotions: ["Satisfaction", "Gratitude", "Enjoyment"]
    },
    {
      stage: "Post-Experience",
      actions: ["Feedback", "Rating", "Reordering"],
      emotions: ["Satisfaction", "Loyalty", "Recommendation"]
    }
  ]
};

// Customer persona definitions
export const customerPersonas = [
  {
    name: "The Busy Professional",
    characteristics: ["Time-conscious", "Tech-savvy", "Quality-focused"],
    needs: ["Quick ordering", "Reliable delivery", "Quality assurance"],
    preferredFeatures: ["Pickup ordering", "Delivery tracking", "Loyalty rewards"]
  },
  {
    name: "The Social Diner",
    characteristics: ["Experience-focused", "Group-oriented", "Adventure-seeking"],
    needs: ["Group ordering", "Social features", "New experiences"],
    preferredFeatures: ["Dine-in QR ordering", "Bill splitting", "Venue discovery"]
  },
  {
    name: "The Health-Conscious Customer",
    characteristics: ["Diet-aware", "Quality-focused", "Information-seeking"],
    needs: ["Dietary information", "Allergen alerts", "Nutritional data"],
    preferredFeatures: ["Dietary filtering", "Allergen warnings", "Nutritional info"]
  }
];
