import { useState, useEffect } from 'react';
import Button from "@ui/button/button";
import "./categories.scss";

const Categories = ({ toggleUpdate, setNewTitle }) => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        document.title = "Султан | Каталог";

        const fetchData = async () => {
            const response = await fetch('/catalog/categories.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const fetchedData = await response.json();
            setCategories(fetchedData);
        };
        fetchData();
        localStorage.setItem('selectedCategory', JSON.stringify([]));
    }, []);

    const handleClick = (category) => {
        setActiveCategory(category);
        setSubcategories(category.subcategories);
        localStorage.setItem('selectedCategory', JSON.stringify(category));
        setNewTitle(category.name);
        toggleUpdate();
    };

    if (!activeCategory) return (
            <div className="catalog-fast-filters">
                {categories.map(category => (
                    <Button
                        className={"fast-filter-button"}
                        key={category.categorySlug}
                        onClick={() => handleClick(category)}
                        text={category.name}
                    />
                ))}
            </div>
    );

    if (subcategories) return (
            <div className="catalog-fast-filters">
                {subcategories.map(subcategory => (
                    <Button
                        className={"fast-filter-button"}
                        key={subcategory.name}
                        onClick={() => handleClick(subcategory)}
                        text={subcategory.name}
                    />
                ))}
            </div>
    )
};

export default Categories;
