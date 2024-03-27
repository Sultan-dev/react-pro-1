import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] flex lg:flex-row xl:flex-row flex-col justify-between items-start mx-auto">
        <div className="text-white">
          <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="mx-auto mt-4 lg:mt-0 xl:mt-0">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              className="sm:flex-1 w-full h-12 rounded-md px-2 text-black"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df90] text-black px-8 py-3 rounded-md font-bold">
              Notify me
            </button>
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-white">
              We care about the protection of your data. Read our{" "}
              <span className="text-[#00df90] underline underline-offset-auto">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
