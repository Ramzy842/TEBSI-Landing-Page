import React, { useEffect, useRef, useState } from "react";
import Underline from "./Underline";
import features from "../Data/features";
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  
  

  const featureRef = useRef();
  const featuresRef = useRef();
  
  return (
    <div className="px-4 md:text-center ">
      <Underline position="md:mx-auto mb-2" />
      <h3 className="text-3xl md:text-4xl tracking-widest font-semibold  w-11/12 md:w-full mt-8">
        Software for every kind of business
      </h3>
      <p className="text-xl tracking-wide my-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem.
      </p>
      <ul
        ref={featuresRef}
        className="grid md:text-left mt-8 sm:gap-2 md:gap-8 md:grid-cols-2"
      >
        {features.map((feature, index) => {
          const { id, image, title, colorOnMouseEnter, colorOnMouseLeave } =
            feature;

          return (
            <div
              onMouseEnter={() => {
                featuresRef.current.children[index].style.boxShadow =
                  colorOnMouseEnter;
              }}
              onMouseLeave={(e) => {
                featuresRef.current.children[index].style.boxShadow =
                  colorOnMouseLeave;
              }}
              style={{
                boxShadow: colorOnMouseLeave,
              }}
              key={id}
              ref={featureRef}
              className={`border-2 parent-div  border-black p-8 bg-gray-100 mb-4`}
            >
              <img
                src={image}
                alt={title}
                className="border-2 border-gray-400"
              />
              <h3 className="text-3xl tracking-wide font-semibold w-11/12 mt-8">
                {title}
              </h3>
              <button className="mt-8 w-44 text-xl hover:text-gray-500 text-left font-semibold text-orange-500">
                Learn More <BsArrowRight className="inline-block" />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
