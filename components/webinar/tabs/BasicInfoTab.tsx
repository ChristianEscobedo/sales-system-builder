"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { WebinarData } from "@/types/webinar";

interface BasicInfoTabProps {
  data: WebinarData;
  onChange: (data: WebinarData) => void;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof WebinarData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  // Initialize presenter if it doesn't exist
  const presenter = data.presenter || {
    name: "",
    title: "",
    credentials: "",
    bio: ""
  };

  const updatePresenter = (field: keyof typeof presenter, value: string) => {
    onChange({
      ...data,
      presenter: { ...presenter, [field]: value }
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Type</Label>
        <Select
          value={data.type || "webinar"}
          onValueChange={(value) => updateField("type", value)}
        >
          <SelectTrigger className="bg-white/10 border-purple-500/30 text-white">
            <SelectValue placeholder="Select type..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="webinar">Webinar</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
            <SelectItem value="vsl">VSL</SelectItem>
            <SelectItem value="training">Training</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-white">Webinar Title</Label>
        <Input
          value={data.title || ""}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="e.g., The Ultimate Agency Growth Blueprint"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Subtitle</Label>
        <Input
          value={data.subtitle || ""}
          onChange={(e) => updateField("subtitle", e.target.value)}
          placeholder="e.g., Scale Your Agency to 7-Figures in 90 Days"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Presenter Name</Label>
        <Input
          value={presenter.name}
          onChange={(e) => updatePresenter("name", e.target.value)}
          placeholder="e.g., John Smith"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Presenter Title</Label>
        <Input
          value={presenter.title}
          onChange={(e) => updatePresenter("title", e.target.value)}
          placeholder="e.g., Agency Growth Expert"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Credentials</Label>
        <Input
          value={presenter.credentials}
          onChange={(e) => updatePresenter("credentials", e.target.value)}
          placeholder="e.g., 15+ Years Experience, Featured in Forbes"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Bio</Label>
        <Textarea
          value={presenter.bio}
          onChange={(e) => updatePresenter("bio", e.target.value)}
          placeholder="Brief presenter biography..."
          className="bg-white/10 border-purple-500/30 text-white min-h-[100px]"
        />
      </div>
      <div>
        <Label className="text-white">Target Audience</Label>
        <Input
          value={data.targetAudience || ""}
          onChange={(e) => updateField("targetAudience", e.target.value)}
          placeholder="e.g., Agency Owners"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Main Benefit</Label>
        <Input
          value={data.mainBenefit || ""}
          onChange={(e) => updateField("mainBenefit", e.target.value)}
          placeholder="e.g., Scale to 7-Figures"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
    </div>
  );
}