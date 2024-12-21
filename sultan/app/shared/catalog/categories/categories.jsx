import { useState, useEffect } from 'react';
import Button from "@ui/button/button";
import "./categories.scss";

const Categories = ({ toggleUpdate, setNewTitle, update, needsFull }) => {
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

    if (!activeCategory && !needsFull) return (
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

    if (subcategories && !needsFull) return (
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
    );

    if (!activeCategory && needsFull) return (
        <ul className="fast-filters-list">
            {categories.map(category => (
                <li key={category.categorySlug} onClick={() => handleClick(category)}>
                    {category.name}
                    {category.subcategories && category.subcategories.length > 0
                        ? (<ul>
                            {category.subcategories.map(subcategory => (
                            <li key={subcategory.categorySlug} onClick={() => handleClick(subcategory)}>{subcategory.name}</li>
                        ))}
                        </ul>)
                        : ("")}
                </li>
            ))}
        </ul>
    );

    if (subcategories && needsFull) return (
        <ul className="fast-filters-list">
            {subcategories.map(category => (
                <li key={category.categorySlug} onClick={() => handleClick(category)}>
                    {category.name}
                    {category.subcategories && category.subcategories.length > 0
                        ? (<ul>
                            {category.subcategories.map(subcategory => (
                            <li key={subcategory.categorySlug} onClick={() => handleClick(subcategory)}>{subcategory.name}</li>
                        ))}
                        </ul>)
                        : ("")}
                </li>
            ))}
        </ul>
    );
};

export default Categories;
