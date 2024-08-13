import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { LuMessagesSquare, LuImport } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiExportLine } from "react-icons/ri";
import { FaRegPlusSquare } from "react-icons/fa";
import { TbBrand4Chan } from "react-icons/tb";
import { BsSortNumericDown } from "react-icons/bs";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle the search input change event
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log("Current Search Term:", value); // Log the current search term
    if (onSearch) {
      onSearch(value); // Pass the search term to the parent component
    }
  };

  return (
    <header className="flex flex-col w-full mt-2 text-sm rounded-lg font-jakarta">
      {/* Table structure for header content */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          {/* Header row 1 */}
          <tr className="flex flex-col items-center justify-between px-3 rounded-t-lg md:flex-row">
            <th className="text-lg font-semibold text-black transition-transform transform md:-mt-3 text-start hover:scale-125">
              Products
            </th>
            <div className="flex flex-col items-center w-full my-2 ml-auto space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:w-auto">
              {/* Search Input */}
              <div className="relative">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="absolute inset-y-0 items-center hidden pointer-events-none start-0 ps-3 sm:flex">
                  <FiSearch className="w-4 h-4 text-black" />
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block w-40 p-2 text-sm text-gray-900 border md:w-auto rounded-xl md:ps-10"
                  placeholder="Search for..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              {/* Settings and Messages Buttons */}
              <button className="flex flex-col items-center gap-2 md:flex-row">
                <LuMessagesSquare className="w-10 p-2 text-gray-500 transition-transform transform border rounded-lg h-9 hover:scale-125 " />
                <CiSettings className="w-10 p-1.5 border rounded-lg h-9 text-gray-500 transition-transform transform hover:scale-125" />
              </button>
            </div>
          </tr>
          {/* Header row 2 */}
          <tbody className="flex flex-col items-center justify-between px-3 py-4 space-y-3 border-t md:space-y-0 md:flex-row md:space-x-4">
            {/* Dropdowns and Action Buttons */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              {/* All Brands Dropdown */}
              <div className="relative flex items-center justify-center px-2 py-2 space-x-1 transition-colors duration-500 border rounded-lg cursor-pointer hover:bg-gray-50 ">
                <TbBrand4Chan />
                <span className="font-semibold text-center">All brands</span>
                <MdOutlineArrowDropDown />
                <select className="absolute inset-0 opacity-0 cursor-pointer">
                  <option>Wix</option>
                  <option>Shopify</option>
                  <option>MailChamp</option>
                  <option>Paypal</option>
                  <option>Disney</option>
                  <option>Intercom</option>
                  <option>Google</option>
                  <option>Evernote</option>
                  <option>Microsoft</option>
                  <option>Invision</option>
                </select>
              </div>

              {/* Desks Dropdown */}
              <div className="relative flex items-center justify-center px-1 py-2 space-x-1 transition-colors duration-500 border rounded-lg cursor-pointer hover:bg-gray-50 ">
                <span className="font-semibold text-center">Desk</span>
                <MdOutlineArrowDropDown />
                <select className="absolute inset-0 opacity-0 cursor-pointer">
                  <option>Office Desks</option>
                  <option>Standing Desks</option>
                  <option>Computer Desks</option>
                  <option>Writing Desks</option>
                  <option>Executive Desks</option>
                  <option>Corner Desks</option>
                  <option>L-Shaped Desks</option>
                  <option>Adjustable Desks</option>
                  <option>Gaming Desks</option>
                  <option>Compact Desks</option>
                </select>
              </div>

              {/* Tags Dropdown */}
              <div className="relative flex items-center justify-center px-1 py-2 space-x-1 transition-colors duration-500 border rounded-lg cursor-pointer hover:bg-gray-50 ">
                <span className="font-semibold text-center">Tags</span>
                <MdOutlineArrowDropDown />
                <select className="absolute inset-0 opacity-0 cursor-pointer">
                  <option>#DigitalTransformation</option>
                  <option>#OnlineShopping</option>
                  <option>#TechInnovation</option>
                  <option>#BuySellOnline</option>
                  <option>#BusinessPatnerships</option>
                  <option>#SmartFinance</option>
                  <option>#LogisticTech</option>
                  <option>#B2CMarketing</option>
                  <option>#APIIntegration</option>
                </select>
              </div>

              {/* Sort and Filter Buttons */}
              <button className="flex items-center justify-center px-2 space-x-1 transition-transform transform border rounded-lg hover:scale-105 hover:bg-gray-50 ">
                <BsSortNumericDown />
                <span className="text-center">Sort</span>
              </button>
              <button className="flex items-center justify-center px-2 space-x-1 transition-transform transform border rounded-lg hover:scale-105 hover:bg-gray-50 ">
                <RiExportLine />
                <span className="text-center">Filter</span>
              </button>
            </div>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              {/* Meeting and Import/Export Buttons */}
              <button className="flex items-center justify-center px-2 py-2 space-x-1 text-black transition-transform transform border rounded-lg hover:scale-105">
                <FaRegPlusSquare />
                <span className="font-semibold text-center ">Meeting</span>
              </button>
              <button className="flex items-center justify-center px-2 space-x-1 text-black transition-transform transform border rounded-lg hover:scale-105">
                <LuImport />
                <span className="font-semibold text-center">Import/Export</span>
              </button>
            </div>
          </tbody>
        </thead>
      </table>
    </header>
  );
};

export default Header;
