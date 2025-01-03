"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mail } from "lucide-react";
import type { EmailSequenceData } from "@/types/email-sequence";
import { generateEmailContent } from "@/lib/utils/email-generator";
import { defaultEmailData } from "@/lib/defaults/email-sequence";
import { emailTemplates } from "@/lib/templates/email-templates";

interface EmailPreviewProps {
  data: EmailSequenceData;
}

export function EmailPreview({ data }: EmailPreviewProps) {
  const [selectedDay, setSelectedDay] = useState(1);
  const email = data.emails.find(e => e.day === selectedDay);
  
  // Use template content if email is empty
  const template = emailTemplates[`day${selectedDay}` as keyof typeof emailTemplates];
  const emailWithContent = {
    ...email,
    subject: email?.subject || template.subject,
    body: email?.body || template.body
  };

  // Use default data if form is empty
  const previewData = {
    ...defaultEmailData,
    ...Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "")
    )
  };

  const emailContent = generateEmailContent(emailWithContent, previewData);

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
        {[1, 2, 3, 4, 5, 6, 7].map(day => (
          <Button
            key={day}
            variant={selectedDay === day ? "default" : "outline"}
            onClick={() => setSelectedDay(day)}
            className="flex flex-col gap-1 h-auto py-2"
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