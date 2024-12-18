import React from "react";
import "./Dynamicprice.scss";

const DynamicPrice = ({ price, quantity }) => {
  return <p className="price">{(price * quantity).toFixed(2)} ₸</p>;
};

export default DynamicPrice;
