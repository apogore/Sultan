"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@ui/button/button";
import { showSuccessToast, showErrorToast,} from "@shared/Notification/toastUtils";
import QuantityButtons from "@shared/quantity-button/quantity-button";

import NotificationContent from "@shared/Notification/NotificationContent";
import "./mini-card.scss";

const MiniCard = ({ product }) => {
  const router = useRouter();

  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[product.id]) {
      setInCart(true);
      setQuantity(cart[product.id]);
    }
  }, [product.id]);

  if (!product) {
    return null;
  }

  const handleCardClick = () => {
    router.push(`/shared/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    try {
      const productId = product.id;
      const cart = JSON.parse(localStorage.getItem("cart")) || {};
      cart[productId] = (cart[productId] || 0) + 1;
      localStorage.setItem("cart", JSON.stringify(cart));

      setInCart(true);
      setQuantity(cart[productId]);

      showSuccessToast(
        <NotificationContent
          image={product.image}
          text="Товар добавлен в корзину"
          linkText="Перейти в корзину"
          onLinkClick={() => router.push("/shared/cart")}
        />
      );
    } catch (error) {
      showErrorToast(
        <NotificationContent
          image={product.image}
          text="Ошибка добавления в корзину"
          linkText="Повторить"
          onLinkClick={handleAddToCart}
        />
      );
    }
  };

  const handleToCart = () => {
    router.push("/shared/cart");
  };

  const incrementQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    cart[product.id] = (cart[product.id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(cart[product.id]);
  };

  const decrementQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[product.id] > 1) {
      cart[product.id] -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setQuantity(cart[product.id]);
    } else {
      delete cart[product.id];
      localStorage.setItem("cart", JSON.stringify(cart));
      setInCart(false);
      setQuantity(0);
    }
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

        {inCart ? (
          <div className="mini-card__actions">
            <QuantityButtons
              quantity={quantity}
              increment={incrementQuantity}
              decrement={decrementQuantity}
              className="mini-card__button"
              onChange={(newQuantity) => {
                const cart = JSON.parse(localStorage.getItem("cart")) || {};
                cart[product.id] = newQuantity;
                localStorage.setItem("cart", JSON.stringify(cart));
                setQuantity(newQuantity);
              }}
            />
            <Button
              onClick={handleToCart}
              text="Оформить"
              className="mini-card__button"
            />
          </div>
        ) : (
          <div
            className="mini-card__price-button"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={handleAddToCart}
              text="В корзину"
              icon="/icons/cart.svg"
              className="mini-card__button"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCard;
