import React from 'react'
import { Phone } from "lucide-react";

const Sale = () => {
  return (
    <div className="bg-red-100 text-red-800 px-6 py-3 flex items-center justify-between rounded-md shadow-md">
    <div className="flex-1 text-center text-xl font-semibold">
      SALE NOW ON!
    </div>
    <div className="flex items-center gap-2 text-base">
      <Phone className="w-5 h-5" />
      <span>+91 6280116788</span>
    </div>
  </div>
);
};

export default Sale