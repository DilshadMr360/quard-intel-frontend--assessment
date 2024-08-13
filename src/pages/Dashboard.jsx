import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProductList from "../products/ProductList.jsx";
import Footer from "../components/Footer";
import { SelectionProvider } from "../context/SelectionContext";

// Dashboard component for displaying the main page with products
const Dashboard = () => {
  // State for managing the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handler function to update the search term and log it
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <SelectionProvider>
      <div className="flex">
        <Sidebar />
        <main className="w-8/12 mx-2 my-2 mt-2 border rounded-lg md:w-full">
          <Header onSearch={handleSearch} />
          <div className="flex flex-col justify-between h-auto">
            <ProductList searchTerm={searchTerm} />{" "}
            {/* Pass searchTerm to ProductList */}
            <Footer />
          </div>
        </main>
      </div>
    </SelectionProvider>
  );
};

export default Dashboard;
