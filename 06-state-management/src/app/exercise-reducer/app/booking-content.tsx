'use client';

import { getFlightOptions } from '@/app/exerciseUtils';
import { useBooking } from './booking-context';
import { BookingForm } from './booking-form';
import { SearchResults } from './search-results';
import { SearchParams } from './types';

export function BookingContent() {
  const { state: bookingState, dispatch } = useBooking();
  const isError = bookingState.status === 'error';
  const showResults = bookingState.status === 'results';

  const handleSubmit = async (formData: SearchParams) => {
    dispatch({ type: 'submit', payload: formData });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockFlights = await getFlightOptions(formData);
      dispatch({ type: 'results', flightOptions: mockFlights });
    } catch {
      dispatch({ type: 'error' });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Flight Booking</h1>

      {!showResults ? (
        <>
          <BookingForm onSubmit={handleSubmit} />
          {isError && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
              An error occurred while searching for flights. Please try again.
            </div>
          )}
        </>
      ) : (
        <SearchResults onBack={() => dispatch({ type: 'back' })} />
      )}
    </div>
  );
}
