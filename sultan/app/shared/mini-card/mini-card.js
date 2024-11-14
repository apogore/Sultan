"use client";

import React from "react";
import Button from "../../ui/button/button"; 
import "./mini-card.css";


const MiniCard = ({ product, onClick }) => {

  if (!product) {
    return null;
  }

  return (
<div className="mini-card" onClick={() => onClick(product.id)}>

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
          {product.count !== undefined
            ? product.count + "X" + product.size
            : product.size}{" "}
          {product.sizeType === "volume" ? "мл" : "г"}
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
            onClick={() => console.log("Товар добавлен в корзину")}
            text="В корзину"
            icon="/cart.svg"
            className="mini-card__button"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
