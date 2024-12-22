"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { productCategoriesData } from "@shared/product-categories-data.js";
import "./product-categories.scss";

const ProductCategories = () => {
  const router = useRouter();

  const categoryButtonClick = () => {
      router.push(`/catalog`);
  };

  return (
    <div className="product-categories">
      <h2>
        Категории <span>товаров</span>
      </h2>

      <p className="category-signature">10 000+ ходовых позиций по специальным ценам</p>

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
                  src={`product-categories/${productCategory.image}`}
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
