import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const items = [
    { id: 1, title: "Phone", price: "$699", desc: "A cool phone" },
    { id: 2, title: "Laptop", price: "$999", desc: "Powerful laptop" },
    { id: 3, title: "Headphones", price: "$199", desc: "Great sound" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <ProductList products={items} />
    </div>
  );
}

export default App;
