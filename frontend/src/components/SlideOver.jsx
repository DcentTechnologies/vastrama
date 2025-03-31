import { X } from "lucide-react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const SlideOver = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isOpen ? "opacity-30 bg-gray-800" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative h-full w-full sm:w-[400px] bg-white p-6 shadow-lg transform transition-transform duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500 hover:text-red-500" />
          </button>
        </div>

        {/* Toggle Between Login and Signup */}
        {isLogin ? (
          <Login switchToSignup={() => setIsLogin(false)} onClose={onClose} />
        ) : (
          <Signup switchToLogin={() => setIsLogin(true)} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default SlideOver;