import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <>
      <div className="bg-white w-full py-[10rem] px-4">
        <div className="max-w-[1240px] grid sm:grid-cols-3 gap-8 mx-auto ">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="single"
            />
            <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
            <p className="text-center text-4xl font-bold">$124</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send upto 2GB</p>
            </div>
            <button className="bg-[#00df9a] w-[150px] rounded-md font-medium mx-auto py-2 mt-4 text-black">
              Start Trial
            </button>
          </div>

          <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 sm:my-0 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Double}
              alt="single"
            />
            <h2 className="text-2xl font-bold text-center py-8">Double user</h2>
            <p className="text-center text-4xl font-bold">$124</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send upto 2GB</p>
            </div>
            <button className="bg-black w-[150px] rounded-md font-medium mx-auto py-2 mt-4 text-[#00df9a]">
              Start Trial
            </button>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3.5rem] bg-white"
              src={Triple}
              alt="single"
            />
            <h2 className="text-2xl font-bold text-center py-8">Triple user</h2>
            <p className="text-center text-4xl font-bold">$124</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send upto 2GB</p>
            </div>
            <button className="bg-[#00df9a] w-[150px] rounded-md font-medium mx-auto py-2 mt-4 text-black">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
