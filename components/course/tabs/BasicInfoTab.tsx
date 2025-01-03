"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { CourseData } from "@/types/course";

interface BasicInfoTabProps {
  data: CourseData;
  onChange: (data: CourseData) => void;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof CourseData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...data.features];
    newFeatures[index] = value;
    updateField("features", newFeatures);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Course Title</Label>
        <Input
          value={data.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="e.g., The Ultimate Sales System"
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Subtitle</Label>
        <Input
          value={data.subtitle}
          onChange={(e) => updateField("subtitle", e.target.value)}
          placeholder="e.g., Master the art of high-ticket sales"
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Duration</Label>
        <Input
          value={data.duration}
          onChange={(e) => updateField("duration", e.target.value)}
          placeholder="e.g., 30-Minute System"
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Key Features</Label>
        <div className="space-y-2">
          {data.features.map((feature, index) => (
            <Input
              key={index}
              value={feature}
              onChange={(e) => updateFeature(index, e.target.value)}
              placeholder={`Feature ${index + 1}`}
              className="bg-white/10 border-blue-500/30 text-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}