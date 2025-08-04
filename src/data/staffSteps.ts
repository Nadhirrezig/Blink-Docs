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

export const staffSteps: MenuStep[] = [
  {
    id: 0,
    title: "Setting Up Role Permissions",
    subtitle: "Create and configure roles with their associated permissions",
    description: "Start by defining roles and their permissions before creating staff accounts. Roles are permission containers that determine what users can access in the system.",
    screenshots: [
      { src: "/screenshots/staffroles.png", alt: "Role Configuration Interface" },
    ],
    content: {
      process: [
        "Navigate to settings → staff roles",
        "You will see 3 roles with a list of permissions",
        "Select the permissions you want to assign to the role",
        "Click on the save button"
      ],
      considerations: [
        "Roles should match organizational structure",
        "Consider seasonal or temporary roles",
        "Plan for role inheritance if needed",
        "Think about future scalability"
      ]
    }
  },
  {
    id: 1,
    title: "Create Staff Account and Assign Role",
    subtitle: "Add new team members and assign them to pre-configured roles",
    description: "Create staff member accounts and assign them to the appropriate roles. Staff members inherit all permissions from their assigned role automatically.",
    screenshots: [
      { src: "/screenshots/staff.png", alt: "Staff Account Creation" },
      { src: "/screenshots/staffcreation.png", alt: "Staff Account Creation" },
      { src: "/screenshots/staff1.png", alt: "Staff Account Creation" },
    ],
    content: {
      process: [
        "Navigate to Admin → Staff Management",
        "Click \"Add New Staff Member\"",
        "Enter staff member's personal information",
        "Set up login credentials (username/email)",
        "Select appropriate role from dropdown",
        "Review role permissions summary",
        "Save account"
      ],
    }
  },
  {
    id: 2,
    title: "Update or Delete Roles and Staff Members",
    subtitle: "Modify roles, change staff assignments, and manage account lifecycle",
    description: "Update role permissions (affects all users with that role), change staff member role assignments, or manage account lifecycle including deactivation and deletion.",
    screenshots: [
      { src: "/screenshots/updatestaffrole.png", alt: "Role Permission Updates" },
      { src: "/screenshots/updatestaffrole1.png", alt: "Role Management" }
    ],
    content: {
      process: [
        "Access Role Management or Staff Management",
        "Select role to modify or staff member to update",
        "Make changes to role permissions or staff role assignment",
        "Review impact of changes on affected users",
        "Apply changes and notify affected staff",
      ],
    }
  }
];
