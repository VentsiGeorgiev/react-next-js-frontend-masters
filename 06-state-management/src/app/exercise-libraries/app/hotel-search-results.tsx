"use client";

import { Button } from "@/components/ui/button";
import { useBooking } from "./booking-context";
import { mockHotels } from "./mock-data";
import { HotelOption } from "./types";

export function HotelSearchResults() {
  const { state, dispatch } = useBooking();
  const selectedHotel = state.selectedHotel;

  const handleSelectHotel = (hotel: HotelOption) => {
    dispatch({ type: "hotelSelected", payload: { hotel } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Hotels</h2>
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
        {mockHotels.map((hotel) => (
          <div
            key={hotel.id}
            className={`p-4 border rounded hover:shadow-md ${
              selectedHotel?.id === hotel.id ? "border-blue-500 bg-blue-50" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{hotel.name}</h3>
                <p className="text-gray-600">Rating: {hotel.rating}/5</p>
                <p className="text-sm text-gray-500">
                  {hotel.amenities.join(", ")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${hotel.price}/night</p>
                <Button
                  className="mt-2"
                  onClick={() => handleSelectHotel(hotel)}
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
