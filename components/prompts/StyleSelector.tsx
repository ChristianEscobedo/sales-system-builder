"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { stylePresets } from "@/lib/constants/style-presets";
import type { PromptStylePreset } from "@/lib/constants/style-presets";

interface StyleSelectorProps {
  value: PromptStylePreset;
  onChange: (preset: PromptStylePreset) => void;
  onColorUpdate?: (colors: any) => void;
}

export function StyleSelector({ value, onChange, onColorUpdate }: StyleSelectorProps) {
  const handlePresetChange = (preset: PromptStylePreset) => {
    onChange(preset);
    
    if (onColorUpdate) {
      const presetColors = stylePresets[preset].colors;
      onColorUpdate(presetColors);
    }
  };

  return (
    <RadioGroup
      value={value}
      onValueChange={handlePresetChange}
      className="grid grid-cols-2 gap-4"
    >
      {(Object.keys(stylePresets) as PromptStylePreset[]).map((presetKey) => {
        const preset = stylePresets[presetKey];
        const isSelected = value === presetKey;

        return (
          <button
            key={presetKey}
            onClick={() => onChange(presetKey)}
            className={`
              relative p-4 rounded-xl border-2 transition-all
              ${isSelected 
                ? 'border-purple-500 bg-purple-500/10' 
                : 'border-white/10 hover:border-white/20'
              }
            `}
          >
            <div className="space-y-2">
              <div className="flex gap-2">
                {[preset.colors.primary, preset.colors.secondary, preset.colors.accent].map((color, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="text-sm text-white capitalize">{presetKey}</div>
            </div>
          </button>
        );
      })}
    </RadioGroup>
  );
}