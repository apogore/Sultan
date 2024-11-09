"use client";

import React, { useState, useEffect } from "react";
import MiniCard from "../mini-card/mini-card";
import "./product-list.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products.length) {
    return <div>Loading...</div>; // Показываем индикатор загрузки
  }

  return (
    <div className="product-list">
      <h2>
        <span>Акционные</span> товары
      </h2>
      <div className="wrapper">
        {products.map((product, index) => (
          <MiniCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
