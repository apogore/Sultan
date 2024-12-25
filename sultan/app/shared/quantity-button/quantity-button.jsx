import React, { useEffect, useState } from "react";
import Button from "@ui/button/button";
import "./quantity-buttons.scss";

const QuantityButtons = ({ quantity, increment, decrement, onChange }) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(quantity !== "" && quantity > 0);
  }, [quantity]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      onChange(value);
    } else if (e.target.value === "") {
      onChange("");
    }
  };

  const handleInputBlur = () => {
    if (quantity === "" || quantity <= 0) {
      onChange(1); 
    }
  };

  return (
    <div className="quantity-buttons">
      <Button
        onClick={decrement}
        text="-"
        className="button-control"
      />
      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className={`quantity-input ${isFilled ? 'filled' : ''}`} // Добавляем класс filled
      />
      <Button
        onClick={increment}
        text="+"
        className="button-control"
      />
    </div>
  );
};

export default QuantityButtons;
