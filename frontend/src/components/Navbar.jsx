import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import SlideOver from "./SlideOver";

const Navbar = () => {
  const [showSlideOver, setShowSlideOver] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const openSlideOver = (isLogin) => {
    setIsLoginForm(isLogin);
    setShowSlideOver(true);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between relative">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src="src/assets/images/logo2.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold text-gray-800">Vastrama.com</span>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <a href="#men" className="hover:text-black">Men</a>
          <a href="#women" className="hover:text-black">Women</a>
          <a href="#kids" className="hover:text-black">Kids</a>
          <a href="#accessories" className="hover:text-black">Accessories</a>
        </div>

        {/* Right: Search + Cart + Auth */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-500" />
          </div>

          {/* Cart */}
          <a href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
          </a>

          {/* Auth Buttons */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => openSlideOver(true)}
              className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => openSlideOver(false)}
              className="text-sm px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* SlideOver Auth Panel */}
      <SlideOver isOpen={showSlideOver} onClose={() => setShowSlideOver(false)} />
    </>
  );
};

export default Navbar;