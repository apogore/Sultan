"use client";

import "./page.css"; // Импорт стилей
import Header from "./shared/header/header"; // Импорт компонента заголовка
import Footer from "./shared/footer/footer";
import ProductList from "./shared/product-list/product-list";
import PromoCarousel from "./shared/promo-carousel/promo-carousel";
import ProductCategories from "./shared/product-categories/product-categories";

const HomePage = () => {
  const handleButtonClick = () => {
    window.location.href = window.location.href;
  }
  return (
    <div className="container">
      <div className="content">
        <Header className="header" />

        <div className="body">
          <div className="section banner">
            <div className="banner_image">
              <div className="blur"></div>
            </div>
            <div className="banner_info">
              <h1>
                Бытовая химия, <br />
                косметика <br />
                и хозтовары
              </h1>
              <h2>
                <span>оптом</span> по кекчатову и области
              </h2>
              <button className="btn"
              onClick={handleButtonClick}>В КАТАЛОГ</button>
              <div className="list">
                <div className="advant adv_p1">
                  <div className="circle">
                    <b>+</b>
                  </div>
                  <span>Только самые<br/>
                  выгодные предложения</span>
                </div>
                <div className="advant adv_p1">
                  <div className="circle">
                    <b>+</b>
                  </div>
                  <span>Бесплатная доствка<br/>
                  <b>по Кокчетаву от 10 тыч ₸</b></span>
                </div>
              </div>
            </div>
          </div>
          <div className="section cards">
            <ProductList className="product-list" />
          </div>
          
          <ProductCategories className="product-categories" />

          <div className="section carousel">
            <PromoCarousel className="carousel" />
          </div>
          <div className="section best">
            <h3>Лучшие товары</h3>
          </div>
          <div className="section map">
            <h3>Геолокация</h3>
          </div>
        </div>

        <Footer className="footer" />
      </div>
    </div>
  );
};

export default HomePage;
