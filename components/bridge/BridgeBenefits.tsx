"use client";

import { CheckCircle2 } from "lucide-react";

interface BridgeBenefitsProps {
  productName: string;
  items: string[];
}

export function BridgeBenefits({ productName, items }: BridgeBenefitsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">
          Let me present to you {productName} (but there's a catch - it's only available here and now on this page):
        </h3>
        <div className="grid gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-purple-400 flex-shrink-0" />
              <span className="text-gray-200">You'll {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}