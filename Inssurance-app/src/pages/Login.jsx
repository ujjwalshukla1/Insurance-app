import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../slice/userSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      if (response.data.length > 0) {
        dispatch(loginUser(response.data[0]));
        navigate("/profile");
        toast.success("Login successful!");
      } else {
        toast.error("Invalid email or password!");
      }
    } catch (error) {
      console.log(error);
      setError("Login failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-bold">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-2">
        <label className="block pb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block pb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default Login;
