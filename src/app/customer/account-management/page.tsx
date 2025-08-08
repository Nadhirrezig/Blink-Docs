import DocsLayout from '@/components/DocsLayout';
import AccountManagementHeader from '@/components/customer/account-management/AccountManagementHeader';
import AccountManagementCarousel from '@/components/customer/account-management/AccountManagementCarousel';

export default function AccountManagement() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <AccountManagementHeader />
        <AccountManagementCarousel />
      </div>
    </DocsLayout>
  );
}
