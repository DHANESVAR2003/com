import { BrowserRoute, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>

  );
}
