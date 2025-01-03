"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { WebinarData } from "@/types/webinar";

interface WebinarPreviewProps {
  data: WebinarData;
}

export function WebinarPreview({ data }: WebinarPreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < data.slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const getSlideStyle = () => {
    const defaultStyle = {
      theme: "dark",
      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        accent: "#4F46E5"
      }
    };

    const style = data.style || defaultStyle;
    const isDark = style.theme === "dark";

    return {
      backgroundColor: isDark ? "#000000" : "#FFFFFF",
      color: isDark ? "#FFFFFF" : "#000000",
      backgroundImage: isDark 
        ? "linear-gradient(to bottom right, rgba(147, 51, 234, 0.05), rgba(0, 0, 0, 0), rgba(79, 70, 229, 0.05))"
        : "linear-gradient(to bottom right, rgba(147, 51, 234, 0.1), rgba(255, 255, 255, 0), rgba(79, 70, 229, 0.1))"
    };
  };

  const currentSlideContent = data.slides[currentSlide];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Preview</h3>

      <div 
        className="aspect-video rounded-lg overflow-hidden"
        style={getSlideStyle()}
      >
        {currentSlideContent && (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              {currentSlideContent.content.title}
            </h2>
            {/* Add more slide content rendering based on type */}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button
          variant="ghost"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="text-white hover:bg-white/10"
        >
          <ChevronLeft className="mr-2" />
          Previous
        </Button>

        <span className="text-white">
          {currentSlide + 1} / {data.slides.length}
        </span>

        <Button
          variant="ghost"
          onClick={nextSlide}
          disabled={currentSlide === data.slides.length - 1}
          className="text-white hover:bg-white/10"
        >
          Next
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}