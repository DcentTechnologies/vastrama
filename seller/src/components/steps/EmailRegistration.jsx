import { useState } from "react";

const EmailRegistration = ({ nextStep }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = () => {
    if (email.includes("@") && email.includes(".")) {
      setIsOtpSent(true);
      alert("OTP sent successfully!");
    } else {
      alert("Please enter a valid email address");
    }
  };

  const verifyOtp = () => {
    if (otp.length === 6) {
      alert("Email verified!");
      nextStep(); // Move to NamePasswordSetup
    } else {
      alert("Invalid OTP. Please enter a 6-digit OTP.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Email Registration</h2>
      {!isOtpSent ? (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md mb-3"
          />
          <button
            onClick={sendOtp}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border rounded-md mb-3"
          />
          <button
            onClick={verifyOtp}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
          >
            Verify OTP & Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailRegistration;