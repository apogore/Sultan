import React from "react";

const Availability = ({ amount }) => {
  const availabilityClass = amount > 0 ? "in-stock" : "out-of-stock";
  const availabilityText = amount > 0 ? "В наличии" : "Нет в наличии";

  return <div className={`available ${availabilityClass}`}>{availabilityText}</div>;
};

export default Availability;