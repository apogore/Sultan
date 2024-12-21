import { useState, useEffect } from 'react';
import Button from "@ui/button/button";
import "./all-subcategories.scss";

const Subcategories = ({ toggleUpdate, i }) => {
    const [subcategoriesList, setSubcategoriesList] = useState([]);

    useEffect(() => {
        setSubcategoriesList(localStorage.getItem('selectedCategory'));
    }, [toggleUpdate]);

    const handleClick = (category) => {
        setActiveCategory(category);
        setSubcategories(category.subcategories);
        
        setNewTitle(category.name);
        toggleUpdate();
    };

    if (subcategoriesList) return (
            <div className="catalog-fast-filters">
                {subcategoriesList.map(category => (
                    <Button
                        className={"fast-filter-button"}
                        key={category.categorySlug}
                        onClick={() => handleClick(category)}
                        text={category.name}
                    />
                ))}
            </div>
    );
};

export default Subcategories;
