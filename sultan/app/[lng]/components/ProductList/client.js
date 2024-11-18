"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProductListBase } from "./ProductListBase";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { MiniCard } from "../MiniCard";
import "./product-list.scss";


export const ProductList = ({ lng }) => {
  const { t } = useTranslation("product-list");

  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const handleCardClick = (productId) => {
    router.push(`/shared/product/${productId}`);
  };

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${lng}/product.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [url]);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      <h2>
        <span>{t("special_offer")}</span> {t("products")}
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <MiniCard
                  key={product.id}
                  product={product}
                  onClick={handleCardClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ProductListBase
            t={t}
            lng={lng}
            products={products}
            handleCardClick={handleCardClick}
          />
        )}
      </div>
    </div>
  );
};
