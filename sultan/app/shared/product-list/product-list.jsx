"use client";

import React, { useState, useEffect } from "react";
import MiniCard from "../mini-card/mini-card.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./product-list.scss";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const handleCardClick = (productId) => {
    router.push(`/shared/product/${productId}`);
  };

  useEffect(() => {
    fetch("/mini-card/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      <h2>
      Акционные <span>товары</span>
      </h2>
      <div className="wrapper_product">
        {isMobile ? (
          <Swiper
            className="swiper-Mobile-product-list"
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            loop={true}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <MiniCard product={product} onClick={handleCardClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          products.map((product) => (
            <MiniCard
              key={product.id}
              product={product}
              onClick={handleCardClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
