const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];
export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Mini E-Commerce Store</h1>
      <div>
        {products.map((p) => (
          <div
            key={p.id}
            style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}
          >
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
