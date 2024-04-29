import React from "react";
import Image from "next/image";
import logo from "../images/card-logo.svg"

export const Card = ({ cardInput }) => {
  console.log(cardInput.user)
  return (
    <div className="grid grid-cols-1 gap-8  z-10 lg:grid-cols-2 text-slate-100 lg:ml-8 ">
      <div className="mt-2 lg:mt-10 mx-1  md:flex md:justify-between lg:grid lg:grid-cols-1 lg:gap-8">
      <article className="front-card p-5 flex flex-col justify-between ">
       <Image src={logo} className="w-20 lg:w-28" />

        <div>
          <h2 className="text-sm lg:text-2xl tracking-widest">{cardInput.cardNum}</h2>
          <ul className="flex justify-between p-2 text-sm lg:text-2xl">
            <li  className="transition-opacity ease-in duration-700 uppercase tracking-wide" lang="tr">{cardInput.user}</li>
            <li>{cardInput.date}</li>
          </ul>
        </div>
        {/* <p className="text-[50%] xl:text-sm text-start ">{cardInput.cardNum}</p>
        <p>{cardInput.user}</p> */}
      </article>
      <article className="back-card  relative text-black ml-4 min-[500px]:ml-auto xl:ml-16">
        <p className="absolute right-5 lg:right-10  top-36 text-lg lg:text-xl">{cardInput.ccv}</p>
      </article>
      </div>
    </div>
  );
};
