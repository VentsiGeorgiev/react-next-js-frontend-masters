"use client";

import { useBooking } from "./booking-context";
import { BookingConfirmation } from "./booking-confirmation";
import { BookingReview } from "./booking-review";
import { FlightBookingForm } from "./flight-booking-form";
import { FlightSearchResults } from "./flight-search-results";
import { HotelBookingForm } from "./hotel-booking-form";
import { HotelSearchResults } from "./hotel-search-results";
import { Step } from "./types";

export function BookingApp() {
  const { state } = useBooking();
  const step = state.currentStep;

  const renderStep = () => {
    switch (step) {
      case Step.FlightSearch:
        return <FlightBookingForm />;
      case Step.FlightResults:
        return <FlightSearchResults />;
      case Step.HotelSearch:
        return <HotelBookingForm />;
      case Step.HotelResults:
        return <HotelSearchResults />;
      case Step.Review:
        return <BookingReview />;
      case Step.Confirmation:
        return <BookingConfirmation />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Flight & Hotel Booking</h1>
      {renderStep()}
    </div>
  );
}
