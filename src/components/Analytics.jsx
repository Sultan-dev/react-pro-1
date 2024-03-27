import React from "react";
import Laptop from "../assets/laptop.jpg";
export default function Analytics() {
  return (
    <div className="bg-white h-screen w-full m-auto px-4 py-16">
      <div className="flex lg:flex-row xl:flex-row flex-col justify-center items-center">
        <img src={Laptop} alt="" className="flex-1 w-[500px]" />
        <div className="flex flex-col justify-center flex-1">
          <h1 className="uppercase font-bold text-[#00df90] ">
            Data Analytics Dashboard
          </h1>
          <h1 className="font-bold sm:text-3xl md:text-4xl text-2xl py-2 ">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam
            assumenda cumque repudiandae modi sapiente. Consectetur distinctio
            esse nemo cum quidem eius, expedita corrupti alias dignissimos,
            harum perspiciatis error sit?
          </p>
          <button className="bg-[#00df90] text-black w-fit mx-auto md:mx-0 mt-6 px-8 py-3 rounded-md font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
