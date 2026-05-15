import { FlightOption, HotelOption } from "./types";

export const mockFlights: FlightOption[] = [
  { id: "1", airline: "Sky Airways", price: 299, duration: "2h 30m" },
  { id: "2", airline: "Ocean Air", price: 349, duration: "2h 45m" },
  { id: "3", airline: "Mountain Express", price: 279, duration: "3h 15m" },
];

export const mockHotels: HotelOption[] = [
  {
    id: "1",
    name: "Grand Hotel",
    price: 199,
    rating: 4.5,
    amenities: ["Pool", "Spa", "Restaurant"],
  },
  {
    id: "2",
    name: "Seaside Resort",
    price: 249,
    rating: 4.8,
    amenities: ["Beach Access", "Pool", "Bar"],
  },
  {
    id: "3",
    name: "City Center Hotel",
    price: 179,
    rating: 4.2,
    amenities: ["Gym", "Restaurant", "Business Center"],
  },
];
