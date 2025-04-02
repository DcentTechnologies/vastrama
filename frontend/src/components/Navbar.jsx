import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import SlideOver from "./SlideOver";

const Navbar = () => {
  const [showSlideOver, setShowSlideOver] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openSlideOver = (isLogin) => {
    setIsLogin(isLogin);
    setShowSlideOver(true);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo2.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold text-gray-800">Vastrama.com</span>
        </div>

        {/* Desktop Nav */}
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
          <a href="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
          </a>

          {/* Desktop Auth */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => {
              console.log("Menu Clicked, state:", mobileMenuOpen);
              setMobileMenuOpen((prev) => !prev);
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu (Fixed for Click) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 p-6 transform transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-600"
          onClick={() => {
            console.log("Close Clicked");
            setMobileMenuOpen(false);
          }}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col gap-4 text-lg text-gray-700">
          <a href="#men" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Men</a>
          <a href="#women" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Women</a>
          <a href="#kids" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Kids</a>
          <a href="#accessories" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Accessories</a>
        </nav>

        <hr className="my-4" />

        {/* Auth Buttons */}
        <button
          onClick={() => { openSlideOver(true); setMobileMenuOpen(false); }}
          className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Login
        </button>
        <button
          onClick={() => { openSlideOver(true); setMobileMenuOpen(false); }}
          className="w-full text-sm px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Sign Up
        </button>
      </div>

      {/* SlideOver Auth Panel */}
      <SlideOver isOpen={showSlideOver} onClose={() => setShowSlideOver(false)} />
    </>
  );
};

export default Navbar;