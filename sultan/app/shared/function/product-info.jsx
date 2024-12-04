import React from "react";
import Button from "@ui/button/button";

const ProductInfo = ({
  product,
  quantity,
  incrementQuantity,
  decrementQuantity,
  addToCart,
  isDescriptionExpanded,
  setIsDescriptionExpanded,
  isCharacteristicsExpanded,
  setIsCharacteristicsExpanded,
}) => {
  const renderProductInfo = (label, value) => (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );

  return (
    <div className="product-info">
      <div className={`available ${product.amount > 0 ? "in-stock" : "out-of-stock"}`}>
        {product.amount > 0 ? "В наличии" : "Нет в наличии"}
      </div>

      <p>
        <strong>{product.brand.name}</strong> {product.descriptionRu}
      </p>
      <div className=" product-info__characteristics">
        <div className="quantity-cart-block">
          <p className="price">{(product.price * quantity).toFixed(2)} ₸</p>
          <div className="quantity-control">
            <Button onClick={decrementQuantity} text="-" className="button-control" />
            <span>{quantity}</span>
            <Button onClick={incrementQuantity} text="+" className="button-control" />
          </div>
          <div className="action-buttons">
            <Button onClick={addToCart} text="В корзину" icon="/cart.svg" className="button-to-cart" />
          </div>
        </div>

        <div className="action-buttons">
          <Button onClick={() => navigator.share({ url: window.location.href })} icon="/share.svg" className="button-share" />
          <p className="delivery-info">
            При покупке от <strong>10 000 ₸ </strong>бесплатная доставка по Кокчетаву и области
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
      </div>
      <div className="info-block">
        {renderProductInfo("Производитель", product.manufacturer)}
        {renderProductInfo("Бренд", product.brand.name)}
        {renderProductInfo("Артикул", product.article)}
        {renderProductInfo("Штрихкод", product.barcode)}
      </div>

      <div className="info-block collapsible expanding-description">
        <Button
          onClick={() =>
            setIsDescriptionExpanded(
              (isDescriptionExpanded) => !isDescriptionExpanded
            )
          }
          className="expanding-info-button"
          text="Описание"
          icon={
            isDescriptionExpanded
              ? "/icons/polygon_up.svg"
              : "/icons/polygon_down.svg"
          }
        />

        {isDescriptionExpanded && <p>{product.descriptionRu}</p>}
      </div>

      <hr className="dotted-line" />

      <div className="info-block collapsible">
        <Button
          onClick={() =>
            setIsCharacteristicsExpanded(
              (isCharacteristicsExpanded) => !isCharacteristicsExpanded
            )
          }
          className="expanding-info-button"
          text="Характеристики"
          icon={
            isCharacteristicsExpanded
              ? "/icons/polygon_up.svg"
              : "/icons/polygon_down.svg"
          }
        />

        {isCharacteristicsExpanded && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
