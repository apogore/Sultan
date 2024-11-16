import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./best-products.css";
import { logoData } from "./constans";

// Функция для группировки данных по два элемента
const groupDataByTwo = (data) => {
  const result = [];
  for (let i = 0; i < data.length; i += 2) {
    result.push(data.slice(i, i + 2));
  }
  return result;
};

const BestProducts = () => {
  const slidesData = groupDataByTwo(logoData);

  return (
    <div className="best-products">
      <h1>
        ЛУЧШИЕ <span>ТОВАРЫ</span>
      </h1>
      <p>От ведущих мировых брендов</p>

      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          450: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
          1920: { slidesPerView: 5 }
        }}
      >
        <ul>
          {slidesData.map((group, index) => (
            <SwiperSlide key={index} as="li">
              <div className="slide">
                <div className="wrap-content">
                  {group.map((item) => (
                    <div className="img-container" key={item.src}>
                      <img src={item.src} alt={item.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default BestProducts;
