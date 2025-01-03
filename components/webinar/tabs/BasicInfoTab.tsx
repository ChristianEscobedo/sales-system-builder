"use client";

import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { WebinarData } from "@/types/webinar";

interface BasicInfoTabProps {
  data: WebinarData;
  onChange: Dispatch<SetStateAction<WebinarData>>;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof WebinarData, value: string) => {
    onChange(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Title</Label>
        <Input
          value={data.title}
          onChange={(e) => updateField("title", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., The Ultimate Agency Growth Blueprint"
        />
      </div>

      <div>
        <Label className="text-white">Subtitle</Label>
        <Input
          value={data.subtitle}
          onChange={(e) => updateField("subtitle", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., How to Scale Your Agency to 7-Figures"
        />
      </div>

      <div>
        <Label className="text-white">Description</Label>
        <Input
          value={data.description}
          onChange={(e) => updateField("description", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="Brief description of your webinar"
        />
      </div>

      <div>
        <Label className="text-white">Duration</Label>
        <Input
          value={data.duration}
          onChange={(e) => updateField("duration", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., 60 minutes"
        />
      </div>

      <div>
        <Label className="text-white">Target Audience</Label>
        <Input
          value={data.targetAudience}
          onChange={(e) => updateField("targetAudience", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., Agency Owners"
        />
      </div>

      <div>
        <Label className="text-white">Main Benefit</Label>
        <Input
          value={data.mainBenefit}
          onChange={(e) => updateField("mainBenefit", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., Scale to 7-Figures in 90 Days"
        />
      </div>
    </div>
  );
}