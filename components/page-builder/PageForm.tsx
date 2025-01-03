"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { SectionsTab } from "./tabs/SectionsTab";
import { StyleTab } from "./tabs/StyleTab";
import type { PageData } from "@/types/page-builder";

interface PageFormProps {
  data: PageData;
  onChange: (data: PageData) => void;
}

export function PageForm({ data, onChange }: PageFormProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Page Builder</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicInfoTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="sections">
          <SectionsTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="style">
          <StyleTab data={data} onChange={onChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}