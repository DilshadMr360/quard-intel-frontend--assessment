// src/components/Sidebar.js
import React, { useState } from "react";
import { FaCogs } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import user from "../assets/user.png";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FaBullhorn } from "react-icons/fa";
import { TbCarFan } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { LiaArrowsAltHSolid } from "react-icons/lia";
import { FaRegPlusSquare } from "react-icons/fa";
import { TbFolder } from "react-icons/tb";
import { HiOutlineUserAdd } from "react-icons/hi";
import { VscQuestion } from "react-icons/vsc";

const Sidebar = () => {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Dropdown content for each section
  const dropdownContent = {
    0: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"], // Products
    1: ["Sales 1", "Sales 2", "Sales 3"], // Sales
    2: ["Design 1", "Design 2", "Design 3"], // Design
  };

  return (
    <nav className="w-full h-auto p-4 mx-2 mt-3 bg-white border rounded-lg sm:w-1/4 font-jakarta">
      {/* Header section */}
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 mr-2 border rounded-lg" />
          <div className="flex-col hidden -space-y-2 sm:flex">
            <h2 className="text-md">INC</h2>
            <h2 className="font-semibold text-md">InnovateHub</h2>
          </div>
        </div>
        {/* Show logo and text only on mobile */}
        <div className="hidden sm:block"></div>
        <img
          src={user}
          alt="User"
          className="hidden w-8 h-8 border rounded-full sm:block"
        />
      </header>

      {/* Team section - Hidden on mobile */}
      <section className="flex-col">
        <div className="overflow-hidden border rounded-lg">
          <div className="font-medium text-gray-800 text-md whitespace-nowrap dark:text-neutral-200">
            <div className="mx-2 my-2 space-y-2">
              <div className="flex items-center px-2 py-1 transition-colors duration-300 cursor-pointer hover:bg-gray-100 hover:rounded-lg group">
                <FaTools className="mr-3" />
                <span className="flex-1 mr-4 font-semibold text-md">Design Team</span>
                <div className="flex items-center p-2 bg-gray-100 rounded-lg group-hover:bg-white">
                  <span className="mr-2">
                    <FaCogs className="w-5 h-6 bg-white border rounded-lg" />
                  </span>
                  <span className="text-sm">+ 1</span>
                </div>
              </div>

              <div className="flex items-center px-2 py-1 transition-colors duration-300 cursor-pointer hover:bg-gray-100 hover:rounded-lg group">
                <FaBullhorn className="mr-3" />
                <span className="flex-1 mr-4 font-semibold text-md">Marketing Team</span>
                <div className="flex items-center p-2 bg-gray-100 rounded-lg group-hover:bg-white">
                  <span className="mr-2">
                    <FaCogs className="w-5 h-6 bg-white border rounded-lg" />
                  </span>
                  <span className="text-sm">+ 2</span>
                </div>
              </div>
              <div className="flex items-center px-2 py-1 transition-colors duration-300 cursor-pointer hover:bg-gray-100 hover:rounded-lg group">
                <LiaArrowsAltHSolid className="mr-3" />
                <span className="flex-1 mr-4 font-semibold text-md">Development Team</span>
                <div className="flex items-center p-2 bg-gray-100 rounded-lg group-hover:bg-white">
                  <span className="mr-2">
                    <FaCogs className="w-5 h-6 bg-white border rounded-lg" />
                  </span>
                  <span className="text-sm">+ 3</span>
                </div>
              </div>
            </div>

            <div>
              <hr className="my-2 border-gray-300" />
              <div className="flex items-center p-2 mx-2 text-gray-500 transition-colors duration-300 cursor-pointer">
                <FaRegPlusSquare className="mr-3" />
                <span className="flex-1 text-md">Create a team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <div className="mx-2">
        {/* Folder Section */}
        <section className="flex items-center justify-between px-2 mt-5 font-semibold text-gray-500">
          <h1 className="text-md">Folders</h1>
          <GoPlus className="text-md" />
        </section>

        {/* Dropdown Folder Sections */}
        {["Products", "Sales", "Design"].map((label, index) => (
          <section key={label} className="relative mt-3 font-semibold">
            <div
              className="flex items-center w-full px-2 py-2 transition-colors duration-300 cursor-pointer hover:rounded-md hover:bg-gray-100"
              onClick={() => toggleDropdown(index)}
            >
              <TbFolder className="mr-2 text-md" />
              <h1 className="flex-1 text-md">{label}</h1>
              <div className="flex-shrink-0 text-md">
                {openDropdown === index ? (
                  <MdOutlineArrowDropUp />
                ) : (
                  <MdOutlineArrowDropDown />
                )}
              </div>
            </div>

            {/* Dropdown Content Wrapper */}
            <div className="relative items-start ml-3">
              {/* Vertical Line */}
              <div
                className={`absolute top-4 left-0 h-3/4 border-l border-gray-300 transition-opacity duration-300 border ${
                  openDropdown === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              {/* Dropdown Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openDropdown === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-full mt-2 bg-white">
                  <div className="py-1">
                    {dropdownContent[index].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center px-4 py-2 transition-colors duration-300 cursor-pointer hover:bg-gray-100 hover:rounded-md text-md"
                      >
                        {item}
                      </div>
                    ))}
                    {/* Add New Option */}
                    <div className="flex items-center px-4 py-2 transition-colors duration-300 cursor-pointer hover:bg-gray-100 text-md">
                      <FaRegPlusSquare className="hidden mr-2 md:block" />
                      <span>Add New Sub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Static Sections - Hidden on mobile */}
        <section className="mt-3">
          <div className="space-y-2">
            {" "}
            {/* Add a container with space-y-4 */}
            {["Office", "Legal"].map((label) => (
              <div
                key={label}
                className="flex items-center w-full px-2 py-2 font-semibold transition-colors duration-300 cursor-pointer hover:bg-gray-100 text-md"
              >
                <TbFolder className="mr-2 text-md" />
                <h1 className="flex-1 text-md">{label}</h1>
              </div>
            ))}
          </div>
        </section>
      </div>        

      {/* Sidebar Footer Section */}
      <footer className="mx-4 mt-20 ">
        {/* Invite teammates */}
        <div className="flex flex-col items-center mb-4 font-semibold sm:flex-row sm:items-center sm:gap-2">
          <HiOutlineUserAdd />
          <h2 className="text-center text-md sm:text-left">Invite teammates</h2>
        </div>

        {/* Help and first steps */}
        <div className="flex flex-col items-center mb-4 font-semibold sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2 text-md">
            <VscQuestion />
            <span>Help and First Steps</span>
          </div>
    
        </div>
      </footer>
    </nav>
  );
};

export default Sidebar;
