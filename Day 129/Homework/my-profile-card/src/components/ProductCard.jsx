import React from "react";

function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "gray",
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <p>{props.desc}</p>
    </div>
  );
}

export default ProductCard;
