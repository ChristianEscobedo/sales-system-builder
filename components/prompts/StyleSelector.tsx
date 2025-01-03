"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { stylePresets } from "@/lib/constants/style-presets";
import type { StylePreset } from "@/lib/constants/style-presets";

interface StyleSelectorProps {
  value: StylePreset;
  onChange: (value: StylePreset) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(val) => onChange(val as StylePreset)}
      className="grid grid-cols-2 gap-4"
    >
      {(Object.keys(stylePresets) as StylePreset[]).map((preset) => (
        <div key={preset} className="relative">
          <RadioGroupItem
            value={preset}
            id={preset}
            className="peer sr-only"
          />
          <Label
            htmlFor={preset}
            className="flex flex-col gap-2 rounded-lg border-2 border-white/10 p-4 hover:bg-white/5 peer-data-[state=checked]:border-purple-500 cursor-pointer"
          >
            <span className="font-semibold text-white">
              {stylePresets[preset].name}
            </span>
            <div className="flex gap-2">
              {Object.entries(stylePresets[preset].colors).map(([key, color]) => (
                <div
                  key={key}
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                  title={key}
                />
              ))}
            </div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}