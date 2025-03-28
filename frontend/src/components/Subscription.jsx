import { useState } from "react";

const Subscription = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessage("Thanks for subscribing us!");
    setInput("");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="w-full px-4 py-8 text-center">
      <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center items-center gap-3"
      >
        <input
          type="text"
          placeholder="Email or phone number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none w-full sm:w-80"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>

      {message && (
        <div className="mt-4 text-green-600 font-medium">{message}</div>
      )}
    </div>
  );
};

export default Subscription;