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

export const menuSteps: MenuStep[] = [
  {
    id: 0,
    title: "Menu Creation",
    subtitle: "Setting up your main menu structure",
    description: "Start by creating your main menu. This is the foundation of your restaurant's ordering system. You can create multiple menus for different purposes such as breakfast, lunch, dinner, or seasonal offerings.",
    screenshots: [
      { src: "/screenshots/menu1.png", alt: "Menu Creation Step 1 - Navigate to Menu Management" },
      { src: "/screenshots/menu2.png", alt: "Menu Creation Step 2 - Create New Menu Form" }
    ],
    content: {
      process: [
        "Navigate to Menu Management in the admin panel",
        "Click \"Create New Menu\" button",
        "Enter a descriptive menu name (e.g., \"Breakfast Menu\", \"Dinner Menu\")",
        "Add menu description (optional but recommended)",
        "Set menu availability hours if needed",
        "Click Save to create your menu"
      ],
      considerations: [
        "Choose a clear, descriptive menu name that customers will understand",
        "Consider creating separate menus for different meal times or seasons",
        "Plan your menu structure before adding items to maintain organization"
      ]
    }
  },
  {
    id: 1,
    title: "Menu Categories",
    subtitle: "Organizing your menu items logically",
    description: "Create categories to organize your menu items in a logical structure. This helps customers navigate your menu easily and helps staff manage inventory more effectively.",
    screenshots: [
      { src: "/screenshots/menu5.png", alt: "Category Creation Step 1 - Add Category Button" },
      { src: "/screenshots/menu6.png", alt: "Category Creation Step 2 - Category Details Form" }
    ],
    content: {
      process: [
        "Select your menu from the dropdown list",
        "Click \"Add Category\" button",
        "Select the appropriate language for your category",
        "Enter category name (e.g., \"Appetizers\", \"Main Courses\", \"Desserts\")",
        "Add category description (optional)",
        "Set category display order if needed",
        "Click Save to create the category"
      ],
      categories: [
        "Appetizers & Starters",
        "Soups & Salads",
        "Main Courses",
        "Pasta & Rice Dishes",
        "Desserts",
        "Beverages",
        "Hot Drinks",
        "Alcoholic Beverages"
      ],
      bestPractices: [
        "Keep category names concise and clear",
        "Use logical ordering (appetizers before main courses)",
        "Consider dietary restrictions (vegetarian, gluten-free sections)",
        "Group similar items together for easier navigation",
        "Limit the number of categories to avoid overwhelming customers"
      ]
    }
  },
  {
    id: 2,
    title: "Menu Items",
    subtitle: "Adding individual dishes to your menu",
    description: "Create detailed menu items with comprehensive information including pricing, descriptions, and images. This is where your menu comes to life and customers make their decisions.",
    screenshots: [
      { src: "/screenshots/menu3.png", alt: "Menu Item Creation Step 1 - Add Item Form" },
      { src: "/screenshots/menu4.png", alt: "Menu Item Creation Step 2 - Item Details and Pricing" }
    ],
    content: {
      process: [
        "Click \"Add Menu Item\" button",
        "Enter item name and detailed description",
        "Select the appropriate language",
        "Select the target menu from dropdown",
        "Choose the appropriate category or create a new one",
        "Set the base price for the item",
        "Upload a high-quality item image",
        "Add nutritional information if available",
        "Set availability status and hours",
        "Click Save to add the item to your menu"
      ],
      required: [
        "Item name (clear and descriptive)",
        "Base price (competitive and profitable)",
        "Category assignment",
        "Menu selection",
        "Language specification"
      ],
      optional: [
        "High-quality item image (highly recommended)",
        "Detailed description with ingredients",
        "Nutritional information and calorie count",
        "Allergen warnings and dietary labels",
        "Preparation time estimates",
        "Chef's recommendations or special notes"
      ],
      pricing: [
        "Research competitor pricing for similar items",
        "Calculate food costs and maintain healthy profit margins",
        "Consider portion sizes when setting prices",
        "Offer value options alongside premium choices",
        "Review and adjust prices based on customer feedback and sales data"
      ]
    }
  },
  {
    id: 3,
    title: "Modifier Groups",
    subtitle: "Creating customization options for menu items",
    description: "Modifier groups allow customers to customize their orders according to their preferences. Create groups for sizes, toppings, cooking preferences, and other customization options to enhance the ordering experience.",
    screenshots: [
      { src: "/screenshots/suppliment.png", alt: "Modifier Group Creation Step 1 - Group Setup" },
      { src: "/screenshots/suppliment1.png", alt: "Modifier Group Creation Step 2 - Configuration Options" }
    ],
    content: {
      process: [
        "Navigate to \"Modifier Groups\" section",
        "Click \"Add Modifier Group\" button",
        "Select the appropriate language",
        "Enter a descriptive group name (e.g., \"Pizza Size\", \"Burger Toppings\")",
        "Add individual modifier options with names and prices",
        "Set minimum and maximum selection limits",
        "Configure whether selections are required or optional",
        "Select which menu items this group applies to",
        "Set display order for the modifier options",
        "Click Save to create the modifier group"
      ],
      commonGroups: [
        "Size Options (Small, Medium, Large)",
        "Protein Choices (Chicken, Beef, Fish, Vegetarian)",
        "Cooking Preferences (Rare, Medium, Well-done)",
        "Sauce Selections",
        "Side Dish Options",
        "Spice Levels (Mild, Medium, Hot)",
        "Bread Types",
        "Drink Sizes"
      ],
      tips: [
        "Set reasonable minimum and maximum selection limits",
        "Use clear, descriptive names for modifier options",
        "Consider the pricing impact of each modifier",
        "Group related options together logically",
        "Test the customer experience with different combinations",
        "Regularly review and update modifier options based on popularity"
      ]
    }
  },
  {
    id: 4,
    title: "Item Modifiers",
    subtitle: "Applying modifier groups to specific menu items",
    description: "Connect your modifier groups to specific menu items to enable customization. This step determines which customization options are available for each dish on your menu.",
    screenshots: [
      { src: "/screenshots/suppliment3.png", alt: "Item Modifier Application - Linking Modifiers to Items" }
    ],
    content: {
      process: [
        "Navigate to \"Item Modifier\" section",
        "Select a menu item from the list to apply modifiers",
        "Choose the appropriate modifier group(s) from available options",
        "Configure the display order of modifier groups for this item",
        "Set any item-specific modifier rules or restrictions",
        "Preview the customer view to ensure proper functionality",
        "Click Save to apply the modifiers to the selected item"
      ],
      tips: [
        "Only apply relevant modifier groups to each item",
        "Consider the logical flow of customization options",
        "Test the ordering process from a customer perspective",
        "Ensure modifier combinations make sense for the dish",
        "Regularly review and optimize modifier assignments"
      ]
    }
  }
];
