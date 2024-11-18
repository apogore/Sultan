import { useTranslation } from "../i18n";
import { Banner } from "./components/Banner";
import { ProductList } from "./components/ProductList"; 
// import PromoCarousel from "@shared/promo-carousel/promo-carousel";
// import ProductCategories from "@shared/product-categories/product-categories";
// import BestProducts from "@shared/best-products/best-products";
// import Geolocation from "@shared/geolocation/geolocation";

export default async function HomePage({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <div className="container">
      <div className="content">
        <div className="body">
        <h1>{t('title')}</h1>

          <Banner lng={lng} />
          <ProductList lng={lng}/>
          {/* <ProductCategories />
          <PromoCarousel />
          <BestProducts />
          <Geolocation /> */}
        </div>
      </div>
    </div>
  );
}