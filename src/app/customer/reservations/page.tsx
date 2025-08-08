import DocsLayout from '@/components/DocsLayout';
import ReservationsHeader from '@/components/customer/reservations/ReservationsHeader';
import ReservationsCarousel from '@/components/customer/reservations/ReservationsCarousel';

export default function Reservations() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <ReservationsHeader />
        <ReservationsCarousel />
      </div>
    </DocsLayout>
  );
}
