import { useNavigate } from "react-router-dom";

const Congratulations = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congratulations! 🎉</h2>
        <p className="text-gray-700 mb-4">
          Your registration is complete. Welcome to <strong>Vastrama Seller Dashboard!</strong>
        </p>
        <button
          onClick={() => navigate("/seller")}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Seller Dashboard
        </button>
      </div>
    </div>
  );
};

export default Congratulations;