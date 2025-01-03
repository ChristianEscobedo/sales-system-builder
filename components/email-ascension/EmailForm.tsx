"use client";

import { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AscensionEmailData } from "@/types/email";

interface EmailFormProps {
  data: AscensionEmailData;
  onChange: Dispatch<SetStateAction<AscensionEmailData>>;
}

interface TabProps {
  data: AscensionEmailData;
  onChange: Dispatch<SetStateAction<AscensionEmailData>>;
}

function BasicInfoTab({ data, onChange }: TabProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white">Product Price</Label>
        <Input
          value={data.productPrice}
          onChange={(e) => onChange(prev => ({ ...prev, productPrice: e.target.value }))}
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      <div>
        <Label className="text-white">Pain Point</Label>
        <Input
          value={data.painPoint}
          onChange={(e) => onChange(prev => ({ ...prev, painPoint: e.target.value }))}
          className="bg-white/10 border-blue-500/30 text-white"
        />
      </div>
      {/* Add other basic info fields */}
    </div>
  );
}

function EmailsTab({ data, onChange }: TabProps) {
  return (
    <div className="space-y-4">
      {data.emails.map((email, index) => (
        <div key={index} className="bg-white/5 p-4 rounded-lg">
          <Label className="text-white">Email {index + 1}</Label>
          <Input
            value={email.subject}
            onChange={(e) => {
              const newEmails = [...data.emails];
              newEmails[index] = { ...email, subject: e.target.value };
              onChange(prev => ({ ...prev, emails: newEmails }));
            }}
            className="bg-white/10 border-blue-500/30 text-white mt-2"
            placeholder="Subject"
          />
          {/* Add other email fields */}
        </div>
      ))}
    </div>
  );
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