"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from 'react-router-dom';
import Button from "@ui/button/button";

const FastFilters = () => {

  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const fastFilterButtonClick = (categorySlug) => {
    router.prefetch(`/${categorySlug}`);
  };

  useEffect(() => {
    fetch("/catalog/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  });

  const params = useParams();
  const categorySlug = params.categorySlug;

  const currentCategory = categories.find(
    (category) => category.categorySlug === categorySlug
  );

  if (!currentCategory) {
    return (
    <div className="catalog-header">
      <h1>Каталог</h1>
      <div className="fast-filters">
        {categories.map(category => (
          <Button key={category.categorySlug}
            onClick={fastFilterButtonClick(category.categorySlug)}
            text={category.name} />
        ))}
      </div>
    </div>
    );
  }

  return (
    <div className="catalog-header">
      <h1>{currentCategory.name}</h1>
      <div className="fast-filters">
        {currentCategory.subcategories.map(subcategory => (
          <Button key={subcategory.categorySlug}
            text={subcategory.name} />
        ))}
      </div>
    </div>
  );
};

export default FastFilters;
