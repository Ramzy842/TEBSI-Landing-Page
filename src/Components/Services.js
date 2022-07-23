import React from "react";
import services from "../Data/services";
import Underline from "./Underline";
import SmallUnderline from "./SmallUnderline";

const Services = () => {
  return (
    <div className="bg-blue-900">
      <ul className="md:text-center container  text-white md:h-screen  px-8  flex flex-col justify-center mx-auto max-w-7xl">
        <Underline position="text-left md:mx-auto" />
        <h1 className="text-4xl my-8 font-semibold ">
          We propose quality solutions
        </h1>
        <div className="md:grid md:grid-cols-3 gap-8 md:text-left">
          {services.map((service) => {
            const { id, title, content } = service;
            return (
              <div key={id} className="service mb-4" data-aos="fade-up-right">
                <h1 className="text-3xl">{title}</h1>
                <SmallUnderline position="" />
                <p className="text-xl">{content}</p>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Services;
