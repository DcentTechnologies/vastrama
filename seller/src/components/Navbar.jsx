import { Menu, Search, HelpCircle, Headset, Bell } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Left: Logo & Name */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <span className="text-xl font-bold text-gray-800">Vastrama.com</span>
      </div>

      {/* Center: Help, Support, Notification (Icons Only on Mobile) */}
      <div className="flex gap-6 text-gray-700">
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <HelpCircle className="w-5 h-5" />
          <span className="hidden md:inline">Help</span>
        </div>
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <Headset className="w-5 h-5" />
          <span className="hidden md:inline">Support</span>
        </div>
        <div className="relative flex items-center gap-2 hover:text-black cursor-pointer">
          <Bell className="w-5 h-5" />
          {/* Notification Badge */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            0
          </span>
          <span className="hidden md:inline">Notification</span>
        </div>
      </div>

      {/* Right: Search Bar & Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Search Bar (Hidden on Mobile) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Search className="absolute left-2 top-1.5 w-5 h-5 text-gray-500" />
        </div>

        {/* Mobile Hamburger Menu */}
        <button onClick={toggleSidebar} className="md:hidden flex items-center">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;