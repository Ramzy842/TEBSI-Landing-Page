import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import GlobalContext from "../Context";

import Underline from "./Underline";

const Hero = () => {
  const { navHeight } = GlobalContext();
  const [navbarHeight, setNavbarHeight] = useState();
  useEffect(() => {
    if (navHeight) {
      setNavbarHeight(navHeight);
    }
  }, [navHeight]);

  return (
    navHeight && (
      <div
        
        className={`bg-white w-full`}
      >
        <div className="text-center container relative md:w-4/5 mx-auto lg:h-screen md:pt-8">
          <h1
            className={`text-4xl lg:text-5xl xl:text-7xl mx-auto w-4/5 p-2  font-semibold text-gray-900 lg:mt-12 z-20`}
            data-aos="fade-in"
            style={{paddingTop: navbarHeight + "px" }}
          >
            Grow your audience. Improve your marketing{" "}
            <Underline position="mx-auto mb-6" />{" "}
          </h1>
          <img
            src="./hero/1.png"
            className="hidden lg:block absolute z-10 top-12 left-0"
            alt=""
          />
          <img
            src="./hero/2.png"
            className="hidden lg:block absolute z-10 top-0 right-0"
            alt=""
          />
          <img
            src="./hero/3.png"
            className="hidden lg:block absolute  bottom-24 left-20"
            alt=""
          />
          <img
            src="./hero/4.png"
            className="hidden lg:block absolute  bottom-24 right-20"
            alt=""
          />
          <p className="w-full md:w-5/6 mx-auto text-xl mt-2 font-medium px-3 text-center" data-aos="fade-in">
            Learn where your audience struggle as they navigate your digital
            business. Pair this understanding of the individual experience with
            powerful quantitative insights to inform your digital decisions.
          </p>
          <div className="md:flex md:items-center md:justify-center mt-8 py-4">
            <div className="">
              <button className="bg-gray-800 z-20 px-8 py-4  tracking-wide text-white font-bold shadow-try shadow-orange-500 hover:bg-white hover:text-gray-800 hover:shadow-gray-800  transition mb-8 md:mb-0">
                TRY FOR FREE
              </button>
              
            </div>

            <button className=" mb-12 md:mb-0  md:ml-8 w-44 text-xl hover:text-gray-500 text-left font-semibold text-orange-500">
              Request a demo <BsArrowRight className="inline-block" />{" "}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Hero;
