import React, { useState } from "react";

const ProductCard = (props) => {
  let [msg, setMsg] = useState("");
  console.log(props);
  let { product } = props;

  let checkStatus = () => {
    if (product.inStock) {
      setMsg("Product added to the cart✅");
    } else {
      setMsg("Product out of stock❌");
    }
  };
  return (
    <div>
      <h2>Name:{product.name}</h2>
      <h3>Price:{product.price}</h3>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={checkStatus}>Add to Cart</button>
      <p>{msg}</p>
      <hr />
    </div>
  );
};

export default ProductCard;
