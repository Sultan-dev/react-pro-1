import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] my-auto w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df90] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="sm:text-6xl md:text-7xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex flex-row gap-2 justify-center items-center">
          <p className="sm:text-4xl md:text-5xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="sm:text-4xl md:text-5xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </div>
        <p className="mt-6 md:text-2xl text-xl font-bold text-gray-600">
          Monitor your data analytics to increase revenue for BTB, BTC, SASS
          platforms.
        </p>
        <button className="bg-[#00df90] text-white w-fit  mx-auto mt-6 px-8 py-3 rounded-md font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}
