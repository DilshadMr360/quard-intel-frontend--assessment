import wix from '../assets/images/wix.webp';
import shopify from '../assets/images/shopify.webp';
import paypal from '../assets/images/paypal1.webp';
import disney from '../assets/images/disney.webp';
import intercom from '../assets/images/intercom.webp';
import user from '../assets/images/user.webp';
import user2 from '../assets/images/user2.webp';
import user3 from '../assets/images/user3.webp';
import evernote from '../assets/images/evernote.webp';
import mailchamp from '../assets/images/mailchamp.webp';
import google from '../assets/images/google.webp';
import invision from '../assets/images/invision.webp';
import microsoft from '../assets/images/microsoft.webp';

export const categoryStyles = {
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

export const nextMeetingStyles = {
  "in 30 minutes": "text-green-800 bg-green-200",
  Tomorrow: "text-blue-800 bg-blue-100",
  "in 6 hours": "text-green-800 bg-green-200",
  "No contact": "text-orange-800 bg-orange-100",
  "Next month": "text-gray-500 bg-gray-200",
};

export const products = [
  {
    id: 1,
    brand: "Wix",
    description: "Develop a personalized fit for authorization.",
    members: [user, user2, user3, user, user2, user3],
    categories: ["Automation"],
    tags: ["#DigitalTransformation", "#OnlineShopping"],
    nextMeeting: ["in 30 minutes"],
    imgSrc: wix,
    messages: 2,
  },
  {
    id: 2,
    brand: "Shopify",
    description: "Introduce a cloud-based project with your team for best practices.",
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
    description: "Develop a mobile app to be completed within 2 weeks.",
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
    description: "This program could include many more features.",
    members: [user, user2, user3, user, user3, user2],
    categories: ["Marketplace"],
    tags: ["#BuySellOnline", "#OnlineMarketing"],
    nextMeeting: ["in 6 hours"],
    imgSrc: paypal,
    messages: 7,
  },
  {
    id: 5,
    brand: "Disney",
    description: "Introduce a B2B solution for your existing customers.",
    members: [user3, user2],
    categories: ["B2B", "B2C"],
    tags: ["#BusinessPartnerships"],
    nextMeeting: ["No contact"],
    imgSrc: disney,
    messages: null,
  },
  {
    id: 6,
    brand: "Intercom",
    description: "Implement an AI-driven component with your team.",
    members: [user2, user, user3, user2, user],
    categories: ["Technology", "SASS"],
    tags: ["#SmartFinance", "#SASSPlatform"],
    nextMeeting: ["in 1 hour"],
    imgSrc: intercom,
    messages: 9,
  },
  {
    id: 7,
    brand: "Google",
    description: "Offer a comprehensive cycle design as soon as possible.",
    members: [user3, user2, user3, user2, user3, user2, user, user3, user2, user2, user2, user2],
    categories: ["Finance", "Automation"],
    tags: ["#SmartFinance", "#Workflow"],
    nextMeeting: ["in 30 minutes"],
    imgSrc: google,
    messages: 5,
  },
  {
    id: 8,
    brand: "Evernote",
    description: "Include smart literature parts for your system.",
    members: [user, user2, user3],
    categories: ["Transportation"],
    tags: ["#LogisticTech", "#UX"],
    nextMeeting: ["Next month"],
    imgSrc: evernote,
    messages: null,
  },
  {
    id: 9,
    brand: "Microsoft",
    description: "Launch an advisory service for the industry.",
    members: [user3, user2, user, user2, user3],
    categories: ["Publishing", "B2C"],
    tags: ["#B2CMarketing", "#RetailTech"],
    nextMeeting: ["No contact"],
    imgSrc: microsoft,
    messages: 14,
  },
  {
    id: 10,
    brand: "Invision",
    description: "Analyze tree components of your computer.",
    members: [user, user3],
    categories: ["Web Services"],
    tags: ["#APIIntegration"],
    nextMeeting: ["Next month"],
    imgSrc: invision,
    messages: null,
  },
];
