import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
import { useNavigate } from "react-router-dom";

const Signup = ({ switchToLogin, onClose }) => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (e) => {
      e.preventDefault();
      dispatch(registerUser({ name, email, password }));
      navigate('/');
  };
  return (
    <div>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <button onClick={switchToLogin} className="text-blue-500 underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;