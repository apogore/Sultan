"use client";

import Banner from "./shared/banner/banner";
import ProductList from "./shared/product-list/product-list.jsx";
import PromoCarousel from "./shared/promo-carousel/promo-carousel";
import ProductCategories from "./shared/product-categories/product-categories";
import "./page.css";

const HomePage = () => {
  const handleButtonClick = () => {
    window.location.href = window.location.href;
  };
  const router = useRouter();

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
