"use client";
import React, { useEffect, useState } from "react";
import "./page.scss";
import Button from "../../../ui/button/button";
import ProductList from "../../../shared/product-list/product-list.jsx";
import handleDownload from "../../function/price-list";
import ProductInfo from "../../function/product-info";
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
            <img src={product.image} alt={product.nameRu} />
          </div>
          <div className="product-info">
            <div
              className={`available ${
                product.amount > 0 ? "in-stock" : "out-of-stock"
              }`}
            >
              {product.amount > 0 ? "В наличии" : "Нет в наличии"}
            </div>

            <p>
              <strong>{product.brand.name}</strong> {product.descriptionRu}
            </p>

            <div className="quantity-cart-block">
              <p className="price">{(product.price * quantity).toFixed(2)} ₸</p>
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
              <ul>
                {renderProductInfo("Производитель", product.manufacturer)}
                {renderProductInfo("Бренд", product.brand.name)}
                {renderProductInfo("Артикул", product.article)}
                {renderProductInfo("Штрихкод", product.barcode)}
              </ul>
            </div>

            <div className="info-block collapsible">
              <h2
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                Описание {isDescriptionExpanded ? "▲" : "▼"}
              </h2>
              {isDescriptionExpanded && <p>{product.descriptionRu}</p>}
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
                  <ul>
                    {renderProductInfo(
                      "Назначение",
                      product.category.join(", ")
                    )}
                    {renderProductInfo("Тип", product.shortNameRu)}
                    {renderProductInfo("Производитель", product.manufacturer)}
                    {renderProductInfo("Бренд", product.brand.name)}
                    {renderProductInfo("Артикул", product.article)}
                    {renderProductInfo("Штрихкод", product.barcode)}
                    {renderProductInfo(
                      "Вес",
                      product.sizeType === "weight"
                        ? `${product.size} г`
                        : "Н/Д"
                    )}
                    {renderProductInfo(
                      "Объем",
                      product.sizeType === "volume"
                        ? `${product.size} мл`
                        : "Н/Д"
                    )}
                  </ul>
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
            <img src={product.image} alt={product.nameRu} />
          </div>
          <div className="product-info">
            <h1>{product.nameRu}</h1>

            <div className="quantity-cart-block">
              <p className="price">{(product.price * quantity).toFixed(2)} ₸</p>
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
              <handleDownload> </handleDownload>
            </div>

            <div className="info-block">
              <ul>
                {renderProductInfo("Производитель", product.manufacturer)}
                {renderProductInfo("Бренд", product.brand.name)}
                {renderProductInfo("Артикул", product.rticle)}
                {renderProductInfo("Штрихкод", product.barcode)}
              </ul>
            </div>
            <hr className="dotted-line" />
            <div className="info-block collapsible">
              <h2
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                Описание {isDescriptionExpanded ? "▲" : "▼"}
              </h2>
              {isDescriptionExpanded && <p>{product.descriptionRu}</p>}
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
                  <ul>
                    {renderProductInfo(
                      "Назначение",
                      product.category.join(", ")
                    )}
                    {renderProductInfo("Тип", product.shortNameRu)}
                    {renderProductInfo("Производитель", product.manufacturer)}
                    {renderProductInfo("Бренд", product.brand.name)}
                    {renderProductInfo("Артикул", product.article)}
                    {renderProductInfo("Штрихкод", product.barcode)}
                    {renderProductInfo(
                      "Вес",
                      product.sizeType === "weight"
                        ? `${product.size} г`
                        : "Н/Д"
                    )}
                    {renderProductInfo(
                      "Объем",
                      product.sizeType === "volume"
                        ? `${product.size} мл`
                        : "Н/Д"
                    )}
                  </ul>
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
