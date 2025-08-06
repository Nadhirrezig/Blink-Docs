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
      { src: "/screenshots/area_table.png", alt: "Dining Areas Configuration Interface" },
      { src: "/screenshots/area_add.png", alt: "Area Management Dashboard" },
    ],
    content: {
      process: [
        "Open your Navigation bar and click on 'Areas'",
        "You can Create/update venue areas here",
        "provide the name of the area to create"
      ],
    }
  },
  {
    id: 1,
    title: "Create Tables",
    subtitle: "Add individual tables with proper numbering and capacity settings",
    description: "Set up individual tables within your dining areas, configure table numbers, seating capacity, and table-specific settings to enable QR code ordering and efficient service management.",
    screenshots: [
      { src: "/screenshots/table_view.png", alt: "Table Creation Interface" },
      { src: "/screenshots/add_table.png", alt: "Table Configuration Settings" },
    ],
    content: {
      process: [
        "In the table view, check table status or add/edit tables.",
        "View or create orders directly from this section.",
        "Click the add button to create a new table.",
      ],
      tips: [
        "Select an area before adding a table.",
        "Enter the table number or code.",
        "Set the table's capacity.",
        "Choose the table's status.",
      ]
    }
  },
  {
    id: 2,
    title: "Generate QR Codes",
    subtitle: "Create unique QR codes for each table that link to the ordering system",
    description: "Generate unique QR codes for each table that customers can scan to access the digital menu and place orders directly from their mobile devices, enabling contactless ordering and improved service efficiency.",
    screenshots: [
      { src: "/screenshots/generate_QRcode.png", alt: "QR Code Generation Interface" },

    ],
    content: {
      process: [
        "In this section, you will find the QR code generator.",
        "By default, a QR code is generated for each table number.",
        "You can customize the QR code if needed, such as updating the linked table or code.",
      ],
      tips: [
        "Generate QR codes for either the table number or a custom table code as required.",
      ]
    }
  },
  {
    id: 3,
    title: "Print QR Codes",
    subtitle: "Print and prepare QR codes for table placement and customer use",
    description: "Print high-quality QR codes with proper formatting and instructions, prepare table displays, and deploy QR codes throughout your venue for seamless customer ordering experience.",
    screenshots: [
      { src: "/screenshots/print_qrcode.png", alt: "QR Code Printing Interface" },

    ],
    content: {
      process: [
        "Click the download option to save the QR code, then print it.",
      ],
      tips: [
        "Test the QR code before printing to ensure it works correctly.",
        "Print the QR code using a high-quality printer.",
        "Edit the QR code if any changes are needed.",
        "Place the printed QR code on the appropriate table.",
      ]
    }
  }
];
