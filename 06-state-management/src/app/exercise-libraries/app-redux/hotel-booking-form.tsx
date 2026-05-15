"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
import { bookingActions } from "./redux/booking-slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export function HotelBookingForm() {
  const dispatch = useAppDispatch();
  const hotelSearch = useAppSelector((state) => state.booking.hotelSearch);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(bookingActions.searchHotels());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Hotel Search</h2>
        <Button
          variant="outline"
          onClick={() => dispatch(bookingActions.back())}
        >
          Back to Flights
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="checkIn">Check-in Date</Label>
        <Input
          type="date"
          id="checkIn"
          value={hotelSearch.checkIn}
          onChange={(e) =>
            dispatch(
              bookingActions.hotelSearchUpdated({ checkIn: e.target.value }),
            )
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="checkOut">Check-out Date</Label>
        <Input
          type="date"
          id="checkOut"
          value={hotelSearch.checkOut}
          onChange={(e) =>
            dispatch(
              bookingActions.hotelSearchUpdated({ checkOut: e.target.value }),
            )
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input
          type="number"
          id="guests"
          value={hotelSearch.guests}
          onChange={(e) =>
            dispatch(
              bookingActions.hotelSearchUpdated({
                guests: parseInt(e.target.value),
              }),
            )
          }
          min="1"
          max="4"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="roomType">Room Type</Label>
        <select
          id="roomType"
          value={hotelSearch.roomType}
          onChange={(e) =>
            dispatch(
              bookingActions.hotelSearchUpdated({ roomType: e.target.value }),
            )
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
