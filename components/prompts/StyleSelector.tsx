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
      value={value.id}
      onValueChange={(id) => {
        const selectedPreset = stylePresets.find(preset => preset.id === id);
        if (selectedPreset) {
          onChange(selectedPreset);
        }
      }}
      className="grid grid-cols-2 gap-4"
    >
      {stylePresets.map((preset) => (
        <div key={preset.id}>
          <RadioGroupItem
            value={preset.id}
            id={preset.id}
            className="peer sr-only"
          />
          <Label
            htmlFor={preset.id}
            className="flex flex-col gap-2 rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <div className="flex items-center gap-2">
              {preset.colors.map((color) => (
                <div
                  key={color}
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="font-semibold">{preset.name}</div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}