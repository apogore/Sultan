"use client";
import React from "react";
import { productCategoriesData } from "@/app/shared/product-categories-data.js";
import "./product-categories.css";

const ProductCategories = () => {
  const categoryButtonClick = () => {
    window.location.href = window.location.href;
  };

  function MakeProductCategoriesList() {
    const productCategoriesList = productCategoriesData.map(productCategory =>
      <li key={productCategory.id}>
        <button
          onClick={categoryButtonClick}
          className="product-categories-button"
          id={productCategory.id}>
          <div className="product-categories-button-background">
            <img
              className={productCategory.image_class}
              src={productCategory.image}
              alt={productCategory.name}
            />
          </div>
          <p>{productCategory.name}</p>
        </button>
      </li>
    );
    return productCategoriesList;
  }

  return (
    <div className="product-categories">
      <h2>
        Категории <span>товаров</span>
      </h2>

      <p>10 000+ ходовых позиций по специальным ценам</p>

      <ul className="product-categories-list">
        {MakeProductCategoriesList()}
      </ul>
    </div>
  );
};

export default ProductCategories;
