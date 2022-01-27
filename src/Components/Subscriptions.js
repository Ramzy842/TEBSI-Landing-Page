import React from "react";
import sub from "../images/subscription.png";
const Subscriptions = () => {
  return (
    <div className="px-4 md:px-8 bg-gray-100 md:grid md:py-32 md:justify-items-center md:content-center md:grid-cols-2 py-8 text-center">
      
        <img src={sub} className="mx-auto" alt="illustration" />
        <div className="order-first">
        <h1 className="text-3xl md:text-4xl md:text-left font-semibold my-4">
          Subscribe Karma Software
        </h1>
        <p className="text-xl mb-8 md:text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <form action="" className="mb-8 md:justify-items-center md:content-center sm:grid md:grid-cols-7  sm:grid-cols-6 ">
        <input
          type="text"
          className="w-full border-4 border-gray-300 outline-none sm:col-start-1 sm:col-end-5 md:col-end-5 p-4"
        />
        <button className="block shadow-md bg-orange-500 w-full md:text-sm sm:grid-cols-1 sm:col-start-5 sm:col-end-7 md:col-start-5 md:col-end-8 p-4 font-bold tracking-widest text-white">
          GET STARTED
        </button>
      </form>
      </div>

      
    </div>
  );
};

export default Subscriptions;
