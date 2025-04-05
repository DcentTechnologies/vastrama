import { useState } from "react";

const BusinessDetails = ({ nextStep }) => {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [gstin, setGstin] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!businessName.trim()) {
      setError("Business name is required");
      return;
    }
    if (!businessType) {
      setError("Business type is required");
      return;
    }
    if (gstin.length !== 15) {
      setError("GSTIN should be 15 characters long");
      return;
    }
    setError("");
    nextStep(); // Proceed to next step
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Business Details</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter your business name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Business Type</label>
        <select
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        >
          <option value="">Select Type</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
          <option value="Partnership">Partnership</option>
          <option value="Private Limited">Private Limited</option>
          <option value="Public Limited">Public Limited</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">GSTIN (15 Characters)</label>
        <input
          type="text"
          value={gstin}
          onChange={(e) => setGstin(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter your GSTIN"
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

export default BusinessDetails;