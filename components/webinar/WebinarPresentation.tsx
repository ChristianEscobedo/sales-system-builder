"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WebinarData } from "@/types/webinar";
import { generateSlideContent } from "@/lib/utils/webinar-generator";

interface WebinarPresentationProps {
  data: WebinarData;
}

export function WebinarPresentation({ data }: WebinarPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentSlide < data.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, data.slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

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
    <div 
      className={cn(
        "min-h-screen flex flex-col",
        isFullscreen ? "fixed inset-0 z-50" : ""
      )}
      style={{ backgroundColor: colors.background }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.close()}
          className="text-white hover:bg-white/10"
        >
          <X size={20} />
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-white">
            {currentSlide + 1} / {data.slides.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="text-white hover:bg-white/10"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </Button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div 
          className={cn(
            "w-full max-w-6xl aspect-video rounded-lg p-8 bg-gradient-to-br",
            gradients[0]
          )}
        >
          <div dangerouslySetInnerHTML={{ 
            __html: generateSlideContent(data.slides[currentSlide], data) 
          }} className="w-full h-full" />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous
        </Button>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === data.slides.length - 1}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          Next
          <ChevronRight size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}