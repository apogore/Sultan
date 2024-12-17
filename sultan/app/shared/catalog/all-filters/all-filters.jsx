import { useState } from 'react';
import BrandFilter from '../brand-filter/brand-filter';
import PriceFilter from '../price-filter/price-filter';
import FilterButtons from '../filter-buttons/filter-buttons';
import "./all-filters.scss";

const Filters = ({ toggleUpdate }) => {
  const [resetFilter, setResetFilter] = useState(true);
  const resetFilters = () => {
    setResetFilter((resetFilter) => !resetFilter);
  }

  return (
    <section className='filters'>
      <p className='filters__title'>Подбор по параметрам</p>
      <PriceFilter resetFilter={resetFilters}/>
      <BrandFilter resetFilter={resetFilters}/>
      <FilterButtons toggleUpdate={toggleUpdate} resetFilter={resetFilters}/>
    </section>
  )
};

export default Filters;

