"use client";

import { Star } from "lucide-react";

interface SocialProofProps {
  downloads: number;
}

export function SocialProof({ downloads }: SocialProofProps) {
  return (
    <div className="flex justify-center items-center gap-8 mb-12">
      <div className="flex items-center gap-2">
        <span className="text-purple-300">{downloads.toLocaleString()}+</span>
        <span className="text-gray-400">Downloads</span>
      </div>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    </div>
  );
}