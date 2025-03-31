import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import SlideOver from "./SlideOver";

const Navbar = () => {
  const [showSlideOver, setShowSlideOver] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#men" className="hover:text-black block md:inline">
        Men
      </a>
      <a href="#women" className="hover:text-black block md:inline">
        Women
      </a>
      <a href="#kids" className="hover:text-black block md:inline">
        Kids
      </a>
      <a href="#accessories" className="hover:text-black block md:inline">
        Accessories
      </a>
    </>
  );

  return (
    <>
      <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between relative">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/vite.svg"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">VASTRAMA.com</span>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {navLinks}
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
              onClick={() => setShowSlideOver(true)}
              className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => setShowSlideOver(true)}
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

      {/* Mobile Nav Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md flex flex-col gap-3 text-gray-700 font-medium">
          {navLinks}
          <div className="flex flex-col gap-2 mt-2 sm:hidden">
            <button
              onClick={() => {
                setShowSlideOver(true);
                setMobileMenuOpen(false);
              }}
              className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowSlideOver(true);
                setMobileMenuOpen(false);
              }}
              className="text-sm px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* SlideOver Auth Panel */}
      <SlideOver isOpen={showSlideOver} onClose={() => setShowSlideOver(false)} />
    </>
  );
};

export default Navbar;