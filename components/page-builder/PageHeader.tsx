"use client";

import { AutoGeneratePageDialog } from "./AutoGeneratePageDialog";
import type { PageData } from "@/types/page-builder";

interface PageHeaderProps {
  onGenerate: (data: PageData) => void;
}

export function PageHeader({ onGenerate }: PageHeaderProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <AutoGeneratePageDialog onGenerate={onGenerate} />
      </div>
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        Page Builder
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Create beautiful, high-converting pages with our visual builder. Choose from pre-made sections or create your own.
      </p>
    </div>
  );
}