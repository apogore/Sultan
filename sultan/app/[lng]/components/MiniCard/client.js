"use client";

import React, { useState } from "react";
import { MiniCardBase } from "./MiniCardBase";
import { useTranslation } from "../../../i18n/client";
import { Button } from "../Button";

export const MiniCard = ({ lng, key, product, onClick }) => {
  const { t } = useTranslation(lng, "mini-card");
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleCardClick = () => {
    console.log(`Товар ${key} кликнут`);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    console.log("Товар добавлен в корзину");
  };

  return (
    <div>
      <MiniCardBase t={t} key={key} lng={lng} product={product} onClick={handleCardClick} />
      {!isAddedToCart && (
        <Button
          onClick={handleAddToCart}
          text="В корзину"
          icon="/cart.svg"
          className="mini-card__button"
        />
      )}
      {isAddedToCart && <p>Товар добавлен в корзину!</p>}
    </div>
  );
};