// src/pages/Dashboard.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { SelectionProvider } from "../context/SelectionContext";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log("Search Term in Dashboard:", term); // Log search term here
  };

  return (
    <SelectionProvider>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header onSearch={handleSearch} /> {/* Pass handleSearch to Header */}
          <ProductList searchTerm={searchTerm} />{" "}
          {/* Pass searchTerm to ProductList */}
          <Footer />
        </div>
      </div>
    </SelectionProvider>
  );
};

export default Dashboard;
