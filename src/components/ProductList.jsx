import React, { useState, useMemo } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import wix from "../assets/wix.png";
import shopify from "../assets/shopify.png";
import paypal from "../assets/paypal1.png";
import disney from "../assets/disney.png";
import intercom from "../assets/intercom.png";
import user from "../assets/user.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import evernote from "../assets/evernote.png";
import mailchamp from "../assets/mailchamp.png";
import google from "../assets/google.png";
import invision from "../assets/invision.png";
import microsoft from "../assets/microsoft.png";
import { useSelectionContext } from "../context/SelectionContext.jsx";

const categoryStyles = {
  Automation: "text-purple-800 bg-purple-200",
  "E-commerce": "text-orange-800 bg-orange-100",
  B2B: "text-yellow-800 bg-yellow-100",
  SASS: "text-green-800 bg-green-200",
  Mobile: "text-yellow-800 bg-yellow-100",
  Marketplace: "text-green-800 bg-green-200",
  B2C: "text-green-800 bg-green-100",
  Technology: "text-blue-800 bg-blue-100",
  Finance: "text-yellow-800 bg-yellow-100",
  Transportation: "text-yellow-800 bg-yellow-100",
  Publishing: "text-pink-800 bg-pink-100",
  "Web Services": "text-blue-800 bg-blue-100",
};

const nextMeetingStyles = {
  "in 30 minutes": "text-green-800 bg-green-200",
  Tommarrow: "text-blue-800 bg-blue-100",
  "in 6 hours": "text-green-800 bg-green-200",
  "in 6 hours": "text-green-800 bg-green-200",
  "No contact": "text-orange-800 bg-orange-100",
  "Next month": "text-gray-500 bg-gray-200",
};

const products = [
  {
    id: 1,
    brand: "Wix",
    description: "Develop a Personalized fit to the authorization ",
    members: [user, user2, user3, user, user2, user3],
    categories: ["Automation"],
    tags: ["#DigitalTransformation", "#onlineShopping"],
    nextMeeting: ["in 30 minutes"],
    imgSrc: wix,
    messages: 2,
  },
  {
    id: 2,
    brand: "Shopify",
    description:
      "Introdcued a Cloud Based project with your team it would be he best practise",
    members: [user, user2, user3, user],
    categories: ["E-commerce", "B2B"],
    tags: ["#OnlineShopping", "#DigitalMarketing"],
    nextMeeting: ["Tomorrow"],
    imgSrc: shopify,
    messages: null,
  },
  {
    id: 3,
    brand: "Mailchimp",
    description: "Develop a mobile app aim to do within 2 weeks ",
    members: [user3, user, user2, user],
    categories: ["SASS", "Mobile"],
    tags: ["#TechInnovation", "#CloudComputing"],
    nextMeeting: ["Tomorrow"],
    imgSrc: mailchamp,
    messages: null,
  },
  {
    id: 4,
    brand: "Paypal",
    description: "This program could included many more things ",
    members: [user, user2, user3, user, user3, user2],
    categories: ["Marketplace"],
    tags: ["#BuySellOnline", "#OnlineMarketing"],
    nextMeeting: ["in 6 hours"],
    imgSrc: paypal,
    messages: 7,
  },
  {
    // Example for Row 5
    id: 5,
    brand: "Disney",
    description: "Intoduce a B2B solution for your excisiting customers",
    members: [user3, user2],
    categories: ["B2B", "B2C"],
    tags: ["#BusinessPatnerships"],
    nextMeeting: ["No contact"],
    imgSrc: disney,
    messages: null,
  },

  {
    // Example for Row 6
    id: 6,
    brand: "Intercom",
    description: "Implementa AI-driven component with your friends",
    members: [user2, user, user3, user2, user],
    categories: ["Technology", "SASS"],
    tags: ["#SmartFinance", "#SASSPlatform"],
    nextMeeting: ["in 1 hour"],
    imgSrc: intercom,
    messages: 9,
  },
  {
    // Example for Row 7
    id: 7,
    brand: "Google",
    description: "Offer a comprehensive cycle desgin as soon as possible",
    members: [user3, user2, user3, user2, user3, user2, user, user3, user2, user2, user2 , user2  ],
    categories: ["Finance", "Automation"],
    tags: ["SmartFinance", "#Workflow"],
    nextMeeting: ["in 30 minutes"],
    imgSrc: google,
    messages: 5,
  },
  {
    // Example for Row 8
    id: 8,
    brand: "Evernote",
    description: "This could include smart literature part for your system",
    members: [user, user2, user3],
    categories: ["Transportation"],
    tags: ["#LogisticTech", "#UX"],
    nextMeeting: ["Next month"],
    imgSrc: evernote,
    messages: null,
  },

  {
    // Example for Row 9
    id: 9,
    brand: "Microsoft",
    description: "Lunch an advisory service to the the industry",
    members: [user3, user2, user, user2, user3],
    categories: ["Publishing", "B2C"],
    tags: ["#B2CMarketing", "RetailTele"],
    nextMeeting: ["No contact"],
    imgSrc: microsoft,
    messages: 14,
  },
  {
    // Example for Row 9
    id: 10,
    brand: "Invision",
    description: "The tool would analys tree component of your computer",
    members: [user, user3],
    categories: ["Web Services"],
    tags: ["#APIIntegration"],
    nextMeeting: ["Next month"],
    imgSrc: invision,
    messages: null,
  },
];

