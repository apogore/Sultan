import React from "react";
import "./info-block.scss";

const InfoBlock = ({ iconOrText, text }) => {
  const isImage = (url) => {
    return (
      url &&
      (url.startsWith("http") || url.startsWith("/") || url.includes("."))
    );
  };

  return (
    <div className="info-block">
      <div className="info-icon-wrapper">
        {isImage(iconOrText) ? (
          <img src={iconOrText} alt="icon" className="info-icon" />
        ) : (
          <span className="info-icon-text">{iconOrText}</span>
        )}
      </div>
      <p className="info-text">{text}</p>
    </div>
  );
};

export default InfoBlock;
