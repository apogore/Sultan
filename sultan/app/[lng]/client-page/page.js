'use client'

import { useTranslation } from "../../i18n/client";
import { Banner } from "../components/Banner/client";
// import ProductList from "@shared/product-list/product-list.jsx";
// import PromoCarousel from "@shared/promo-carousel/promo-carousel";
// import ProductCategories from "@shared/product-categories/product-categories";
// import BestProducts from "@shared/best-products/best-products";
// import Geolocation from "@shared/geolocation/geolocation";

export default function HomePage({ params: { lng } }) {
  const { t } = useTranslation(lng, 'client-page');

  return (
    <div className="container">
      <div className="content">
        <div className="body">
          <h1>{t('title')}</h1>
          <Banner lng={lng} />
          {/* <ProductList />
          <ProductCategories />
          <PromoCarousel />
          <BestProducts />
          <Geolocation /> */}
        </div>
      </div>
    </div>
  );
}