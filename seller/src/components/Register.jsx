import { useState } from "react";
import MobileRegistration from "./steps/MobileRegistration";
import EmailRegistration from "./steps/EmailRegistration";
import NamePasswordSetup from "./steps/NamePasswordSetup";
import BusinessDetails from "./steps/BusinessDetails";
import Congratulations from "./steps/Congratulations";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6">
      {/* Step Progress Bar */}
      <div className="w-full max-w-3xl mb-6">
        <div className="w-full bg-gray-300 h-2 rounded-md">
          <div
            className="h-2 bg-blue-500 rounded-md"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        {step === 1 && <MobileRegistration nextStep={nextStep} />}
        {step === 2 && <EmailRegistration nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <NamePasswordSetup nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <BusinessDetails nextStep={nextStep} prevStep={prevStep} />}
        {step > totalSteps && <Congratulations />}
      </div>
    </div>
  );
};

export default Register;