import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black w-full text-white py-6">
      <div className="grid md:grid-cols-3 max-w-[1240px] mx-auto py-4">
        <div className="p-4">
          <h1 className="py-4 text-3xl w-full font-bold text-[#00df9a]">
            LADIDA.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            dolore sapiente impedit ullam aliquid.
          </p>
          <div className="flex flex-row justify-between py-6 text-3xl ">
            <FaDribbbleSquare />
            <FaFacebookSquare />
            <FaGithubSquare />
            <FaInstagram />
            <FaTwitterSquare />
          </div>
        </div>
        <div className="col md:col-span-2">
          <div className="grid grid-cols-4 p-4 lg:text-center">
            <div>
              <p className="py-2 pt-4 text-lg font-bold">Solutions</p>
              <p className="py-2 ">Analytics</p>
              <p className="py-2 ">Marketing</p>
              <p className="py-2 ">Commerce</p>
              <p className="py-2 ">Insights</p>
            </div>
            <div>
              <p className="py-2 pt-4">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
            </div>
            <div>
              <p className="py-2 pt-4">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
            </div>
            <div>
              <p className="py-2 pt-4">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
              <p className="py-2">Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
