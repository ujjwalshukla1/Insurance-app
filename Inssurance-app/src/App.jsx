import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Policies from "./pages/Policies.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Login from "./pages/Login.jsx";
import Claims from "./pages/Claims.jsx";
import "tailwindcss/tailwind.css";
import Register from "./pages/Register.jsx";
import PolicyDetail from "./pages/PolicyDetail.jsx";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/login" element={<Login />} />
              <Route path="/policies/:id" element={<PolicyDetail />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
