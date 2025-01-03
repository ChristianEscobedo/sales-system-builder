"use client";

import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PromptData } from "@/types/prompt";

interface OfferTabProps {
  data: PromptData;
  onChange: Dispatch<SetStateAction<PromptData>>;
}

export function OfferTab({ data, onChange }: OfferTabProps) {
  const updateField = (field: keyof PromptData, value: string | number) => {
    onChange(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Product Price</Label>
        <Input
          value={data.productPrice}
          onChange={(e) => updateField("productPrice", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
          placeholder="e.g., $997"
        />
      </div>

      <div>
        <Label className="text-white">Bonus Name</Label>
        <Input
          value={data.bonusName}
          onChange={(e) => updateField("bonusName", e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>

      <div>
        <Label className="text-white">Bonus Value</Label>
        <Input
          type="number"
          value={data.bonusValue}
          onChange={(e) => updateField("bonusValue", parseInt(e.target.value) || 0)}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
    </div>
  );
} 