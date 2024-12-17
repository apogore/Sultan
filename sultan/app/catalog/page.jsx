"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from 'react-router-dom';
import Categories from "@/app/shared/catalog/categories/categories";
import Filters from "@/app/shared/catalog/all-filters/all-filters";
import "./page.scss";

const Catalog = () => {
  const [update, setUpdate] = useState(true);

  const toggleUpdate = () => {
    setUpdate((update) => !update);
  }

  return (
    <div className="catalog">
      <Categories />

      <div className="catalog__content">
        <div className="catalog__content__filters">
          <Filters toggleUpdate={toggleUpdate}/>
        </div>

        <div className="catalog__content__products">
          Товары
        </div>

      </div>
    </div>
  );
};

export default Catalog;