import { useState, useEffect } from "react";
import BrandFilter from "../brand-filter/brand-filter";
import ManufacturerFilter from "../manufacturer-filter/manufacturer-filter";
import PriceFilter from "../price-filter/price-filter";
import FilterButtons from "../filter-buttons/filter-buttons";
import "./all-filters.scss";
import Button from "@/app/ui/button/button";

const Filters = ({ toggleUpdate }) => {
  const MOBILE_MAX_WIDTH = 768;
  const [resetFilter, setResetFilter] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_MAX_WIDTH);

  const resetFilters = () => {
    setResetFilter((resetFilter) => !resetFilter);
  }

  const toggleFiltersDiv = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(true); // Всегда открываем на больших экранах
    } else {
      setIsOpen(false); // Скрываем на мобильных экранах
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isMobile && !isOpen ? "hidden" : "auto";
  }, [isMobile, isOpen]);

  return (
    <section className="filters">
      <div className="filters__header">
        <p className="filters__header__title">Подбор по параметрам</p>
        <Button
          className={`filters__header__button ${isOpen ? 'active' : ''}`}
          onClick={toggleFiltersDiv}
          icon="/icons/filter_icon.svg"/>
      </div>
      {isOpen && (
        <div className="filters__content">
          <PriceFilter resetFilter={resetFilters} />
          <ManufacturerFilter resetFilter={resetFilters} />
          <hr />
          <BrandFilter resetFilter={resetFilters} />
          <FilterButtons toggleUpdate={toggleUpdate} resetFilter={resetFilters} />
        </div>)}
    </section>
  )
};

export default Filters;
