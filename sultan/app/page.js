"use client";
import "./page.css"; // Импорт стилей
import Banner from "./shared/banner/banner";
import ProductList from "./shared/product-list/product-list";

import PromoCarousel from "./shared/promo-carousel/promo-carousel";
import ProductCategories from "./shared/product-categories/product-categories";

const HomePage = () => {
  const handleCardClick = (productId) => {
    router.push(`/shared/product/${productId}`);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="body">
          <Banner />
          <ProductList className="product-list" />
          <ProductCategories className="product-categories" />
          <PromoCarousel className="carousel" />
          <div className="section best">
            <h3>Лучшие товары</h3>
          </div>
          <div className="section map">
            <h3>Геолокация</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
