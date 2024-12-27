import React from "react";

const Availability = ({ amount }) => {
  const availabilityTextRu  = amount > 0 ? "in-stock" : "out-of-stock";
  const availabilityTextEng = amount > 0 ? "В наличии" : "Нет в наличии";
  return <div className={`available ${availabilityTextRu }`}>{availabilityTextEng}</div>;
};

export default Availability;
