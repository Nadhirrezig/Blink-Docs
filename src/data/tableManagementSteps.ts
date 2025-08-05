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

export const tableManagementSteps: MenuStep[] = [
  {
    id: 0,
    title: "Create Dining Areas",
    subtitle: "Set up venue dining areas and sections for organized table management",
    description: "Learn how to create and configure different dining areas within your venue, such as indoor seating, outdoor patio, bar area, or private dining rooms for better organization and service management.",
    screenshots: [
      { src: "/screenshots/dining-areas-setup.png", alt: "Dining Areas Configuration Interface" },
      { src: "/screenshots/area-management.png", alt: "Area Management Dashboard" },
      { src: "/screenshots/section-layout.png", alt: "Section Layout Planning" }
    ],
    content: {
      process: [
        "Open your Blink admin dashboard and head to 'Venue Management'",
        "Click on 'Dining Areas' - this is where the magic begins",
        "Hit 'Create New Area' and give it a name that makes sense (like 'Main Floor' or 'Sunny Patio')",
        "Set your capacity - be realistic about how many people you can actually serve well",
        "Configure the area settings: operating hours, service style, and any special features"
      ],
      bestPractices: [
        "Keep area names simple and intuitive - your staff will thank you later",
        "Think about the customer journey: where do they enter, sit, and move around?",
        "Don't overpack areas - quality service beats cramming in more tables",
        "Consider different vibes: quiet corners for dates, communal areas for groups"
      ],
      tips: [
        "Pro tip: Create a 'VIP' area even if it's just your best tables",
        "Seasonal areas are gold - activate that patio when weather's nice",
        "Leave room to grow - you might want to expand that popular section later"
      ]
    }
  },
  {
    id: 1,
    title: "Create Tables",
    subtitle: "Add individual tables with proper numbering and capacity settings",
    description: "Set up individual tables within your dining areas, configure table numbers, seating capacity, and table-specific settings to enable QR code ordering and efficient service management.",
    screenshots: [
      { src: "/screenshots/table-creation.png", alt: "Table Creation Interface" },
      { src: "/screenshots/table-configuration.png", alt: "Table Configuration Settings" },
      { src: "/screenshots/table-numbering.png", alt: "Table Numbering System" }
    ],
    content: {
      process: [
        "Pick your dining area and click 'Add Table' - time to build your seating empire",
        "Give each table a number that makes sense (Table 1, 2, 3... or get creative with 101, 102)",
        "Set the real capacity - if it's a tight 4-top, don't say it seats 6",
        "Choose your table shape and size in the system (round, square, booth, whatever you've got)",
        "Flip the QR ordering switch to 'ON' - this is where the future happens"
      ],
      bestPractices: [
        "Number smart: 100s for main floor, 200s for upstairs - your servers will love you",
        "Be honest about capacity - cramped customers don't tip well",
        "Mark your wheelchair accessible tables clearly in the system",
        "Group numbers by area so staff can find tables without a treasure map"
      ],
      tips: [
        "Keep numbering consistent - don't go from Table 5 to Table 47 for no reason",
        "Save Table 1 or 100 for your best spot - it's psychological gold",
        "Leave gaps in numbering for future tables (trust us on this one)"
      ]
    }
  },
  {
    id: 2,
    title: "Generate QR Codes",
    subtitle: "Create unique QR codes for each table that link to the ordering system",
    description: "Generate unique QR codes for each table that customers can scan to access the digital menu and place orders directly from their mobile devices, enabling contactless ordering and improved service efficiency.",
    screenshots: [
      { src: "/screenshots/qr-generation.png", alt: "QR Code Generation Interface" },
      { src: "/screenshots/qr-customization.png", alt: "QR Code Customization Options" },
      { src: "/screenshots/qr-preview.png", alt: "QR Code Preview and Testing" }
    ],
    content: {
      process: [
        "Head to 'QR Code Management' - this is where the magic happens",
        "Select your tables (do them all at once or one by one, your choice)",
        "Make it yours: add your logo, pick colors that match your vibe",
        "Set up the ordering flow - what do customers see first? Menu? Specials?",
        "Hit 'Generate' and preview each code - make sure they look good"
      ],
      bestPractices: [
        "Test on different phones before going live - Android, iPhone, old phones, new phones",
        "Make it obvious: 'SCAN TO ORDER' in big, friendly letters",
        "Double-check each QR links to the right table - mix-ups are embarrassing",
        "Print extras - QR codes get lost, spilled on, and mysteriously disappear"
      ],
      tips: [
        "Black on white works best - fancy colors can confuse phone cameras",
        "Put the table number right on the QR code so there's no confusion",
        "Test in dim lighting - if it doesn't scan in candlelight, redesign it"
      ]
    }
  },
  {
    id: 3,
    title: "Print QR Codes",
    subtitle: "Print and prepare QR codes for table placement and customer use",
    description: "Print high-quality QR codes with proper formatting and instructions, prepare table displays, and deploy QR codes throughout your venue for seamless customer ordering experience.",
    screenshots: [
      { src: "/screenshots/qr-printing.png", alt: "QR Code Printing Interface" },
      { src: "/screenshots/qr-formats.png", alt: "QR Code Print Format Options" },
      { src: "/screenshots/qr-deployment.png", alt: "QR Code Table Deployment" }
    ],
    content: {
      process: [
        "Choose your style: table tents (classy), stickers (simple), or cards (flexible)",
        "Crank up that print quality - blurry QR codes are useless QR codes",
        "Print with clear instructions: 'Scan with your phone camera to order'",
        "Laminate everything - spills happen, and soggy QR codes don't scan",
        "Deploy to tables and test each one with your phone - seriously, test them all"
      ],
      bestPractices: [
        "Waterproof is worth it - one coffee spill shouldn't kill your QR code",
        "Make instructions dummy-proof: 'Point camera here, tap notification'",
        "Put them where people naturally look - center of table, eye level",
        "Keep a stack of backups behind the bar - you'll need them"
      ],
      tips: [
        "High-traffic tables need extras - they disappear faster than free bread",
        "Table stands keep codes visible even when tables are full of food",
        "WiFi password on the QR code = happy customers who can actually order"
      ]
    }
  }
];
