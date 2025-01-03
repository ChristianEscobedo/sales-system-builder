"use client";

import { useState } from "react";
import { EmailHeader } from "@/components/email/EmailHeader";
import { EmailForm } from "@/components/email/EmailForm";
import { EmailPreview } from "@/components/email/EmailPreview";
import type { EmailSequenceData } from "@/types/email-sequence";

export default function EmailSequencePage() {
  const [emailData, setEmailData] = useState<EmailSequenceData>({
    productName: "",
    productPrice: "",
    mainBenefit: "",
    targetAudience: "",
    painPoint: "",
    solution: "",
    bonusName: "",
    bonusValue: 97,
    emails: [
      { day: 1, subject: "", body: "" },
      { day: 2, subject: "", body: "" },
      { day: 3, subject: "", body: "" },
      { day: 4, subject: "", body: "" },
      { day: 5, subject: "", body: "" },
      { day: 6, subject: "", body: "" },
      { day: 7, subject: "", body: "" }
    ]
  });

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/5 via-black to-purple-950/5 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <EmailHeader onGenerate={setEmailData} />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <EmailForm data={emailData} onChange={setEmailData} />
          <EmailPreview data={emailData} />
        </div>
      </div>
    </main>
  );
}