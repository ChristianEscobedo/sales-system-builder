"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Wand2 } from "lucide-react";
import type { AscensionEmailData } from "@/types/email-ascension";
import { ascensionEmailTemplates } from "@/lib/templates/ascension-email-templates";

interface EmailsTabProps {
  data: AscensionEmailData;
  onChange: (data: AscensionEmailData) => void;
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
    const template = ascensionEmailTemplates[`day${day}` as keyof typeof ascensionEmailTemplates];
    if (template) {
      updateEmail(day, 'subject', template.subject);
      updateEmail(day, 'body', template.body);
    }
  };

  return (
    <div className="space-y-6">
      {data.emails.map((email) => (
        <div key={email.day} className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h4 className="text-white font-medium">Day {email.day}</h4>
              {ascensionEmailTemplates[`day${email.day}` as keyof typeof ascensionEmailTemplates] && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => applyTemplate(email.day)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  <Wand2 size={16} className="mr-2" />
                  Apply Template
                </Button>
              )}
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
                <Label className="text-white">Choose Subject Line</Label>
                {ascensionEmailTemplates[`day${email.day}` as keyof typeof ascensionEmailTemplates] && (
                <Select
                  value={email.subject}
                  onValueChange={(value) => updateEmail(email.day, 'subject', value)}
                >
                  <SelectTrigger className="bg-white/10 border-purple-500/30 text-white">
                    <SelectValue placeholder="Select a subject line..." />
                  </SelectTrigger>
                  <SelectContent>
                    {ascensionEmailTemplates[`day${email.day}` as keyof typeof ascensionEmailTemplates]?.subjects?.map((subject, i) => (
                      <SelectItem key={i} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                )}
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