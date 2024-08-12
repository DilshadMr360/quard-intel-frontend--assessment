import React, { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeProduct = (id) => {
    setSelectedProducts(selectedProducts.filter(product => product.id !== id));
  };

  return (
    <SelectionContext.Provider value={{ selectedProducts, addProduct, removeProduct }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelectionContext = () => {
  return useContext(SelectionContext);
};


export default SelectionContext;  
