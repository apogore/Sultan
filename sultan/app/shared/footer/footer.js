"use client";

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="/sultan.svg" alt="Visa" width={150} height={70} />
        <p>
          Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
          Кокшетау и Акмолинской области
        </p>
        <div>
          <label htmlFor="subscribe">Подпишись на скидки и акции</label>
          <br />
          <input
            type="email"
            id="subscribe"
            placeholder="Введите ваш E-mail"
            className="footer-input"
          />
          <button className="footer-button">➤</button>
        </div>
      </div>

      <div className="footer-section">
        <h3>Меню сайта:</h3>
        <ul className="footer-list">
          <li>
            <a href="/about">О компании</a>
          </li>
          <li>
            <a href="/delivery">Доставка и оплата</a>
          </li>
          <li>
            <a href="/return">Возврат</a>
          </li>
          <li>
            <a href="/contacts">Контакты</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Категории:</h3>
        <ul className="footer-list">
          <li>
            <a href="/chemistry">Бытовая химия</a>
          </li>
          <li>
            <a href="/cosmetics">Косметика и гигиена</a>
          </li>
          <li>
            <a href="/home">Товары для дома</a>
          </li>
          <li>
            <a href="/children">Товары для детей и мам</a>
          </li>
          <li>
            <a href="/tableware">Посуды</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Скачать прайс-лист:</h3>
        <a href="https://t.me/kot_Shreda" download className="footer-messenger">
          <img src="/button_price.svg" alt="bx" width={150} height={60} />
        </a>
        <p>Связь в мессенджерах:</p>

        <a href="https://t.me/kot_Shreda" download className="footer-messenger">
          <img
            src="/Whatsapp_icon.svg"
            alt="Telegram"
            className="footer-icon"
          />
        </a>

        <a href="https://t.me/kot_Shreda" download className="footer-messenger">
          <img
            src="/Telegram_icon.svg"
            alt="Telegram"
            className="footer-icon"
          />
        </a>
      </div>

      <div className="footer-section">
        <h3>Контакты:</h3>

        <p>+7 (777) 490-00-91</p>
        <p>время работы: 9:00-20:00</p>
        <a href="tel:+77774900091">Заказать звонок</a>
        <p>opt.sultan@mail.ru</p>

        <p>На связи в любое время</p>
        <div className="footer-payment">
          <img src="/Visa.svg" alt="Visa" className="footer-icon" />
          <img src="/Mastercard.svg" alt="MasterCard" className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
