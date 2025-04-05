import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./Product";
import Orders from "./Orders";
import Sales from "./Sales";
import Account from "./Account";
import Settings from "./Settings";
import Dashboard from "./Dashboard";

const Seller = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Dashboard",
    "Products",
    "Orders",
    "Sales",
    "Account",
    "Settings",
    "Logout",
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <Product />;
      case "Orders":
        return <Orders />;
      case "Sales":
        return <Sales />;
      case "Account":
        return <Account />;
      case "Settings":
        return <Settings />;
      case "Logout":
        navigate("/");
        return null;
      default:
        return <h2 className="text-xl">Welcome</h2>;
    }
  };

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex h-screen pt-16 bg-gray-100">
        {/* Sidebar (Hidden on Mobile, Shown on Desktop) */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 transform transition-transform md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">Seller Panel</h1>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setSelectedTab(item);
                  setSidebarOpen(false);
                }}
                className={`p-2 pl-4 cursor-pointer rounded-md text-gray-700 hover:bg-gray-200 ${
                  selectedTab === item ? "bg-gray-800 text-white" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Area - Now Shifted to Left */}
        <div className="flex-1 p-6 w-full md:w-[70%] max-w-screen-md">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default Seller;