import { BookingAction, BookingState, Step } from "./types";

export const initialBookingState: BookingState = {
  currentStep: Step.FLIGHT_SEARCH,
  flightSearch: {
    destination: "",
    departure: "",
    arrival: "",
    passengers: 1,
    isOneWay: false,
  },
  selectedFlight: null,
  hotelSearch: {
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
  },
  selectedHotel: null,
};

export function bookingReducer(
  state: BookingState,
  action: BookingAction,
): BookingState {
  switch (action.type) {
    case "flightSearchUpdated":
      return {
        ...state,
        flightSearch: { ...state.flightSearch, ...action.payload },
      };
    case "flightSearchSubmitted":
      return {
        ...state,
        hotelSearch: {
          ...state.hotelSearch,
          checkIn: state.flightSearch.departure,
          checkOut: state.flightSearch.arrival,
        },
        currentStep: Step.FLIGHT_RESULTS,
      };
    case "flightSelected":
      return {
        ...state,
        selectedFlight: action.flight,
        currentStep: Step.HOTEL_SEARCH,
      };
    case "hotelSearchUpdated":
      return {
        ...state,
        hotelSearch: { ...state.hotelSearch, ...action.payload },
      };
    case "hotelSearchSubmitted":
      return {
        ...state,
        currentStep: Step.HOTEL_RESULTS,
      };
    case "hotelSelected":
      return {
        ...state,
        selectedHotel: action.payload,
        currentStep: Step.REVIEW,
      };
    case "back":
      switch (state.currentStep) {
        case Step.FLIGHT_RESULTS:
          return {
            ...state,
            currentStep: Step.FLIGHT_SEARCH,
          };
        case Step.HOTEL_RESULTS:
          return {
            ...state,
            currentStep: Step.HOTEL_SEARCH,
          };
        case Step.REVIEW:
          return {
            ...state,
            currentStep: Step.HOTEL_RESULTS,
          };
        default:
          return state;
      }
    case "changeFlight":
      return {
        ...state,
        currentStep: Step.FLIGHT_SEARCH,
      };
    case "changeHotel":
      return {
        ...state,
        currentStep: Step.HOTEL_SEARCH,
      };
    case "bookingConfirmed":
      return {
        ...state,
        currentStep: Step.CONFIRMATION,
      };
    default:
      return state;
  }
}
