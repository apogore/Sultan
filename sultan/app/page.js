"use client";

import "./page.css"; // Импорт стилей
import Header from "./shared/header/header"; // Импорт компонента заголовка
import Footer from "./shared/footer/footer";
import MiniCard from "./shared/mini-card/mini-card";

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
                Бытовая химия,
                <br />
                косметика
                <br />и хозтовары
              </h1>
              <h2>
                <span>ОПТОМ</span> ПО КЕКЧАТОВУ И ОБЛАСТИ
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
            <MiniCard className="mini-card" />
          </div>
          <div className="section category">
            <h3>Категории товаров</h3>
          </div>
          <div className="section carousel">
            <h3>Карусель акций</h3>
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
