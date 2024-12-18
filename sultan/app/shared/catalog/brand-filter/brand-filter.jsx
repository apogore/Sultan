import { useEffect, useState } from "react";
import Accordion from "@/app/ui/accordion/accordion";
import Search from "@/app/ui/search/search";
import Checkbox from "@/app/ui/checkbox/checkbox";
import "./brand-filter.scss";

const BrandFilter = ({ resetFilter }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBrands, setFilteredBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/mini-card/product.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedData = await response.json();
      
      const brandCount = fetchedData.reduce((brand, product) => {
        const { name, numder } = product.brand;
        const key = `${name}-${numder}`;

        if (!brand[key]) {
          brand[key] = { name, numder, count: 0 };
        }

        brand[key].count += 1;
        return brand;
      }, {});

      const uniqueBrandsArray = Object.values(brandCount);
      setBrands(uniqueBrandsArray);
      setFilteredBrands(uniqueBrandsArray);
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

  const handleSearchClick = (event) => {

    setSearchQuery(event.target.value);

    if (!searchQuery || searchQuery === '') {
      setFilteredBrands(brands);
    }
    else {
      const filtered = brands.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBrands(filtered);
    }
  };


  return (
    <div className="brand-filter">
      <p className="brand-filter__title">Бренд</p>

      <Search
        className="brand-filter__search-form"
        inputType="text"
        id="brand-filter__search-input"
        placeholder="Поиск..."
        value={searchQuery}
        onClick={handleSearchClick}
        onChange={handleSearchClick}
        icon="/icons/search-button.svg"
      />

      <Accordion
        className="brand-filter__list"
        text="Показать все"
        isAlwaysExpanded={filteredBrands.length < 5
          ? (true)
          : (false)}
        accordionShort={filteredBrands.slice(0, 4).map(brand => (
          <Checkbox
            className="brand-filter__item"
            key={brand.number}
            onChecked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
            text={`${brand.name} (${brand.count})`}/>
          ))}
        accordionBody={filteredBrands.length < 5
          ? ("")
          : (filteredBrands.slice(4).map(brand => (
            <Checkbox
            className="brand-filter__item"
            key={brand.number}
            onChecked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
            text={`${brand.name} (${brand.count})`}/>
          )))
        }
      />
    </div>
  );
};

export default BrandFilter;