"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ColorPicker } from "@/components/prompts/ColorPicker";
import { courseStylePresets } from "@/lib/constants/course-style-presets";
import type { CourseStylePreset } from "@/lib/constants/course-style-presets";
import type { CourseData } from "@/types/course";

interface StyleTabProps {
  data: CourseData;
  onChange: (data: CourseData) => void;
}

export function StyleTab({ data, onChange }: StyleTabProps) {
  const updateStyle = (field: keyof typeof data.style, value: any) => {
    onChange({
      ...data,
      style: { ...data.style, [field]: value }
    });
  };

  const updateColor = (color: string, type: keyof typeof data.style.colors) => {
    const newColors = { ...data.style.colors, [type]: color };
    onChange({
      ...data,
      style: { ...data.style, colors: newColors }
    });
  };

  const applyPreset = (preset: CourseStylePreset) => {
    const presetStyle = courseStylePresets[preset];
    onChange({
      ...data,
      style: {
        theme: presetStyle.theme,
        colors: { ...presetStyle.colors }
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white mb-4 block">Style Preset</Label>
        <RadioGroup
          defaultValue="modern"
          onValueChange={(val) => applyPreset(val as CourseStylePreset)}
          className="grid grid-cols-2 gap-4"
        >
          {(Object.keys(courseStylePresets) as CourseStylePreset[]).map((preset) => (
            <div key={preset} className="relative">
              <RadioGroupItem
                value={preset}
                id={preset}
                className="peer sr-only"
              />
              <Label
                htmlFor={preset}
                className="flex flex-col gap-2 rounded-lg border-2 border-white/10 p-4 hover:bg-white/5 peer-data-[state=checked]:border-blue-500 cursor-pointer"
              >
                <span className="font-semibold text-white">
                  {courseStylePresets[preset].name}
                </span>
                <div className="flex gap-2">
                  {Object.entries(courseStylePresets[preset].colors)
                    .filter(([key]) => !key.includes('gradients'))
                    .map(([key, color]) => (
                      <div
                        key={key}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                        title={key}
                      />
                  ))}
                </div>
                {courseStylePresets[preset].colors.gradients?.enabled && (
                  <div 
                    className="w-full h-4 rounded-full mt-2"
                    style={{
                      background: `linear-gradient(to right, ${courseStylePresets[preset].colors.gradients.primary}, ${courseStylePresets[preset].colors.gradients.secondary})`
                    }}
                  />
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

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
        <div className="flex items-center justify-between">
          <Label className="text-white text-lg">Gradient Background</Label>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={data.style.colors.gradients?.enabled || false}
              onChange={(e) => {
                const newColors = {
                  ...data.style.colors,
                  gradients: {
                    enabled: e.target.checked,
                    primary: data.style.colors.gradients?.primary || data.style.colors.primary,
                    secondary: data.style.colors.gradients?.secondary || data.style.colors.secondary
                  }
                };
                onChange({
                  ...data,
                  style: { ...data.style, colors: newColors }
                });
              }}
              className="mr-2"
            />
            <span className="text-white">Enable Gradients</span>
          </div>
        </div>

        {data.style.colors.gradients?.enabled && (
          <>
            <ColorPicker
              label="Gradient Start Color"
              value={data.style.colors.gradients?.primary || data.style.colors.primary}
              onChange={(value) => {
                const newColors = {
                  ...data.style.colors,
                  gradients: {
                    ...data.style.colors.gradients,
                    primary: value
                  }
                };
                onChange({
                  ...data,
                  style: { ...data.style, colors: newColors }
                });
              }}
            />
            <ColorPicker
              label="Gradient End Color"
              value={data.style.colors.gradients?.secondary || data.style.colors.secondary}
              onChange={(value) => {
                const newColors = {
                  ...data.style.colors,
                  gradients: {
                    ...data.style.colors.gradients,
                    secondary: value
                  }
                };
                onChange({
                  ...data,
                  style: { ...data.style, colors: newColors }
                });
              }}
            />
          </>
        )}

        <Label className="text-white text-lg">Custom Colors</Label>
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
        <ColorPicker
          label="Background Color"
          value={data.style.colors.background}
          onChange={(value) => updateColor(value, "background")}
        />
        <ColorPicker
          label="Text Color"
          value={data.style.colors.text}
          onChange={(value) => updateColor(value, "text")} 
        />
        
        <Label className="text-white text-lg mt-8">Hover Colors</Label>
        <ColorPicker
          label="Hover Text Color"
          value={data.style.colors.hover?.text || data.style.colors.primary}
          onChange={(value) => {
            const newColors = {
              ...data.style.colors,
              hover: {
                ...data.style.colors.hover,
                text: value
              }
            };
            onChange({
              ...data,
              style: { ...data.style, colors: newColors }
            });
          }}
        />
        <ColorPicker
          label="Hover Icon Color"
          value={data.style.colors.hover?.icon || data.style.colors.accent}
          onChange={(value) => {
            const newColors = {
              ...data.style.colors,
              hover: {
                ...data.style.colors.hover,
                icon: value
              }
            };
            onChange({
              ...data,
              style: { ...data.style, colors: newColors }
            });
          }}
        />
        <ColorPicker
          label="Hover Background Color"
          value={data.style.colors.hover?.background || `${data.style.colors.background}CC`}
          onChange={(value) => {
            const newColors = {
              ...data.style.colors,
              hover: {
                ...data.style.colors.hover,
                background: value
              }
            };
            onChange({
              ...data,
              style: { ...data.style, colors: newColors }
            });
          }}
        />
      </div>
    </div>
  );
}