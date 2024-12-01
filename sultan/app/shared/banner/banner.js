import React from "react";
import "./banner.scss";
import Button from "../../ui/button/button";

const Banner = () => {
  const handleButtonClick = () => {
    window.location.href = window.location.href;
  };

  return (
    <div className="banner">
      <div className="banner_image">
        <img
          src="/banner/banner_home.webp"
          alt="Banner background"
          className="banner_img"
        />
      </div>
      <div className="banner_info">
        <h1 className="first-title">
          Бытовая химия, косметика
          <br /> и хозтовары
        </h1>
        <h2 className="second-title">
          <span>оптом</span> по Кокчетаву и области
        </h2>
        <Button
          onClick={handleButtonClick}
          text="В КАТАЛОГ"
          className="button"
          style={{
            width: "300px",
            height: "95px",
            marginTop: "60px",
            marginLeft: "5px",
            justifyContent: "center",
            backgroundColor: "$button-bg-color",
            borderRadius: "80px",
            border: "none",
            color: "$white-color",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "4px",
            transition: "background-color 0.3s ease",
          }}
        />
        <div className="list for-desktop-pluses">
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
      <div className="list for-mobile-pluses">
        <div className="advant adv_p1">
          <div className="circle">
            <b>+</b>
          </div>
          <span>Только самые выгодные предложения</span>
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
