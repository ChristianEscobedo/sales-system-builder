"use client";

import { Button } from "@/components/ui/button";
import type { EmailSequenceData } from "@/types/email-sequence";
import { emailTemplates } from "@/lib/templates/email-templates";

interface TemplatesTabProps {
  data: EmailSequenceData;
  onChange: (data: EmailSequenceData) => void;
}

export function TemplatesTab({ data, onChange }: TemplatesTabProps) {
  const applyTemplate = (day: number, template: { subject: string; body: string }) => {
    const newEmails = data.emails.map(email =>
      email.day === day ? { ...email, subject: template.subject, body: template.body } : email
    );
    onChange({ ...data, emails: newEmails });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {Object.entries(emailTemplates).map(([key, template]) => (
          <div key={key} className="bg-white/5 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Template: {key}</h4>
            <div className="text-sm text-gray-400 mb-4">
              <p className="mb-2">Subject: {template.subject}</p>
              <p className="whitespace-pre-wrap">{template.body.slice(0, 100)}...</p>
            </div>
            <Button
              onClick={() => applyTemplate(parseInt(key.replace('day', '')), template)}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Apply Template
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}