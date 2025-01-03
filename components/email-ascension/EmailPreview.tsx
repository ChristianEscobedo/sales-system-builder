"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mail } from "lucide-react";
import type { AscensionEmailData } from "@/types/email-ascension";
import { generateAscensionEmailContent } from "@/lib/utils/ascension-email-generator";
import { defaultAscensionEmailData } from "@/lib/defaults/ascension-email";
import { ascensionEmailTemplates } from "@/lib/templates/ascension-email-templates";

interface EmailPreviewProps {
  data: AscensionEmailData;
}

export function EmailPreview({ data }: EmailPreviewProps) {
  const [selectedDay, setSelectedDay] = useState(1);
  const email = data.emails.find(e => e.day === selectedDay);
  
  // Use template content if email is empty
  const template = ascensionEmailTemplates[`day${selectedDay}` as keyof typeof ascensionEmailTemplates];
  const emailWithContent = {
    ...email,
    subject: email?.subject || (template?.subject ?? ""),
    body: email?.body || (template?.body ?? "")
  };

  // Use default data if form is empty
  const previewData = {
    ...defaultAscensionEmailData,
    ...Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "")
    )
  };

  const emailContent = generateAscensionEmailContent(emailWithContent, previewData);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailContent);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Email Preview</h3>
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <Copy size={16} className="mr-2" />
          Copy
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {Array.from({ length: 14 }, (_, i) => i + 1).map(day => (
          <Button
            key={day}
            variant={selectedDay === day ? "default" : "outline"}
            onClick={() => setSelectedDay(day)}
            className={`flex flex-col gap-1 h-auto py-2 ${day > 7 ? 'col-span-1' : ''}`}
          >
            <Mail size={16} className={selectedDay === day ? "text-white" : "text-gray-400"} />
            <span className="text-xs">Day {day}</span>
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-black/20 p-4 rounded-xl">
          <div className="text-gray-400 text-sm mb-2">Subject:</div>
          <div className="text-white">{emailWithContent.subject}</div>
        </div>
        
        <div className="bg-black/20 p-4 rounded-xl">
          <div className="text-gray-400 text-sm mb-2">Body:</div>
          <div className="text-white font-mono text-sm whitespace-pre-wrap">{emailContent}</div>
        </div>
      </div>
    </div>
  );
}