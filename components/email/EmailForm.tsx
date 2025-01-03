"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { EmailsTab } from "./tabs/EmailsTab";
import type { EmailSequenceData } from "@/types/email-sequence";

interface EmailFormProps {
  data: EmailSequenceData;
  onChange: (data: EmailSequenceData) => void;
}

export function EmailForm({ data, onChange }: EmailFormProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Email Sequence Builder</h3>
      
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