import React, { useContext } from 'react';
import { GoArchive } from "react-icons/go";
import { MdDeleteOutline, MdOutlineArrowDropDown } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useSelectionContext } from '../context/SelectionContext';   // Adjusted import

const Footer = () => {
  const { selectedProducts } = useSelectionContext();
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-6/12 py-4 mx-auto my-20 mt-5 space-x-6 text-sm font-bold border rounded-xl font-jakarta ">
        <h1><span className="px-2 py-1 mx-1 text-white bg-black rounded-lg">{selectedProducts.length}</span> selected</h1>
        <div className="flex items-center px-2 py-2 border rounded-lg">
          <GoArchive className="mr-2" />
          <button>Archive</button>
        </div>
        <div className="flex items-center px-2 py-2 text-red-700 border rounded-lg">
          <MdDeleteOutline className="mr-2" />
          <button>Delete</button>
        </div>
        {/* <div className="flex items-center px-2 py-2 border rounded-lg">
          <h1>More</h1>
          <MdOutlineArrowDropDown />
          
        </div> */}
          {/* Tags Dropdown */}
          <div className="relative flex items-center px-2 py-2 space-x-1 border rounded-lg ">
                 <h1>More</h1>
                <MdOutlineArrowDropDown />
                <select className="absolute inset-0 opacity-0 cursor-pointer">
                  <option>Settings</option>
                  <option>All list</option>
                  <option>All brands</option>
              
                </select>
              </div>

              
        <IoCloseOutline className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Footer;
