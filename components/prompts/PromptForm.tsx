"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StyleSelector } from "./StyleSelector";
import { ColorPicker } from "./ColorPicker";
import { stylePresets } from "@/lib/constants/style-presets";
import type { StylePreset } from "@/lib/constants/style-presets";
import type { PromptData } from "@/types/prompt";

interface PromptFormProps {
  data: PromptData;
  onChange: (data: PromptData) => void;
}

export function PromptForm({ data, onChange }: PromptFormProps) {
  const [selectedPreset, setSelectedPreset] = useState<StylePreset>("modern");

  const updateField = (field: keyof PromptData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handlePresetChange = (preset: StylePreset) => {
    setSelectedPreset(preset);
    const presetColors = stylePresets[preset].colors;
    updateField("colorTheme", {
      primary: presetColors.primary,
      secondary: presetColors.secondary,
      background: presetColors.background,
      text: presetColors.text,
      accent: presetColors.accent,
      gradients: stylePresets[preset].gradients
    });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Prompt Build Form</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="style">Style & Layout</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div>
            <Label className="text-white">Resource Type</Label>
            <Input
              value={data.resourceType}
              onChange={(e) => updateField("resourceType", e.target.value)}
              placeholder="e.g., Course, Masterclass, Workshop"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Resource Name</Label>
            <Input
              value={data.resourceName}
              onChange={(e) => updateField("resourceName", e.target.value)}
              placeholder="e.g., AI Marketing Mastery"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Target Audience</Label>
            <Input
              value={data.targetAudience}
              onChange={(e) => updateField("targetAudience", e.target.value)}
              placeholder="e.g., Digital Marketers, Small Business Owners"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Industry/Niche</Label>
            <Input
              value={data.industryNiche}
              onChange={(e) => updateField("industryNiche", e.target.value)}
              placeholder="e.g., Digital Marketing, E-commerce"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Product Price</Label>
            <Input
              type="number"
              value={data.productPrice}
              onChange={(e) => updateField("productPrice", parseFloat(e.target.value))}
              placeholder="e.g., 97"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Support Email</Label>
            <Input
              type="email"
              value={data.supportEmail}
              onChange={(e) => updateField("supportEmail", e.target.value)}
              placeholder="e.g., support@example.com"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <div>
            <Label className="text-white">Pain Point</Label>
            <Input
              value={data.painPoint}
              onChange={(e) => updateField("painPoint", e.target.value)}
              placeholder="e.g., Low Website Conversion Rates"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Quick Win</Label>
            <Input
              value={data.quickWin}
              onChange={(e) => updateField("quickWin", e.target.value)}
              placeholder="e.g., Double Your Conversion Rate"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Frustration Method</Label>
            <Input
              value={data.frustrationMethod}
              onChange={(e) => updateField("frustrationMethod", e.target.value)}
              placeholder="e.g., Expensive Paid Ads"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Time Frame</Label>
            <Input
              value={data.timeFrame}
              onChange={(e) => updateField("timeFrame", e.target.value)}
              placeholder="e.g., 30 days, 60 minutes"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Modules (One per line)</Label>
            <Textarea
              value={data.modules.join("\n")}
              onChange={(e) => updateField("modules", e.target.value.split("\n"))}
              placeholder="Module 1: Getting Started&#10;Module 2: Core Strategies&#10;Module 3: Implementation"
              className="bg-white/10 border-purple-500/30 text-white min-h-[120px]"
            />
          </div>
          <div>
            <Label className="text-white">Bonus Name</Label>
            <Input
              value={data.bonusName}
              onChange={(e) => updateField("bonusName", e.target.value)}
              placeholder="e.g., Quick Start Implementation Guide"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Bonus Value</Label>
            <Input
              type="number"
              value={data.bonusValue}
              onChange={(e) => updateField("bonusValue", parseInt(e.target.value))}
              placeholder="e.g., 97"
              className="bg-white/10 border-purple-500/30 text-white"
            />
          </div>
        </TabsContent>

        <TabsContent value="style" className="space-y-6">
          <div>
            <Label className="text-white mb-4 block">Style Preset</Label>
            <StyleSelector
              value={selectedPreset}
              onChange={handlePresetChange}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-white text-lg">Custom Colors</Label>
            <ColorPicker
              label="Primary Color"
              value={data.colorTheme?.primary || "#6366F1"}
              onChange={(value) => updateField("colorTheme", { 
                ...data.colorTheme,
                primary: value 
              })}
            />
            <ColorPicker
              label="Secondary Color"
              value={data.colorTheme?.secondary || "#8B5CF6"}
              onChange={(value) => updateField("colorTheme", {
                ...data.colorTheme,
                secondary: value
              })}
            />
            <ColorPicker
              label="Background Color"
              value={data.colorTheme?.background || "#000000"}
              onChange={(value) => updateField("colorTheme", {
                ...data.colorTheme,
                background: value
              })}
            />
            <ColorPicker
              label="Text Color"
              value={data.colorTheme?.text || "#FFFFFF"}
              onChange={(value) => updateField("colorTheme", {
                ...data.colorTheme,
                text: value
              })}
            />
            <ColorPicker
              label="Accent Color"
              value={data.colorTheme?.accent || "#4F46E5"}
              onChange={(value) => updateField("colorTheme", {
                ...data.colorTheme,
                accent: value
              })}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}