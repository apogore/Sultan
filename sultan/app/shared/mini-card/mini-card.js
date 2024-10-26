"use client";

import React, { useState, useEffect } from "react";
import Button from "../../ui/button/button"; // Убедитесь, что путь корректен
import "./mini-card.css";

const MiniCard = ({ productId, onClick }) => {
  const [product, setProduct] = useState(null);

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
    <div className="mini-card" onClick={() => onClick(productId)}>
      {product.isPopular && <div className="mini-card__badge">Популярное</div>}
      <img
        src={product.image}
        alt={product.nameRu}
        className="mini-card__image"
      />
      <div className="mini-card__details">
        <p className="mini-card__volume">
          <img
            src={product.sizeType === "volume" ? "/bottle.svg" : "/box.svg"}
            alt={product.sizeType === "volume" ? "Bottle" : "Box"}
            className="mini-card__icon"
          />
          {product.size} {product.sizeType === "volume" ? "мл" : "г"}
        </p>
        <p className="mini-card__name">
          <strong>{product.brand.name}</strong> {product.nameRu}
        </p>
        <div className="mini-card__manufacturer-brand-info">
          <p>
            <span className="mini-card__label">Штрихкод:</span>{" "}
            <strong>{product.barcode}</strong>
          </p>
          <p>
            <span className="mini-card__label">Производитель:</span>{" "}
            <strong>{product.manufacturer}</strong>
          </p>
          <p>
            <span className="mini-card__label">Бренд:</span>{" "}
            <strong>{product.brand.name}</strong>
          </p>
        </div>

        <div className="mini-card__price-button">
          <p className="mini-card__price">{product.price.toFixed(2)} ₸</p>
          <Button
            onClick={() => console.log("Товар добавлен в корзину")} // Обработчик клика
            text="В корзину"
            icon="/cart.svg" // Ссылка на иконку
            className="mini-card__button" // Пользовательский класс, если нужно
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
