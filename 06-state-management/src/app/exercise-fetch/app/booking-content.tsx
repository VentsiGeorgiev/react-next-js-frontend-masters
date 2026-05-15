"use client";

import { BookingConfirmation } from "./booking-confirmation";
import { FlightBookingForm } from "./flight-booking-form";
import { FlightSearchResults } from "./flight-search-results";
import { HotelBookingForm } from "./hotel-booking-form";
import { HotelSearchResults } from "./hotel-search-results";
import { BookingReview } from "./booking-review";
import { useBooking } from "./booking-context";
import { Step } from "./types";

export function BookingContent() {
  const { state } = useBooking();

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Flight & Hotel Booking</h1>
      {state.currentStep === Step.FLIGHT_SEARCH && <FlightBookingForm />}
      {state.currentStep === Step.FLIGHT_RESULTS && <FlightSearchResults />}
      {state.currentStep === Step.HOTEL_SEARCH && <HotelBookingForm />}
      {state.currentStep === Step.HOTEL_RESULTS && <HotelSearchResults />}
      {state.currentStep === Step.REVIEW && <BookingReview />}
      {state.currentStep === Step.CONFIRMATION && <BookingConfirmation />}
    </div>
  );
}
