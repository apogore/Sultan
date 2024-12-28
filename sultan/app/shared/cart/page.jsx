"use client";

import React, { useState, useEffect } from "react";
import Button from "@ui/button/button";
import DynamicPrice from "@shared/DynamicPrice/DynamicPrice";
import QuantityButtons from "@shared/quantity-button/quantity-button";
import { getCartData } from "@shared/function/getCardData";
import { useRouter } from "next/navigation";

import "./cart.scss";

const Cart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleorderClick = () => {
    router.push(`/shared/order-form`);
  };

  useEffect(() => {
    const cartData = getCartData();
    //console.log("Cart Data from LocalStorage:", cartData);

    if (Object.keys(cartData).length === 0) {
      setCartItems([]);
      return;
    }

    fetch("/mini-card/product.json")
      .then((response) => response.json())
      .then((data) => {
        const itemsWithQuantity = data
          .map((item) => ({
            ...item,
            quantity: cartData[item.id] || 0,
          }))
          .filter((item) => item.quantity > 0);

        setCartItems(itemsWithQuantity);

        const total = itemsWithQuantity.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setTotalPrice(total.toFixed(2));
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
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
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
              <div className="cart-item__details">
                <h2 className="cart-item__name">{item.nameRu}</h2>
                <p className="cart-item__description">{item.descriptionRu}</p>
              </div>
              <div className="cart-item__buttons">
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
                <DynamicPrice
                  price={item.price}
                  quantity={item.quantity}
                  className="price"
                />
                <Button
                  onClick={() => removeItem(item.id)}
                  icon="/icons/Bin.svg"
                  className="cart-item__remove"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="cart__empty">Ваша корзина пуста.</p>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="button-offer">
            <Button
              className="cart-summary__checkout"
              text="Оформить заказ"
              onClick={handleorderClick}
            ></Button>
          </div>
          <div className="cart-summary__total">
            <span className="total-price">{totalPrice} ₸.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
