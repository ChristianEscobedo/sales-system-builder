"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ColorPicker } from "@/components/prompts/ColorPicker";
import { webinarStylePresets } from "@/lib/constants/webinar-style-presets";
import type { WebinarStylePreset } from "@/lib/constants/webinar-style-presets";
import type { WebinarData } from "@/types/webinar";

interface StyleTabProps {
  data: WebinarData;
  onChange: (data: WebinarData) => void;
}

// Add type for colors
type WebinarColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
};

// Add type for the color value
type ColorValue = string;

export function StyleTab({ data, onChange }: StyleTabProps) {
  const updateStyle = (field: keyof typeof data.style, value: any) => {
    onChange({
      ...data,
      style: { ...(data.style || {}), [field]: value }
    });
  };

  const applyPreset = (preset: WebinarStylePreset) => {
    const presetColors = webinarStylePresets[preset].colors;
    onChange({
      ...data,
      style: {
        preset,
        colors: { ...presetColors },
        gradients: [...webinarStylePresets[preset].gradients]
      }
    });
  };

  const handleColorUpdate = (key: keyof WebinarColors, value: string) => {
    const currentColors = data.style?.colors || {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      background: "#000000",
      text: "#FFFFFF",
      accent: "#4F46E5"
    };
    
    onChange({
      ...data,
      style: {
        ...(data.style || {}),
        colors: {
          ...currentColors,
          [key]: value
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white mb-4 block">Style Preset</Label>
        <RadioGroup
          defaultValue={data.style?.preset || "modern"}
          onValueChange={(val) => applyPreset(val as WebinarStylePreset)}
          className="grid grid-cols-2 gap-4"
        >
          {(Object.keys(webinarStylePresets) as WebinarStylePreset[]).map((preset) => (
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
                  {webinarStylePresets[preset].name}
                </span>
                <div className="flex gap-2">
                  {Object.entries(webinarStylePresets[preset].colors).map(([key, color]) => (
                    <div
                      key={key}
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color as ColorValue }}
                      title={key}
                    />
                  ))}
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label className="text-white text-lg">Custom Colors</Label>
        <ColorPicker
          label="Primary Color"
          value={data.style?.colors?.primary || "#6366F1"}
          onChange={(value) => handleColorUpdate("primary", value)}
        />
        <ColorPicker
          label="Secondary Color"
          value={data.style?.colors?.secondary || "#8B5CF6"}
          onChange={(value) => handleColorUpdate("secondary", value)}
        />
        <ColorPicker
          label="Background Color"
          value={data.style?.colors?.background || "#000000"}
          onChange={(value) => handleColorUpdate("background", value)}
        />
        <ColorPicker
          label="Text Color"
          value={data.style?.colors?.text || "#FFFFFF"}
          onChange={(value) => handleColorUpdate("text", value)}
        />
        <ColorPicker
          label="Accent Color"
          value={data.style?.colors?.accent || "#4F46E5"}
          onChange={(value) => handleColorUpdate("accent", value)}
        />
      </div>
    </div>
  );
}