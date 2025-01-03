"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { PageData } from "@/types/page-builder";

interface StyleTabProps {
  data: PageData;
  onChange: (data: PageData) => void;
}

export function StyleTab({ data, onChange }: StyleTabProps) {
  const updateStyle = (field: string, value: any) => {
    onChange({
      ...data,
      style: {
        ...data.style,
        [field]: value
      }
    });
  };

  const updateColor = (color: string, type: keyof typeof data.style.colors) => {
    onChange({
      ...data,
      style: {
        ...data.style,
        colors: {
          ...data.style.colors,
          [type]: color
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white mb-4 block">Theme</Label>
        <RadioGroup
          defaultValue={data.style.theme}
          onValueChange={(value) => updateStyle("theme", value)}
          className="grid grid-cols-2 gap-4"
        >
          <div className="relative">
            <RadioGroupItem
              value="dark"
              id="dark"
              className="peer sr-only"
            />
            <Label
              htmlFor="dark"
              className="flex flex-col gap-2 rounded-lg border-2 border-white/10 p-4 hover:bg-white/5 peer-data-[state=checked]:border-blue-500 cursor-pointer"
            >
              <span className="font-semibold text-white">Dark Theme</span>
              <div className="w-full h-8 rounded bg-gray-900" />
            </Label>
          </div>
          <div className="relative">
            <RadioGroupItem
              value="light"
              id="light"
              className="peer sr-only"
            />
            <Label
              htmlFor="light"
              className="flex flex-col gap-2 rounded-lg border-2 border-white/10 p-4 hover:bg-white/5 peer-data-[state=checked]:border-blue-500 cursor-pointer"
            >
              <span className="font-semibold text-white">Light Theme</span>
              <div className="w-full h-8 rounded bg-gray-100" />
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label className="text-white text-lg">Colors</Label>
        <div className="grid gap-4">
          <ColorPicker
            label="Primary Color"
            value={data.style.colors.primary}
            onChange={(value) => updateColor(value, "primary")}
          />
          <ColorPicker
            label="Secondary Color"
            value={data.style.colors.secondary}
            onChange={(value) => updateColor(value, "secondary")}
          />
          <ColorPicker
            label="Accent Color"
            value={data.style.colors.accent}
            onChange={(value) => updateColor(value, "accent")}
          />
        </div>
      </div>

      <div>
        <Label className="text-white">Video URL (Optional)</Label>
        <Input
          value={data.style.video?.url || ""}
          onChange={(e) => updateStyle("video", { url: e.target.value })}
          placeholder="Enter video URL..."
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
    </div>
  );
}

function ColorPicker({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div>
      <Label className="text-white">{label}</Label>
      <div className="flex gap-2">
        <div
          className="w-10 h-10 rounded border border-white/10"
          style={{ backgroundColor: value }}
        />
        <Input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10"
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-white/10 border-blue-500/30 text-white font-mono"
        />
      </div>
    </div>
  );
}