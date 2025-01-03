"use client";

import { PartyPopper } from "lucide-react";

interface WelcomeMessageProps {
  productName: string;
  desiredOutcome: string;
}

export function WelcomeMessage({ productName, desiredOutcome }: WelcomeMessageProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-purple-500/10 px-6 py-3 rounded-full">
        <PartyPopper className="text-purple-400" />
        <span className="text-purple-300 font-semibold">GREAT! YOU'RE IN!</span>
      </div>
      
      <div className="mt-6 space-y-2">
        <h2 className="text-2xl font-bold text-white">
          Welcome to {productName}!
        </h2>
        <p className="text-gray-300">
          You've taken the first step towards {desiredOutcome}.
        </p>
      </div>
    </div>
  );
}