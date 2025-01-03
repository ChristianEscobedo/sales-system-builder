"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mail } from "lucide-react";
import type { AscensionEmailData } from "@/types/email";

interface EmailPreviewProps {
  data: AscensionEmailData;
}

export function EmailPreview({ data }: EmailPreviewProps) {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const copyToClipboard = () => {
    const emailContent = data.emails[selectedEmail]?.content || '';
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
        {data.emails.map((email, index) => (
          <Button
            key={index}
            variant={selectedEmail === index ? "default" : "outline"}
            onClick={() => setSelectedEmail(index)}
            className="flex flex-col gap-1 h-auto py-2"
          >
            <Mail 
              size={16} 
              className={selectedEmail === index ? "text-white" : "text-gray-400"} 
            />
            <span className="text-xs">Email {index + 1}</span>
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-black/20 p-4 rounded-xl">
          <div className="text-gray-400 text-sm mb-2">Subject:</div>
          <div className="text-white">
            {data.emails[selectedEmail]?.subject || 'No subject'}
          </div>
        </div>
        
        <div className="bg-black/20 p-4 rounded-xl">
          <div className="text-gray-400 text-sm mb-2">Body:</div>
          <div className="text-white font-mono text-sm whitespace-pre-wrap">
            {data.emails[selectedEmail]?.content || 'No content'}
          </div>
        </div>
      </div>
    </div>
  );
}