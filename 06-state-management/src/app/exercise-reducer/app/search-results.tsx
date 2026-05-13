'use client';

import { useState } from 'react';
import { FlightOption } from '@/app/exerciseUtils';
import { Button } from '@/components/ui/button';
import { useBooking } from './booking-context';

interface SearchResultsProps {
  onBack: () => void;
}

export function SearchResults({ onBack }: SearchResultsProps) {
  const { state } = useBooking();
  const flightOptions = state.flightOptions ?? [];
  const passengers = state.searchParams?.passengers ?? 1;
  const [selectedFlight, setSelectedFlight] = useState<FlightOption | null>(
    null
  );
  const totalPrice = selectedFlight ? selectedFlight.price * passengers : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <Button variant="outline" onClick={onBack}>
          Back to Search
        </Button>
      </div>

      <div className="space-y-4">
        {flightOptions.map((flight) => (
          <div
            key={flight.id}
            className={`p-4 border rounded hover:shadow-md ${
              selectedFlight?.id === flight.id
                ? 'border-blue-500 bg-blue-50'
                : ''
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
                  className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                  onClick={() => setSelectedFlight(flight)}
                >
                  {selectedFlight?.id === flight.id ? 'Selected' : 'Select'}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedFlight && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
          <div className="space-y-2">
            <p>Flight: {selectedFlight.airline}</p>
            <p>Duration: {selectedFlight.duration}</p>
            <p>Passengers: {passengers}</p>
            <p className="text-xl font-bold mt-4">Total: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
}
