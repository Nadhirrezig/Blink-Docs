/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Comprehensive reservations documentation data structure
 * Customer table booking and reservation management workflow documentation
 */

import { MenuStep } from '@/types/menu';

export const reservationsSteps: MenuStep[] = [
  {
    id: 0,
    title: "Login Requirement",
    subtitle: "Sign in to access reservation system",
    description: "Before making a reservation, you'll need to log in to your Blink account. This ensures we can save your booking details and send you important updates.",
    screenshots: [
      { src: "/screenshots/login-screen.png", alt: "Login interface for reservations" },
      { src: "/screenshots/account-creation.png", alt: "Account creation process" }
    ],
    content: {
      process: [
        "Navigate to the reservations section",
        "Click 'Sign In' or 'Create Account' if you're new",
        "Enter your email and password",
        "Complete account verification if required",
        "Access the reservation booking system"
      ],
      required: [
        "Valid email address",
        "Secure password",
        "Phone number for booking confirmations",
        "Basic personal information"
      ],
      tips: [
        "Create an account for faster future bookings",
        "Use a valid email for reservation confirmations",
        "Keep your contact information up-to-date"
      ]
    }
  },
  {
    id: 1,
    title: "Select Time Slot and Additional Options",
    subtitle: "Choose your preferred dining time and special requirements",
    description: "Browse available time slots, select your party size, and add any special requirements for your dining experience. Our system shows real-time availability.",
    screenshots: [
      { src: "/screenshots/time-selection.png", alt: "Time slot selection interface" },
      { src: "/screenshots/party-size.png", alt: "Party size and options selection" },
      { src: "/screenshots/special-requests.png", alt: "Special requests form" }
    ],
    content: {
      process: [
        "Select your preferred date from the calendar",
        "Choose from available time slots",
        "Specify party size (number of guests)",
        "Select seating preferences if available",
        "Add special requests or dietary requirements",
        "Choose additional services (birthday celebration, etc.)"
      ],
      optional: [
        "Seating preferences (window, quiet area, etc.)",
        "Special occasion notes",
        "Dietary restrictions or allergies",
        "Accessibility requirements",
        "High chair or booster seat requests"
      ],
      considerations: [
        "Popular times may have limited availability",
        "Large parties may require advance notice",
        "Special requests are accommodated when possible"
      ]
    }
  },
  {
    id: 2,
    title: "Confirm Reservation",
    subtitle: "Review and finalize your booking details",
    description: "Review all reservation details, confirm the information is correct, and submit your booking. You'll receive a confirmation with all the important details.",
    screenshots: [
      { src: "/screenshots/reservation-review.png", alt: "Reservation review screen" },
      { src: "/screenshots/confirmation.png", alt: "Booking confirmation" }
    ],
    content: {
      process: [
        "Review all reservation details carefully",
        "Verify date, time, and party size",
        "Check contact information is correct",
        "Read and accept cancellation policy",
        "Submit reservation request",
        "Receive confirmation email with booking details"
      ],
      workflow: [
        "Instant confirmation for most bookings",
        "Email confirmation sent immediately",
        "SMS reminder sent day before (if enabled)",
        "Booking reference number provided"
      ],
      bestPractices: [
        "Double-check all details before confirming",
        "Save confirmation email for reference",
        "Note the cancellation policy terms"
      ]
    }
  },
  {
    id: 3,
    title: "Track Reservation in 'My Bookings'",
    subtitle: "Monitor and manage your reservation",
    description: "Access your reservation details anytime through 'My Bookings'. View upcoming reservations, make changes if needed, and track your booking history.",
    screenshots: [
      { src: "/screenshots/my-bookings.png", alt: "My bookings dashboard" },
      { src: "/screenshots/booking-details.png", alt: "Individual booking details" },
      { src: "/screenshots/modify-booking.png", alt: "Modify reservation interface" }
    ],
    content: {
      process: [
        "Access 'My Bookings' from your account menu",
        "View all upcoming reservations",
        "Click on a booking to see full details",
        "Modify reservation if changes are needed",
        "Cancel booking if plans change",
        "View past reservation history"
      ],
      features: [
        "Real-time booking status updates",
        "Easy modification options",
        "Cancellation with policy compliance",
        "Booking history tracking",
        "Special request management"
      ],
      notifications: [
        "Booking confirmation emails",
        "Reminder notifications",
        "Modification confirmations",
        "Cancellation receipts"
      ]
    }
  }
];
