"use client";

import Header from "./shared/header/header"; 
import Footer from "./shared/footer/footer";
import MiniCard from "./shared/mini-card/mini-card";
import PromoCarousel from "./shared/promo-carousel/promo-carousel";
import ProductCategories from "./shared/product-categories/product-categories";
import BestProducts from "./shared/best-products/best-products";
import Geolocation from "./shared/geolocation/geolocation"
import "./page.css"; 
import "./styles/globals.css";


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
            <h3>Акционные товары</h3>
            <MiniCard />
          </div>
          
          <ProductCategories />

          <div className="section carousel">
            <PromoCarousel />
          </div>
          <div className="section best">
            <BestProducts />
          </div>
          <div className="section map">
            <Geolocation />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
