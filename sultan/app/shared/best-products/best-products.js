import React from "react";
import "./best-products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const BestProducts = () => {
  return (
    <div className="best-products">
      <h1>
        ЛУЧШИЕ <span>ТОВАРЫ</span>
      </h1>
      <p>От ведущих мировых брендов</p>

      <Swiper
    modules={[Autoplay, Pagination]}
  pagination={{ clickable: true}}
  // autoplay={{ delay: 3000 }}
  loop={true}
  // spaceBetween={40}
  breakpoints={{
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
    1440: { slidesPerView: 3 },
    1920: { slidesPerView: 4 },
  }}  >
    {/* Слайды */}
    <SwiperSlide>
      <div className="slide">
      <div className="wrap-content">

        <div className="img-container">
          <img src="/airwick.png" alt="airwick"></img>
        </div>
        <div className="img-container">
          <img src="/fresh.png" alt="fresh"></img>
        </div>
        <div className="img-container">
          <img src="/sibiar.png" alt="sibiar"></img>
        </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="slide">
      <div className="wrap-content">

        <div className="img-container">
          <img src="/cotton.png" alt="cotton"></img>
        </div>
        <div className="img-container">
          <img src="/camay.png" alt="camay"></img>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="slide">
      <div className="wrap-content">
        
        <div className="img-container">
          <img src="/johnsoni.png" alt="johnsoni"></img>
        </div>
        <div className="img-container">
          <img src="/colgate.png" alt="colgate"></img>  
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="slide">
      <div className="wrap-content">

        <div className="img-container"> 
          <img src="/nivea.png" alt="nivea"></img>
        </div>
        <div>
          <img src="/nc.png" alt="nc"></img>
        </div>
        <div>
          <img src="/nefis.png" alt="fresh"></img>
        </div>
      </div>
      </div>
    </SwiperSlide>
  </Swiper>
  </div>
  );
};

export default BestProducts;