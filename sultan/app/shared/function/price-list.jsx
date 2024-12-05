import React from "react";

const getPriceList = () => {
  const link = document.createElement("a");
  link.href = "/price.txt";
  link.download = "price-list2222222222.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default getPriceList;
