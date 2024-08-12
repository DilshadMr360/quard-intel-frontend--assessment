import React, { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    setSelectedProducts((prev) => {
      if (!prev.some((p) => p.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  return (
    <SelectionContext.Provider
      value={{ selectedProducts, addProduct, removeProduct }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelectionContext = () => useContext(SelectionContext);
