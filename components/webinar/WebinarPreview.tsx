"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { WebinarData } from "@/types/webinar";
import { generateSlideContent } from "@/lib/utils/webinar-generator";

interface WebinarPreviewProps {
  data: WebinarData;
}

export function WebinarPreview({ data }: WebinarPreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  
  const nextSlide = () => {
    if (currentSlide < data.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const downloadPresentation = () => {
    // Implementation for downloading presentation
    console.log("Downloading presentation...");
  };

  const openPreview = () => {
    const encodedData = encodeURIComponent(JSON.stringify(data));
    window.open(`/template-webinar-builder/preview?data=${encodedData}`, "_blank");
  };

  const colors = data.style?.colors || {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    background: "#000000",
    text: "#FFFFFF",
    accent: "#4F46E5"
  };

  const gradients = data.style?.gradients || [
    "from-purple-600 to-blue-600",
    "from-purple-950/5 via-black to-purple-950/5"
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Slide Preview</h3>
        <div className="flex gap-2">
          <Button
            onClick={openPreview}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <ExternalLink size={16} className="mr-2" />
            Preview
          </Button>
          <Button
            onClick={downloadPresentation}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <Download size={16} className="mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div 
        className={cn(
          "aspect-video rounded-lg p-8 mb-4 bg-gradient-to-br",
          gradients[0],
          "overflow-hidden"
        )}
        style={{ backgroundColor: colors.background }}
      >
        {/* Slide Content */}
        <div className="h-full flex items-center justify-center overflow-y-auto">
          <div dangerouslySetInnerHTML={{ 
            __html: generateSlideContent(data.slides[currentSlide], data) 
          }} className="w-full" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <ChevronLeft size={16} className="mr-2" />
          Previous
        </Button>

        <span className="text-white">
          {currentSlide + 1} / {data.slides.length}
        </span>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === data.slides.length - 1}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          Next
          <ChevronRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}