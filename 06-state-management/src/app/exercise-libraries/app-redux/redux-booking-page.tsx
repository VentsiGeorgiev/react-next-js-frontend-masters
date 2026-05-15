"use client";

import { BookingApp } from "./booking-app";
import { ReduxProvider } from "./redux/redux-provider";

export function ReduxBookingPage() {
  return (
    <ReduxProvider>
      <BookingApp />
    </ReduxProvider>
  );
}
