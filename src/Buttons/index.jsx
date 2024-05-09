import React from "react";
import { ButtonItem, LabelItem, AmountItem } from "../ButtonItem";

const PERCENTAGE_VALUES = [5, 10, 15, 25, 50];

export const Buttons = ({ handleClick, activePercentage }) => {
  return (
    <>
      {PERCENTAGE_VALUES.map((value) => (
        <ButtonItem
          key={value}
          value={value}
          handleClick={handleClick}
          isActive={activePercentage === value.toString()}
        />
      ))}
    </>
  );
};

export const Label = ({
  value,
  placeholder,
  setValue,
  inputValue,
  handleReset,
}) => {
  return (
    <>
      <LabelItem
        value={value}
        placeholder={placeholder}
        setValue={setValue}
        inputValue={inputValue}
        handleReset={handleReset}
      />
    </>
  );
};

const calculateTipAndTotal = (bill, numPeople, tipPercentage) => {
  if (
    bill === "" ||
    numPeople === "" ||
    numPeople === 0 ||
    tipPercentage === 0
  ) {
    return [0, 0];
  }

  const billPerPerson = bill / numPeople;
  const tipAmount = billPerPerson * tipPercentage;
  const total = billPerPerson + tipAmount;
  const tipPerPerson = tipAmount;
  const totalPerPerson = total;

  return [tipPerPerson, totalPerPerson];
};

export const Amount = ({
  bill,
  numPeople,
  tipPercentage,
  customPercentage,
}) => {
  const [tipPerPerson, totalPerPerson] = calculateTipAndTotal(
    bill,
    numPeople,
    tipPercentage
  );

  const amountClasses = ["text-amount", "total-amount"];
  const amountLabels = ["Tip Amount", "Total"];
  const personLabel = "/ person";
  const amountValues = [tipPerPerson, totalPerPerson];

  return (
    <>
      {amountClasses.map((amountClass, index) => (
        <AmountItem
          key={index}
          value={amountClass}
          amountLabel={amountLabels[index]}
          personLabel={personLabel}
          amountValue={amountValues[index]}
        />
      ))}
    </>
  );
};
