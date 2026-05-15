"use client";

import { Button } from "@/components/ui/button";
import { useBooking } from "./booking-context";

export function BookingReview() {
  const { state, dispatch } = useBooking();
  const { selectedFlight, selectedHotel, flightSearch, hotelSearch } = state;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review Your Booking</h2>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="font-bold mb-2">Flight Details</h3>
          <p>Airline: {selectedFlight?.airline}</p>
          <p>Duration: {selectedFlight?.duration}</p>
          <p>Price: ${selectedFlight?.price}</p>
          <p>Passengers: {flightSearch.passengers}</p>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => dispatch({ type: "changeFlight" })}
          >
            Change Flight
          </Button>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-bold mb-2">Hotel Details</h3>
          <p>Hotel: {selectedHotel?.name}</p>
          <p>Rating: {selectedHotel?.rating}/5</p>
          <p>Price: ${selectedHotel?.price}/night</p>
          <p>Room Type: {hotelSearch.roomType}</p>
          <p>Guests: {hotelSearch.guests}</p>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => dispatch({ type: "changeHotel" })}
          >
            Change Hotel
          </Button>
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-bold mb-2">Total Cost</h3>
          <p className="text-xl">
            ${(selectedFlight?.price || 0) + (selectedHotel?.price || 0)}
          </p>
        </div>

        <div className="flex space-x-4">
          <Button variant="outline" onClick={() => dispatch({ type: "back" })}>
            Back
          </Button>
          <Button onClick={() => dispatch({ type: "bookingConfirmed" })}>
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
}
