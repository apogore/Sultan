import { useEffect, useState } from "react";
import Accordion from "@/app/ui/accordion/accordion";
import Search from "@/app/ui/search/search";
import Checkbox from "@/app/ui/checkbox/checkbox";
import "./brand-filter.scss";

const BrandFilter = ({ resetFilter }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/catalog/brands.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedData = await response.json();
      setBrands(fetchedData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedBrands([]);
    localStorage.setItem('selectedBrands', JSON.stringify([]));
  }, [resetFilter]);

  const handleBrandChange = (brand) => {
    let updatedBrands;

    if (selectedBrands.includes(brand)) {
      updatedBrands = selectedBrands.filter(item => item !== brand);
    } else {
      updatedBrands = [...selectedBrands, brand];
    }

    setSelectedBrands(updatedBrands);
    localStorage.setItem("selectedBrands", JSON.stringify(updatedBrands));
  };


  return (
    <div className="brand-filter">
      <p className="brand-filter__title">Бренд</p>

      <Search
        className="brand-filter__search-form"
        inputType="text"
        id="brand-filter__search-input"
        placeholder="Поиск..."
        onClick={() => (window.location.href = window.location.href)}
        icon="/icons/search-button.svg"
      />

      <Accordion
        className="brand-filter__list"
        text="Показать все"
        isAlwaysExpanded={brands.length < 5
          ? (true)
          : (false)}
        accordionShort={brands.slice(0, 4).map(brand => (
          <Checkbox
            className="brand-filter__item"
            key={brand.number}
            onChecked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
            text={brand.name}/>
          ))}
        accordionBody={brands.length < 5
          ? ("")
          : (brands.slice(4, brands.length).map(brand => (
            <Checkbox
            className="brand-filter__item"
            key={brand.number}
            onChecked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
            text={brand.name}/>
          )))
        }
      />
    </div>
  );
};

export default BrandFilter;