"use client";

import { BookingApp } from "./booking-app";
import { BookingProvider } from "./booking-context";

export function BookingPage() {
  return (
    <BookingProvider>
      <BookingApp />
    </BookingProvider>
  );
}
