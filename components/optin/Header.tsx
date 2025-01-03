"use client";

import { Download } from "lucide-react";

interface HeaderProps {
  resourceType: string;
  discount?: number;
}

export function Header({ resourceType, discount }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full text-purple-300 mb-6">
        <Download size={18} />
        <span>FREE {resourceType.toUpperCase()} - NO PURCHASE REQUIRED</span>
      </div>
      {discount && (
        <div className="text-sm text-purple-300">
          Save {discount}% When You Download Today
        </div>
      )}
    </div>
  );
}