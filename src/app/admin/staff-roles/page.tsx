/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Blink is a comprehensive venue store ERP system that provides 
 * almost everything a venue needs for efficient operations.
 * 
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import DocsLayout from '@/components/DocsLayout';
import StaffManagementCarousel from '@/components/StaffManagementCarousel';
import AdminPermissionsSection from '@/components/admin/staff-roles/AdminPermissionsSection';
import StaffPermissionWorkflow from '@/components/admin/staff-roles/StaffPermissionWorkflow';
import PermissionCategoriesGrid from '@/components/admin/staff-roles/PermissionCategoriesGrid';
import RoleTemplatesSection from '@/components/admin/staff-roles/RoleTemplatesSection';
import BestPracticesSection from '@/components/admin/staff-roles/BestPracticesSection';
import QuickActionsSection from '@/components/admin/staff-roles/QuickActionsSection';

export default function StaffRoles() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          3.2 Staff Roles & Permissions
        </h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Role-Based Access Control
          </h2>
          <p className="text-blue-800 dark:text-blue-200">
            Blink&apos;s comprehensive role management system allows administrators to create custom permission sets,
            assign specific roles to staff members, and maintain security across all restaurant operations.
          </p>
        </div>

        <div className="mb-12">
          <StaffManagementCarousel />
        </div>
        <AdminPermissionsSection />

        <StaffPermissionWorkflow />
        <PermissionCategoriesGrid />

        <RoleTemplatesSection />
        <BestPracticesSection />

        <QuickActionsSection />
      </div>
    </DocsLayout>
  );
}
