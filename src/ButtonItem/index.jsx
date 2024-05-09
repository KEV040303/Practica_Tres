import React from "react";

export const ButtonItem = ({ value, handleClick, isActive }) => {
  return (
    <li>
      <button
        className={`percentage-button ${isActive ? "btn-active" : ""}`}
        onClick={() => handleClick(value)}
      >
        {value}%
      </button>
    </li>
  );
};

export const LabelItem = ({
  value,
  placeholder,
  setValue,
  inputValue,
  handleReset,
}) => {
  const handleChange = (e) => {
    setValue(parseFloat(e.target.value));
  };

  return (
    <label htmlFor={value}>
      <input
        className={`${value} ${
          inputValue === 0 && value === "input-people" ? "input-invalid" : ""
        }`}
        id={value}
        type="number"
        min="0"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handleReset()}
        value={inputValue === "" ? "" : inputValue}
      />
    </label>
  );
};

export const AmountItem = ({
  value,
  amountLabel,
  personLabel,
  amountValue,
}) => {
  return (
    <div className={value}>
      <div>
        <h2>{amountLabel}</h2>
        <p>{personLabel}</p>
      </div>
      <h3>${amountValue.toFixed(2)}</h3>
    </div>
  );
};
