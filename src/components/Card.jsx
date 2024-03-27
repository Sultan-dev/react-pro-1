import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export default function Card() {
  return (
    <div className="bg-white w-full py-40 px-4">
      <div className="max-w-[1240px] mx-auto flex md:flex-row flex-col gap-8">
        <div className="w-full p-4 my-4 shadow-xl rounded-lg flex flex-col items-center gap-4 justify-start hover:scale-105 duration-300">
          <img className="w-20 bg-transparent -mt-4" src={Single} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium flex flex-col gap-2 mt-8 w-full">
            <p className="border-b py-2 mx-8">500 GB Storage</p>
            <p className="border-b py-2 mx-8">1 Granted User</p>
            <p className="border-b py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df90] text-black px-8 py-3 rounded-md font-bold">
            Start Trail
          </button>
        </div>
        <div className="bg-gray-100 w-full p-4 my-8 md:my-0 shadow-xl rounded-lg flex flex-col items-center gap-4 justify-start hover:scale-105 duration-300">
          <img className="w-20 bg-transparent -mt-8" src={Double} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium flex flex-col gap-2 mt-8 w-full">
            <p className="border-b py-2 mx-8">500 GB Storage</p>
            <p className="border-b py-2 mx-8">1 Granted User</p>
            <p className="border-b py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df90] px-8 py-3 rounded-md font-bold">
            Start Trail
          </button>
        </div>
        <div className="w-full p-4 my-4 shadow-xl rounded-lg flex flex-col items-center gap-4 justify-start hover:scale-105 duration-300">
          <img className="w-20 bg-transparent -mt-4" src={Triple} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium flex flex-col gap-2 mt-8 w-full">
            <p className="border-b py-2 mx-8">500 GB Storage</p>
            <p className="border-b py-2 mx-8">1 Granted User</p>
            <p className="border-b py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df90] text-black px-8 py-3 rounded-md font-bold">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}
