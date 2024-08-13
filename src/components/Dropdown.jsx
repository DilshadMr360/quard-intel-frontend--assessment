import React from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { TbFolder } from "react-icons/tb";
import { FaRegPlusSquare } from "react-icons/fa";

const Dropdown = ({ label, items, isOpen, onClick, onAddNew }) => {
  return (
    <section className="relative mt-2 font-semibold">
      {/* Dropdown header */}
      <div
        className="flex items-center w-full px-2 py-1 transition-colors duration-500 cursor-pointer hover:rounded-md hover:bg-gray-100"
        onClick={onClick}
      >
        <TbFolder className="mr-2 text-sm" />
        <h1 className="flex-1 text-sm ">{label}</h1>
        <div className="flex-shrink-0 text-sm">
          {isOpen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
        </div>
      </div>

      {/* Dropdown content */}
      <div className="relative items-start ml-3">
        {/* Decorative line (visible only when dropdown is open) */}
        <div
          className={`absolute top-3 left-0 h-3/4 border-l border-gray-300 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dropdown list and 'Add new' button */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-1">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center w-full px-2 py-1 text-sm transition-colors duration-500 cursor-pointer hover:rounded-md hover:bg-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Button to add a new item */}
          <button
            onClick={onAddNew}
            className="flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-500 cursor-pointer hover:rounded-md hover:bg-gray-100"
          >
            <FaRegPlusSquare className="mr-2" />
            <span>Add new {label.toLowerCase()}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
