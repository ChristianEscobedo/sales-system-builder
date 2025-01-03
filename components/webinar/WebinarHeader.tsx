"use client";

import { AutoGenerateWebinarDialog } from "./AutoGenerateWebinarDialog";
import type { WebinarData } from "@/types/webinar";

interface WebinarHeaderProps {
  onGenerate: (data: WebinarData) => void;
}

export function WebinarHeader({ onGenerate }: WebinarHeaderProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <AutoGenerateWebinarDialog onGenerate={onGenerate} />
      </div>
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        Webinar Slide Builder
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Create a compelling webinar presentation with AI-powered slide content and dynamic fields.
      </p>
    </div>
  );
}