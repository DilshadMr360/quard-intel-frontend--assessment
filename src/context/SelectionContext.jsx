import React, { createContext, useContext, useState } from 'react';

// Create a Context for managing selected products
const SelectionContext = createContext();

// Provider component for the SelectionContext
export const SelectionProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Add a product to the selected products list if not already selected
  const addProduct = (product) => {
    setSelectedProducts((prev) => {
      if (!prev.some((p) => p.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove a product from the selected products list by its ID
  const removeProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  // Provide state and functions to context consumers
  return (
    <SelectionContext.Provider
      value={{ selectedProducts, addProduct, removeProduct }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

// Custom hook to use the SelectionContext
export const useSelectionContext = () => {
  const context = useContext(SelectionContext);
  
  if (context === undefined) {
    throw new Error('useSelectionContext must be used within a SelectionProvider');
  }

  return context;
};
