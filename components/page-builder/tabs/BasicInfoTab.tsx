"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PageData } from "@/types/page-builder";

interface BasicInfoTabProps {
  data: PageData;
  onChange: (data: PageData) => void;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof PageData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Page Title</Label>
        <Input
          value={data.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="e.g., Sales Funnel Mastery"
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Subtitle</Label>
        <Input
          value={data.subtitle}
          onChange={(e) => updateField("subtitle", e.target.value)}
          placeholder="e.g., The Million-Dollar Blueprint"
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Description</Label>
        <Textarea
          value={data.description}
          onChange={(e) => updateField("description", e.target.value)}
          placeholder="Enter a brief description of your page..."
          className="bg-white/10 border-blue-500/30 text-white min-h-[100px]"
        />
      </div>
    </div>
  );
}