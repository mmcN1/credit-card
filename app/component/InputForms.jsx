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
      <label className="flex flex-col items-center md:p-5">
        Card Name
        <input
          className="m-4 rounded bg-slate-200 p-1"
          type="text"
          placeholder="Mehmet Temiz"
          onChange={(e) => handleChange("user", e.target.value)}
        />
      </label>
      <label className="flex flex-col items-center md:p-5">
        Card Number
        <input
          className="m-4 rounded bg-slate-200 p-1"
          inputMode="numeric"
          maxLength={19}
          value={formatCreditCardNumber(cardInput.cardNum)}
          onChange={(e) => handleChange("cardNum", e.target.value)}
          type="text"
          placeholder="0000 0000 0000 0000"
        />
      </label>
      <div className="flex w-1/2 lg:w-1/3 justify-around  ">
        <label className="flex flex-col items-center ">
          Year
          <input
            className="w-3/4 lg:w-2/4 rounded bg-slate-200 "
            type="text"
            value={formatCreditDate(cardInput.date)}
            maxLength={5}
            onChange={(e) => handleChange("date", e.target.value)}
            placeholder="MM/YY"
          />
        </label>
        <label className="flex flex-col items-center">
          CCV
          <input
            className="w-3/4 lg:w-2/4 items-center rounded bg-slate-200 "
            type="text"
            value={formatterCcv(cardInput.ccv)}
            maxLength={3}
            placeholder="CCV"
            onChange={(e) => handleChange("ccv", e.target.value)}
          />
        </label>
      </div>
    </>
  );
};
