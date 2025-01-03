"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { SlidesTab } from "./tabs/SlidesTab";
import { OfferTab } from "./tabs/OfferTab";
import { StyleTab } from "./tabs/StyleTab";
import type { WebinarData } from "@/types/webinar";

interface WebinarFormProps {
  data: WebinarData;
  onChange: (data: WebinarData) => void;
}

export function WebinarForm({ data, onChange }: WebinarFormProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Webinar Builder</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="slides">Slides</TabsTrigger>
          <TabsTrigger value="offer">Offer</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicInfoTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="slides">
          <SlidesTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="offer">
          <OfferTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="style">
          <StyleTab data={data} onChange={onChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}