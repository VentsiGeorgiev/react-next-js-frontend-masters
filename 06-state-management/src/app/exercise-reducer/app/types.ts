import { FlightOption } from '@/app/exerciseUtils';

export type SearchParams = {
  destination: string;
  departure: string;
  arrival: string;
  passengers: number;
  isOneWay: boolean;
};

export type BookingState = {
  status: 'idle' | 'submitting' | 'error' | 'results';
  flightOptions: FlightOption[] | null;
  searchParams: SearchParams | null;
};

export type BookingEvent =
  | {
      type: 'submit';
      payload: SearchParams;
    }
  | {
      type: 'results';
      flightOptions: FlightOption[];
    }
  | {
      type: 'back';
    }
  | {
      type: 'error';
    };
