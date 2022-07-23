import React from "react";
import Underline from "./Underline";
import testemonial from "../images/testemonial.jpg";
import { BsArrowRight } from "react-icons/bs";
const Testemonials = () => {
  return (
    <div className=" px-4 mt-8 container mx-auto max-w-7xl">
      <Underline position="mx-auto mb-8" />
      <p className="text-center text-3xl font-bold">
        "It is really refreshing to work with Deva which is truly helpful in the
        client’s needs. Since using this software, I feel confident in managing
        our marketing."
      </p>
      <h3 className=" text-center text-xl font-semibold mt-4">
        — Jack Calderon
      </h3>
      <h4 className=" text-center text-xl  mt-2">
        Head of marketing, Apple Inc.
      </h4>
      <div className="mt-6  ">
        <img
          style={{ boxShadow: "10px 10px 0px 0px #ff7731" }}
          className="w-56 sm:w-72 sm:h-72 h-56 mx-auto"
          src={testemonial}
          alt="a person"
        />
      </div>
      <div className=" text-white bg-blue-900 mt-12 px-4 py-8 md:py-24">
        <Underline position="md:mx-auto" />
        <h1 className="text-left md:text-center text-3xl my-8 font-semibold  md:text-5xl">
          Automate your marketing tasks and gain more clients for your business
        </h1>
        <p className="text-left text-xl md:text-center md:w-4/5 md:mx-auto">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <button className=" bg-orange-500 mt-4 z-20 p-4 w-40 tracking-wide text-white font-bold hover:bg-orange-600 transition ease-in-out delay-150">
            TRY FOR FREE
          </button>
          <button className="mt-8 mb-4 block  w-44 text-left text-lg hover:text-gray-300  md:text-center font-semibold text-white">
            Request a demo <BsArrowRight className="inline-block" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
