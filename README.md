# Fullstack CRUD Application with React, Vite, and Express

## Overview

This project is a comprehensive CRUD (Create, Read, Update, Delete) application designed to showcase fullstack development skills. It utilizes React with Vite for a fast and modern frontend development experience, paired with an Express backend to handle server-side operations. This project serves as an exercise for a fullstack development test, illustrating the ability to build and integrate a complete application from scratch.

## Features

- **Create**: Add new items to the database through the user-friendly frontend interface.
- **Read**: Fetch and display items from the database, allowing users to view details.
- **Delete**: Remove items from the database with ease.

## Tech Stack

### Frontend

- **React**: A powerful JavaScript library for building user interfaces.
- **Vite**: A fast development build tool that enhances the development experience with features like hot module replacement.

### Backend

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Additional Tools

- **Axios**: For making HTTP requests from the frontend to the backend.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing (CORS) in the backend.
- **React Hook Form**: For managing form state and validation in React.

## Installation and Setup

### Prerequisites

- Node.js installed on your local machine.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd your-repo/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend server should now be running on `http://localhost:4000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend application should now be running on `http://localhost:5173`.

## Usage

Once both servers are running, you can open your browser and navigate to `http://localhost:5173` to interact with the application. Use the form to create, read, update, and delete items. The frontend will communicate with the backend server to perform these operations.
