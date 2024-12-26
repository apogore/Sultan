import React from "react";
import "./DynamicPrice.scss";

const DynamicPrice = ({ price, quantity }) => {
  return <p className="price">{(price * quantity).toFixed(2)} ₸</p>;
};

export default DynamicPrice;
