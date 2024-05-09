import React, { useState } from "react";
import { Buttons, Label, Amount } from "./Buttons";

function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [activePercentage, setActivePercentage] = useState(null);
  const [customPercentage, setCustomPercentage] = useState("");

  const handleClick = (percentage) => {
    const decimalPercentage = percentage / 100;
    setTipPercentage(decimalPercentage);
    setActivePercentage(percentage);
    setCustomPercentage("");
  };

  const handleCustomPercentage = (e) => {
    const value = parseFloat(e.target.value);
    !isNaN(value) && value >= 0
      ? (setCustomPercentage(value.toString()),
        setTipPercentage(value / 100),
        setActivePercentage(value.toString()))
      : (setCustomPercentage(""),
        setTipPercentage(0),
        setActivePercentage(null));
  };

  const handleReset = () => {
    setBill("");
    setNumPeople("");
    setTipPercentage(0);
    setActivePercentage(null);
    setCustomPercentage("");
  };

  return (
    <>
      <header>
        <img src="../images/logo.svg" alt="SPLITTER" />
      </header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <Label
            value="input-bill"
            placeholder="0"
            setValue={setBill}
            inputValue={bill}
            handleReset={handleReset}
          />
          <h2>Select Tip %</h2>
          <ul>
            <Buttons
              handleClick={handleClick}
              activePercentage={activePercentage}
            />
            <li>
              <input
                type="number"
                placeholder="Custom"
                id="custom-percentage-button"
                className={`custom-input ${
                  activePercentage === customPercentage ? "btn-active" : ""
                }`}
                value={customPercentage}
                onChange={handleCustomPercentage}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCustomPercentage(e)
                }
              />
            </li>
          </ul>
          <h2>Number of People</h2>
          <Label
            value="input-people"
            placeholder="1"
            setValue={setNumPeople}
            inputValue={numPeople}
            handleReset={handleReset}
          />
        </div>
        <div className="result-wrapper">
          <div className="result-txt">
            <Amount
              bill={bill}
              numPeople={numPeople}
              tipPercentage={tipPercentage}
              customPercentage={customPercentage}
            />
          </div>
          <button
            type="button"
            id="reset-button"
            className="reset-button"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
