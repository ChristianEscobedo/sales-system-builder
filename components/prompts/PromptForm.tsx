"use client";

import { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { ModulesTab } from "./tabs/ModulesTab";
import { OfferTab } from "./tabs/OfferTab";
import type { PromptData } from "@/types/prompt";

interface PromptFormProps {
  data: PromptData;
  onChange: Dispatch<SetStateAction<PromptData>>;
}

export function PromptForm({ data, onChange }: PromptFormProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Prompt Builder</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="offer">Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicInfoTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="modules">
          <ModulesTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="offer">
          <OfferTab data={data} onChange={onChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}