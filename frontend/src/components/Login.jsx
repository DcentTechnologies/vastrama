import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import { useNavigate } from "react-router-dom";

const Login = ({ switchToSignup, onClose }) => {

    console.log("Hello");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        onClose();
        navigate('/');
    };
    
  return (
    <div>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
      <p className="text-sm mt-4">
        Don't have an account?{" "}
        <button onClick={switchToSignup} className="text-blue-500 underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;