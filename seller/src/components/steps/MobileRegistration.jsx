import { useState } from "react";

const MobileRegistration = ({ nextStep }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = () => {
    if (mobile.length === 10) {
      setIsOtpSent(true);
      alert("OTP sent successfully!");
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  const verifyOtp = () => {
    if (otp.length === 6) {
      alert("Mobile number verified!");
      nextStep(); // Move to the next step (Email Registration)
    } else {
      alert("Enter a valid 6-digit OTP");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Mobile Number Registration</h2>
      <input
        type="tel"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        maxLength={10}
        className="w-full p-2 border rounded-md mb-4"
      />
      <button
        onClick={sendOtp}
        disabled={isOtpSent}
        className="w-full mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        {isOtpSent ? "OTP Sent" : "Send OTP"}
      </button>

      {isOtpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            className="w-full p-2 border rounded-md mb-4"
          />
          <button
            onClick={verifyOtp}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default MobileRegistration;