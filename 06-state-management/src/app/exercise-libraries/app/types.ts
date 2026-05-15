export const enum Step {
  FlightSearch = "FlightSearch",
  FlightResults = "FlightResults",
  HotelSearch = "HotelSearch",
  HotelResults = "HotelResults",
  Review = "Review",
  Confirmation = "Confirmation",
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

export interface BookingState {
  currentStep: Step;
  flightSearch: {
    destination: string;
    departure: string;
    arrival: string;
    passengers: number;
    isOneWay: boolean;
  };
  selectedFlight: FlightOption | null;
  hotelSearch: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  };
  selectedHotel: HotelOption | null;
}

export type BookingAction =
  | {
      type: "flightSearchUpdated";
      payload: Partial<BookingState["flightSearch"]>;
    }
  | { type: "searchFlights" }
  | { type: "flightSelected"; payload: { flight: FlightOption } }
  | { type: "changeFlight" }
  | {
      type: "hotelSearchUpdated";
      payload: Partial<BookingState["hotelSearch"]>;
    }
  | { type: "searchHotels" }
  | { type: "hotelSelected"; payload: { hotel: HotelOption } }
  | { type: "changeHotel" }
  | { type: "book" }
  | { type: "back" };
