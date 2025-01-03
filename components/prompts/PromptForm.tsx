"use client";

import { Dispatch, SetStateAction } from "react";
import type { PromptData } from "@/types/prompt";

export interface PromptFormProps {
  promptData: PromptData;
  setPromptData: Dispatch<SetStateAction<PromptData>>;
}

export function PromptForm({ promptData, setPromptData }: PromptFormProps) {
  return (
    <form className="space-y-6">
      <div>
        <label className="text-white">Resource Type</label>
        <input
          type="text"
          value={promptData.resourceType}
          onChange={(e) => setPromptData({ ...promptData, resourceType: e.target.value })}
          className="w-full bg-white/10 text-white"
        />
      </div>
      {/* Add more form fields for other PromptData properties */}
    </form>
  );
}