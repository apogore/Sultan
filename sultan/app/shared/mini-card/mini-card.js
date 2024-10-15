"use client";

import React, { useState, useEffect } from "react";
import "./mini-card.css";

const MiniCard = ({ className }) => {
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
    <div className="mini-card">
      {product.isPopular && <div className="mini-card__badge">Популярное</div>}
      <img src={product.imageUrl} alt={product.name} className="mini-card__image" />
      <div className="mini-card__details">
        <p className="mini-card__volume">{product.volume}</p>
        <h2 className="mini-card__name"><strong>{product.brand}</strong> {product.name}</h2>
        <p className="mini-card__barcode">Штрихкод: {product.barcode}</p>
        <p className="mini-card__manufacturer">Производитель: {product.manufacturer}</p>
        <p className="mini-card__price">{product.price.toFixed(2)} ₸</p>
        <button className="mini-card__button">В корзину</button>
      </div>
    </div>
  );
};

export default MiniCard;
