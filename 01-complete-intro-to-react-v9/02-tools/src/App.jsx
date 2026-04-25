import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook = useState([]);
  return (
    <>
      <CartContext.Provider value={cartHook}>
        <Header />
        <div>
          <h1>Padre Gino's Pizza Order Now</h1>
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
