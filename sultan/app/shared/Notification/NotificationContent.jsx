import React from "react";

const NotificationContent = ({ image, text, linkText, onLinkClick }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={image}
        alt="Notification"
        style={{
          width: "50px",
          height: "50px",
          objectFit: "cover",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      <div>
        <p style={{ margin: 0, fontWeight: "bold" }}>{text}</p>
        {linkText && (
          <a
            onClick={onLinkClick}
            style={{
              color: "#007bff",
              textDecoration: "underline",
              cursor: "pointer",
              marginTop: "5px",
              display: "inline-block",
            }}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default NotificationContent;
