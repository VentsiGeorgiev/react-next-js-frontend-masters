"use client";

import { BookingContent } from "./booking-content";
import { BookingProvider } from "./booking-context";

export function BookingFlow() {
  return (
    <BookingProvider>
      <BookingContent />
    </BookingProvider>
  );
}
