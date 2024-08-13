import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { categoryStyles, nextMeetingStyles } from "../products/ProductData.jsx";

const ProductRow = ({ product, selectedProducts, handleSelect }) => {
  // Determine if the current product is selected
  const isSelected = selectedProducts.some(
    (selected) => selected.id === product.id
  );

  return (
    <tr
      className={`${
        isSelected ? "bg-gray-100" : ""
      } hover:bg-gray-100 transition-colors duration-500`}
      aria-selected={isSelected}
    >
      <td className="px-3 py-3 border-t border-b border-r">
        <div className="flex items-center justify-between w-full">
          {/* Checkbox and product info */}
          <div className="flex items-center space-x-2">
            <input
              id={`checkbox-${product.id}`}
              type="checkbox"
              className="w-4 h-4 rounded cursor-pointer accent-black"
              checked={isSelected}
              onChange={() => handleSelect(product)}
              aria-label={`Select ${product.brand}`}
            />
            <img src={product.imgSrc} alt={product.brand} className="w-5" />
            <label htmlFor={`checkbox-${product.id}`}>{product.brand}</label>
          </div>

          {/* Messages icon and count */}
          {product.messages !== null && (
            <div className="inline-flex items-center gap-1">
              <LuMessagesSquare className="text-gray-500" />
              <span className="min-w-[0.7rem] text-gray-500">
                {product.messages || ""}
              </span>
            </div>
          )}
        </div>
      </td>

      {/* Description column */}
      <td className="relative px-3 py-3 font-normal border">
        <div className="relative group">
          <span className="block font-semibold truncate max-w-44">
            {product.description}
          </span>
          <div className="absolute hidden w-64 p-2 mb-2 text-sm text-white whitespace-normal transform -translate-x-1/2 bg-gray-800 rounded left-1/2 bottom-full group-hover:block">
            {product.description}
          </div>
        </div>
      </td>

      {/* Members column */}
      <td className="px-3 py-3 border">
        <div className="relative flex items-center">
          {product.members.slice(0, 7).map((member, index) => (
            <img
              key={index}
              src={member}
              alt={`Member ${index + 1}`}
              className="w-6 h-6 border rounded-full"
              style={{
                position: "relative",
                left: `${-10 * index}px`,
              }}
            />
          ))}
          {product.members.length > 7 && (
            <div
              className="absolute flex items-center justify-center w-6 h-6 text-gray-600 bg-gray-300 border rounded-full cursor-pointer"
              style={{ left: `${14 * 7}px` }}
            >
              +{product.members.length - 7}
            </div>
          )}
        </div>
      </td>

      {/* Categories column */}
      <td className="px-1 py-3 border">
        <div className="flex space-x-2">
          {product.categories.map((category, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-bold text-center rounded-lg ${
                categoryStyles[category] || "text-gray-800 bg-gray-200"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </td>

      {/* Tags column */}
      <td className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap">
        <div className="absolute inset-0 flex items-center px-3">
          <div className="flex space-x-2 whitespace-nowrap">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </td>

      {/* Next Meeting column */}
      <td className="relative py-3 overflow-hidden border no-scrollbar whitespace-nowrap">
        <div className="absolute inset-0 flex items-center px-3">
          <div className="flex space-x-2 whitespace-nowrap">
            {product.nextMeeting.map((meeting, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs text-center rounded-lg ${
                  nextMeetingStyles[meeting] || "text-gray-800 bg-gray-200"
                }`}
              >
                {meeting}
              </span>
            ))}
          </div>
        </div>
      </td>

      {/* Action column */}
      <td className="relative px-3 py-3 border-t border-b border-l">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 cursor-pointer"></div>
      </td>
    </tr>
  );
};

export default ProductRow;
