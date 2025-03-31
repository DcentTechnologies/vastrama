const Login = ({ switchToSignup, onClose }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">Login</h2>
      <form className="flex flex-col gap-4 mt-4">
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
      <p className="text-sm mt-4">
        Don't have an account?{" "}
        <button onClick={switchToSignup} className="text-blue-500 underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;