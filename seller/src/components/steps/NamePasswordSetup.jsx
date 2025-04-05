import { useState } from "react";

const NamePasswordSetup = ({ nextStep }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    nextStep(); // Move to BusinessDetails
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Up Name & Password</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter password"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Confirm password"
        />
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
};

export default NamePasswordSetup;