// src/App.js
import React, { useState } from "react";
import Header from "../components/Header.jsx";
import ProductList from "../components/ProductList.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default App;
