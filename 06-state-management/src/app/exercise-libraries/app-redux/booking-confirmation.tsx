"use client";

import { useAppSelector } from "./redux/hooks";

export function BookingConfirmation() {
  const selectedFlight = useAppSelector(
    (state) => state.booking.selectedFlight,
  );
  const selectedHotel = useAppSelector((state) => state.booking.selectedHotel);

  return (
    <div className="text-center space-y-6">
      <div className="text-6xl">Booked</div>
      <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
      <p className="text-gray-600">
        Thank you for booking with us. Your confirmation details have been sent
        to your email.
      </p>
      <div className="p-4 border rounded inline-block text-left">
        <h3 className="font-bold mb-2">Booking Reference</h3>
        <p>Flight: {selectedFlight?.airline}</p>
        <p>Hotel: {selectedHotel?.name}</p>
      </div>
    </div>
  );
}
