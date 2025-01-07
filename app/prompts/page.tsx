"use client";

import { useState } from "react";
import { PromptForm } from "@/components/prompts/PromptForm";
import { PromptPreview } from "@/components/prompts/PromptPreview";
import { PromptHeader } from "@/components/prompts/PromptHeader";
import type { PromptData } from "@/types/prompt";

const defaultPromptData: PromptData = {
  resourceType: "",
  resourceName: "",
  painPoint: "",
  quickWin: "",
  frustrationMethod: "",
  timeFrame: "30 days",
  modules: [],
  bonusName: "",
  bonusValue: 997,
  targetAudience: "",
  expertName: "",
  expertCredentials: "",
  transformation: "",
  industryNiche: "",
  productPrice: "997",
  supportEmail: "",
  painPoints: [],
  industryStats: [],
  storyHook: "",
  desiredOutcome: "",
  trustElements: [],
  socialProof: {
    downloads: 0,
    successStories: [],
    industryRecognition: []
  },
  colorTheme: {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    background: "#000000",
    text: "#FFFFFF",
    hoverText: "#F3F4F6",
    selectedText: "#4F46E5",
    accent: "#4F46E5",
    gradients: []
  }
};

export default function PromptsPage() {
  const [promptData, setPromptData] = useState<PromptData>(defaultPromptData);

  return (
    <div className="min-h-screen bg-[#050505] py-8">
      <div className="container mx-auto px-4">
        <PromptHeader onGenerate={(data) => setPromptData(data)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <PromptForm 
            data={promptData} 
            onChange={setPromptData}
            onSubmit={(data) => setPromptData(data)}
          />
          <PromptPreview 
            data={promptData} 
          />
        </div>
      </div>
    </div>
  );
}