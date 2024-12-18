import { useEffect, useState } from "react";
import Accordion from "@/app/ui/accordion/accordion";
import Search from "@/app/ui/search/search";
import Checkbox from "@/app/ui/checkbox/checkbox";
import "./manufacturer-filter.scss";

const ManufacturerFilter = ({ resetFilter }) => {
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredManufacturers, setFilteredManufacturers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/mini-card/product.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedData = await response.json();

      const manufacturersCountMap = {};

      fetchedData.forEach(product => {
        const manufacturer = product.manufacturer;
        if (manufacturersCountMap[manufacturer]) {
          manufacturersCountMap[manufacturer]++;
        }
        else {
          manufacturersCountMap[manufacturer] = 1;
        }
      });

      const result = Object.keys(manufacturersCountMap).map(manufacturer => ({
        name: manufacturer,
        count: manufacturersCountMap[manufacturer],
      }));

      setManufacturers(result);
      setFilteredManufacturers(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedManufacturers([]);
    localStorage.setItem('selectedManufacturers', JSON.stringify([]));
  }, [resetFilter]);

  const handleManufacturerChange = (manufacturer) => {
    let updatedManufacturers;

    if (selectedManufacturers.includes(manufacturer)) {
      updatedManufacturers = selectedManufacturers.filter(item => item !== manufacturer);
    } else {
      updatedManufacturers = [...selectedManufacturers, manufacturer];
    }

    setSelectedManufacturers(updatedManufacturers);
    localStorage.setItem("selectedManufacturers", JSON.stringify(updatedManufacturers));
  };

  const handleSearchClick = (event) => {

    setSearchQuery(event.target.value);

    if (!searchQuery || searchQuery === '') {
      setFilteredManufacturers(manufacturers);
    }
    else {
      const filtered = manufacturers.filter(manufacturer =>
        manufacturer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredManufacturers(filtered);
    }
  };


  return (
    <div className="manufacturer-filter">
      <p className="manufacturer-filter__title">Производитель</p>

      <Search
        className="manufacturer-filter__search-form"
        inputType="text"
        id="manufacturer-filter__search-input"
        placeholder="Поиск..."
        value={searchQuery}
        onClick={handleSearchClick}
        onChange={handleSearchClick}
        icon="/icons/search-button.svg"
      />

      <Accordion
        className="manufacturer-filter__list"
        text="Показать все"
        isAlwaysExpanded={filteredManufacturers.length < 5
          ? (true)
          : (false)}
        accordionShort={filteredManufacturers.slice(0, 4).map(manufacturer => (
          <Checkbox
            className="manufacturer-filter__item"
            key={manufacturer.name}
            onChecked={selectedManufacturers.some(selected => selected.name === manufacturer.name)}
            onChange={() => handleManufacturerChange(manufacturer)}
            text={`${manufacturer.name} (${manufacturer.count})`} />
        ))}
        accordionBody={filteredManufacturers.length < 5
          ? ("")
          : (filteredManufacturers.slice(4).map(manufacturer => (
            <Checkbox
              className="manufacturer-filter__item"
              key={manufacturer.name}
              onChecked={selectedManufacturers.some(selected => selected.name === manufacturer.name)}
              onChange={() => handleManufacturerChange(manufacturer)}
              text={`${manufacturer.name} (${manufacturer.count})`} />
          )))
        }
      />
    </div>
  );
};

export default ManufacturerFilter;
