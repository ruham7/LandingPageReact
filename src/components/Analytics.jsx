import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate debitis voluptatem natus qui quaerat asperiores
              provident optio magnam, accusantium, impedit nobis? Autem officia
              nisi quam illo praesentium voluptas ea delectus.
            </p>
            <button className="bg-black w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
              {" "}
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
