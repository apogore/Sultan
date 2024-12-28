import React from "react";
import "./input-field.scss";

const InputField = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  validationRules = {},
  aboveLabel,
  className = "",
}) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (validationRules.onlyNumbers && !/^\d*$/.test(inputValue)) {
      return;
    }

    if (
      validationRules.onlyLetters &&
      !/^[a-zA-Zа-яА-ЯёЁ\s]*$/.test(inputValue)
    ) {
      return;
    }

    if (
      validationRules.customPattern &&
      !validationRules.customPattern.test(inputValue)
    ) {
      return;
    }

    onChange(inputValue);
  };

  return (
    <div className="input-field">
      {aboveLabel && <span className="input-above-label">{aboveLabel}</span>}
      {label && <label className="input-label">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default InputField;
