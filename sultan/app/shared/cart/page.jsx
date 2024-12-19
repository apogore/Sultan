"use client";

import React, { useState, useEffect } from "react";
import Button from "@ui/button/button";
import DynamicPrice from "@shared/DynamicPrice/DynamicPrice";
import QuantityButtons from "@shared/quantity-button/quantity-button";
import "./cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || {}; // Чтение данных из localStorage
    fetch("/mini-card/product.json")
      .then((response) => response.json())
      .then((data) => {
        // Добавление данных о количестве из localStorage в список товаров
        const itemsWithQuantity = data.map((item) => ({
          ...item,
          quantity: cartData[item.id] || 0, // Количество товара
        }));
        setCartItems(itemsWithQuantity);
      });
  }, []);

  return (
    <div className="cart">
      {cartItems.length ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.nameRu}
              className="cart-item__image"
            />
            <div className="cart-item__info">
              <h2 className="cart-item__name">{item.nameRu}</h2>
              <p className="cart-item__description">{item.descriptionRu}</p>
              <p className="cart-item__quantity">Количество: {item.quantity}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="cart__empty">Ваша корзина пуста.</p>
      )}
    </div>
  );
};

export default Cart;
