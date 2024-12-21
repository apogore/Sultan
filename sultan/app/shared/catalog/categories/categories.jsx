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

    useEffect(() => {
        let newCategories = JSON.parse(localStorage.getItem('selectedCategory'));

        if (newCategories !== null && newCategories != '') {
            setActiveCategory(newCategories);
            setSubcategories(newCategories.subcategories);
        };
        console.log(activeCategory);
        console.log(subcategories);
    }, [update]);

    const handleClick = (category) => {
        setActiveCategory(category);
        setSubcategories(category.subcategories);
        localStorage.setItem('selectedCategory', JSON.stringify(category));
        setNewTitle(category.name);
        toggleUpdate();
    };

    if (!activeCategory && !needsFull) return (
        <div className="fast-filters">
            {categories.map(category => (
                <Button
                    className={"fast-filters__button"}
                    key={category.categorySlug}
                    onClick={() => handleClick(category)}
                    text={category.name}
                />
            ))}
        </div>
    );

    if (subcategories && !needsFull) return (
        <div className="fast-filters">
            {subcategories.map(subcategory => (
                <Button
                    className={"fast-filters__button"}
                    key={subcategory.categorySlug}
                    onClick={() => handleClick(subcategory)}
                    text={subcategory.name}
                />
            ))}
        </div>
    );

    if (!activeCategory && needsFull) return (
        <div className="full-fast-filters">
            {categories.map(category => (
                <div key={category.categorySlug} className="full-fast-filters__list">
                    <Button
                        className={"full-fast-filters__list__button"}
                        onClick={() => handleClick(category)}
                        text={category.name}
                    />
                    {category.subcategories && category.subcategories.length > 0
                        ? (<div className="full-fast-filters__list__inner">
                            {category.subcategories.map(subcategory => (
                                    <Button
                                        className={"full-fast-filters__list__inner__button"}
                                        key={subcategory.categorySlug}
                                        onClick={() => handleClick(subcategory)}
                                        text={subcategory.name}
                                    />
                            ))}
                        </div>)
                        : ("")}
                </div>
            ))}
        </div>
    );

    if (subcategories && needsFull) return (
        <div className="full-fast-filters">
            {subcategories.map(category => (
                <div key={category.categorySlug} className="full-fast-filters__list">
                    <Button
                        className={"full-fast-filters__list__button"}
                        onClick={() => handleClick(category)}
                        text={category.name}
                    />
                    {category.subcategories && category.subcategories.length > 0
                        ? (<div className="full-fast-filters__list__inner">
                            {category.subcategories.map(subcategory => (
                                    <Button
                                        className={"full-fast-filters__list__inner__button"}
                                        key={subcategory.categorySlug}
                                        onClick={() => handleClick(subcategory)}
                                        text={subcategory.name}
                                    />
                            ))}
                        </div>)
                        : ("")}
                </div>
            ))}
        </div>
    );
};

export default Categories;
