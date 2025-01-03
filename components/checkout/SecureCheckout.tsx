"use client";

import { Shield, Lock, CreditCard } from "lucide-react";

interface SecureCheckoutProps {
  badges: string[];
  message: string;
}

export function SecureCheckout({ badges, message }: SecureCheckoutProps) {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center gap-4">
        {badges.map((badge, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full text-sm text-gray-300"
          >
            <Lock className="w-4 h-4 text-purple-400" />
            {badge}
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm">{message}</p>
    </div>
  );
}