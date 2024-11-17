import React from "react";
import "./banner.css";

const Banner = () => {
  const handleButtonClick = () => {
    window.location.href = window.location.href;
  };
  return (
    <div className="banner">
      <div className="banner_image">
        <img
          src="/banner_home.webp"
          alt="Banner background"
          className="banner_img"
        />
        <div className="blur"></div>
      </div>
      <div className="banner_info">
        <h1 className="desktop">
          Бытовая химия, <br />
          косметика <br />и хозтовары
        </h1>
        <h2 className="desktop">
          <span>оптом</span> по Кекчетаву и области
        </h2>
        <div className="mobile mblur">
        <h1 className="mobile">
          Бытовая химия, косметика <br />
          и хозтовары
        </h1>
        <h2 className="mobile">оптом по Кекчетаву и области</h2>
        </div>
        <button className="btn" onClick={handleButtonClick}>
          В КАТАЛОГ
        </button>
        <div className="list desktop-pluses">
          <div className="advant adv_p1">
            <div className="circle">
              <b>+</b>
            </div>
            <span>
              Только самые
              <br />
              выгодные предложения
            </span>
          </div>
          <div className="advant adv_p1">
            <div className="circle">
              <b>+</b>
            </div>
            <span>
              Бесплатная доставка
              <br />
              <b>по Кокчетаву от 10 тыс ₸</b>
            </span>
          </div>
        </div>
      </div>
      <div className="list mobile-pluses">
        <div className="advant adv_p1">
          <div className="circle">
            <b>+</b>
          </div>
          <span>
            Только самые выгодные предложения
          </span>
        </div>
        <div className="advant adv_p1">
          <div className="circle">
            <b>+</b>
          </div>
          <span>
            Бесплатная доставка <b>по Кокчетаву от 10 тыс ₸</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
