import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./promo-carousel.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const PromoCarousel = () => {
  return (
    <div className="carousel">
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      loop={true} // Циклическое прокрутка
      slidesPerView={1} // Количество видимых слайдов
      navigation={{ 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
      }}
      pagination={{ clickable: true }} // Включаем пагинацию
      autoplay={{ delay: 4000, disableOnInteraction: false }} // Автоматическое прокрутка

      
    >
      {/* Слайды */}
      <SwiperSlide>
        <div className="slide" id="promo1">
          <div className="text-content">
            <p className="end-date">*Акция действует до 04/09/22</p>
            <h1 className="title">
              <span>Название</span> Акции
            </h1>
            <p className="description">
              Условия акции в пару строк, Условия акции в пару строк, Условия
              акции в пару строк
            </p>
            <button className="button">Принять участие</button>
          </div>
          <div className="image-background"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide" id="slide1">
          <div className="text-content">
            <p className="end-date">*Акция действует до 04/09/22</p>
            <h1 className="title">
              <span>Название</span> Акции
            </h1>
            <p className="description">
              Условия акции в пару строк, Условия акции в пару строк, Условия
              акции в пару строк
            </p>
            <button className="button">Принять участие</button>
          </div>
          <div className="image-background"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide" id="slide1">
          <div className="text-content">
            <p className="end-date">*Акция действует до 04/09/22</p>
            <h1 className="title">
              <span>Название</span> Акции
            </h1>
            <p className="description">
              Условия акции в пару строк, Условия акции в пару строк, Условия
              акции в пару строк
            </p>
            <button className="button">Принять участие</button>
          </div>
          <div className="image-background"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide" id="slide1">
          <div className="text-content">
            <p className="end-date">*Акция действует до 04/09/22</p>
            <h1 className="title">
              <span>Название</span> Акции
            </h1>
            <p className="description">
              Условия акции в пару строк, Условия акции в пару строк, Условия
              акции в пару строк
            </p>
            <button className="button">Принять участие</button>
          </div>
          <div className="image-background"></div>
        </div>
      </SwiperSlide>
    </Swiper>
      <div className="swiper-button-next">
        <i className="fas fa-chevron-right"></i>
      </div>
      <div className="swiper-button-prev">
        <i className="fas fa-chevron-next"></i>
      </div>
    </div>
  );
};

export default PromoCarousel;
