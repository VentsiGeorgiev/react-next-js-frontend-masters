"use client";

import { createContext, use, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";
import { bookingReducer, initialBookingState } from "./booking-reducer";
import { BookingAction, BookingState } from "./types";

const BookingContext = createContext<{
  state: BookingState;
  dispatch: Dispatch<BookingAction>;
} | null>(null);

export function useBooking() {
  const context = use(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }

  return context;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}
