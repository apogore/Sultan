import React from "react";
import { useRouter } from "next/navigation";
import Button from "@ui/button/button";
import "./banner.scss";

const Banner = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/catalog`);
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
          className="button"
          onClick={handleButtonClick}
          text="В КАТАЛОГ"
        />
        <div className="list for-desktop-pluses">
          <div className="advant">
            <span className="circle"/>
            <span className="advant-text">
              Только самые
              <br />
              выгодные предложения
            </span>
          </div>
          <div className="advant">
            <span className="circle"/>
            <span className="advant-text">
              Бесплатная доставка
              <br />
              <b>по Кокчетаву от 10 тыс ₸</b>
            </span>
          </div>
        </div>
      </div>
      <div className="list for-mobile-pluses">
        <div className="advant">
          <span className="circle"/>
          <span className="advant-text">Только самые выгодные предложения</span>
        </div>
        <div className="advant">
          <span className="circle"/>
          <span className="advant-text">
            Бесплатная доставка <b>по Кокчетаву от 10 тыс ₸</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
