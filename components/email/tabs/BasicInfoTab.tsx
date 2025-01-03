"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { EmailSequenceData } from "@/types/email-sequence";

interface BasicInfoTabProps {
  data: EmailSequenceData;
  onChange: (data: EmailSequenceData) => void;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof EmailSequenceData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Product Name</Label>
        <Input
          value={data.productName}
          onChange={(e) => updateField("productName", e.target.value)}
          placeholder="e.g., Agency Scaling Blueprint"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Product Price</Label>
        <Input
          value={data.productPrice}
          onChange={(e) => updateField("productPrice", e.target.value)}
          placeholder="e.g., $97"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Main Benefit</Label>
        <Input
          value={data.mainBenefit}
          onChange={(e) => updateField("mainBenefit", e.target.value)}
          placeholder="e.g., Scale Your Agency to 7-Figures"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Target Audience</Label>
        <Input
          value={data.targetAudience}
          onChange={(e) => updateField("targetAudience", e.target.value)}
          placeholder="e.g., Agency Owners"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Pain Point</Label>
        <Input
          value={data.painPoint}
          onChange={(e) => updateField("painPoint", e.target.value)}
          placeholder="e.g., Inconsistent Client Results"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Solution</Label>
        <Input
          value={data.solution}
          onChange={(e) => updateField("solution", e.target.value)}
          placeholder="e.g., AI-Powered Client Management System"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Bonus Name</Label>
        <Input
          value={data.bonusName}
          onChange={(e) => updateField("bonusName", e.target.value)}
          placeholder="e.g., Agency Growth Toolkit"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Bonus Value</Label>
        <Input
          type="number"
          value={data.bonusValue}
          onChange={(e) => updateField("bonusValue", parseInt(e.target.value))}
          placeholder="e.g., 97"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
    </div>
  );
}