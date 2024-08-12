// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { SelectionProvider } from '../context/SelectionContext'; 

const Dashboard = () => {
  return (
    <SelectionProvider> 
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header/> 
          <ProductList />
          <Footer/>
        </div>
      </div>
    </SelectionProvider>
  );
};

export default Dashboard;