const ProductList = ({ searchTerm }) => {
  const { addProduct, removeProduct, selectedProducts } = useSelectionContext();
  // const productCount = products.length;

  const [selectAll, setSelectAll] = useState(false);

  const handleSelect = (product) => {
    if (selectedProducts.some((selected) => selected.id === product.id)) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      products.forEach((product) => addProduct(product));
    } else {
      products.forEach((product) => removeProduct(product.id));
    }
  };

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
        false ||
        product.tags?.some((tag) =>
          tag.toLowerCase().includes(lowercasedSearchTerm)
        ) ||
        false ||
        product.nextMeeting?.some((meeting) =>
          meeting.toLowerCase().includes(lowercasedSearchTerm)
        ) ||
        false
    );
  }, [searchTerm, products]);

  const productCount = filteredProducts.length || products.length;

  return (
    <div className="h-auto mx-2 bg-white rounded-lg font-jakarta">
      {/* body section  */}

      <div className="overflow-hidden overflow-x-auto">
        {filteredProducts.length === 0 ? (
          <p className="mt-2 text-center text-gray-500">Not Found</p>
        ) : (
          // Table Section
          <table className="w-auto min-w-full text-xs text-left text-black">
            <thead className="text-gray-400 transition-colors duration-300 bg-white border text-md hover:bg-gray-100">
              {/* Heading table row */}
              <tr>
                <th scope="col" className="px-3 py-3 border w-[23%]">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-start space-x-2">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 rounded cursor-pointer accent-black"
                        checked={selectAll}
                        onChange={handleSelectAll}
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
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Categories
                </th>
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Tags
                </th>
                <th scope="col" className="px-3 py-3 border w-[15%]">
                  Next meetings
                </th>
                <th scope="col" className="w-8 px-3 py-3 text-center border">
                  <FaPlus />
                </th>
              </tr>
              {/* Heading table row end */}
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className={`${
                    selectedProducts.some(
                      (selected) => selected.id === product.id
                    )
                      ? "bg-gray-100"
                      : ""
                  } hover:bg-gray-100 transition-colors duration-500`}
                >
                  <td className="px-3 py-3 border">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-start space-x-2">
                        <input
                          id={`checkbox-${product.id}`}
                          type="checkbox"
                          className="w-4 h-4 rounded cursor-pointer accent-black"
                          checked={selectedProducts.some(
                            (selected) => selected.id === product.id
                          )}
                          onChange={() => handleSelect(product)}
                        />
                        <img
                          src={product.imgSrc}
                          alt={product.brand}
                          className="w-5"
                        />
                        <label htmlFor={`checkbox-${product.id}`}>
                          {product.brand}
                        </label>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <LuMessagesSquare className="text-gray-500" />
                        <span
                          className={`min-w-[0.7rem] text-gray-500 ${
                            product.messages === null ? "invisible" : ""
                          }`}
                        >
                          {product.messages || ""}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="relative px-3 py-3 font-normal border">
                    <div className="relative group">
                      <span className="block font-semibold truncate max-w-44">
                        {product.description}
                      </span>
                      <div className="absolute hidden w-64 p-2 mb-2 text-sm text-white whitespace-normal transform -translate-x-1/2 bg-gray-800 rounded left-1/2 bottom-full group-hover:block">
                        {product.description}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 border">
                    <div className="relative flex items-center">
                      {/* Display the first 7 members */}
                      {product.members.slice(0, 7).map((member, index) => (
                        <img
                          key={index}
                          src={member}
                          alt="User"
                          className="w-6 h-6 border rounded-full"
                          style={{
                            position: "relative",
                            left: `${-10 * index}px`,
                          }}
                        />
                      ))}
                      {/* Show the count of additional members if there are more than 7 */}
                      {product.members.length > 7 && (
                        <div
                          className="absolute flex items-center justify-center w-6 h-6 text-gray-600 bg-gray-300 border rounded-full cursor-pointer"
                          style={{ left: `${14 * 7}px` }}
                        >
                          +{product.members.length - 7}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-1 py-3 border">
                    <div className="flex space-x-2">
                      {product.categories.map((category, index) => (
                        <h1
                          key={index}
                          className={`px-2 py-1 text-xs font-bold text-center rounded-lg ${
                            categoryStyles[category] ||
                            "text-gray-800 bg-gray-200"
                          }`}
                        >
                          {category}
                        </h1>
                      ))}
                    </div>
                  </td>
                  <td className="relative py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap">
                    <div className="absolute inset-0 flex items-center px-3">
                      <div className="flex space-x-2 whitespace-nowrap">
                        {product.tags.map((tag, index) => (
                          <h1
                            key={index}
                            className="px-2 py-1 text-xs text-center bg-gray-200 border rounded-lg"
                          >
                            {tag}
                          </h1>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-center border">
                    <div className="flex px-3 space-x-1">
                      {/* <h1 className="px-1 py-1 text-xs font-bold text-center text-green-800 bg-green-200 border rounded-lg">
                  {product.nextMeeting}
                </h1> */}
                      {product.nextMeeting.map((meeting, index) => (
                        <h1
                          key={index}
                          className={`px-2 py-1 text-xs font-bold text-center rounded-lg ${
                            nextMeetingStyles[meeting] ||
                            "text-gray-800 bg-gray-200"
                          }`}
                        >
                          {meeting}
                        </h1>
                      ))}
                    </div>
                  </td>
                  <td className="w-8 px-3 py-3 text-center border">
                    <button className="text-lg text-black"></button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Calculation and Count Row */}
            <tfoot>
              <tr>
                <td className="px-3 py-3 border">
                  <div className="flex items-center justify-end w-full text-xs">
                    <h1>
                      <span className="font-semibold">{productCount}</span>{" "}
                      Count
                    </h1>
                  </div>
                </td>
                <td className="relative px-3 py-3 text-gray-400 border">
                  <div className="flex items-center justify-end text-xs">
                    <FaPlus />
                    <button className="ml-2">Add Calculation</button>
                  </div>
                </td>
                <td className="px-3 py-3 text-gray-400 border">
                  <div className="flex items-center justify-end text-xs">
                    <FaPlus />
                    <button className="ml-2">Add Calculation</button>
                  </div>
                </td>
                <td className="px-3 py-3 text-gray-400 border">
                  <div className="flex items-center justify-end text-xs">
                    <FaPlus />
                    <button className="ml-2">Add Calculation</button>
                  </div>
                </td>
                <td className="relative px-3 py-3 overflow-hidden overflow-x-auto border no-scrollbar whitespace-nowrap">
                  <div className="flex items-center justify-end text-xs text-gray-400">
                    <FaPlus />
                    <button className="ml-2">Add Calculation</button>
                  </div>
                </td>
                <td className="py-2 text-center border"></td>
                <td className="w-8 px-3 py-3 text-center border">
                  <button className="text-black"></button>
                </td>
              </tr>
            </tfoot>
            {/* Calculation and Count Row end */}
          </table>
        )}
      </div>

      {/* product list row 1 start  */}
    </div>
  );
};

export default ProductList;
