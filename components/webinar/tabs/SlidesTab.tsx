"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import type { WebinarData, WebinarSlide } from "@/types/webinar";
import { SlideEditor } from "@/components/webinar/SlideEditor";
import { slideTemplates } from "@/lib/constants/slide-templates";

interface SlidesTabProps {
  data: WebinarData;
  onChange: (data: WebinarData) => void;
}

export function SlidesTab({ data, onChange }: SlidesTabProps) {
  const [expandedSlide, setExpandedSlide] = useState<number | null>(0);

  const updateSlideContent = (index: number, content: any) => {
    const newSlides = [...data.slides];
    newSlides[index] = { 
      ...newSlides[index], 
      content: { ...newSlides[index].content, ...content }
    };
    onChange({ ...data, slides: newSlides });
  };

  return (
    <div className="space-y-6">
      {data.slides.map((slide, index) => (
        <div key={index} className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-medium capitalize">
              {slideTemplates[slide.type]?.title || slide.type.replace("-", " ")} Slide
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedSlide(expandedSlide === index ? null : index)}
              className="text-gray-400 hover:text-white"
            >
              {expandedSlide === index ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>

          {expandedSlide === index && (
            <SlideEditor
              slide={slide}
              onChange={(content) => updateSlideContent(index, content)}
            />
          )}
        </div>
      ))}
    </div>
  );
}