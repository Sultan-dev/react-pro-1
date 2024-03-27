import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpened, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!isMenuOpened);
  }

  return (
    <div className="flex flex-row justify-between items-center px-4 mx-auto max-w-[1240px] h-24">
      <h1 className="flex-1 text-3xl font-bold text-[#00df90]">React.</h1>
      <ul className="hidden md:flex flex-row gap-4 m-3 text-white uppercase">
        <li className="p-2">Home</li>
        <li className="p-2">Company</li>
        <li className="p-2">Resources</li>
        <li className="p-2">About</li>
        <li className="p-2">Contact</li>
      </ul>
      <div onClick={handleMenu} className="md:hidden">
        {isMenuOpened ? (
          <AiOutlineClose color="white" size={20} />
        ) : (
          <AiOutlineMenu color="white" size={20} />
        )}
      </div>
      <div
        className={
          isMenuOpened
            ? "ease-in-out duration-500 fixed top-0 left-0 h-full w-[50%] border-r border-r-gray-900 bg-[#000300] "
            : "fixed hidden"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df90] m-4">React.</h1>

        <ul className="p-4 uppercase text-white">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
}
