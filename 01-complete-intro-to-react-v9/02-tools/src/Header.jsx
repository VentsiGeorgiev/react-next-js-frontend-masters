import { useContext } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <Link href="/">
      <nav>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <div className="nav-cart">
          🛒<span className="nav-cart-number">{cart.length}</span>
        </div>
      </nav>
    </Link>
  );
}
