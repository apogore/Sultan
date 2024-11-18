import { useTranslation } from '../../../i18n';
import { ProductListBase } from './ProductLlistBase';

export const ProductList = async ({ lng }) => {
  const { t } = await useTranslation(lng, "product-list");
  
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${lng}/product.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch product data for ${lng}`);
  }
  const data = await response.json();
  return (
    <ProductListBase
      t={t}
      lng={lng}
      products={data}
      isMobile={false}
      handleCardClick={() => {}}
    />
  );
};
