import DocsLayout from '@/components/DocsLayout';
import OnlineOrderingHeader from '@/components/customer/online-ordering/OnlineOrderingHeader';
import OnlineOrderingCarousel from '@/components/customer/online-ordering/OnlineOrderingCarousel';

export default function OnlineOrdering() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <OnlineOrderingHeader />
        <OnlineOrderingCarousel />
      </div>
    </DocsLayout>
  );
}
