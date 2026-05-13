'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useBooking } from './booking-context';
import { SearchParams } from './types';

type BookingFormProps = {
  onSubmit: (formData: SearchParams) => void;
};

export function BookingForm({ onSubmit }: BookingFormProps) {
  const { state } = useBooking();
  const isSubmitting = state.status === 'submitting';
  const [destination, setDestination] = useState(
    state.searchParams?.destination ?? ''
  );
  const [departure, setDeparture] = useState(
    state.searchParams?.departure ?? ''
  );
  const [arrival, setArrival] = useState(state.searchParams?.arrival ?? '');
  const [passengers, setPassengers] = useState(
    state.searchParams?.passengers ?? 1
  );
  const [isOneWay, setIsOneWay] = useState(
    state.searchParams?.isOneWay ?? false
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      destination,
      departure,
      arrival,
      passengers,
      isOneWay,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Switch id="one-way" checked={isOneWay} onCheckedChange={setIsOneWay} />
        <Label htmlFor="one-way">One-way flight</Label>
      </div>

      <div>
        <Label htmlFor="destination" className="block mb-1">
          Destination
        </Label>
        <Input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="departure" className="block mb-1">
          Departure Date
        </Label>
        <Input
          type="date"
          id="departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
        />
      </div>

      {!isOneWay && (
        <div>
          <Label htmlFor="arrival" className="block mb-1">
            Return Date
          </Label>
          <Input
            type="date"
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
          />
        </div>
      )}

      <div>
        <Label htmlFor="passengers" className="block mb-1">
          Number of Passengers
        </Label>
        <Input
          type="number"
          id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(parseInt(e.target.value))}
          min="1"
          max="9"
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Searching...' : 'Search Flights'}
      </Button>
    </form>
  );
}
