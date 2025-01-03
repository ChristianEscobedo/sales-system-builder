"use client";

import { Shield } from "lucide-react";

interface BridgeGuaranteeProps {
  productName: string;
  achievementPath: string;
  clientType: string;
}

export function BridgeGuarantee({ productName, achievementPath, clientType }: BridgeGuaranteeProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
        <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">30-DAY FULL REFUND POLICY</h3>
        <div className="space-y-4 text-gray-300">
          <p>This offer is fully backed by our iron-clad 30-day money-back guarantee.</p>
          <p>We have read and re-read our {clientType} reviews to confidently sell {productName} as the #1 {achievementPath}.</p>
          <p>We are so sure of {productName} that we want you to try it for yourself.</p>
        </div>
      </div>
    </div>
  );
}