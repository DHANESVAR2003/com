import { Link } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyShop</h2>

      <div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}