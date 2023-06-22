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
          <div className="grid grid-cols-4 p-4 lg:text-center text-gray-400 font-medium">
            <div>
              <p className="py-2 pt-4 text-lg font-bold text-gray-200">
                Solutions
              </p>
              <p className="py-2 ">Analytics</p>
              <p className="py-2 ">Marketing</p>
              <p className="py-2 ">Commerce</p>
              <p className="py-2 ">Insights</p>
            </div>
            <div>
              <p className="py-2 pt-4 text-lg font-bold text-gray-200">
                Support
              </p>
              <p className="py-2">Pricing</p>
              <p className="py-2">Documentation</p>
              <p className="py-2">Guides</p>
              <p className="py-2">API Status</p>
            </div>
            <div>
              <p className="py-2 pt-4 text-lg font-bold text-gray-200">
                Company
              </p>
              <p className="py-2">About</p>
              <p className="py-2">Blog</p>
              <p className="py-2">Jobs</p>
              <p className="py-2">Press</p>
              <p className="py-2">Partners</p>
            </div>
            <div>
              <p className="py-2 pt-4 text-lg font-bold text-gray-200">Legal</p>
              <p className="py-2">Claim</p>
              <p className="py-2">Policy</p>
              <p className="py-2">Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
