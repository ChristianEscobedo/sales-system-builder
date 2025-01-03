"use client";

import { useState } from "react";
import { PromptForm } from "@/components/prompts/PromptForm";
import type { PromptData } from "@/types/prompt";

export default function PromptsPage() {
  const [promptData, setPromptData] = useState<PromptData>({
    resourceType: "",
    resourceName: "",
    painPoint: "",
    quickWin: "",
    frustrationMethod: "",
    timeFrame: "",
    modules: [],
    bonusName: "",
    bonusValue: 0,
    targetAudience: "",
    industryNiche: "",
    productPrice: 0,
    supportEmail: "",
  });

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <PromptForm 
          promptData={promptData} 
          setPromptData={setPromptData} 
        />
      </div>
    </main>
  );
}