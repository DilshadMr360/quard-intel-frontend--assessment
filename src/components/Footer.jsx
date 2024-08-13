import React from "react";
import { GoArchive } from "react-icons/go";
import { MdDeleteOutline, MdOutlineArrowDropDown } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useSelectionContext } from "../context/SelectionContext";

const Footer = () => {
  const { selectedProducts } = useSelectionContext();
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 mx-2 my-20 mt-20 space-y-4 text-sm font-bold border md:mx-auto md:flex-row md:space-x-6 md:space-y-0 md:w-6/12 rounded-xl font-jakarta">
        <h1 className="cursor-default">
          <span className="px-2 py-1 mx-1 text-white bg-black rounded-lg ">
            {selectedProducts.length}
          </span>{" "}
          selected
        </h1>
        <div className="flex items-center px-2 py-2 transition-transform transform border rounded-lg hover:scale-110">
          <GoArchive className="mr-2" />
          <button>Archive</button>
        </div>
        <div className="flex items-center px-2 py-2 text-red-700 transition-transform transform border rounded-lg hover:scale-110">
          <MdDeleteOutline className="mr-2" />
          <button>Delete</button>
        </div>

        {/* Tags Dropdown */}
        <div className="relative flex items-center px-2 py-2 space-x-1 transition-colors duration-500 border rounded-lg cursor-pointer hover:bg-gray-50 ">
          <h1>More</h1>
          <MdOutlineArrowDropDown />
          <select className="absolute inset-0 opacity-0 cursor-pointer">
            <option>Settings</option>
            <option>All list</option>
            <option>All brands</option>
          </select>
        </div>

        <div className="transition-transform transform hover:scale-125">
          <IoCloseOutline className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
