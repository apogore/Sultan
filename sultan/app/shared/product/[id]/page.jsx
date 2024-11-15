"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import Button from "../../../ui/button/button";
import ProductList from "../../../shared/product-list/product-list.jsx";

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);
  const [isCharacteristicsExpanded, setIsCharacteristicsExpanded] =
    useState(true);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
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

  const {
    image,
    nameRu,
    price,
    manufacturer,
    brand,
    article,
    barcode,
    descriptionRu,
    category,
    shortNameRu,
    sizeType,
    size,
  } = product;

  const renderProductInfo = (label, value) => (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );

  return (
    <div className="product-page">
      <div className="product-page-desktop">
        <div className="product-informations">
          <div className="product-image">
            <img src={image} alt={nameRu} />
          </div>
          <div className="product-info">
            <p>
              <strong>{brand.name}</strong> {descriptionRu}
            </p>

            <div className="quantity-cart-block">
              <p className="price">{(price * quantity).toFixed(2)} ₸</p>
              <div className="quantity-control">
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
              <div className="action-buttons">
                <Button
                  onClick={addToCart}
                  text="В корзину"
                  icon="/cart.svg"
                  className="button-to-cart"
                />
              </div>
            </div>

            <div className="action-buttons">
              <Button
                onClick={() => navigator.share({ url: window.location.href })}
                icon="/share.svg"
                className="button-share"
              />
              <p className="delivery-info">
                При покупке от <strong>10 000 ₸ </strong>бесплатная доставка по
                Кокчетаву и области
              </p>
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/price.txt";
                  link.download = "price-list.txt";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                text="Прайс-лист"
                icon={"/download.svg"}
                className="price-list-button"
              />
            </div>

            <div className="info-block">
              {renderProductInfo("Производитель", manufacturer)}
              {renderProductInfo("Бренд", brand.name)}
              {renderProductInfo("Артикул", article)}
              {renderProductInfo("Штрихкод", barcode)}
            </div>

            <div className="info-block collapsible">
              <h2
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                Описание {isDescriptionExpanded ? "▲" : "▼"}
              </h2>
              {isDescriptionExpanded && <p>{descriptionRu}</p>}
            </div>
            <hr className="dotted-line" />
            <div className="info-block collapsible">
              <h2
                onClick={() =>
                  setIsCharacteristicsExpanded(!isCharacteristicsExpanded)
                }
              >
                Характеристики {isCharacteristicsExpanded ? "▲" : "▼"}
              </h2>
              {isCharacteristicsExpanded && (
                <>
                  {renderProductInfo("Назначение", category.join(", "))}
                  {renderProductInfo("Тип", shortNameRu)}
                  {renderProductInfo("Производитель", manufacturer)}
                  {renderProductInfo("Бренд", brand.name)}
                  {renderProductInfo("Артикул", article)}
                  {renderProductInfo("Штрихкод", barcode)}
                  {renderProductInfo(
                    "Вес",
                    sizeType === "weight" ? `${size} г` : "Н/Д"
                  )}
                  {renderProductInfo(
                    "Объем",
                    sizeType === "volume" ? `${size} мл` : "Н/Д"
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="section cards">
          <ProductList className="product-list-page" />
        </div>
        <div className="section cards">
          <ProductList className="product-list-page" />
        </div>
      </div>
      <div className="product-page-mobile">
        <div className="product-informations">
          <div className="product-image">
            <img src={image} alt={nameRu} />
          </div>
          <div className="product-info">
            <h1>{nameRu}</h1>

            <div className="quantity-cart-block">
              <p className="price">{(price * quantity).toFixed(2)} ₸</p>
              <div className="quantity-control">
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
            <div className="action-buttons">
              <Button
                onClick={addToCart}
                text="В корзину"
                icon="/cart.svg"
                className="button-to-cart"
              />
              <Button
                onClick={() => navigator.share({ url: window.location.href })}
                icon="/share.svg"
                className="button-share"
              />
            </div>
            <div className="information">
              При покупке от <strong>10 000 ₸ </strong>бесплатная доставка по
              Кокчетаву и области
            </div>
            <div className="action-buttons">
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/price.txt";
                  link.download = "price-list.txt";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                text="Прайс-лист"
                icon={"/download.svg"}
                className="price-list-button"
              />
            </div>

            <div className="info-block">
              {renderProductInfo("Производитель", manufacturer)}
              {renderProductInfo("Бренд", brand.name)}
              {renderProductInfo("Артикул", article)}
              {renderProductInfo("Штрихкод", barcode)}
            </div>
            <hr className="dotted-line" />
            <div className="info-block collapsible">
              <h2
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                Описание {isDescriptionExpanded ? "▲" : "▼"}
              </h2>
              {isDescriptionExpanded && <p>{descriptionRu}</p>}
            </div>

            <div className="info-block collapsible">
              <h2
                onClick={() =>
                  setIsCharacteristicsExpanded(!isCharacteristicsExpanded)
                }
              >
                Характеристики {isCharacteristicsExpanded ? "▲" : "▼"}
              </h2>
              {isCharacteristicsExpanded && (
                <>
                  {renderProductInfo("Назначение", category.join(", "))}
                  {renderProductInfo("Тип", shortNameRu)}
                  {renderProductInfo("Производитель", manufacturer)}
                  {renderProductInfo("Бренд", brand.name)}
                  {renderProductInfo("Артикул", article)}
                  {renderProductInfo("Штрихкод", barcode)}
                  {renderProductInfo(
                    "Вес",
                    sizeType === "weight" ? `${size} г` : "Н/Д"
                  )}
                  {renderProductInfo(
                    "Объем",
                    sizeType === "volume" ? `${size} мл` : "Н/Д"
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="section-cards">
          <ProductList className="product-list" />
        </div>
        <div className="section-cards">
          <ProductList className="product-list" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
