export enum Step {
  FLIGHT_SEARCH = "FLIGHT_SEARCH",
  FLIGHT_RESULTS = "FLIGHT_RESULTS",
  HOTEL_SEARCH = "HOTEL_SEARCH",
  HOTEL_RESULTS = "HOTEL_RESULTS",
  REVIEW = "REVIEW",
  CONFIRMATION = "CONFIRMATION",
}

export interface FlightOption {
  id: string;
  airline: string;
  price: number;
  duration: string;
}

export interface HotelOption {
  id: string;
  name: string;
  price: number;
  rating: number;
  amenities: string[];
}

export interface FlightSearch {
  destination: string;
  departure: string;
  arrival: string;
  passengers: number;
  isOneWay: boolean;
}

export interface HotelSearch {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
}

export interface BookingState {
  currentStep: Step;
  flightSearch: FlightSearch;
  selectedFlight: FlightOption | null;
  hotelSearch: HotelSearch;
  selectedHotel: HotelOption | null;
}

export type BookingAction =
  | {
      type: "flightSearchUpdated";
      payload: Partial<BookingState["flightSearch"]>;
    }
  | {
      type: "flightSearchSubmitted";
    }
  | { type: "flightSelected"; flight: FlightOption | null }
  | {
      type: "hotelSearchUpdated";
      payload: Partial<BookingState["hotelSearch"]>;
    }
  | {
      type: "hotelSearchSubmitted";
    }
  | { type: "hotelSelected"; payload: HotelOption | null }
  | { type: "back" }
  | { type: "changeFlight" }
  | { type: "changeHotel" }
  | { type: "bookingConfirmed" };
