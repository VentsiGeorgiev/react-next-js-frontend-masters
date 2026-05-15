"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
import { useBooking } from "./booking-context";

export function HotelBookingForm() {
  const { state, dispatch } = useBooking();
  const { hotelSearch } = state;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: "hotelSearchSubmitted" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Hotel Booking</h2>

      <div>
        <Label htmlFor="checkIn">Check-in Date</Label>
        <Input
          type="date"
          id="checkIn"
          value={hotelSearch.checkIn}
          onChange={(event) =>
            dispatch({
              type: "hotelSearchUpdated",
              payload: { checkIn: event.target.value },
            })
          }
          required
        />
      </div>

      <div>
        <Label htmlFor="checkOut">Check-out Date</Label>
        <Input
          type="date"
          id="checkOut"
          value={hotelSearch.checkOut}
          onChange={(event) =>
            dispatch({
              type: "hotelSearchUpdated",
              payload: { checkOut: event.target.value },
            })
          }
          required
        />
      </div>

      <div>
        <Label htmlFor="guests">Number of Guests</Label>
        <Input
          type="number"
          id="guests"
          value={hotelSearch.guests}
          onChange={(event) =>
            dispatch({
              type: "hotelSearchUpdated",
              payload: { guests: parseInt(event.target.value) },
            })
          }
          min="1"
          max="4"
          required
        />
      </div>

      <div>
        <Label htmlFor="roomType">Room Type</Label>
        <select
          id="roomType"
          value={hotelSearch.roomType}
          onChange={(event) =>
            dispatch({
              type: "hotelSearchUpdated",
              payload: { roomType: event.target.value },
            })
          }
          className="w-full p-2 border rounded"
          required
        >
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      <Button type="submit" className="w-full">
        Search Hotels
      </Button>
    </form>
  );
}
