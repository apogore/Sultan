"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Или `import { useNavigate } from 'react-router-dom';`
import Button from "@ui/button/button";
import { useNotifications } from "../Notification/Notification-context";
import "./mini-card.scss";

const MiniCard = ({ product }) => {
  const router = useRouter(); // Или `const navigate = useNavigate();`
  const { addNotification } = useNotifications();

  if (!product) {
    return null;
  }

  const handleCardClick = () => {
    router.push(`/shared/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Остановка всплытия события
    const productId = product.id;
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    cart[productId] = (cart[productId] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));

    addNotification({
      image: product.image,
      text: "Товар добавлен в корзину",
      linkText: "Перейти в корзину",
      onLinkClick: () => router.push("/shared/cart"),
    });
  };

  return (
    <div className="mini-card" onClick={handleCardClick}>
      {product.isPopular && <div className="mini-card__badge">Популярное</div>}
      <img
        src={product.image}
        alt={product.nameRu}
        className="mini-card__image"
      />
      <div className="mini-card__details">
        <p className="mini-card__volume">
          <img
            src={
              product.sizeType === "volume"
                ? "/icons/bottle.svg"
                : "/icons/box.svg"
            }
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
            {product.barcode}
          </p>
          <p>
            <span className="mini-card__label">Производитель:</span>{" "}
            {product.manufacturer}
          </p>
          <p>
            <span className="mini-card__label">Бренд:</span>{" "}
            {product.brand.name}
          </p>
        </div>

        <div
          className="mini-card__price-button"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="mini-card__price">{product.price.toFixed(2)} ₸</p>
          <Button
            onClick={handleAddToCart}
            text="В корзину"
            icon="/icons/cart.svg"
            className="mini-card__button"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
