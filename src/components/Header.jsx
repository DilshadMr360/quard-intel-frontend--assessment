// src/components/Header.js
import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { FiSearch } from 'react-icons/fi';
import { LuMessagesSquare, LuImport } from 'react-icons/lu';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { RiExportLine } from 'react-icons/ri';
import { FaRegPlusSquare } from "react-icons/fa";
import { TbBrand4Chan } from "react-icons/tb";
import { BsSortNumericDown } from "react-icons/bs";

const Header = (onSearch ) => {
  return (
    <header className="flex flex-col w-full mt-3 text-sm rounded-lg font-jakarta">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          {/* Header row 1 */}
          <tr className="flex flex-col items-center justify-between px-3 border-t border-l border-r rounded-t-lg md:flex-row md:mx-2">
            <th className="font-semibold text-black text-start">
              Products
            </th>
            <div className="flex flex-col items-center w-full my-2 ml-auto space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:w-auto">
              <div className="relative">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="absolute inset-y-0 flex items-center hidden pointer-events-none start-0 ps-3 sm:flex">
                  <FiSearch className="w-4 h-4 text-black" />
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block w-40 p-2 text-sm text-gray-900 border md:w-auto rounded-xl md:ps-10"
                  placeholder="Search for..."
                />
              </div>
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <LuMessagesSquare className="w-10 p-2 text-gray-500 border rounded-lg h-9" />
                <CiSettings className="w-10 p-1.5 border rounded-lg h-9 text-gray-500" />
              </div>
            </div>
          </tr>

          {/* Header row 2 */}
          <tbody className="items-center justify-between px-3 py-4 mx-2 border md:flex">
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              {/* All Brands Dropdown */}
              <div className="relative flex items-center px-2 py-2 space-x-1 border rounded-lg ">
                <TbBrand4Chan />
                <span className='font-semibold'>All brands</span>
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
              <div className="relative flex items-center px-1 py-2 space-x-1 border rounded-lg ">
                <span className='font-semibold'>Desk</span>
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
              <div className="relative flex items-center px-1 py-2 space-x-1 border rounded-lg ">
                <span className='font-semibold'>Tags</span>
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

              <div className="flex items-center px-2 space-x-1 border rounded-lg bg-gray-50 ">
                <BsSortNumericDown />
                <span>Sort</span>
              </div>
              <div className="flex items-center px-2 space-x-1 border rounded-lg bg-gray-50 ">
                <RiExportLine />
                <span>Filter</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="flex items-center px-2 py-2 space-x-1 text-black border rounded-lg ">
                <FaRegPlusSquare />
                <span className='font-semibold'>Meeting</span>
              </button>
              <button className="flex items-center px-2 space-x-1 text-black border rounded-lg ">
                <LuImport/>
                <span className='font-semibold'>Import/Export</span>
              </button>
            </div>
          </tbody>
        </thead>
      </table>
    </header>
  );
};

export default Header;
