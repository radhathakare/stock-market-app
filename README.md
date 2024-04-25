# Stock Market Website

## Overview

The Stock Market Website is a web application designed to provide users with real-time stock market data. It offers features such as fetching stock prices, searching for specific stocks, and displaying detailed stock information.

## Repository URL

The Stock Market Website repository is accessible at [https://github.com/yourusername/Stock-Market-Website.git](https://github.com/yourusername/Stock-Market-Website.git).

## Tech Stack

The Stock Market Website is built using the following technologies:

- **NodeJS**: A JavaScript runtime for building server-side applications.
- **Express**: A fast, unopinionated, and minimalist web framework for Node.js.
- **Vue**: A progressive JavaScript framework for building user interfaces.

## Backend Setup

### Branch and Directory Structure

1. The backend code is located in the `backend` branch of the repository.
2. Mock data for companies, including high, low, close, and volume information, is stored in JSON format.

### Running the Backend

1. Navigate to the backend directory:
   
   cd backend
   
2. Install dependencies:

   npm install
   
3. Start the server:

   node app.js

   
### Deployment

- The backend is deployed on [render.com](https://render.com/).

## Frontend Setup

### Branch and Directory Structure

1. The frontend code is located in the `frontend` branch of the repository.

### Installation and Running the Frontend

1. Clone the repository:

   git clone https://github.com/yourusername/Stock-Market-Website.git

2. Navigate to the frontend directory:

   cd frontend

3. Install dependencies:

   npm install

4. Run the frontend server:

   npm run serve

   
### Deployment

- The frontend is deployed on [Netlify](https://www.netlify.com/).

## Exposed Endpoints

### 1. Get All Stocks

**URL:** [https://stock-data-a9sg.onrender.com/api/stocks](https://stock-data-a9sg.onrender.com/api/stocks)

This endpoint returns a list of all available stocks along with their high, low, close, and volume information.

### 2. Search for Stock

**URL:** [https://stock-data-a9sg.onrender.com/api/search?symbol=symbol&period=1D](https://stock-data-a9sg.onrender.com/api/search?symbol=symbol&period=1D)

This endpoint allows users to search for a specific stock by its symbol and retrieve its data for a specified period (e.g., 1D for one day).

**Example:**  
[https://stock-data-a9sg.onrender.com/api/search?symbol=AAPL&period=1D](https://stock-data-a9sg.onrender.com/api/search?symbol=AAPL&period=1D)


Feel free to reach out if you have any questions or need further clarifications!



 

