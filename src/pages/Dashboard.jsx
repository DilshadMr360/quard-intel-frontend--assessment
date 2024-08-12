// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header/> 
        <ProductList />
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
