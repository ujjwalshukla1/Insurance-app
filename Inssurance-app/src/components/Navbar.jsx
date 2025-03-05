import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slice/userSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Insurance App
        </Link>
        <div>
          <Link to="/policies" className="p-2">
            Policies
          </Link>
          <Link to="/claims" className="p-2">Puchase</Link>
          <Link to="/profile" className="p-2">Profile</Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="ml-4">
                Login
              </Link>
              <Link to="/register" className="ml-4">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
