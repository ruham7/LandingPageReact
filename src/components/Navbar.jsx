import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between  items-center h-24 text-white px-4 max-w-[1240px] mx-auto">
        <h1 className="p-4 text-3xl w-full font-bold text-[#00df9a]">
          LADIDA.
        </h1>
        <ul className="hidden md:flex ">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className=" p-8 text-3xl w-full font-bold text-[#00df9a]">
            REACT.
          </h1>
          <ul className="px-4 uppercase">
            <li className="p-4 border-b border-b-gray-800">Home</li>
            <li className="p-4 border-b border-b-gray-800">Company</li>
            <li className="p-4 border-b border-b-gray-800">Resources</li>
            <li className="p-4 border-b border-b-gray-800">About</li>
            <li className="p-4 border-b border-b-gray-800">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
