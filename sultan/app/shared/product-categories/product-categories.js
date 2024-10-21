"use client";
import React from "react";
import "./product-categories.css";

const ProductCategories = () => {
    const categoryButtonClick = () => {
        window.location.href = window.location.href;
    }

    return (
        <div className="product-categories">
            <h2>Категории <span>товаров</span></h2>

            <p>10 000+ ходовых позиций по специальным ценам</p>

            <ul className="product-categories-list">
                <li>
                    <button type="button" className="product-categories-button" id="household-chemicals" onClick={categoryButtonClick}>
                        <div className="product-categories-button-background">
                            <img className="household-chemicals-img" src="/household_chemicals.png" alt="Бытовая химия" />
                        </div>
                        <p>Бытовая химия</p>
                    </button>
                </li>

                <li>
                    <button type="button" className="product-categories-button" id="cosmetics" onClick={categoryButtonClick}>
                        <div className="product-categories-button-background">
                            <img className="cosmetics-img" src="/cosmetics.png" alt="Косметика и гигиена" />
                        </div>
                        <p>Косметика и гигиена</p>
                    </button>
                </li>

                <li>
                    <button type="button" className="product-categories-button" id="household-goods" onClick={categoryButtonClick}>
                        <div className="product-categories-button-background">
                            <img className="household-goods-img" src="/household_goods.png" alt="Товары для дома" />
                        </div>
                        <p>Товары для дома</p>
                    </button>
                </li>

                <li>
                    <button type="button" className="product-categories-button" id="mom-and-child" onClick={categoryButtonClick}>
                        <div className="product-categories-button-background">
                            <img className="mom-and-child-img" src="mom_and_child.png" alt="Товары для детей и мам" />
                        </div>
                        <p>Товары для детей и мам</p>
                    </button>
                </li>

                <li>
                    <button type="button" className="product-categories-button" id="kitchenware" onClick={categoryButtonClick}>
                        <div className="product-categories-button-background">
                            <img className="kitchenware-img" src="kitchenware.png" alt="Посуда" />
                        </div>
                        <p>Посуда</p>
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default ProductCategories;