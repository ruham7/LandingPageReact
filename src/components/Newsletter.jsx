import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="text-white py-16 px-4 w-full">
        <div className="bg-black mx-auto max-w-[1240px] grid lg:grid-cols-3 ">
          <div className="lg:col-span-2 my-2">
            <h1 className="mr-2 font-bold text-xl sm:text-2xl md:text-3xl py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="">
            <div className="py-4 grid md:grid-cols-2 ">
              <input
                type="text"
                className="rounded py-2 w-full text-black "
                placeholder=" Enter your email"
              />
              <button className="bg-[#00df9a] w-[150px] rounded-md font-medium mx-auto py-2 mt-4 md:mt-0 text-black">
                {" "}
                Notify me
              </button>
            </div>
            <p className=" my-6">
              We care about the protection of your data. Read our{" "}
              <span className="text-[#00df9a] underline">Privacy policy.</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
