import React from "react";
import Image from "next/image";
import logo from "../images/card-logo.svg"

export const Card = ({ cardInput }) => {
  return (
    <div className="grid grid-cols-1 gap-8  z-10 lg:grid-cols-2 text-slate-100">
      <div className="mt-10 mx-5">
      <article className="front-card p-5 flex flex-col justify-between ">
       <Image src={logo} className="w-20 lg:w-28" />

        <div>
          <h2 className="text-sm lg:text-2xl tracking-widest">{cardInput.cardNum}</h2>
          <ul className="flex justify-between p-2 text-sm lg:text-2xl">
            <li>{cardInput.user}</li>
            <li>{cardInput.date}</li>
          </ul>
        </div>
        {/* <p className="text-[50%] xl:text-sm text-start ">{cardInput.cardNum}</p>
        <p>{cardInput.user}</p> */}
      </article>
      <article className="back-card text-black">
        <p>{cardInput.ccv}</p>
      </article>
      </div>
    </div>
  );
};
