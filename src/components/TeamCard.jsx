import React from "react";
import { FaCogs } from "react-icons/fa";

const TeamCard = ({ icon, teamName, count }) => {
  return (
    <div
      className="flex items-center px-2 py-1 transition-colors duration-500 cursor-pointer hover:bg-gray-100 hover:rounded-lg group"
      role="listitem"
    >
      {/* Icon */}
      <div>{icon}</div>

      {/* Team Name */}
      <span className="flex-1 hidden text-sm font-semibold sm:flex">
        {teamName}
      </span>

      {/* Count and Action Icon */}
      <div className="items-center hidden p-1 transition-transform transform rounded-lg bg-lightGray hover:scale-110 group-hover:bg-white sm:flex">
        <span className="mr-1">
          <FaCogs className="w-5 h-5 p-1 bg-white border rounded-md" />
        </span>
        <span className="text-xs">+ {count}</span>
      </div>
    </div>
  );
};

export default TeamCard;
