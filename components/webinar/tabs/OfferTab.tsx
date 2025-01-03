"use client";

import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import type { WebinarData } from "@/types/webinar";

interface OfferTabProps {
  data: WebinarData;
  onChange: Dispatch<SetStateAction<WebinarData>>;
}

export function OfferTab({ data, onChange }: OfferTabProps) {
  const updateSlide = (index: number, content: any) => {
    onChange(prev => ({
      ...prev,
      slides: prev.slides.map((slide, i) => 
        i === index && slide.type === "offer" 
          ? { ...slide, content }
          : slide
      )
    }));
  };

  const offerSlide = data.slides.find(slide => slide.type === "offer");
  if (!offerSlide) return null;

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Offer Name</Label>
        <Input
          value={offerSlide.content.name || ""}
          onChange={(e) => updateSlide(data.slides.indexOf(offerSlide), {
            ...offerSlide.content,
            name: e.target.value
          })}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., Agency Growth Accelerator"
        />
      </div>

      <div>
        <Label className="text-white">Price</Label>
        <Input
          value={offerSlide.content.price || ""}
          onChange={(e) => updateSlide(data.slides.indexOf(offerSlide), {
            ...offerSlide.content,
            price: e.target.value
          })}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., $997"
        />
      </div>

      <div>
        <Label className="text-white">Value Proposition</Label>
        <Input
          value={offerSlide.content.value || ""}
          onChange={(e) => updateSlide(data.slides.indexOf(offerSlide), {
            ...offerSlide.content,
            value: e.target.value
          })}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., Total Value: $4,997"
        />
      </div>
    </div>
  );
}