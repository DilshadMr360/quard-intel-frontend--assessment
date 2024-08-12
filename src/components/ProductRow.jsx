// src/components/TaskRow.js
import React from 'react';

const ProductRow = ({ brand, description }) => {
  return (
    <div className="flex items-center p-2 border-b hover:bg-gray-50">
      <div className="w-1/4">{brand}</div>
      <div className="w-3/4">{description}</div>
      {/* Add more columns based on the UI */}
    </div>
  );
};

export default ProductRow;
