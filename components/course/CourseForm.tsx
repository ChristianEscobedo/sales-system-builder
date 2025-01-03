"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoTab } from "./tabs/BasicInfoTab";
import { ModulesTab } from "./tabs/ModulesTab";
import { StyleTab } from "./tabs/StyleTab";
import type { CourseData } from "@/types/course";

interface CourseFormProps {
  data: CourseData;
  onChange: (data: CourseData) => void;
}

export function CourseForm({ data, onChange }: CourseFormProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Course Builder</h3>
      
      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <BasicInfoTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="modules">
          <ModulesTab data={data} onChange={onChange} />
        </TabsContent>

        <TabsContent value="style">
          <StyleTab data={data} onChange={onChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}