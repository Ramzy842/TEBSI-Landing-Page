import React from "react";
import services from "../Data/services";
import Underline from "./Underline";
import SmallUnderline from "./SmallUnderline";

const Services = () => {
  return (
    <ul className="md:text-center  text-white md:h-screen bg-blue-900 px-8 mx-0 flex flex-col justify-center">
      <Underline position="text-left md:mx-auto" />
      <h1 className="text-4xl my-8 font-semibold ">
        We propose quality solutions
      </h1>
      <div className="md:grid md:grid-cols-3 gap-8 md:text-left">
        {services.map((service) => {
          const { id, title, content } = service;
          return (
            <div key={id} className="service mb-4">
              <h1 className="text-3xl">{title}</h1>
              <SmallUnderline position="" />
              <p className="text-xl">{content}</p>
            </div>
          );
        })}
      </div>
    </ul>
  );
};

export default Services;
