import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import wix from "../assets/wix.png";
import shopify from "../assets/shopify.png"
import paypal from "../assets/paypal1.png"
import disney from "../assets/disney.png"
import intercom from "../assets/intercom.png"
import user from "../assets/user.png";
import evernote from "../assets/evernote.png";
import mailchamp from "../assets/mailchamp.png";
import google from "../assets/google.png";
import invision from "../assets/invision.png";
import microsoft from "../assets/microsoft.png";

const ProductList = () => {
  return (
    <div className="h-auto mx-2 bg-white rounded-lg font-jakarta">
      {/* body section  */}

      {/* Table Section */}
      <table className="w-auto min-w-full text-xs text-left text-black ">
        <thead className="text-gray-400 transition-colors duration-300 bg-white border text-md hover:bg-gray-100">
          {/* heading table row */}
          <tr>

            <th scope="col" className="px-3 py-3 border border-wih w-[23%]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start space-x-2 ">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 rounded accent-black" // Changed bg-gray-100 to bg-black
                  />
                  <label htmlFor="checkbox-all-search">Brand</label>
                </div>
                <FaPlus />
              </div>
            </th>
            <th scope="col" className="px-3 py-3 border w-[15%]">
              Description
            </th>
            <th scope="col" className="px-3 py-3 border w-[17%]">
              Members
            </th>
            <th scope="col" className="px-3 py-3 border w-[15%] ">
              Categories
            </th>
            <th scope="col" className="px-3 py-3 borderw-[15%] ">
              Tags
            </th>
            <th scope="col" className="px-3 py-3 border w-[15%] ">
              Next meetings
            </th>
            <th scope="col" className="w-8 px-3 py-3 text-center border ">
            <FaPlus />

            </th>
          </tr>

          {/* heading table row  */}
        </thead>

        {/* product list row 1 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={wix} alt="" className="w-5"/>
                <label htmlFor="checkbox-all-search">Wix</label>
              </div>
              <div className="inline-flex items-center gap-1">
                <LuMessagesSquare className="text-gray-500" />2
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Develop a personalized fit....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-50 w-6 h-6 border rounded-full"
                style={{ left: "-40px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative w-6 h-6 border rounded-full z-60"
                style={{ left: "-50px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
              <h1 className="px-1 py-1 text-xs font-bold text-center text-purple-800 bg-purple-200 border rounded-lg">
                Automation
              </h1>
            </div>
          </td>
          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #DigitalTransformation
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #onlineShopping
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
              <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
              in 30 minutes
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 1 end */}
        
        {/* product list row 2 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={shopify} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Shopify</label>
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Introdcued a Cloud Based p...</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">    
              <h1 className="px-1 py-1 text-xs font-bold text-center text-orange-800 bg-orange-100 border rounded-lg">
                E-commerce
              </h1>
              <h1 className="px-1 py-1 text-xs font-bold text-center text-yellow-800 bg-yellow-100 border rounded-lg">
                B2B
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #OnlineShopping
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #DigitalMarketing
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
              <h1 className="px-1 py-1 text-xs font-bold text-center text-blue-800 bg-blue-100 border rounded-lg">
              Tommarrow
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 2 end */}

        {/* product list row 3 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={mailchamp} alt=""  className="w-5"/>
                <label htmlFor="checkbox-all-search">Mailchimp</label>
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Develop a mobile app aim....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
              <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
                SASS
              </h1>
              <h1 className="px-1 py-1 text-xs font-bold text-center text-yellow-800 bg-yellow-100 border rounded-lg">
                Mobile
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #TechInnovation
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #CloudComputing
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
          <h1 className="px-1 py-1 text-xs font-bold text-center text-blue-800 bg-blue-100 border rounded-lg">
              Tommarrow
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 3 end */}


        {/* product list row 4 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={paypal} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Paypal</label>
              </div>
              <div className="inline-flex items-center gap-1">
                <LuMessagesSquare className="text-gray-500" />7
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">This program could includ....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-50 w-6 h-6 border rounded-full"
                style={{ left: "-40px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative w-6 h-6 border rounded-full z-60"
                style={{ left: "-50px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
            <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
                Marketplace
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #buySellOnline
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #OnlineMarketing
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
          <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
  in 06 hours
  </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 4 end */}


        {/* product list row 5 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={disney} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Disney</label>
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Intoduce a B2B solution f...</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
            <h1 className="px-1 py-1 text-xs font-bold text-center text-yellow-800 bg-yellow-100 border rounded-lg">
                B2B
              </h1>
              <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-100 border rounded-lg">
                B2C
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #BusinessPatnerships
                </h1>
      
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
              <h1 className="px-1 py-1 text-xs font-bold text-center text-orange-800 bg-orange-100 border rounded-lg">
              No contact
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 5 end */}


        {/* product list row 6 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={intercom} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Intercom</label>
              </div>
              <div className="inline-flex items-center gap-1">
                <LuMessagesSquare className="text-gray-500" />7
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Implementa AI-driven c....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-50 w-6 h-6 border rounded-full"
                style={{ left: "-40px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
              <h1 className="px-1 py-1 text-xs font-bold text-center text-blue-800 bg-blue-100 border rounded-lg">
                Technology
              </h1>
              <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
    SASS
  </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #SmallFinance
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #SASSPlatform
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
              <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
              in 1 hour
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 6 end */}


        {/* product list row 7 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={google} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Google</label>
              </div>
              <div className="inline-flex items-center gap-1">
                <LuMessagesSquare className="text-gray-500" />5
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Offer a Ccomprehensive cy....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-50 w-6 h-6 border rounded-full"
                style={{ left: "-40px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative w-6 h-6 border rounded-full z-60"
                style={{ left: "-50px" }}
              />

            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
            <h1 className="px-1 py-1 text-xs font-bold text-center text-yellow-800 bg-yellow-100 border rounded-lg">
                Finance
              </h1>
              <h1 className="px-1 py-1 text-xs font-bold text-center text-purple-800 bg-purple-200 border rounded-lg">
                Automation
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #SmartFinance
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #Workflow
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
          <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
              in 30 minutes
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 7 end */}


        {/* product list row 8 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={evernote} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Evernote</label>
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">This could include smart li....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
            <h1 className="px-1 py-1 text-xs font-bold text-center text-yellow-800 bg-yellow-100 border rounded-lg">
                Transportation
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #LogisticTech
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #UX
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
              <h1 className="px-1 py-1 text-xs font-bold text-center text-gray-500 bg-gray-200 border rounded-lg">
             Next month
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 8 end */}


        {/* product list row 9 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={microsoft} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Microsoft</label>
              </div>
              <div className="inline-flex items-center gap-1">
                <LuMessagesSquare className="text-gray-500" />14
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">Lunch an advisory servic....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-30 w-6 h-6 border rounded-full"
                style={{ left: "-20px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-40 w-6 h-6 border rounded-full"
                style={{ left: "-30px" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-50 w-6 h-6 border rounded-full"
                style={{ left: "-40px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
            <h1 className="px-1 py-1 text-xs font-bold text-center text-pink-800 bg-pink-100 border rounded-lg">
                Publishing
              </h1>
            <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-100 border rounded-lg">
                B2C
              </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #B2CMarketing
                </h1>
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #RetailIT
                </h1>
              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
          <h1 className="px-1 py-1 text-xs font-bold text-center text-orange-800 bg-orange-100 border rounded-lg">
              No contact
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 9 end */}



        {/* product list row 10 start  */}
        <tr>

          <td scope="col" className="px-3 py-3 border border-wih">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start space-x-2">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 rounded accent-black"
                />
                <img src={invision} alt="" className="w-5" />
                <label htmlFor="checkbox-all-search">Invision</label>
              </div>
            </div>
          </td>
          <td scope="col" className="relative px-3 py-3 font-normal border ">
            <div className="relative group ">
              <span className="truncate">This tool would analyz tree....</span>
              <div className="absolute max-w-xs p-2 mt-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 left-2/2 top-full w-max group-hover:opacity-100">
                My description is here so when it comes the description in here
                u can see he enitre description
              </div>
            </div>
          </td>

          <td scope="col" className="px-3 py-3 border ">
            <div className="relative flex items-center gap-1 ">
              <img
                src={user}
                alt="User"
                className="relative z-10 w-6 h-6 border rounded-full"
                style={{ left: "0" }}
              />
              <img
                src={user}
                alt="User"
                className="relative z-20 w-6 h-6 border rounded-full"
                style={{ left: "-10px" }}
              />
            </div>
          </td>

          <td scope="col" className="border y-3 p">
            <div className="flex px-3 space-x-1">
         
            <h1 className="px-1 py-1 text-xs font-bold text-center text-blue-800 bg-blue-100 border rounded-lg">
    Web Services
    </h1>
            </div>
          </td>

          <td
            scope="col"
            className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="flex space-x-2 whitespace-nowrap">
                <h1 className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg">
                  #APIIntergration
                </h1>

              </div>
            </div>
          </td>

          <td scope="col" className="py-2 text-center border ">
          <div className="flex px-3 space-x-1">
          <h1 className="px-1 py-1 text-xs font-bold text-center text-gray-500 bg-gray-200 border rounded-lg">
             Next month
              </h1>
            </div>
      
          </td>
          <td scope="col" className="w-8 px-3 py-3 text-center border ">
            <button className="text-lg text-black"></button>
          </td>
        </tr>
        {/* product list row 10 end */}

 

{/* Calculation and Count Row */}
{/* Calculation and Count Row */}
<tr>
  <td scope="col" className="px-3 py-3 border border-wih">
    <div className="flex items-center justify-end w-full text-xs">
      <h1><span className="font-semibold">10</span> Count</h1>
    </div>
  </td>

  <td scope="col" className="relative px-3 py-3 text-gray-400 border">
    <div className="flex items-center justify-end text-xs">
      <FaPlus />
      <h1 className="ml-2">Add Calculation</h1>
    </div>
  </td>

  <td scope="col" className="px-3 py-3 text-gray-400 border">
    <div className="flex items-center justify-end text-xs">
      <FaPlus />
      <h1 className="ml-2">Add Calculation</h1>
    </div>
  </td>

  <td scope="col" className="px-3 py-3 text-gray-400 border">
    <div className="flex items-center justify-end text-xs">
      <FaPlus />
      <h1 className="ml-2">Add Calculation</h1>
    </div>
  </td>

  <td
    scope="col"
    className="relative px-3 py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap"
  >
    <div className="flex items-center justify-end text-xs text-gray-400">
      <FaPlus />
      <h1 className="ml-2">Add Calculation</h1>
    </div>
  </td>

  <td scope="col" className="py-2 text-center border"></td>

  <td scope="col" className="w-8 px-3 py-3 text-center border">
    <button className="text-black"></button>
  </td>
</tr>

  {/* Calculation and Count Row end*/}


  {/* Calculation and Count Row end*/}
        
      </table>
    </div>
  );
};

export default ProductList;
