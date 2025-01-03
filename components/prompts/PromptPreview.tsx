"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import type { PromptData } from "@/types/prompt";
import { generatePromptContent, replacePromptVariables } from "@/lib/prompts/generate-prompt";

interface PromptPreviewProps {
  data: PromptData;
}

export function PromptPreview({ data }: PromptPreviewProps) {
  const [activeTab, setActiveTab] = useState("main");
  const { toast } = useToast();

  const getPromptContent = () => {
    switch (activeTab) {
      case "main":
        return generatePromptContent(data);
      default:
        return generatePromptContent(data);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getPromptContent());
      toast({
        title: "Copied!",
        description: "Prompt content copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy content",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Preview</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="text-purple-400 hover:text-purple-300"
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-1 w-full">
          <TabsTrigger value="main">Main Content</TabsTrigger>
        </TabsList>

        <TabsContent value="main">
          <div className="bg-black/50 rounded-lg p-4">
            <pre className="text-sm text-white whitespace-pre-wrap font-mono">
              {getPromptContent()}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}