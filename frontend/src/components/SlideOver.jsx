import { X } from "lucide-react";

const SlideOver = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[400px] bg-white p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Login</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500 hover:text-red-500" />
          </button>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SlideOver;