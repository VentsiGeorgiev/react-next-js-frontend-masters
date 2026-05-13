'use client';

import {
  createContext,
  ReactNode,
  use,
  useReducer,
} from 'react';
import { bookingReducer, initialBookingState } from './booking-reducer';
import { BookingEvent, BookingState } from './types';

const BookingContext = createContext<{
  state: BookingState;
  dispatch: (event: BookingEvent) => void;
}>(
  null as unknown as {
    state: BookingState;
    dispatch: (event: BookingEvent) => void;
  }
);

export const useBooking = () => use(BookingContext);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookingState, dispatch] = useReducer(
    bookingReducer,
    initialBookingState
  );

  return (
    <BookingContext.Provider value={{ state: bookingState, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
