"use client";

import { useState } from "react";
import { PromptHeader } from "@/components/prompts/PromptHeader";
import { PromptForm } from "@/components/prompts/PromptForm";
import { PromptPreview } from "@/components/prompts/PromptPreview";
import type { PromptData } from "@/types/prompt";

export default function PromptsPage() {
  const [promptData, setPromptData] = useState<PromptData>({
    resourceType: "Course",
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
    productPrice: "$0",
    supportEmail: ""
  });

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/5 via-black to-purple-950/5 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <PromptHeader onGenerate={setPromptData} />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <PromptForm data={promptData} onChange={setPromptData} />
          <PromptPreview data={promptData} />
        </div>
      </div>
    </main>
  );
}