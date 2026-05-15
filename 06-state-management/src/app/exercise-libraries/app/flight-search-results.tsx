"use client";

import { Button } from "@/components/ui/button";
import { useBooking } from "./booking-context";
import { mockFlights } from "./mock-data";
import { FlightOption } from "./types";

export function FlightSearchResults() {
  const { state, dispatch } = useBooking();
  const selectedFlight = state.selectedFlight;

  const handleSelectFlight = (flight: FlightOption) => {
    dispatch({ type: "flightSelected", payload: { flight } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Flights</h2>
        <Button
          variant="outline"
          onClick={() => {
            dispatch({ type: "back" });
          }}
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
