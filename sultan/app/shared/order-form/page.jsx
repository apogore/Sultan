"use client";
import React, { useState, useEffect } from "react";
import "./page.scss";
import InputField from "@shared/input-field/input-field";
import InfoBlock from "./info-block/info-block";
import { getCartData } from "@shared/function/getCardData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/app/ui/button/button";
import FormSection from "@/app/ui/form-section/form-section";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSubmitOrder = () => {
    if (!name || !phone || !email) {
      toast.error("Пожалуйста, заполните все обязательные поля!", {
        position: "top-center",
      });
      return;
    }

    toast.success("Ваш заказ успешно оформлен!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    const cartData = getCartData();
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

  return (
    <div className="order-form">
      <FormSection title="Контактные данные" iconOrText={"1"}>
        <InputField
          value={name}
          onChange={setName}
          placeholder="Введите ваше имя"
          label="Имя"
          validationRules={{ onlyLetters: true }}
        />
        <InputField
          value={phone}
          onChange={setPhone}
          placeholder="Введите ваш телефон"
          label="Телефон"
          validationRules={{ onlyNumbers: true }}
        />
        <InputField
          value={email}
          onChange={setEmail}
          placeholder="Введите ваш E-mail"
          label="E-mail"
        />
        <InputField
          value={organization}
          onChange={setOrganization}
          placeholder="Введите название организации"
          label="Название организации"
        />
        <InputField
          value={comment}
          onChange={setComment}
          placeholder="Введите ваш комментарий"
          label="Комментарий"
        />
        <FormSection title="Адрес доставки" iconOrText={"2"}>
          <InputField
            value={city}
            onChange={setCity}
            placeholder="Выберите ваш город"
            label="Город"
          />
          <InputField
            value={address}
            onChange={setAddress}
            placeholder="Введите адрес доставки"
            label="Адрес"
          />
        </FormSection>
      </FormSection>
      <div className="info-blocks">
        <InfoBlock iconOrText={"/icons/Bill.svg"} text="Оплата" />
        <InfoBlock iconOrText={"/icons/delivery.svg"} text="Доставка" />
        <InfoBlock iconOrText="?" text="Возникли вопросы?" />
        <FormSection title={"Дополнительно"} iconOrText={"3"}>
          <InputField
            label="Комментарий"
            type="text"
            placeholder="Введите дополнительную информацию"
            validationRules={{ onlyLetters: true }}
          />
        </FormSection>
      </div>
      <FormSection title="Ваш заказ">
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.nameRu}
              />
              <div>
                <p>{item.nameRu}</p>
                <p>
                  {item.quantity} × {item.price.toFixed(2)} ₸
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price">Итого: {totalPrice} ₸</div>
        <Button
          onClick={handleSubmitOrder}
          text="Подтвердить заказ"
          className="confirm-order-button"
        />
      </FormSection>
      ;
    </div>
  );
};

export default OrderForm;
