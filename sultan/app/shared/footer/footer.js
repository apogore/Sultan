"use client";
import React from "react";
import Link from 'next/link';
import getPriceList from "../function/price-list";
import { navigationLinks } from "@shared/navigation-links.js";
import { productCategoriesData } from "@shared/product-categories-data.js";
import Button from "@ui/button/button";
import Search from "@ui/search/search";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-section company-info">
          <img src="/icons/sultan.svg" alt="Visa" width={150} height={70} />
          <p>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокшетау и Акмолинской области
          </p>
          <div className="subscribe-container">
            <p>Подпишись на скидки и акции</p>
            <Search
              className="subscribe-form"
              inputType="email"
              id="subscribeInput"
              placeholder="Введите ваш E-mail"
              onClick={() => (window.location.href = window.location.href)}
              icon="/icons/subscribe_icon.svg"
            />
          </div>

        </div>
        <div className="footer-section menu">
          <h2>Меню сайта:</h2>
          <ul className="footer-list">
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.href}>
                <Link href={navigationLink.href}>{navigationLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section categories">
          <h2>Категории:</h2>
          <ul className="footer-list">
            {productCategoriesData.map((productCategory) => (
              <li key={productCategory.id}>
                <Link href={`/${productCategory.id}`}>{productCategory.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section price-list">
          <div className="download-price-list">
            <h3>Скачать прайс-лист:</h3>
            <Button
              onClick={getPriceList}
              text="Прайс-лист"
              icon={"/icons/download.svg"}
              className="price-list-button"
            />
          </div>
          <div className="messengers">
            <p>Связь в мессенджерах:</p>
            <div className="button-container">
              <Link
                href="https://t.me/kot_Shreda"
                className="footer-messenger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/Whatsapp_icon.svg"
                  alt="WhatsApp"
                  className="footer-icon"
                />
              </Link>

              <Link
                href="https://t.me/kot_Shreda"
                className="footer-messenger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/Telegram_icon.svg"
                  alt="Telegram"
                  className="footer-icon"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-section contacts">
          <h2>Контакты:</h2>

          <p className="number">+7 (777) 490-00-91</p>
          <p className="availability">время работы: 9:00-20:00</p>
          <Link href="tel:+77774900091" className="footer-link call-order">
            Заказать звонок
          </Link>
          <div className="contact-info">
            <Link
              href="mailto:opt.sultan@mail.ru"
              className="footer-link footer-email"
            >
              opt.sultan@mail.ru
            </Link>
            <p className="availability">На связи в любое время</p>
          </div>
          <div className="footer-payment">
            <img src="/icons/Visa.svg" alt="Visa" className="footer-icon" />
            <img
              src="/icons/Mastercard.svg"
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
