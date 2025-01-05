"use client";

import { useState } from "react";
import { PromptForm } from "@/components/prompts/PromptForm";
import { PromptPreview } from "@/components/prompts/PromptPreview";
import { VideoSection } from "@/components/video/VideoSection";
import type { PromptData } from "@/types/prompt";
import { createDefaultPromptData, defaultPromptParams } from "@/lib/defaults/prompt";

export default function PublicPromptsPage() {
  const [promptData, setPromptData] = useState<PromptData>(() => ({
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
    expertName: "",
    expertCredentials: "",
    transformation: "",
    industryNiche: "",
    productPrice: "",
    supportEmail: "",
    colorTheme: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      background: "#000000",
      text: "#FFFFFF",
      hoverText: "#F3F4F6",
      selectedText: "#4F46E5",
      accent: "#4F46E5",
      gradients: ["from-purple-600 to-blue-600", "from-purple-500 to-blue-500"]
    },
    style: {
      font: "inter",
      layout: "modern",
      spacing: "comfortable"
    }
  }));
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDataUpdate = (newData: PromptData) => {
    // Update the state immediately with new data
    setPromptData(newData);
  };

  return (
    <main className="min-h-screen relative bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/3" />
      
      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Sales System Builder
            </h1>
            <p className="text-gray-400">
              Create high-converting sales pages in minutes with our AI-powered builder
            </p>
          </div>

          {/* Add Video Section */}
          <VideoSection />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <PromptForm 
                data={promptData} 
                onSubmit={handleDataUpdate}
                isGenerating={isGenerating}
                publicVersion={true}
              />
            </div>
            
            <div className="space-y-8">
              <PromptPreview 
                data={promptData} 
                publicVersion={true}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 