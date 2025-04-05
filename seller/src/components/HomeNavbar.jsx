import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Left: Logo & Name */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <span className="text-xl font-bold text-gray-800">Vastrama Seller Point</span>
      </div>

      {/* Center: Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex gap-6 text-gray-700">
        <Link to="/services" className="hover:text-black">Services</Link>
        <Link to="/about" className="hover:text-black">About</Link>
        <Link to="/contact" className="hover:text-black">Contact Us</Link>
      </div>

      {/* Right: Login & Register (Hidden on Mobile) */}
      <div className="hidden md:flex gap-4">
        <Link to="/login" className="px-4 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white">
          Login
        </Link>
        <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Register
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/services" className="hover:text-black" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="hover:text-black" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-black" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link to="/login" className="px-4 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;