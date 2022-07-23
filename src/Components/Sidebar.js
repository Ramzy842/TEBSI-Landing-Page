import React, { useState } from "react";
import { navbar } from "../Data/navbar.js";

import { VscClose } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = ({ setMobileMenu }) => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [levels, setLevels] = useState({
    firstLevel: true,
    secondLevel: false,
  });

  return (
    <div className="bg-white w-4/5 h-screen absolute top-0 left-0 bottom-0" data-aos="fade-right">
      <div className="border-b-2 border-gray-300 flex justify-end">
        <VscClose
          className="text-3xl m-3 cursor-pointer"
          onClick={() => setMobileMenu(false)}
        />
      </div>
      <ul className="bg-gray-200 flex flex-col justify-center h-full">
        {levels.firstLevel &&
          navbar.map((link) => {
            const { name, id } = link;
            return (
              <li
                className="link font-medium text-2xl cursor-pointer ml-4 flex justify-between items-center hover:bg-gray-300 py-2"
                key={id}
                onClick={() => {
                  setLevels({ firstLevel: false, secondLevel: true });
                  const dropDown = navbar.find((obj) => obj.id === id);
                  setSelectedDropdown(dropDown);
                }}
              >
                {name}
                <IoIosArrowForward className="h-5 w-5 mr-2" />
              </li>
            );
          })}
        {levels.secondLevel && (
          <p
            className="font-medium text-2xl cursor-pointer pl-4 flex justify-between items-center py-2"
            onClick={() => setLevels({ firstLevel: true, secondLevel: false })}
          >
            Back
          </p>
        )}
        {levels.secondLevel &&
          selectedDropdown.links.map((link, index) => {
            
            return (
              <li
                className="link font-medium text-2xl cursor-pointer pl-4 flex justify-between items-center hover:bg-gray-300 py-2"
                key={index}
              >
                {link}
                <IoIosArrowForward className="h-5 w-5 mr-2" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
