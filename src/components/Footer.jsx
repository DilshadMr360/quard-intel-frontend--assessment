import React from "react";
import { GoArchive } from "react-icons/go";
import { MdDeleteOutline, MdOutlineArrowDropDown } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-6/12 py-4 mx-auto mt-5 space-x-6 text-sm font-bold border rounded-xl font-jakarta ">
        <h1><span className="px-2 py-1 mx-1 text-white bg-black rounded-lg">3</span> selected</h1>
        <div className="flex items-center px-2 py-2 border rounded-lg">
          <GoArchive className="mr-2" />
          <h1>Archive</h1>
        </div>
        <div className="flex items-center px-2 py-2 text-red-700 border rounded-lg">
          <MdDeleteOutline className="mr-2" />
          <h1>Delete</h1>
        </div>
        <div className="flex items-center px-2 py-2 border rounded-lg">
          <h1>More</h1>
          <MdOutlineArrowDropDown />
        </div>
        <IoCloseOutline className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Footer;
