import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  category: "Supreme",
  description: "Lol pizza from Calabria",
  image: "/public/pizzas/calabrese.webp",
  size: { S: 12.25, M: 16.25, L: 20.25 },
};

beforeEach(() => {
  fetchMocker.resetMocks();
});

test("gives null when first called", () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));

  const { result } = renderHook(() => usePizzaOfTheDay());

  expect(result.current).toBeNull();
});

test("to call the API and give back the pizza of the day", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));

  const { result } = renderHook(() => usePizzaOfTheDay());

  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });

  expect(fetchMocker).toHaveBeenCalledWith("/api/pizza-of-the-day");
});
