"use client";

import { Shield } from "lucide-react";

interface CheckoutGuaranteeProps {
  days: string;
  description: string;
}

export function CheckoutGuarantee({ days, description }: CheckoutGuaranteeProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <Shield className="w-12 h-12 text-purple-400" />
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            {days}-Day Money Back Guarantee
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}