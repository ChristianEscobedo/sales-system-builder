"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Wand2 } from "lucide-react";
import type { EmailSequenceData } from "@/types/email-sequence";
import { emailTemplates } from "@/lib/templates/email-templates";

interface EmailsTabProps {
  data: EmailSequenceData;
  onChange: (data: EmailSequenceData) => void;
}

export function EmailsTab({ data, onChange }: EmailsTabProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const updateEmail = (day: number, field: 'subject' | 'body', value: string) => {
    const newEmails = data.emails.map(email => 
      email.day === day ? { ...email, [field]: value } : email
    );
    onChange({ ...data, emails: newEmails });
  };

  const applyTemplate = (day: number) => {
    const template = emailTemplates[`day${day}` as keyof typeof emailTemplates];
    updateEmail(day, 'subject', template.subject);
    updateEmail(day, 'body', template.body);
  };

  return (
    <div className="space-y-6">
      {data.emails.map((email) => (
        <div key={email.day} className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h4 className="text-white font-medium">Day {email.day}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => applyTemplate(email.day)}
                className="text-purple-400 hover:text-purple-300"
              >
                <Wand2 size={16} className="mr-2" />
                Apply Template
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedDay(expandedDay === email.day ? null : email.day)}
              className="text-gray-400 hover:text-white"
            >
              {expandedDay === email.day ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>

          {expandedDay === email.day && (
            <div className="space-y-4">
              <div>
                <Label className="text-white">Subject Line</Label>
                <Input
                  value={email.subject}
                  onChange={(e) => updateEmail(email.day, 'subject', e.target.value)}
                  placeholder="Enter subject line..."
                  className="bg-white/10 border-purple-500/30 text-white"
                />
              </div>
              <div>
                <Label className="text-white">Email Body</Label>
                <Textarea
                  value={email.body}
                  onChange={(e) => updateEmail(email.day, 'body', e.target.value)}
                  placeholder="Enter email content..."
                  className="bg-white/10 border-purple-500/30 text-white min-h-[200px]"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}