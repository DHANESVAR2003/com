import api from "./api";

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];

export default function ProductPage() {
  const addToCart = async (p) => {
    await api.post("/cart", p);
    alert("Added to cart");
  };

  return (
    <div className="container">
      <h2>Products</h2>

      <div className="flex">
        {products.map(p => (
          <div className="card" key={p.name}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
