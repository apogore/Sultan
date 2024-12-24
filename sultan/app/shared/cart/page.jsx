"use client";

import React, { useState, useEffect } from "react";
import Button from "@ui/button/button";
import DynamicPrice from "@shared/DynamicPrice/DynamicPrice";
import QuantityButtons from "@shared/quantity-button/quantity-button";
import { getCartData } from "@shared/function/getCardData";
import "./cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = getCartData(); // Используем функцию для получения данных из LocalStorage
    fetch("/mini-card/product.json")
      .then((response) => response.json())
      .then((data) => {
        // Добавление данных о количестве из LocalStorage в список товаров
        const itemsWithQuantity = data.map((item) => ({
          ...item,
          quantity: cartData[item.id] || 0, // Количество товара
        }));
        setCartItems(itemsWithQuantity);
      });
  }, []);

  const updateLocalStorage = (items) => {
    const cartData = items.reduce((acc, item) => {
      if (item.quantity > 0) acc[item.id] = item.quantity;
      return acc;
    }, {});
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Удаляем из корзины товары с количеством 0
    );
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  useEffect(() => {
    updateLocalStorage(cartItems);
  }, [cartItems]);

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
              <div class="cart-item__details">
                <h2 className="cart-item__name">{item.nameRu}</h2>
                <p className="cart-item__description">{item.descriptionRu}</p>
              </div>
              <div class="cart-item__buttons">
                <QuantityButtons
                  quantity={item.quantity}
                  increment={() => incrementQuantity(item.id)}
                  decrement={() => decrementQuantity(item.id)}
                  onChange={(newQuantity) => {
                    const updatedItems = cartItems.map((cartItem) =>
                      cartItem.id === item.id
                        ? { ...cartItem, quantity: newQuantity }
                        : cartItem
                    );
                    setCartItems(updatedItems);
                  }}
                />
                <DynamicPrice price={item.price} quantity={item.quantity} />

                <Button
                  text="Удалить"
                  onClick={() => removeItem(item.id)}
                  className="cart-item__remove"
                />
              </div>
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
