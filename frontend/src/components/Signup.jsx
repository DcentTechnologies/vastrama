const Signup = ({ switchToLogin, onClose }) => {
  return (
    <div>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
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
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <button onClick={switchToLogin} className="text-blue-500 underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;