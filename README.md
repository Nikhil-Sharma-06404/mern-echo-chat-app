# MERN Echo Chat App

**Build and Deploy a Real Time Chat App | JWT, Socket.io**

The MERN Echo Chat App is a full-stack real-time messaging platform built with **MongoDB**, **Express.js**, **React**, and **Node.js**. It leverages **Socket.io** for instant chat functionality and **JWT** for secure authentication. This app features a responsive React frontend and a robust Node.js backend, with chat histories stored in MongoDB. It's perfect for secure and scalable real-time communication!

---

## 🚀 Features

- **Real-Time Messaging:** Instant messaging powered by Socket.io
- **Authentication & Authorization:** Secure user authentication using JWT
- **Responsive UI:** Built with React, TailwindCSS, and Daisy UI for a modern look
- **Online User Status:** Live online status using Socket.io and React Context
- **Global State Management:** Managed with Zustand for scalable state handling
- **Robust Error Handling:** Comprehensive error handling on both server and client

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** React Context & Zustand

---

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Setup

**Clone the Repository:**

   git clone https://github.com/Nikhil-Sharma-06404/mern-echo-chat-app.git
   cd mern-echo-chat-app

# For the backend:
cd server
npm install

# For the frontend:
cd ../client
npm install

# Set up env variables
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

# Start app
npm run build
npm start

### 🎨 UI Enhancements
- TailwindCSS & Daisy UI: Provides a modern, responsive design.
- Real-Time Effects: Socket.io integration offers live messaging and user status.
- Dark/Light Mode: Seamless UI theme switcher for improved usability.

