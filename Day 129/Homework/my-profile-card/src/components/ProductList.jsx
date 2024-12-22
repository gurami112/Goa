import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        padding: "10px",
      }}
    >
      {props.products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
}

export default ProductList;
