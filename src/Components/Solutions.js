import React from "react";
import solutions from "../Data/solutions";
import Underline from "./Underline";

const Solutions = () => {
  return (
    <div className="px-4 py-12 md:pb-0 container mx-auto text-center max-w-7xl">
      <Underline position="mx-auto" />
      <h1 className="my-6 text-3xl md:text-4xl md:tracking-wider font-semibold tracking-wide w-11/12 md:w-full mx-auto">
        The best solutions in one software
      </h1>
      <div className="md:grid md:grid-cols-3">
        {solutions.map((solution) => {
          const { id, image, title, content } = solution;
          return (
            <div className="mb-6" key={id}  data-aos={`${id % 2 !== 0  ? "fade-up" : "fade-down"}`} >
              <img src={image} className="mx-auto" alt={title} />
              <h1 className="my-4 font-semibold text-xl">{title}</h1>
              <p className="text-xl">{content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
