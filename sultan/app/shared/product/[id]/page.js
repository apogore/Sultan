"use client";
import React, { useEffect, useState } from "react";
import "./page.css"; // Импорт стилей
import Button from "../../../ui/button/button"; 
import ProductCategories from "../../../shared/product-categories/product-categories";

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);
  const [isCharacteristicsExpanded, setIsCharacteristicsExpanded] = useState(true);
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
      <div className="product-image">
        <img src={image} alt={nameRu} />
      </div>
      <div className="product-info">
        <h1>{nameRu}</h1>

        <div className="quantity-cart-block">
          <p className="price">{(price * quantity).toFixed(2)} ₸</p>
          <div className="quantity-control">
            <Button onClick={decrementQuantity} text={"-"} className="button-control" />
            <span>{quantity}</span>
            <Button onClick={incrementQuantity} text={"+"} className="button-control" />
          </div>
          <Button
            onClick={addToCart}
            text="В корзину"
            icon={"/download.svg"}
            className="button-to-cart"
          />
        </div>

        <div className="info-block">
          {renderProductInfo("Производитель", manufacturer)}
          {renderProductInfo("Бренд", brand.name)}
          {renderProductInfo("Артикул", article)}
          {renderProductInfo("Штрихкод", barcode)}
        </div>

        <div className="info-block collapsible">
          <h2 onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
            Описание {isDescriptionExpanded ? "▲" : "▼"}
          </h2>
          {isDescriptionExpanded && <p>{descriptionRu}</p>}
        </div>

        <div className="info-block collapsible">
          <h2 onClick={() => setIsCharacteristicsExpanded(!isCharacteristicsExpanded)}>
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
              {renderProductInfo("Вес", sizeType === "weight" ? `${size} г` : "Н/Д")}
              {renderProductInfo("Объем", sizeType === "volume" ? `${size} мл` : "Н/Д")}
            </>
          )}
         
        </div>
  
      </div>
    </div>
  );
};

export default ProductPage;
