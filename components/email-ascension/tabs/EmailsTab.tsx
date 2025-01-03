"use client";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import type { AscensionEmailData } from "@/types/email";

const ascensionEmailTemplates = {
  day1: {
    subjects: ["Welcome to the Masterclass!"],
    body: "Welcome email content..."
  },
  day2: {
    subjects: ["Don't Miss Out!"],
    body: "Reminder email content..."
  }
  // ... other templates
};

interface EmailsTabProps {
  data: AscensionEmailData;
  onChange: Dispatch<SetStateAction<AscensionEmailData>>;
}

export function EmailsTab({ data, onChange }: EmailsTabProps) {
  const updateEmail = (day: number, field: keyof AscensionEmailData['emails'][0], value: string) => {
    onChange(prev => ({
      ...prev,
      emails: prev.emails.map(email => 
        email.day === day ? { ...email, [field]: value } : email
      )
    }));
  };

  const generateEmailContent = (day: number) => {
    const template = ascensionEmailTemplates[`day${day}` as keyof typeof ascensionEmailTemplates];
    if (template) {
      // Use the first subject from the subjects array
      updateEmail(day, 'subject', template.subjects[0]);
      updateEmail(day, 'body', template.body);
      updateEmail(day, 'content', template.body); // Also update content field
    }
  };

  return (
    <div className="space-y-6">
      {data.emails.map((email) => (
        <div key={email.day} className="bg-white/5 p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-white">Day {email.day}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => generateEmailContent(email.day)}
              className="text-blue-400 hover:text-blue-300"
            >
              <Wand2 size={16} className="mr-2" />
              Generate
            </Button>
          </div>

          <Input
            value={email.subject}
            onChange={(e) => updateEmail(email.day, 'subject', e.target.value)}
            placeholder="Email Subject"
            className="bg-white/10 border-blue-500/30 text-white"
          />

          <Textarea
            value={email.content}
            onChange={(e) => updateEmail(email.day, 'content', e.target.value)}
            placeholder="Email Content"
            className="bg-white/10 border-blue-500/30 text-white min-h-[200px]"
          />
        </div>
      ))}
    </div>
  );
}