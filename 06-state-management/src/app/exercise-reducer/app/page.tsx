'use client';

import { BookingContent } from './booking-content';
import { BookingProvider } from './booking-context';

export default function Page() {
  return (
    <BookingProvider>
      <BookingContent />
    </BookingProvider>
  );
}
