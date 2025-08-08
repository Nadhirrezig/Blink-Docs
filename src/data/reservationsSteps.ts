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
      { src: "/screenshots/reservation_customer.jpg", alt: "Login interface for reservations" },
      { src: "/screenshots/login_customer.jpg", alt: "Login interface for reservations" },
    ],
    content: {
      process: [
        "Navigate to the reservations section",
        "Click 'Sign In' or 'Create Account' if you're new",
        "Enter your email and password",
        "Access the reservation booking system"
      ],
      tips: [
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
      { src: "/screenshots/reservation_options.jpg", alt: "selecting options" },
      { src: "/screenshots/loggedin_customer.jpg", alt: "Time slot selection interface" },
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
      { src: "/screenshots/confirm_reservation.jpg", alt: "Booking confirmation" }
    ],
    content: {
      process: [
        "Submit reservation request",
        "Track your reservation from Booking/reservations"
      ],
      bestPractices: [
        "Double-check all details before confirming",
        "Save confirmation email for reference",
      ]
    }
  },
  {
    id: 3,
    title: "Track Reservation in 'My Bookings'",
    subtitle: "Monitor and manage your reservation",
    description: "Access your reservation details anytime through 'My Bookings'. View upcoming reservations, make changes if needed, and track your booking history.",
    screenshots: [

      { src: "/screenshots/access_booking.jpg", alt: "Access bookings" },
      { src: "/screenshots/reservation_list_customer.jpg", alt: "My bookings dashboard" },
    ],
    content: {
      process: [
        "Access 'My Bookings' from your account menu",
        "View all upcoming reservations",
        "Click on a booking to see full details",
        "View past reservation history"
      ],
    }
  }
];
