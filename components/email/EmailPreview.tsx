"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mail } from "lucide-react";

interface EmailData {
  subject: string;
  body: string;
  day: number;  // Make day required
}

interface EmailPreviewProps {
  emails: EmailData[];
  previewData?: Record<string, string>;
}

export function EmailPreview({ emails, previewData = {} }: EmailPreviewProps) {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const generateEmailContent = (email: EmailData, data: Record<string, string>) => {
    let content = email.body;
    Object.entries(data).forEach(([key, value]) => {
      content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });
    return content;
  };

  const currentEmail = emails[selectedEmail];
  const emailContent = currentEmail ? generateEmailContent(currentEmail, previewData) : '';

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
        {emails.map((email, index) => (
          <Button
            key={email.day}
            variant={selectedEmail === index ? "default" : "outline"}
            onClick={() => setSelectedEmail(index)}
            className="flex flex-col gap-1 h-auto py-2"
          >
            <Mail 
              size={16} 
              className={selectedEmail === index ? "text-white" : "text-gray-400"} 
            />
            <span className="text-xs">Day {email.day}</span>
          </Button>
        ))}
      </div>

      {currentEmail && (
        <div className="space-y-4">
          <div className="bg-black/20 p-4 rounded-xl">
            <div className="text-gray-400 text-sm mb-2">Subject:</div>
            <div className="text-white">{currentEmail.subject}</div>
          </div>
          
          <div className="bg-black/20 p-4 rounded-xl">
            <div className="text-gray-400 text-sm mb-2">Body:</div>
            <div className="text-white font-mono text-sm whitespace-pre-wrap">
              {emailContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}