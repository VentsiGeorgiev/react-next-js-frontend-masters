"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FormEvent } from "react";
import { bookingActions } from "./redux/booking-slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export function FlightBookingForm() {
  const dispatch = useAppDispatch();
  const flightSearch = useAppSelector((state) => state.booking.flightSearch);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(bookingActions.searchFlights());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="one-way"
          checked={flightSearch.isOneWay}
          onCheckedChange={(checked) =>
            dispatch(bookingActions.flightSearchUpdated({ isOneWay: checked }))
          }
        />
        <Label htmlFor="one-way">One-way flight</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <Input
          type="text"
          id="destination"
          value={flightSearch.destination}
          onChange={(e) =>
            dispatch(
              bookingActions.flightSearchUpdated({
                destination: e.target.value,
              }),
            )
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="departure">Departure Date</Label>
        <Input
          type="date"
          id="departure"
          value={flightSearch.departure}
          onChange={(e) =>
            dispatch(
              bookingActions.flightSearchUpdated({
                departure: e.target.value,
              }),
            )
          }
          required
        />
      </div>

      {!flightSearch.isOneWay && (
        <div className="space-y-2">
          <Label htmlFor="arrival">Return Date</Label>
          <Input
            type="date"
            id="arrival"
            value={flightSearch.arrival}
            onChange={(e) =>
              dispatch(
                bookingActions.flightSearchUpdated({
                  arrival: e.target.value,
                }),
              )
            }
            required
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="passengers">Number of Passengers</Label>
        <Input
          type="number"
          id="passengers"
          value={flightSearch.passengers}
          onChange={(e) =>
            dispatch(
              bookingActions.flightSearchUpdated({
                passengers: parseInt(e.target.value),
              }),
            )
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
