"use client";

import { Button } from "@/components/ui/button";
import { mockFlights } from "./mock-data";
import { bookingActions } from "./redux/booking-slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { FlightOption } from "./types";

export function FlightSearchResults() {
  const dispatch = useAppDispatch();
  const selectedFlight = useAppSelector(
    (state) => state.booking.selectedFlight,
  );

  const handleSelectFlight = (flight: FlightOption) => {
    dispatch(bookingActions.flightSelected(flight));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Flights</h2>
        <Button
          variant="outline"
          onClick={() => dispatch(bookingActions.back())}
        >
          Back to Search
        </Button>
      </div>

      <div className="space-y-4">
        {mockFlights.map((flight) => (
          <div
            key={flight.id}
            className={`p-4 border rounded hover:shadow-md ${
              selectedFlight?.id === flight.id
                ? "border-blue-500 bg-blue-50"
                : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{flight.airline}</h3>
                <p className="text-gray-600">Duration: {flight.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${flight.price}</p>
                <Button
                  className="mt-2"
                  onClick={() => handleSelectFlight(flight)}
                >
                  Select
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
