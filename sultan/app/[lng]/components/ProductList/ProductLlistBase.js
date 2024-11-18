import React from "react";
import { MiniCard } from "../MiniCard";
import "./product-list.scss";

export const ProductListBase = ({ t, lng, products, handleCardClick }) => {
  return (
    <div className="product-list">
      <h2>
        <span>{t("special_offer")}</span> {t("products")}
      </h2>
      <div className="wrapper_product">
        {products.map((product) => (
          <MiniCard
            key={product.id}
            product={product}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};
