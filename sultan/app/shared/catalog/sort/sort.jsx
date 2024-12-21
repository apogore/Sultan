import React, { useState } from 'react';
import "./sort.scss";

const SortDropdown = ({ sortOrder, setNewSort }) => {
    return (
      <div className="sort-dropdown">
        <label className="sort-dropdown__label" htmlFor="sort-dropdown">Сортировка:</label>
        <select className="sort-dropdown__select"
          id="sort"
          value={sortOrder}
          onChange={(e) => setNewSort(e.target.value)}>
            <option className="sort-dropdown__select__option" value="">нет</option>
            <option className="sort-dropdown__select__option" value="nameAsc">По названию (А-я)</option>
            <option className="sort-dropdown__select__option" value="nameDesc">По названию (Я-а)</option>
            <option className="sort-dropdown__select__option" value="priceAsc">По возрастанию цены</option>
            <option className="sort-dropdown__select__option" value="priceDesc">По убыванию цены</option>
        </select>
      </div>
    );
  };

export default SortDropdown;