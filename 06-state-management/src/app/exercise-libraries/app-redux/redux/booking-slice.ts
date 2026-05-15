import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingState, FlightOption, HotelOption, Step } from "../types";

const initialState: BookingState = {
  currentStep: Step.FlightSearch,
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

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    flightSearchUpdated: (
      state,
      action: PayloadAction<Partial<BookingState["flightSearch"]>>,
    ) => {
      state.flightSearch = { ...state.flightSearch, ...action.payload };
    },
    searchFlights: (state) => {
      state.currentStep = Step.FlightResults;
    },
    flightSelected: (state, action: PayloadAction<FlightOption>) => {
      state.selectedFlight = action.payload;
      state.currentStep = Step.HotelSearch;
    },
    changeFlight: (state) => {
      state.currentStep = Step.FlightSearch;
    },
    hotelSearchUpdated: (
      state,
      action: PayloadAction<Partial<BookingState["hotelSearch"]>>,
    ) => {
      state.hotelSearch = { ...state.hotelSearch, ...action.payload };
    },
    searchHotels: (state) => {
      state.currentStep = Step.HotelResults;
    },
    hotelSelected: (state, action: PayloadAction<HotelOption>) => {
      state.selectedHotel = action.payload;
      state.currentStep = Step.Review;
    },
    changeHotel: (state) => {
      state.currentStep = Step.HotelSearch;
    },
    book: (state) => {
      state.currentStep = Step.Confirmation;
    },
    back: (state) => {
      switch (state.currentStep) {
        case Step.FlightResults:
          state.currentStep = Step.FlightSearch;
          break;
        case Step.HotelSearch:
          state.currentStep = Step.FlightResults;
          break;
        case Step.HotelResults:
          state.currentStep = Step.HotelSearch;
          break;
        case Step.Review:
          state.currentStep = Step.HotelResults;
          break;
      }
    },
  },
});

export const bookingActions = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;
