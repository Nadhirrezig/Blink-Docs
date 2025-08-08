/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Comprehensive online ordering documentation data structure
 * Customer-facing ordering process workflow documentation
 */

import { MenuStep } from '@/types/menu';

export const onlineOrderingSteps: MenuStep[] = [
  {
    id: 0,
    title: "Select Items from Menu",
    subtitle: "Browse and choose your favorite dishes",
    description: "Start your ordering journey by exploring our menu. Browse through categories, view detailed descriptions, and select items that catch your eye.",
    screenshots: [
      { src: "/screenshots/mobile_view.jpg", alt: "Menu browsing interface" },
      { src: "/screenshots/confirm_order_mobile.jpg", alt: "Item details and customization" },
    ],
    content: {
      process: [
        "Browse menu categories (appetizers, mains, desserts, drinks)",
        "View item photos, descriptions, and prices",
        "Check for dietary information and allergen warnings",
        "Select items by tapping or clicking on them",
        "Customize items with available options (size, extras, modifications)"
      ],
      tips: [
        "Check daily specials and seasonal offerings",
        "Use search functionality to find specific dishes quickly"
      ]
    }
  },
  {
    id: 1,
    title: "View Cart & Make Changes",
    subtitle: "Review and modify your order before confirming",
    description: "Your selected items appear in your cart where you can review quantities, make modifications, add special instructions, or remove items before proceeding.",
    screenshots: [
      { src: "/screenshots/order.jpg", alt: "order interface" },
      { src: "/screenshots/send_order.jpg", alt: "Shopping cart interface" },
      { src: "/screenshots/note_order.jpg", alt: "Modifying cart items" }
    ],
    content: {
      process: [
        "Access your cart by clicking the cart icon",
        "Review all selected items and their customizations",
        "Adjust quantities using + and - buttons",
        "Remove items by clicking the remove/trash icon",
        "Add special instructions for individual items",
        "Select order type (dine-in/pickup/)"
      ],
      tips: [
        "Double-check quantities before confirming",
        "Add any dietary restrictions or special requests",
        "Review estimated preparation time if exist"
      ]
    }
  },
  {
    id: 2,
    title: "Confirm Cart",
    subtitle: "Finalize your order details",
    description: "Review your complete order one final time, confirm all details are correct, and proceed to the next step. This is your last chance to make changes.",
    screenshots: [
      { src: "/screenshots/notif_order.jpg", alt: "Order confirmation screen" },
    ],
    content: {
      process: [
          "Once you click order, the order will be sent",
          "A message with \"Order placed successfully.\" if order was sent with success",
      ],
      considerations: [
        "Once confirmed, changes may not be possible",
        "Ensure all dietary requirements are noted",
      ]
    }
  },
  {
    id: 3,
    title: "Add Tip",
    subtitle: "Show appreciation for great service",
    description: "Add a tip to show your appreciation for the service. Choose from preset percentages or enter a custom amount.",
    screenshots: [
      { src: "/screenshots/modify_order.jpg", alt: "modifying interface" },
      { src: "/screenshots/add_tip_order.jpg", alt: "tip order interface" },

    ],
    content: {
      process: [
        "Choose from preset tip percentages (15%, 18%, 20%)",
        "Enter a custom tip amount if preferred",
        "Select 'No Tip' if you prefer not to tip",
        "Review final total including tip",
        "Proceed to order submission"
      ],
      tips: [
        "Tips help support our hardworking staff",
        "Tip amounts are calculated on pre-tax totals",
        "You can always adjust tips when paying"
      ]
    }
  },
  {
    id: 4,
    title: "Track Order After Sending",
    subtitle: "Monitor your order's progress in real-time",
    description: "Once your order is submitted, track its progress through our real-time tracking system. Stay informed about preparation status and estimated completion time.",
    screenshots: [
      { src: "/screenshots/notif_order.jpg", alt: "Order confirmation screen" },
      { src: "/screenshots/track_order.jpg", alt: "Order status updates" }
    ],
    content: {
      process: [
        "Receive order confirmation with tracking number",
        "Monitor order status: Received → Preparing → Ready",
        "View estimated completion time",
        "Receive notifications for status changes",
      ],
    }
  },
  {
    id: 5,
    title: "Call Waiter",
    subtitle: "Request assistance during your dining experience",
    description: "Need help during your meal? Use the call waiter feature to request assistance, ask questions, or get additional service without leaving your table.",
    screenshots: [
      { src: "/screenshots/call_waiter1.jpg", alt: "Call waiter interface" },
      { src: "/screenshots/call_waiter_customer.jpg", alt: "Select table" },
      { src: "/screenshots/select_table_call.jpg", alt: "confirm call" },
      { src: "/screenshots/waiter_notif.jpg", alt: "notification sent" },
    ],
    content: {
      process: [
        "Locate the 'Call Waiter' button in your order interface",
        "Select Your table",
        "Submit the request",
        "Wait for staff to respond to your table"
      ],
    }
  }
];
