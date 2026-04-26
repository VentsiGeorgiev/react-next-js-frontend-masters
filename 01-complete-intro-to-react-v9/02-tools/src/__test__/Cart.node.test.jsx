import { render, cleanup } from "@testing-library/react";
import { expect, afterEach, test } from "vitest";
import createFetchMock from "vitest-fetch-mock";

import Cart from "../Cart";

afterEach(cleanup);

test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

test("lol", () => {
  expect({
    id: "calabreze",
    name: "The calabreze pizza",
    category: "Supreme",
    description: "Lol pizza from Calabria",
    image: "/public/pizzas/calabrese.webp",
    size: { S: 12.25, M: 16.25, L: 20.25 },
  }).toMatchSnapshot();
});
