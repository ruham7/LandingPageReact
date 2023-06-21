import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2 text-sm md:text-lg">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-base">
              Fast, flexible financing for{" "}
              <span className="font-bold ">Ladida</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
