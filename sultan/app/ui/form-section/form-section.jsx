import React from "react";
import "./form-section.scss";

const FormSection = ({ title, iconOrText, children }) => {
  return (
    <div className="form-section">
      <div className="form-section-header">
        {iconOrText && (
          <div className="form-section-circle">
            {typeof iconOrText === "string" ? (
              <span className="form-section-text">{iconOrText}</span>
            ) : (
              iconOrText && (
                <img
                  src={iconOrText}
                  alt={`${title} icon`}
                  className="form-section-icon"
                />
              )
            )}
          </div>
        )}
        <h2 className="form-section-title">{title}</h2>
      </div>
      <div className="form-section-body">{children}</div>
    </div>
  );
};

export default FormSection;
