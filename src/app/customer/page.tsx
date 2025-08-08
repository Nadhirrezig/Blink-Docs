/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 * 
 * Comprehensive Customer Documentation Page
 * Advanced user experience with sophisticated components
 */

import Calltoaction from '@/components/customer/calltoaction';
import DocsLayout from '@/components/DocsLayout';
import DetailedGuide from '@/components/customer/detailedguide';
import CustomerScreenshots from '@/components/customer/customerscreenshots';
import HeaderCustomer from '@/components/customer/header';
export default function CustomerGuide() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <HeaderCustomer />
        <CustomerScreenshots />
        <DetailedGuide />
        <Calltoaction />
    </div>
    </DocsLayout>
  );
}
