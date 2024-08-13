import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelectionContext } from "../context/SelectionContext";
import ProductRow from "./ProductRow";
import { products } from "../products/ProductData";

const ProductList = ({ searchTerm }) => {
  const { addProduct, removeProduct, selectedProducts } = useSelectionContext();
  const [selectAll, setSelectAll] = useState(false);

  // Handle the selection of individual products
  const handleSelect = (product) => {
    const isProductSelected = selectedProducts.some(
      (selected) => selected.id === product.id
    );
    isProductSelected ? removeProduct(product.id) : addProduct(product);
  };

  // Handle the selection or deselection of all products
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      products.forEach((product) => addProduct(product));
    } else {
      products.forEach((product) => removeProduct(product.id));
    }
  };

  // Memoize the filtered products based on the search term for performance optimization
  const filteredProducts = useMemo(() => {
    const lowercasedSearchTerm = (searchTerm || "").toLowerCase();
    return products.filter(
      (product) =>
        (product.brand?.toLowerCase() || "").includes(lowercasedSearchTerm) ||
        (product.description?.toLowerCase() || "").includes(
          lowercasedSearchTerm
        ) ||
        product.categories?.some((category) =>
          category.toLowerCase().includes(lowercasedSearchTerm)
        ) ||
        product.tags?.some((tag) =>
          tag.toLowerCase().includes(lowercasedSearchTerm)
        ) ||
        product.nextMeeting?.some((meeting) =>
          meeting.toLowerCase().includes(lowercasedSearchTerm)
        )
    );
  }, [searchTerm]);

  const productCount = filteredProducts.length;

  return (
    <section className="h-auto bg-white rounded-lg font-jakarta">
      {/* Table container with responsive design considerations */}
      <div className="overflow-hidden overflow-x-auto">
        {filteredProducts.length === 0 ? (
          <p className="mt-2 text-center text-gray-500">No Products Found</p>
        ) : (
          <table className="w-auto min-w-full text-xs text-left text-black">
            <thead className="text-gray-500 transition-colors duration-300 bg-white text-md hover:bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 border-t border-b w-[23%]">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <input
                        id="select-all"
                        type="checkbox"
                        className="w-4 h-4 rounded cursor-pointer accent-black"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        aria-label="Select all products"
                      />
                      <label htmlFor="select-all">Brand</label>
                    </div>
                    <FaPlus aria-label="Add Product" />
                  </div>
                </th>
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Description
                </th>
                <th scope="col" className="px-3 py-3 border w-[17%]">
                  Members
                </th>
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Categories
                </th>
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Tags
                </th>
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Next Meetings
                </th>
                <th scope="col" className="w-8 px-3 py-3 text-center border-t border-b border-l">
                  <FaPlus aria-label="Add Product" />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  selectedProducts={selectedProducts}
                  handleSelect={handleSelect}
                />
              ))}
            </tbody>
            {filteredProducts.length > 0 && (
              <tfoot>
                <tr>
                  <td className="px-3 py-3 border-t border-b border-r">
                    <div className="flex items-center justify-end text-xs font-semibold text-gray-500">
                      <span className="mr-2 font-semibold text-black">{productCount}</span>{" "}
                      Count
                    </div>
                  </td>
                  <td className="relative px-3 py-3 text-gray-400 border">
                    <div className="flex items-center justify-end text-xs font-semibold text-gray-500">
                      <FaPlus aria-label="Add Calculation" />
                      <button className="ml-2">Add Calculation</button>
                    </div>
                  </td>
                  <td className="relative px-3 py-3 text-gray-400 border">
                    <div className="flex items-center justify-end text-xs font-semibold text-gray-500">
                      <FaPlus aria-label="Add Calculation" />
                      <button className="ml-2">Add Calculation</button>
                    </div>
                  </td>
                  <td className="relative px-3 py-3 text-gray-400 border">
                    <div className="flex items-center justify-end text-xs font-semibold text-gray-500">
                      <FaPlus aria-label="Add Calculation" />
                      <button className="ml-2">Add Calculation</button>
                    </div>
                  </td>
                  <td className="relative px-3 py-3 overflow-hidden overflow-x-auto border whitespace-nowrap">
                    <div className="flex items-center justify-end text-xs font-semibold text-gray-500">
                      <FaPlus aria-label="Add Calculation" />
                      <button className="ml-2">Add Calculation</button>
                    </div>
                  </td>
                  <td className="py-2 text-center border"></td>
                  <td className="w-8 px-3 py-3 text-center border">
                    <button className="text-black" aria-label="Action"></button>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        )}
      </div>
    </section>
  );
};

export default ProductList;
