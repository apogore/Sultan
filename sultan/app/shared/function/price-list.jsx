import React from "react";



const handleDownload = () => {
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
  };
  export default handleDownload;