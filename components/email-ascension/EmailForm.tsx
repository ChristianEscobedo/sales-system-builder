"use client";

import { Dispatch, SetStateAction } from "react";
import type { AscensionEmailData } from "@/types/email";

interface EmailFormProps {
  data: AscensionEmailData;
  onChange: Dispatch<SetStateAction<AscensionEmailData>>;
}

export function EmailForm({ data, onChange }: EmailFormProps) {
  const getFormTitle = () => {
    switch (data.callToAction) {
      case "webinar":
        return "Webinar Registration Sequence";
      case "workshop":
        return "Workshop Registration Sequence";
      case "masterclass":
        return "Masterclass Registration Sequence";
      case "call":
        return "Strategy Call Booking Sequence";
      default:
        return "Email Sequence Builder";
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{getFormTitle()}</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="emails">Emails</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicInfoTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="emails">
          <EmailsTab data={data} onChange={onChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}