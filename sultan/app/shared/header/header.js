import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-section-1">
                <div className="header-info">
                    <div className="header-address">
                        <img src="/geo-icon.svg" alt="geo" width={16} height={18} />
                        <p><b>г. Кокчетав, ул. Ж. Ташенова 129Б</b></p>
                        <p className="header-signature">(Рынок Восточный)</p>
                    </div>

                    <div className="header-mail">
                        <img src="/mail-icon.svg" alt="geo" width={17} height={14} />
                        <p><a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a></p>
                        <p className="header-signature">На связи в любое время</p>
                    </div>
                </div>

                <section></section>

                <nav className="header-navigation">
                    <ul>
                        <li className="header-navigation-link"><a href="/about">О компании</a></li>
                        <li className="header-navigation-link"><a href="/delivery">Доставка и оплата</a></li>
                        <li className="header-navigation-link"><a href="/return">Возврат</a></li>
                        <li className="header-navigation-link"><a href="/contacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>

            <hr />

            <div className="header-section-2">
                <div className="logo-sultan">
                    <img src="/logo-sultan.svg" alt="Султан" width={156} height={66} />
                </div>

                <a href="/catalog"><img src="/catalog-button.svg" alt="Каталог" width={192} height={59} /></a>

                <div className="header-search-form">
                    <form>
                        <input type="text" id="searchInput" placeholder="Поиск..." className="header-search-form-input" />
                        <button type="submit" className="header-search-form-button"><img src="/search-button.svg" alt="Поиск" width={39} height={39} /></button>
                    </form>
                </div>

                <div className="header-operator">
                    <div className="header-operator-info">
                        <p><a href="tel:77774900091" className="header-telephone-number">+7 (777) 490-00-91</a></p>
                        <p className="header-signature">время работы: 9:00-20:00</p>
                        <p className="header-signature"><b><u>Заказать звонок</u></b></p>
                    </div>

                    <div className="header-operator-photo">
                        <div class="header-operator-shadow-point" />
                        <img src="/operator.svg" alt="Заказать звонок" width={74} height={113} />
                    </div>
                </div>

                <div className="header-price">
                    <a href="https://t.me/soexhstd" download className="header-price-download">
                        <img src="/price-download-button.svg" alt="Прайс" width={200} height={59} />
                    </a>
                </div>

                <div className="header-cart">
                    <img src="/cart-icon.svg" alt="Корзина" width={51} height={39} />
                    <a href="/cart">
                        <p className="header-signature">Корзина</p>
                        <p><b>12 478 ₸</b></p>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;