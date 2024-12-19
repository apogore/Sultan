import React from "react";
import "./notification.scss";

const Notification = ({ image, text, linkText, onLinkClick, onClose, style }) => {
  return (
    <div className="notification" style={style}>
      <button className="notification__close" onClick={onClose}>
        ✕
      </button>
      <img src={image} alt="Product" className="notification__image" />
      <div className="notification__content">
        <p className="notification__text">{text}</p>
        {linkText && (
          <a className="notification__link" onClick={onLinkClick}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Notification;
