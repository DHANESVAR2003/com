import { useEffect, useState } from "react";
import api from "./api";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const res = await api.get("/cart");
    setCart(res.data);
  };

  useEffect(() => { loadCart(); }, []);

  const updateQty = async (id, qty) => {
    if (qty < 1) return;
    await api.put(`/cart/${id}`, { quantity: qty });
    loadCart();
  };

  const remove = async (id) => {
    await api.delete(`/cart/${id}`);
    loadCart();
  };

  const subtotal = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="container">
      <h2>Cart</h2>

      {cart.map(i => (
        <div className="cart-item" key={i._id}>
          <h4>{i.name}</h4>
          ₹{i.price}
          <div>
            <button onClick={() => updateQty(i._id, i.quantity - 1)}>-</button>
            {i.quantity}
            <button onClick={() => updateQty(i._id, i.quantity + 1)}>+</button>
            <button onClick={() => remove(i._id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="total">
        Subtotal: ₹{subtotal} <br />
        Tax: ₹{tax} <br />
        Total: ₹{total}
      </div>
    </div>
  );
}
