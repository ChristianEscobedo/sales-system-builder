"use client";

import { useState } from "react";
import { WebinarHeader } from "@/components/webinar/WebinarHeader";
import { WebinarForm } from "@/components/webinar/WebinarForm";
import { WebinarPreview } from "@/components/webinar/WebinarPreview";
import type { WebinarData } from "@/types/webinar";

export default function WebinarBuilderPage() {
  const [webinarData, setWebinarData] = useState<WebinarData>({
    title: "",
    subtitle: "",
    description: "",
    duration: "60 minutes",
    targetAudience: "",
    mainBenefit: "",
    slides: [],
    style: {
      theme: "dark",
      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        accent: "#4F46E5"
      }
    }
  });

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/5 via-black to-purple-950/5 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <WebinarHeader onGenerate={setWebinarData} />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <WebinarForm data={webinarData} onChange={setWebinarData} />
          <WebinarPreview data={webinarData} />
        </div>
      </div>
    </main>
  );
}