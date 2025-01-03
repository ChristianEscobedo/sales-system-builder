"use client";

import { CheckCircle2 } from "lucide-react";

interface FeaturesProps {
  resourceName: string;
  quickWins: string[];
}

export function Features({ resourceName, quickWins }: FeaturesProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">
        Inside Your Free {resourceName}:
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {quickWins.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="text-purple-400" />
            <span className="text-gray-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}