"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { AscensionEmailData } from "@/types/email-ascension";

interface BasicInfoTabProps {
  data: AscensionEmailData;
  onChange: (data: AscensionEmailData) => void;
}

export function BasicInfoTab({ data, onChange }: BasicInfoTabProps) {
  const updateField = (field: keyof AscensionEmailData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const getActionLabel = () => {
    switch (data.callToAction) {
      case "webinar":
        return "Webinar";
      case "workshop":
        return "Workshop";
      case "masterclass":
        return "Masterclass";
      case "call":
        return "Strategy Call";
      default:
        return "Event";
    }
  };

  return (
    <div className="space-y-4">
      {/* Existing fields remain the same until the CTA type */}
      <div>
        <Label className="text-white">Call to Action Type</Label>
        <Select 
          value={data.callToAction}
          onValueChange={(value) => updateField("callToAction", value)}
        >
          <SelectTrigger className="bg-white/10 border-purple-500/30 text-white">
            <SelectValue placeholder="Select type..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="webinar">Webinar</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
            <SelectItem value="masterclass">Masterclass</SelectItem>
            <SelectItem value="call">Strategy Call</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-white">{getActionLabel()} Title</Label>
        <Input
          value={data.webinarTitle}
          onChange={(e) => updateField("webinarTitle", e.target.value)}
          placeholder={`e.g., How to Scale Your Agency to 7-Figures with This ${getActionLabel()}`}
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">{getActionLabel()} Date</Label>
        <Input
          value={data.webinarDate}
          onChange={(e) => updateField("webinarDate", e.target.value)}
          placeholder="e.g., Thursday, April 25th"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">{getActionLabel()} Time</Label>
        <Input
          value={data.webinarTime}
          onChange={(e) => updateField("webinarTime", e.target.value)}
          placeholder="e.g., 2:00 PM EST"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      {/* Rest of the existing fields */}
      
      {/* New Hidden Bonus fields */}
      <div>
        <Label className="text-white">Hidden Bonus Name</Label>
        <Input
          value={data.hiddenBonusName}
          onChange={(e) => updateField("hiddenBonusName", e.target.value)}
          placeholder="e.g., Secret Implementation Blueprint"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Hidden Bonus Value</Label>
        <Input
          type="number"
          value={data.hiddenBonusValue}
          onChange={(e) => updateField("hiddenBonusValue", parseInt(e.target.value))}
          placeholder="e.g., 997"
          className="bg-white/10 border-purple-500/30 text-white"
        />
      </div>
    </div>
  );
}