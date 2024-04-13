import React from "react";

export const InputForms = ({ cardInput, handleChange }) => {
  const formatCreditCardNumber = (input) => {
    return input
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };
  const formatCreditDate = (input) => {
    return input
      .replace(
        /[^0-9]/g,
        "" // To allow only numbers
      )
      .replace(
        /^([2-9])$/g,
        "0$1" // To handle 3 > 03
      )
      .replace(
        /^(1{1})([3-9]{1})$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^0{1,}/g,
        "0" // To handle 00 > 0
      )
      .replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
        "$1/$2" // To handle 113 > 11/3
      );
  };

  const formatterCcv = (input) => {
    return input.replace(/[^0-9]/g, "");
  };

  console.log(
    typeof Math.round(cardInput.date.slice(0, 1)) +
      ": " +
      Math.round(cardInput.date.slice(0, 2))
  );

  return (
    <>
      <label className="flex flex-col">
        Card Name
        <input
          className="m-4 rounded bg-slate-200 p-1"
          type="text"
          placeholder="0000 0000 0000 0000"
          onChange={(e) => handleChange("user", e.target.value)}
        />
      </label>
      <label className="flex flex-col">
        Card Number
        <input
          className="m-4 rounded bg-slate-200 p-1"
          inputMode="numeric"
          maxLength={19}
          value={formatCreditCardNumber(cardInput.cardNum)}
          onChange={(e) => handleChange("cardNum", e.target.value)}
          type="text"
          placeholder="Mehmet Temiz"
        />
      </label>
      <div className="flex w-1/2 justify-around">
        <input
          className="w-1/4  rounded bg-slate-200 p-1"
          type="text"
          value={formatCreditDate(cardInput.date)}
          maxLength={5}
          onChange={(e) => handleChange("date", e.target.value)}
          placeholder="MM/YY"
        />
        <input
          className="w-1/4  rounded bg-slate-200 p-1"
          type="text"
          value={formatterCcv(cardInput.ccv)}
          maxLength={3}
          placeholder="CCV"
          onChange={(e) => handleChange("ccv", e.target.value)}
        />
      </div>
    </>
  );
};
