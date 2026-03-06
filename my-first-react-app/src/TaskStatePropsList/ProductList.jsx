import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  let [products, setProducts] = useState([
    {
      id: 101,
      name: "Apple iPhone 17E (Pink, 128GB)",
      price: 599.0,
      inStock: true,
    },
    {
      id: 102,
      name: "Samsung 183L Direct Cool Refrigerator",
      price: 195.0,
      inStock: true,
    },
    {
      id: 103,
      name: "Sony Soundcore Aerofit 2 Pro Earbuds",
      price: 180.0,
      inStock: false,
    },
    {
      id: 104,
      name: "Philips HD9216/43 Air Fryer (4.1L)",
      price: 95.0,
      inStock: true,
    },
    {
      id: 105,
      name: "Anker Nano Charger with Smart Display",
      price: 40.0,
      inStock: true,
    },
  ]);
  return (
    <div>
      <h1>Product Store</h1>
      <hr />
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductList;
