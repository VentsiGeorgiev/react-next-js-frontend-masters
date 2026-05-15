"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FormEvent } from "react";
import { useBooking } from "./booking-context";

export function FlightBookingForm() {
  const { state, dispatch } = useBooking();
  const { flightSearch } = state;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: "flightSearchSubmitted" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="one-way"
          checked={flightSearch.isOneWay}
          onCheckedChange={(checked) =>
            dispatch({
              type: "flightSearchUpdated",
              payload: { isOneWay: checked },
            })
          }
        />
        <Label htmlFor="one-way">One-way flight</Label>
      </div>

      <div>
        <Label htmlFor="destination">Destination</Label>
        <Input
          type="text"
          id="destination"
          value={flightSearch.destination}
          onChange={(event) =>
            dispatch({
              type: "flightSearchUpdated",
              payload: { destination: event.target.value },
            })
          }
          required
        />
      </div>

      <div>
        <Label htmlFor="departure">Departure Date</Label>
        <Input
          type="date"
          id="departure"
          value={flightSearch.departure}
          onChange={(event) =>
            dispatch({
              type: "flightSearchUpdated",
              payload: { departure: event.target.value },
            })
          }
          required
        />
      </div>

      {!flightSearch.isOneWay && (
        <div>
          <Label htmlFor="arrival">Return Date</Label>
          <Input
            type="date"
            id="arrival"
            value={flightSearch.arrival}
            onChange={(event) =>
              dispatch({
                type: "flightSearchUpdated",
                payload: { arrival: event.target.value },
              })
            }
            required
          />
        </div>
      )}

      <div>
        <Label htmlFor="passengers">Number of Passengers</Label>
        <Input
          type="number"
          id="passengers"
          value={flightSearch.passengers}
          onChange={(event) =>
            dispatch({
              type: "flightSearchUpdated",
              payload: { passengers: parseInt(event.target.value) },
            })
          }
          min="1"
          max="9"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Search Flights
      </Button>
    </form>
  );
}
