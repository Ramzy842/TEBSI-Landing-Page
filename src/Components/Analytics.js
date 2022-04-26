import React from "react";
import stats from "../images/stats.png";
import history from "../images/history.png";
import Underline from "./Underline";
import { BsArrowRight } from "react-icons/bs";
const Analytics = () => {
  return (
    <div className=" p-4">
      <Underline position="hidden md:block mx-auto" />
      <h1 className="w-11/12 mt-8 mb-4 font-semibold text-5xl leading-12 hidden md:block mx-auto text-center">
        Overview of your progress and manage customers base
      </h1>
      <div className="my-12">
        <img className="mx-auto" src={stats} alt="stats" />
      </div>

      <Underline position="md:hidden" />
      <h1 className="w-11/12 mt-8 mb-4 font-semibold text-3xl md:hidden">
        Overview of your progress and manage customers base
      </h1>
      <p className="text-xl text-center">
        Some metrics play an essential role to measure the pulse of a company’s
        customer service efficiency, while others are more evaluating if a brand
        has a customer-centric approach. Our customer dashboard will examine
        this second type of metrics.
      </p>
      <button className="mt-8 w-44 text-xl hover:text-gray-500 text-left font-semibold text-orange-500 md:w-full md:text-center">
        Learn More <BsArrowRight className="inline-block" />
      </button>
    </div>
  );
};

export default Analytics;
