"use client";

import { AutoGenerateEmailDialog } from "./AutoGenerateEmailDialog";
import type { EmailSequenceData } from "@/types/email-sequence";

interface EmailHeaderProps {
  onGenerate: (data: EmailSequenceData) => void;
}

export function EmailHeader({ onGenerate }: EmailHeaderProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <AutoGenerateEmailDialog onGenerate={onGenerate} />
      </div>
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        7-Day Email Sequence Builder
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Create a powerful 7-day email sequence to convert your free opt-in subscribers into paying customers.
      </p>
    </div>
  );
}