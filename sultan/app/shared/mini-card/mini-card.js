"use client";

import React, { useState, useEffect } from "react";
import "./mini-card.css";

const ProductCard = ({ className }) => {
  const [product, setProduct] = useState(null); // Используем состояние для продукта

  useEffect(() => {
    // Загружаем данные из JSON
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        // Устанавливаем первый продукт из массива
        setProduct(data[0]);
      });
  }, []);

  if (!product) {
    return <div>Loading...</div>; // Показываем индикатор загрузки
  }

  return (
    <div className="product-card">
      {product.isPopular && <div className="product-card__badge">Популярное</div>}
      <img src={product.imageUrl} alt={product.name} className="product-card__image" />
      <div className="product-card__details">
        <p className="product-card__volume">{product.volume}</p>
        <h2 className="product-card__name"><strong>{product.brand}</strong> {product.name}</h2>
        <p className="product-card__barcode">Штрихкод: {product.barcode}</p>
        <p className="product-card__manufacturer">Производитель: {product.manufacturer}</p>
        <p className="product-card__price">{product.price.toFixed(2)} ₸</p>
        <button className="product-card__button">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
