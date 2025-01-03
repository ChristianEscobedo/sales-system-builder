"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { WebinarData } from "@/types/webinar";

interface WebinarPresentationProps {
  data: WebinarData;
}

export function WebinarPresentation({ data }: WebinarPresentationProps) {
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
    <div 
      className="relative min-h-screen flex flex-col"
      style={getSlideStyle()}
    >
      {/* Slide Content */}
      <div className="flex-1 container mx-auto px-4 py-16">
        {currentSlideContent && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {currentSlideContent.content.title}
            </h2>
            {/* Add more slide content rendering based on type */}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
    </div>
  );
}