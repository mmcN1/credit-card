"use client";

import { Card } from "./component/Card";
import { InputForms } from "./component/InputForms";
import { useState } from "react";

export default function Home() {
  const [cardInput, setCardInput] = useState({
    cardNum: "",
    user: "",
    date: "",
    ccv: ""
  });

  const handleChange = (name, input) => {
    setCardInput((prevState) => ({
      ...prevState,
      [name]: input,
    }));
    console.log(cardInput);
  };

  return (
    <main className="flex  min-h-screen justify-end static">
      <div className="flex flex-col lg:flex-row justify-center w-full ">
        <Card cardInput={cardInput} />
        <div className="flex flex-col justify-center items-center w-full z-0 bg-slate-100  ">
          <InputForms cardInput={cardInput} handleChange={handleChange} />
        </div>
      </div>
    </main>
  );
}
