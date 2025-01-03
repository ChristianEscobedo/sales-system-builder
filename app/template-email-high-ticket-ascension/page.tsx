"use client";

import { useState } from "react";
import { EmailHeader } from "@/components/email-ascension/EmailHeader";
import { EmailForm } from "@/components/email-ascension/EmailForm";
import { EmailPreview } from "@/components/email-ascension/EmailPreview";
import type { AscensionEmailData } from "@/types/email-ascension";

export default function HighTicketAscensionPage() {
  const [emailData, setEmailData] = useState<AscensionEmailData>({
    productName: "",
    productPrice: "",
    mainBenefit: "",
    targetAudience: "",
    painPoint: "",
    solution: "",
    webinarDate: "",
    webinarTime: "",
    webinarTitle: "",
    callToAction: "webinar", // or "call" or "workshop" or "masterclass"
    highTicketOffer: "",
    highTicketPrice: "",
    bonusName: "",
    bonusValue: 997,
    emails: Array.from({ length: 14 }, (_, i) => ({
      day: i + 1,
      subject: "",
      body: ""
    }))
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