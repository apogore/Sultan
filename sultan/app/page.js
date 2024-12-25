"use client";

import Banner from "@shared/banner/banner";
import ProductList from "@shared/product-list/product-list.jsx";
import PromoCarousel from "@shared/promo-carousel/promo-carousel";
import ProductCategories from "@shared/product-categories/product-categories";
import BestProducts from "@shared/best-products/best-products";
import Geolocation from "@shared/geolocation/geolocation";
import "./page.scss";

const HomePage = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="body">
          <Banner />
          <ProductList />
          <ProductCategories />
          <PromoCarousel />
          <BestProducts />
          <Geolocation />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
