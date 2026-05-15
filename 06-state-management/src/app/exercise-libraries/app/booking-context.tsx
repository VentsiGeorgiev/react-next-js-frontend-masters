"use client";

import { createContext, Dispatch, ReactNode, use, useReducer } from "react";
import { bookingReducer, initialState } from "./booking-reducer";
import { BookingAction, BookingState } from "./types";

interface BookingContextType {
  state: BookingState;
  dispatch: Dispatch<BookingAction>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = use(BookingContext);

  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }

  return context;
}
