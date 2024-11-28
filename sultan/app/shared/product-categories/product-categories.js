"use client";
import React from "react";
import { productCategoriesData } from "@/app/shared/product-categories-data.js";
import "./product-categories.scss";

const ProductCategories = () => {
  const categoryButtonClick = () => {
    window.location.href = window.location.href;
  };

  return (
    <div className="product-categories">
      <h2>
        Категории <span>товаров</span>
      </h2>

      <p>10 000+ ходовых позиций по специальным ценам</p>

      <ul className="product-categories-list">
        {productCategoriesData.map(productCategory =>
          <li key={productCategory.id}>
            <button
              onClick={categoryButtonClick}
              className="product-categories-button"
              id={productCategory.id}
              >
              <div className="product-categories-button-background">
                <img
                  className={productCategory.imageClass}
                  src={productCategory.image}
                  alt={productCategory.name}
                />
              </div>
              <p>{productCategory.name}</p>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductCategories;
