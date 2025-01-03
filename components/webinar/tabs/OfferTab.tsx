"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import type { WebinarData, Bonus } from "@/types/webinar";

interface OfferTabProps {
  data: WebinarData;
  onChange: (data: WebinarData) => void;
}

export function OfferTab({ data, onChange }: OfferTabProps) {
  const updateOffer = (field: keyof typeof data.offer, value: any) => {
    onChange({
      ...data,
      offer: { ...data.offer, [field]: value }
    });
  };

  const addBonus = () => {
    const newBonus: Bonus = {
      name: "",
      value: "",
      description: ""
    };
    updateOffer("bonuses", [...data.offer.bonuses, newBonus]);
  };

  const updateBonus = (index: number, field: keyof Bonus, value: string) => {
    const newBonuses = [...data.offer.bonuses];
    newBonuses[index] = { ...newBonuses[index], [field]: value };
    updateOffer("bonuses", newBonuses);
  };

  const removeBonus = (index: number) => {
    const newBonuses = data.offer.bonuses.filter((_, i) => i !== index);
    updateOffer("bonuses", newBonuses);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white">Offer Name</Label>
        <Input
          value={data.offer.name}
          onChange={(e) => updateOffer("name", e.target.value)}
          placeholder="e.g., Agency Growth Accelerator"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-white">Regular Price</Label>
          <Input
            value={data.offer.value}
            onChange={(e) => updateOffer("value", e.target.value)}
            placeholder="e.g., 1997"
            className="bg-white/10 border-purple-500/30 text-white"
          />
        </div>
        <div>
          <Label className="text-white">Special Price</Label>
          <Input
            value={data.offer.price}
            onChange={(e) => updateOffer("price", e.target.value)}
            placeholder="e.g., 997"
            className="bg-white/10 border-purple-500/30 text-white"
          />
        </div>
      </div>

      <div>
        <Label className="text-white">Guarantee</Label>
        <Input
          value={data.offer.guarantee}
          onChange={(e) => updateOffer("guarantee", e.target.value)}
          placeholder="e.g., 30-Day Money Back Guarantee"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-white">Bonuses</Label>
          <Button
            variant="ghost"
            onClick={addBonus}
            className="text-purple-400 hover:text-purple-300"
          >
            <Plus size={16} className="mr-2" />
            Add Bonus
          </Button>
        </div>

        {data.offer.bonuses.map((bonus, index) => (
          <div key={index} className="space-y-2 bg-white/5 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <Label className="text-white">Bonus {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeBonus(index)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 size={16} />
              </Button>
            </div>
            
            <Input
              value={bonus.name}
              onChange={(e) => updateBonus(index, "name", e.target.value)}
              placeholder="Bonus name"
              className="bg-white/10 border-purple-500/30 text-white"
            />
            
            <Input
              value={bonus.value}
              onChange={(e) => updateBonus(index, "value", e.target.value)}
              placeholder="Value (e.g., 497)"
              className="bg-white/10 border-purple-500/30 text-white"
            />
            
            <Input
              value={bonus.description}
              onChange={(e) => updateBonus(index, "description", e.target.value)}
              placeholder="Brief description"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}