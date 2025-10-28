import { Project } from "../projectsData";
import * as React from "react";

export const cravecrafters: Project = {
  id: "cravecrafters",
  title: "CraveCrafters",
  subtitle: "E-commerce Web Application",
  description:
    "A fully functional e-commerce platform that cruises through the shopping experience with style. Features product listing, cart management, and user authentication — all running on the high-octane MERN stack.",
  features: [
    "Designed responsive UI with React for smooth user experience across all devices",
    "Implemented REST APIs for lightning-fast backend operations",
    "Integrated MongoDB for real-time data storage and retrieval",
    "Complete development lifecycle management from design to deployment",
  ],
  tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  liveUrl: "https://cravecrafters-frontend.onrender.com",
  githubUrl: "https://github.com/sharifshaikh1/cravecrafters-frontend",
  detailsUrl: "/project/cravecrafters",
  // No custom component defined here so the default details renderer will show `readme`.
  readme: `
# E-commerce Frontend

This is a modern, responsive e-commerce frontend application built with React. It provides a seamless shopping experience for users, from browsing products to a secure checkout process. The application also includes an admin panel for managing products and orders.

## LIVE URL
**https://cravecrafters-frontend.onrender.com**

## Features

- **User Authentication:** Secure user registration and login functionality.
- **Product Browsing:** View a list of products with details and filtering options.
- **Shopping Cart:** Add products to a shopping cart and manage its contents.
- **Checkout:** A smooth and secure checkout process powered by Stripe.
- **Order History:** View a history of past orders.
- **Admin Panel:** A dedicated panel for administrators to manage products and orders.
- **Responsive Design:** The application is fully responsive and works on all screen sizes.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Router:** For declarative routing in the application.
- **Axios:** A promise-based HTTP client for making API requests.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Stripe:** For handling online payments securely.
- **JWT Decode:** For decoding JSON Web Tokens.
- **React Toastify:** For displaying notifications to the user.

## Backend Repository

[https://github.com/sharifshaikh1/cravecrafters-backend](https://github.com/sharifshaikh1/cravecrafters-backend)
`,
};
