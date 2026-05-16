import { test, expect } from "vitest";
import { initialState, bookingReducer, Step } from "./bookingFlow";

test("should be able to book a flight", () => {
  let state = bookingReducer(initialState, { type: "searchFlights" });
  expect(state.currentStep).toBe(Step.FlightResults);

  const mockFlight = {
    id: "1",
    airline: "Test Airline",
    duration: "3h",
    price: 200,
  };

  state = bookingReducer(state, {
    type: "flightSelected",
    payload: { flight: mockFlight },
  });
  expect(state.currentStep).toBe(Step.HotelSearch);
  expect(state.selectedFlight).toEqual(mockFlight);

  state = bookingReducer(state, { type: "searchHotels" });
  expect(state.currentStep).toBe(Step.HotelResults);
  expect(state.selectedHotel).toBeNull();

  const mockHotel = {
    id: "1",
    name: "Test Hotel",
    pricePerNight: 100,
    price: 100,
    rating: 4.5,
    amenities: ["WiFi", "Gym"],
  };

  state = bookingReducer(state, {
    type: "hotelSelected",
    payload: { hotel: mockHotel },
  });
  expect(state.currentStep).toBe(Step.Review);
  expect(state.selectedHotel).toEqual(mockHotel);

  state = bookingReducer(state, { type: "book" });
  expect(state.currentStep).toBe(Step.Confirmation);

  // Test going back to change flight
  state = bookingReducer(state, { type: "back" });
  expect(state.currentStep).toBe(Step.FlightSearch);
  expect(state.selectedFlight).toEqual(mockFlight); // Flight should still be selected
  // Hotel selection should be cleared when going back to flight search
  expect(state.selectedHotel).toBeNull();
});
