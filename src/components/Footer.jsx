import React from "react";
import { GoArchive } from "react-icons/go";
import { MdDeleteOutline, MdOutlineArrowDropDown } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useSelectionContext } from "../context/SelectionContext";

const Footer = () => {
  // Get the selected products from the SelectionContext
  const { selectedProducts } = useSelectionContext();

  return (
    <footer className="py-2 mx-2 mt-20">
      <div className="flex flex-col items-center justify-around py-4 mx-4 space-y-2 text-sm font-bold border md:mx-auto md:flex-row md:-space-x-4 md:space-y-0 md:w-5/12 rounded-xl font-jakarta">
        {/* Display the number of selected products */}
        <p className="cursor-default">
          <span className="px-2 py-1 mx-1 text-white bg-black rounded-lg">
            {selectedProducts.length}
          </span>{" "}
          selected
        </p>

        {/* Archive button */}
        <button
          type="button"
          className="flex items-center px-2 py-2 transition-transform transform border rounded-lg hover:scale-110"
          aria-label="Archive selected products"
        >
          <GoArchive className="mr-2" />
          Archive
        </button>

        {/* Delete button */}
        <button
          type="button"
          className="flex items-center px-2 py-2 text-red-700 transition-transform transform border rounded-lg hover:scale-110"
          aria-label="Delete selected products"
        >
          <MdDeleteOutline className="mr-2" />
          Delete
        </button>

        {/* Tags Dropdown */}
        <div className="relative flex items-center px-2 py-2 space-x-1 transition-colors duration-500 border rounded-lg cursor-pointer hover:bg-gray-50">
          <label htmlFor="more-options" className="sr-only">
            More options
          </label>
          <span>More</span>
          <MdOutlineArrowDropDown />
          <select
            id="more-options"
            className="absolute inset-0 opacity-0 cursor-pointer"
            aria-label="More options dropdown"
          >
            <option>Settings</option>
            <option>All list</option>
            <option>All brands</option>
          </select>
        </div>

        {/* Close button */}
        <button
          type="button"
          className="transition-transform transform hover:scale-125"
          aria-label="Close footer"
        >
          <IoCloseOutline className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
