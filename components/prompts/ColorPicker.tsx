"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div>
      <Label className="text-white">{label}</Label>
      <div className="flex gap-2 items-center">
        <div
          className="w-10 h-10 rounded-lg border border-white/10"
          style={{ backgroundColor: value }}
        />
        <Input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 bg-white/10 border-purple-500/30"
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-white/10 border-purple-500/30 text-white font-mono"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}