"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Link from 'next/link';
import { navigationLinks } from "@/app/shared/navigation-links.js";

import getPriceList from "@functions/price-list";
import Button from "@ui/button/button";
import Search from "@ui/search/search";
import CartHeader from "./cart/header-cart";
import OperatorInfo from "./operator-info/operator-info";
import LogoSultan from "../logo-sultan/logo-sultan";
import MailLink from "../Mail-link/Mail";
import AddressInfo from "../adress-info/address-Info";

import "./header.scss";

const Header = () => {


  const router = useRouter();

  const catalogButtonClick = () => {
    router.push(`/catalog`);
  };
  const CartButtonClick = () => {
    router.push(`/shared/cart`);
  };
  const [popup, setPopup] = useState(false);

  return (
    <header className="header">
    
      <div className="header-desktop">
        <div className="header-section-1">
          <div className="header-info">
            <AddressInfo/>

            <MailLink/>
          </div>

          <section></section>

          <nav className="header-navigation">
            <ul>
              {navigationLinks.map((navigationLink) => (
                <li
                  className="header-navigation-link"
                  key={navigationLink.href}
                >
                  <Link href={navigationLink.href}>{navigationLink.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr />

        <div className="header-section-2">
          <LogoSultan/>

          <Button
            className="header-catalog-button"
            onClick={catalogButtonClick}
            text="Каталог"
            icon="/icons/catalog-icon.svg"
          />

          <Search
            className="header-search-form"
            inputType="text"
            id="searchInput"
            placeholder="Поиск..."
            onClick={() => catalogButtonClick}
            icon="/icons/search-button.svg"
          />

          <OperatorInfo/>
          <Button
            className="header-price-button"
            onClick={getPriceList}
            text="Прайс-лист"
            icon="/icons/download-icon.svg"
          />
          <CartHeader/>

          <hr />
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-mobile-1">
          <Button
            onClick={() => setPopup((popup) => !popup)}
            className="dropdown-menu-button"
            icon={
              popup
                ? "/icons/menu_button_close.svg"
                : "/icons/menu_button_open.svg"
            }
          />

          <LogoSultan/>

          <Button
            onClick={CartButtonClick}
            className="header-cart-button"
            icon="/icons/cart-icon.svg"
          />
        </div>

        <hr />

        <div className="header-mobile-2">
          <Button
            onClick={catalogButtonClick}
            className="header-catalog-button"
            text="Каталог"
            icon="/icons/catalog_icon_mobile.svg"
          />

          <Search
            className="header-search-form"
            inputType="text"
            id="searchInput"
            placeholder="Поиск..."
            onClick={() => catalogButtonClick}
            icon="/icons/search_icon_mobile.svg"
          />
        </div>

        <hr />

        {popup && (
          <div className="popup-menu-content">
            <AddressInfo/>
            <MailLink/>

            <div className="header-sales-dept">
              <img
                src="/icons/phone_icon.svg"
                alt="geo"
                width={15}
                height={15}
              />
              <p>Отдел продаж</p>
              <p className="header-signature">+7 (777) 490-00-91</p>
              <p className="header-signature-2">время работы: 9:00-20:00</p>
            </div>

            <div className="header-order-call">
              <Button
                onClick={() => catalogButtonClick}
                className="header-order-call-button"
                icon="/icons/phone_icon_filled.svg"
              />
              <p className="header-signature">
                <Link href="tel:77774900091" className="order-call-link">
                  Заказать звонок
                </Link>
              </p>
            </div>

            <nav className="header-navigation">
              <h4>Меню сайта:</h4>
              <ul>
                {navigationLinks.map((navigationLink) => (
                  <li
                    className="header-navigation-link"
                    key={navigationLink.href}
                  >
                    <Link href={navigationLink.href}>
                      {navigationLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              onClick={getPriceList}
              className="header-price-button"
              text="Прайс-лист"
              icon="/icons/download-icon.svg"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
