"use client";

import { Dispatch, SetStateAction } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import type { WebinarData } from "@/types/webinar";

interface StyleTabProps {
  data: WebinarData;
  onChange: Dispatch<SetStateAction<WebinarData>>;
}

type ColorKey = 'primary' | 'secondary' | 'accent';

export function StyleTab({ data, onChange }: StyleTabProps) {
  const defaultStyle = {
    theme: "dark" as const,
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#4F46E5"
    }
  };

  const updateStyle = (field: "theme" | "colors", value: any) => {
    const currentStyle = data.style || defaultStyle;
    onChange({
      ...data,
      style: { ...currentStyle, [field]: value }
    });
  };

  const updateColor = (colorKey: ColorKey, value: string) => {
    updateStyle('colors', {
      ...(data.style?.colors || defaultStyle.colors),
      [colorKey]: value
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white">Theme</Label>
        <RadioGroup
          value={data.style?.theme || defaultStyle.theme}
          onValueChange={(value: "dark" | "light") => updateStyle("theme", value)}
          className="grid grid-cols-2 gap-4 mt-2"
        >
          <div>
            <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
            <Label
              htmlFor="dark"
              className="flex flex-col gap-2 rounded-lg border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Dark Theme
            </Label>
          </div>
          <div>
            <RadioGroupItem value="light" id="light" className="peer sr-only" />
            <Label
              htmlFor="light"
              className="flex flex-col gap-2 rounded-lg border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Light Theme
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label className="text-white">Colors</Label>
        <div>
          <Label className="text-sm text-gray-400">Primary</Label>
          <Input
            type="color"
            value={data.style?.colors?.primary || defaultStyle.colors.primary}
            onChange={(e) => updateColor("primary", e.target.value)}
            className="h-10 px-2 bg-white/10 border-purple-500/30"
          />
        </div>
        <div>
          <Label className="text-sm text-gray-400">Secondary</Label>
          <Input
            type="color"
            value={data.style?.colors?.secondary || defaultStyle.colors.secondary}
            onChange={(e) => updateColor("secondary", e.target.value)}
            className="h-10 px-2 bg-white/10 border-purple-500/30"
          />
        </div>
        <div>
          <Label className="text-sm text-gray-400">Accent</Label>
          <Input
            type="color"
            value={data.style?.colors?.accent || defaultStyle.colors.accent}
            onChange={(e) => updateColor("accent", e.target.value)}
            className="h-10 px-2 bg-white/10 border-purple-500/30"
          />
        </div>
      </div>
    </div>
  );
}