# FULLSTACK-APP

"This project is a full-stack web application that features a product catalog with an integrated shopping cart. It allows users to browse products, view detailed information, add items to a cart, and proceed to checkout. The backend is built with Node.js and Express, providing a RESTful API, while the frontend uses React for a dynamic and responsive user interface. The application uses Context API for state management and integrates with MongoDB to store product and cart data."

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Deployment](#deployment)
- [Design Decisions](#design-decisions)
- [Contributions](#contributions)

## Installation
1. Clone the repository: `git clone <>`
2. Install frontend and backend dependencies:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install

3. Configure environment variables in the .env files.

Usage

Start the backend:
bash
cd backend
npm run dev

Start the frontend:
bash
cd frontend
npm start

4. Open http://localhost:3000 in your browser.

Project Structure
* frontend/: Contains the React frontend code.
* backend/: Contains the Node.js/Express backend code.
* src/context/: Contains the React context for global state management.

API
Description of the available API endpoints.

Endpoints

GET /api/products: Fetches all products.
POST /api/products: Creates a new product.
PATCH /api/products/
    : Updates an existing product.
DELETE /api/products/
    : Deletes a product.

Design Decisions

Context API: Used for managing the state of the cart.
Modularized Structure: Facilitates scalability and maintainability.

#   f u l l s t a c k - a p p  
 #   f u l l s t a c k - a p p  
 #   f u l l s t a c k - a p p  
 #   f u l l s t a c k - a p p  
 