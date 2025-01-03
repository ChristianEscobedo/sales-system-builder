"use client";

import { CheckCircle } from "lucide-react";

export function SuccessHeader() {
  return (
    <div className="text-center">
      <div className="inline-flex flex-col items-center">
        <CheckCircle className="w-20 h-20 text-green-400 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          CONGRATULATIONS!
        </h1>
        <p className="text-2xl text-green-400 font-semibold">
          YOUR ORDER IS COMPLETE!
        </p>
      </div>
    </div>
  );
}