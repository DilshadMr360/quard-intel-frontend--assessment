import React from "react";
import { FaRegPlusSquare, FaCogs, FaBullhorn, FaTools } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LiaArrowsAltHSolid } from "react-icons/lia";
import { TbFolder } from "react-icons/tb";
import { HiOutlineUserAdd } from "react-icons/hi";
import { VscQuestion } from "react-icons/vsc";
import logo from "../assets/images/company_logo.webp";
import user from "../assets/images/user.webp";
import TeamCard from "../components/TeamCard";
import Dropdown from "../components/Dropdown";

const Sidebar = () => {
  // Dropdown content for each section
  const dropdownContent = {
    0: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"], // Products
    1: ["Sales 1", "Sales 2", "Sales 3"], // Sales
    2: ["Design 1", "Design 2", "Design 3"], // Design
  };

  return (
    <aside className="flex flex-col justify-between w-4/12 h-auto p-2 mx-1 my-2 mt-2 bg-white border rounded-xl sm:w-1/4 font-jakarta ">
      <div>
        {/* Header section  with logo and user profile */}
        <header className="flex items-center justify-between mb-3">
          <figure className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-10 ml-2 transition-transform duration-300 transform rounded-lg hover:scale-125"
            />
            <div className="flex-col hidden -space-y-1 sm:block">
              <h2 className="text-sm">INC</h2>
              <h2 className="text-sm font-semibold">InnovateHub</h2>
            </div>
          </figure>
          <figure>
            <img
              src={user}
              alt="User"
              className="hidden w-8 h-8 border rounded-full sm:block"
            />
          </figure>
        </header>

        {/* Main content section */}

        {/* Team section */}
        <section className="flex-col">
          <div className="overflow-hidden border rounded-lg">
            <div className="text-sm font-medium text-gray-800 whitespace-nowrap dark:text-neutral-200">
              <div className="mx-2 my-1 space-y-1">
                <TeamCard
                  icon={<FaTools className="mr-2" />}
                  teamName="Design Team"
                  count={1}
                />
                <TeamCard
                  icon={<FaBullhorn className="mr-2" />}
                  teamName="Marketing Team"
                  count={2}
                />
                <TeamCard
                  icon={<LiaArrowsAltHSolid className="mr-2" />}
                  teamName="Development Team"
                  count={3}
                />
              </div>

              {/* Create a team option */}
              <div>
                <hr className="my-2 border-gray-300" />
                <div className="flex items-center gap-2 p-1 mx-2 text-gray-500 transition-colors duration-500 cursor-pointer">
                  <FaRegPlusSquare className="ml-1" />
                  <span className="flex-1 hidden text-sm sm:flex">
                    Create a team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Folders and Dropdown sections */}
        <section className="mx-2">
          {/* Folders section */}
          <header className="flex items-center justify-between px-2 mt-3 font-semibold text-gray-500">
            <button className="text-sm">Folders</button>
            <GoPlus className="text-sm" />
          </header>

          {/* Dropdown sections for Products, Sales, and Design */}
          {["Products", "Sales", "Design"].map((label, index) => (
            <Dropdown
              key={label}
              label={label}
              items={dropdownContent[index]}
              onAddNew={() => console.log(`Add new option to ${label}`)}
            />
          ))}

          {/* Static folders section */}
          <section className="mt-2">
            <div className="space-y-1">
              {["Office", "Legal"].map((label) => (
                <div
                  key={label}
                  className="flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-500 cursor-pointer hover:rounded-md hover:bg-gray-100"
                >
                  <TbFolder className="mr-2 text-sm" />
                  <h1 className="flex-1 text-sm">{label}</h1>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>

      <div>
        {/* Additional section */}
        <section className="my-2">
          <div className="mx-2 ">
            {/* Invite teammates */}
            <button className="flex-col items-start hidden w-full px-2 py-1 mb-1 font-semibold transition-colors duration-500 cursor-pointer sm:flex sm:flex-row sm:items-center sm:gap-2 hover:bg-gray-100 hover:rounded-md">
              <HiOutlineUserAdd />
              <h2 className="text-sm text-center sm:text-left">
                Invite teammates
              </h2>
            </button>
            <button className="flex items-start justify-start w-full px-2 py-1 mb-1 font-semibold transition-colors duration-500 cursor-pointer sm:hidden hover:bg-gray-100 hover:rounded-md">
              <HiOutlineUserAdd />
            </button>

            {/* Help and first steps */}
            <div className="flex-col items-start hidden px-2 py-1 mb-1 font-semibold transition-colors duration-500 cursor-pointer sm:flex sm:flex-row sm:items-center sm:justify-between hover:bg-gray-100 hover:rounded-md group">
              <button className="flex items-center space-x-2 text-sm">
                <VscQuestion />
                <span>Help and First Steps</span>
              </button>
              <h1 className="px-2 py-1 text-xs text-center text-gray-500 bg-gray-200 rounded-lg sm:text-left group-hover:bg-white">
                0/6
              </h1>
            </div>
            <div className="flex items-start justify-start px-2 py-1 mb-1 font-semibold transition-colors duration-500 cursor-pointer sm:hidden hover:bg-gray-100 hover:rounded-md group">
              <VscQuestion />
            </div>

            {/* Trial and Billing */}
            <div className="flex-col items-start px-1 py-1 font-semibold bg-gray-100 rounded-lg sm:flex sm:flex-row sm:items-center sm:justify-between">
              <div className="hidden md:block">
                <h1 className="flex items-center gap-2 text-xs text-center sm:text-left">
                  <span className="px-2 py-1 bg-white rounded-md">7</span> days
                  left on trial
                </h1>
              </div>
              <button className="px-2 py-1 mt-2 text-xs text-white bg-black rounded-lg sm:mt-0">
                Add billing
              </button>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
