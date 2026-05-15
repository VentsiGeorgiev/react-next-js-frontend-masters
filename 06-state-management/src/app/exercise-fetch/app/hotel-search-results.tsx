"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useBooking } from "./booking-context";
import { fetchHotels } from "./fetch-hotels";
import { HotelOption } from "./types";

export function HotelSearchResults() {
  const { state, dispatch } = useBooking();
  const { selectedHotel, hotelSearch } = state;

  const [hotels, setHotels] = useState<HotelOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHotels = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const hotelData = await fetchHotels(hotelSearch);
        setHotels(hotelData);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch hotels");
      } finally {
        setIsLoading(false);
      }
    };

    loadHotels();
  }, [hotelSearch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="text-gray-500">Loading hotels...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Hotels</h2>
        <Button variant="outline" onClick={() => dispatch({ type: "back" })}>
          Back to Search
        </Button>
      </div>

      <div className="space-y-4">
        {hotels.map((hotel) => (
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
                  onClick={() =>
                    dispatch({ type: "hotelSelected", payload: hotel })
                  }
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
