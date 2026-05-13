import { BookingEvent, BookingState } from './types';

export const initialBookingState: BookingState = {
  status: 'idle',
  flightOptions: null,
  searchParams: null,
};

export const bookingReducer = (
  state: BookingState,
  event: BookingEvent
): BookingState => {
  switch (event.type) {
    case 'submit':
      return {
        ...state,
        status: 'submitting',
        searchParams: event.payload,
      };
    case 'results':
      return {
        ...state,
        status: 'results',
        flightOptions: event.flightOptions,
      };
    case 'back':
      if (state.status === 'results') {
        return {
          ...state,
          status: 'idle',
        };
      }
      return state;
    case 'error':
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
};
