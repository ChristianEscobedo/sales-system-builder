"use client";

import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PromptData } from "@/types/prompt";

interface BasicInfoTabProps {
  data: PromptData;
  onChange: Dispatch<SetStateAction<PromptData>>;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof PromptData, value: string) => {
    onChange(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Resource Type</Label>
        <Input
          value={data.resourceType}
          onChange={(e) => updateField("resourceType", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>

      <div>
        <Label className="text-white">Resource Name</Label>
        <Input
          value={data.resourceName}
          onChange={(e) => updateField("resourceName", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>

      <div>
        <Label className="text-white">Pain Point</Label>
        <Input
          value={data.painPoint}
          onChange={(e) => updateField("painPoint", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>

      <div>
        <Label className="text-white">Quick Win</Label>
        <Input
          value={data.quickWin}
          onChange={(e) => updateField("quickWin", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
    </div>
  );
} 