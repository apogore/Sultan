"use client";
import React, { useState } from "react";
import { navigationLinks } from "@/app/shared/navigation-links.js";
import Button from "../../ui/button/button";
import "./header.css";
import "../../ui/button/button.css";

const Header = () => {
  const catalogButtonClick = () => {
    window.location.href = window.location.href;
  };

  const priceFileDownload = () => {
    const a = document.createElement("a");
    a.href = "/price.txt";
    a.download = "/price.txt".split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const [popup, setPopup] = useState(false);

  function MakeNavigationList() {
    const navigationList = navigationLinks.map((navigationLink) => (
      <li className="header-navigation-link" key={navigationLink.ref}>
        <a href={navigationLink.ref}>{navigationLink.name}</a>
      </li>
    ));
    return navigationList;
  }

  return (
    <header className="header">
      <div className="header-desktop">
        <div className="header-section-1">
          <div className="header-info">
            <div className="header-address">
              <img src="/geo-icon.svg" alt="geo" width={16} height={18} />
              <p>
                <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
              </p>
              <p className="header-signature">(Рынок Восточный)</p>
            </div>

            <div className="header-mail">
              <img src="/mail-icon.svg" alt="geo" width={17} height={14} />
              <p>
                <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
              </p>
              <p className="header-signature">На связи в любое время</p>
            </div>
          </div>

          <section></section>

          <nav className="header-navigation">
            <ul>{MakeNavigationList()}</ul>
          </nav>
        </div>

        <hr />

        <div className="header-section-2">
          <div className="header-logo-sultan">
            <a href="/" className="logo-sultan-link">
              <img
                src="/logo-sultan.svg"
                alt="Султан"
                width={156}
                height={66}
                className="logo-sultan"
              />
            </a>
          </div>

          <div className="header-catalog">
            <button
              type="submit"
              className="header-catalog-button"
              onClick={catalogButtonClick}
            >
              <p>Каталог</p>
              <img
                src="/catalog-icon.svg"
                alt="Каталог"
                width={15}
                height={15}
              />
            </button>
          </div>

          <div className="header-search-form">
            <form>
              <input
                type="text"
                id="searchInput"
                placeholder="Поиск..."
                className="header-search-form-input"
              />
              <button type="submit" className="header-search-form-button">
                <img
                  src="/search-button.svg"
                  alt="Поиск"
                  width={39}
                  height={39}
                />
              </button>
            </form>
          </div>

          <div className="header-operator">
            <div className="header-operator-info">
              <p className="header-telephone-number">+ 7 (777) 490-00-91</p>
              <p className="header-operator-signature">
                время работы: 9:00-20:00
              </p>
              <p className="header-signature">
                <a href="tel:77774900091" className="order-call-link">
                  <b>Заказать звонок</b>
                </a>
              </p>
            </div>

            <div className="header-operator-photo">
              <div className="header-operator-shadow-point" />
              <img
                src="/operator.svg"
                alt="Заказать звонок"
                width={74}
                height={113}
              />
            </div>
          </div>

          <div className="header-price">
            <button
              type="button"
              className="header-price-button"
              id="price-list"
              onClick={priceFileDownload}
            >
              <p>Прайс-лист</p>
              <img
                src="/download-icon.svg"
                alt="Прайс-лист"
                width={12}
                height={13}
              />
            </button>
          </div>

          <div className="header-cart">
            <img src="/cart-icon.svg" alt="Корзина" width={51} height={39} />
            <a href="/cart">
              <p className="header-signature">Корзина</p>
              <p>
                <b>12 478 ₸</b>
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-mobile-1">
          <Button
            onClick={() => setPopup((popup) => !popup)}
            className="dropdown-menu-button"
            icon={popup ? "/menu_button_close.svg" : "/menu_button_open.svg"}
          />

          <div className="header-logo-sultan">
            <a href="/" className="logo-sultan-link">
              <img
                src="/logo-sultan.svg"
                alt="Султан"
                width={97}
                height={41}
                className="logo-sultan"
              />
            </a>
          </div>

          <Button
            onClick={() => (window.location.href = window.location.href)}
            className="header-cart-button"
            icon="/cart-icon.svg"
          />
        </div>

        <hr />

        <div className="header-mobile-2">
          <Button
            onClick={catalogButtonClick}
            className="header-catalog-button"
            text="Каталог"
            icon="/catalog_icon_mobile.svg"
          />

          <div className="header-search-form">
            <form>
              <input
                type="text"
                id="searchInput"
                placeholder="Поиск"
                className="header-search-form-input"
              />
              <button type="submit" className="header-search-form-button">
                <img
                  src="/search_icon_mobile.svg"
                  alt="Поиск"
                  width={12}
                  height={12}
                />
              </button>
            </form>
          </div>
        </div>

        <hr />

        {popup && (
          <div className="popup-menu-content">
            <div className="header-address">
              <img src="/geo-icon.svg" alt="geo" width={16} height={18} />
              <p>
                <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
              </p>
              <p className="header-signature">(Рынок Восточный)</p>
            </div>

            <div className="header-mail">
              <img src="/mail-icon.svg" alt="geo" width={17} height={14} />
              <p>
                <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
              </p>
              <p className="header-signature">На связи в любое время</p>
            </div>

            <div className="header-sales-dept">
              <img src="/phone_icon.svg" alt="geo" width={15} height={15} />
              <p>Отдел продаж</p>
              <p className="header-signature">+7 (777) 490-00-91</p>
              <p className="header-signature-2">время работы: 9:00-20:00</p>
            </div>

            <div className="header-order-call">
              <Button
                onClick={() => (window.location.href = window.location.href)}
                className="header-order-call-button"
                icon="/phone_icon_filled.svg"
              />
              <p className="header-signature">
                <a href="tel:77774900091" className="order-call-link">
                  Заказать звонок
                </a>
              </p>
            </div>

            <nav className="header-navigation">
              <h4>Меню сайта:</h4>
              <ul>{MakeNavigationList()}</ul>
            </nav>

            <Button
              onClick={priceFileDownload}
              className="header-price-button"
              text="Прайс-лист"
              icon="/download-icon.svg"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
