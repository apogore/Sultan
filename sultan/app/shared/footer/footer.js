"use client";

import React from "react";
import "./footer.css";
import Button from "../../ui/button/button"; // Убедитесь, что путь корректен
const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-section company-info">
          <img src="/sultan.svg" alt="Visa" width={150} height={70} />
          <p>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокшетау и Акмолинской области
          </p>
          <div className="subscribe-container">
            <p>Подпишись на скидки и акции</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Введите ваш E-mail" />
              <button type="submit">
                <span>➔</span>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-section menu">
          <h2>Меню сайта:</h2>
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
        <div className="footer-section categories">
          <h2>Категории:</h2>
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
        <div className="footer-section price-list">
          <div className="download-price-list">
          <h3>Скачать прайс-лист:</h3>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/price.txt";
              link.download = "price-list.txt";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            text="Прайс-лист"
            icon={"/download.svg"}
            className="price-list-button"
          />
          </div>
          <div className="messangers">
          <p>Связь в мессенджерах:</p>
          <div className="button-container">
            <a
              href="https://t.me/kot_Shreda"
              className="footer-messenger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Whatsapp_icon.svg"
                alt="WhatsApp"
                className="footer-icon"
              />
            </a>

            <a
              href="https://t.me/kot_Shreda"
              className="footer-messenger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Telegram_icon.svg"
                alt="Telegram"
                className="footer-icon"
              />
            </a>
          </div>
          </div>
        </div>
        <div className="footer-section contacts">
          <h2>Контакты:</h2>

          <p className="number">+7 (777) 490-00-91</p>
          <p className="availability">время работы: 9:00-20:00</p>
          <a href="tel:+77774900091" className="footer-link call-order">
            Заказать звонок
          </a>
          <div className="contact-info">
            <a
              href="mailto:opt.sultan@mail.ru"
              className="footer-link footer-email"
            >
              opt.sultan@mail.ru
            </a>
            <p className="availability">На связи в любое время</p>
          </div>
          <div className="footer-payment">
            <img src="/Visa.svg" alt="Visa" className="footer-icon" />
            <img
              src="/Mastercard.svg"
              alt="MasterCard"
              className="footer-icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
