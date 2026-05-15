"use client";

import { Button } from "@/components/ui/button";
import { bookingActions } from "./redux/booking-slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export function BookingReview() {
  const dispatch = useAppDispatch();
  const selectedFlight = useAppSelector(
    (state) => state.booking.selectedFlight,
  );
  const selectedHotel = useAppSelector((state) => state.booking.selectedHotel);
  const flightSearch = useAppSelector((state) => state.booking.flightSearch);
  const hotelSearch = useAppSelector((state) => state.booking.hotelSearch);

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
            onClick={() => dispatch(bookingActions.changeFlight())}
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
            onClick={() => dispatch(bookingActions.changeHotel())}
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
          <Button
            variant="outline"
            onClick={() => dispatch(bookingActions.back())}
          >
            Back
          </Button>
          <Button onClick={() => dispatch(bookingActions.book())}>
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
}
