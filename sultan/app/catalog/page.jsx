"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Categories from "@/app/shared/catalog/categories/categories";
import Filters from "@/app/shared/catalog/all-filters/all-filters";
import FilteredProducts from "@/app/shared/catalog/products/products";
import SortDropdown from "@/app/shared/catalog/sort/sort";
import ViewSwitcher from "@/app/shared/catalog/view-switcher/view-switcher";
import Button from "@/app/ui/button/button";
import "./page.scss";

const Catalog = () => {
  const MOBILE_MAX_WIDTH = 768;
  const [isMobile, setIsMobile] = useState(false);
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("Каталог");
  const [sortOrder, setSortOrder] = useState("");
  const [productView, setProductView] = useState(false);
  const router = useRouter();

  const toggleUpdate = () => {
    setUpdate((update) => !update);
  };

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const updateSort = (newSort) => {
    setSortOrder(newSort);
  };

  const toggleView = () => {
    setProductView((productView) => !productView);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="catalog">
      {isMobile
        ? (<div className="catalog__navigation">
          <Button className="catalog__navigation__back__button"
            onClick={() => (router.back())}
            icon="/icons/back_icon.svg" />
          <p>Назад</p>
        </div>)
        : (<div className="catalog__navigation">
          <Link href="/" className="catalog__navigation__link">Главная</Link>
          <Link href="/catalog" className="catalog__navigation__link">{title}</Link>
        </div>

        )}
      <div className="catalog__header">
        <h1>{title}</h1>
        {isMobile
        ? ("")
        : (<div className="catalog__header__sort">
              <SortDropdown sortOrder={sortOrder} setNewSort={updateSort} />
              <ViewSwitcher changeView={toggleView}/>
            </div>)}
      </div>

      {isMobile
        ? (<div className="catalog__content__filters">
              <Filters toggleUpdate={toggleUpdate} />
            </div>)
        : ("")}

      <Categories toggleUpdate={toggleUpdate} setNewTitle={updateTitle} update={update} needsFull={false}/>

      {isMobile
        ? (<SortDropdown sortOrder={sortOrder} setNewSort={updateSort} />)
        : ("")}

      {isMobile
        ? (<div className="catalog__content">
              <div className="catalog__content__products">
                <FilteredProducts update={update} sortOrder={sortOrder} productView={true}/>
              </div>
            </div>)
        : (<div className="catalog__content">
          <div className="catalog__content__filters">
           <Filters toggleUpdate={toggleUpdate} />
           <Categories toggleUpdate={toggleUpdate} setNewTitle={updateTitle} update={update} needsFull={true} />
          </div>

          <div className="catalog__content__products">
            <FilteredProducts update={update} sortOrder={sortOrder} productView={productView}/>
          </div>
        </div>)}
    </div>
  );
};

export default Catalog;
