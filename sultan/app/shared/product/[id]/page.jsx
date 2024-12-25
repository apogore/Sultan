"use client";
import React, { useEffect, useState } from "react";
import ProductList from "@shared/product-list/product-list.jsx";
import getPriceList from "@functions/price-list";
import Button from "@ui/button/button";
import Accordion from "@ui/accordion/accordion";
import "./page.scss";

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mini-card/product.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const productData = data.find((item) => item.id === parseInt(id));
        if (productData) {
          setProduct(productData);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const addToCart = () => {
    console.log(`Added to cart: ${quantity} units.`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  const renderProductInfo = (label, value) => (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );

  return (
    <div className="product-page">
      <div className="product-informations">
        <div className="product-image">
          <img src={product.image} alt={product.nameRu} />
        </div>
        <div className="product-info">
          <div
            className={`available ${product.amount > 0 ? "in-stock" : "out-of-stock"
              }`}
          >
            {product.amount > 0 ? "В наличии" : "Нет в наличии"}
          </div>

          <p className="product-name">
            <strong>{product.brand.name}</strong> {product.descriptionRu}
          </p>
          <div className="information-grid">
            <div className="quantity-cart-block">
              <p className="price">{(product.price * quantity).toFixed(2)} ₸</p>

              <div className="quantity-buttons">
                <Button
                  onClick={decrementQuantity}
                  text="-"
                  className="button-control"
                />
                <span>{quantity}</span>
                <Button
                  onClick={incrementQuantity}
                  text="+"
                  className="button-control"
                />
              </div>

            </div>
            <Button
              onClick={addToCart}
              text="В корзину"
              icon="/icons/cart.svg"
              className="button-to-cart"
            />

            <Button
              onClick={() => navigator.share({ url: window.location.href })}
              icon="/icons/share.svg"
              className="button-share"
            />
            <p className="delivery-info">
              При покупке от <strong>10 000 ₸ </strong>бесплатная доставка по
              Кокчетаву и области
            </p>
            <Button
              onClick={getPriceList}
              text="Прайс-лист"
              icon={"/icons/download.svg"}
              className="price-list-button"
            />
          </div>

          <Accordion
            className="info-block"
            isAlwaysExpanded={true}
            accordionBody={
              <ul>
                {renderProductInfo("Производитель", product.manufacturer)}
                {renderProductInfo("Бренд", product.brand.name)}
                {renderProductInfo("Артикул", product.article)}
                {renderProductInfo("Штрихкод", product.barcode)}
              </ul>}
          />

          <Accordion
            className="collapsible expanding-description"
            isAlwaysExpanded={false}
            text="Описание"
            accordionBody={
              <p>{product.descriptionRu}</p>
            }
          />

          <hr className="dotted-line" />

          <Accordion
            className="collapsible expanding-characteristics"
            isAlwaysExpanded={false}
            text="Характеристики"
            accordionBody={
              <ul>
                {renderProductInfo("Назначение", product.category.join(", "))}
                {renderProductInfo("Тип", product.shortNameRu)}
                {renderProductInfo("Производитель", product.manufacturer)}
                {renderProductInfo("Бренд", product.brand.name)}
                {renderProductInfo("Артикул", product.article)}
                {renderProductInfo("Штрихкод", product.barcode)}
                {renderProductInfo(
                  "Вес",
                  product.sizeType === "weight" ? `${product.size} г` : "Н/Д"
                )}
                {renderProductInfo(
                  "Объем",
                  product.sizeType === "volume" ? `${product.size} мл` : "Н/Д"
                )}
              </ul>
            }
          />

        </div>
      </div>
      <div className="section cards">
        <ProductList className="product-list-page" />
      </div>
      <div className="section cards">
        <ProductList className="product-list-page" />
      </div>
    </div>
  );
};

export default ProductPage;
