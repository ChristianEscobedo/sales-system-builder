"use client";

import { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { SlidesTab } from "./tabs/SlidesTab";
import { StyleTab } from "./tabs/StyleTab";
import { OfferTab } from "./tabs/OfferTab";
import type { WebinarData } from "@/types/webinar";

interface WebinarFormProps {
  data: WebinarData;
  onChange: Dispatch<SetStateAction<WebinarData>>;
}

export function WebinarForm({ data, onChange }: WebinarFormProps) {
  // Helper function to wrap direct updates
  const handleChange = (updates: Partial<WebinarData>) => {
    onChange(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Webinar Builder</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="slides">Slides</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="offer">Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicInfoTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="slides">
          <SlidesTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="style">
          <StyleTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="offer">
          <OfferTab data={data} onChange={onChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}