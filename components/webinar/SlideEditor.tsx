"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { slideTemplates } from "@/lib/constants/slide-templates";
import type { WebinarSlide } from "@/types/webinar";

interface SlideEditorProps {
  slide: WebinarSlide;
  onChange: (content: any) => void;
}

export function SlideEditor({ slide, onChange }: SlideEditorProps) {
  const template = slideTemplates[slide.type];
  
  if (!template) {
    return <div className="text-gray-400">No editor available for this slide type</div>;
  }

  const updateField = (field: string, value: any) => {
    onChange({ ...slide.content, [field]: value });
  };

  const addListItem = (field: string) => {
    const currentList = slide.content[field] || [];
    updateField(field, [...currentList, ""]);
  };

  const updateListItem = (field: string, index: number, value: string) => {
    const newList = [...(slide.content[field] || [])];
    newList[index] = value;
    updateField(field, newList);
  };

  const removeListItem = (field: string, index: number) => {
    const newList = (slide.content[field] || []).filter((_, i) => i !== index);
    updateField(field, newList);
  };

  return (
    <div className="space-y-4">
      {template.title && (
        <div>
          <Label className="text-white">Title</Label>
          <Input
            value={slide.content.title || template.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="bg-white/10 border-purple-500/30 text-white"
          />
        </div>
      )}

      {template.subtitle && (
        <div>
          <Label className="text-white">Subtitle</Label>
          <Input
            value={slide.content.subtitle || template.subtitle}
            onChange={(e) => updateField("subtitle", e.target.value)}
            className="bg-white/10 border-purple-500/30 text-white"
          />
        </div>
      )}

      {template.points && (
        <div className="space-y-2">
          <Label className="text-white">Points</Label>
          {(slide.content.points || template.points).map((point: string, index: number) => (
            <div key={index} className="flex gap-2">
              <Input
                value={point}
                onChange={(e) => updateListItem("points", index, e.target.value)}
                className="bg-white/10 border-purple-500/30 text-white"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeListItem("points", index)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
          <Button
            variant="ghost"
            onClick={() => addListItem("points")}
            className="text-purple-400 hover:text-purple-300"
          >
            <Plus size={16} className="mr-2" />
            Add Point
          </Button>
        </div>
      )}

      {/* Add more field types as needed */}
    </div>
  );
}