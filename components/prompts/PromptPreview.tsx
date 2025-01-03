"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PromptData } from "@/types/prompt";
import type { PromptStyleConfig } from "@/types/prompt-extended";
import { 
  generateEnhancedPrompt, 
  generateBridgeHeaderPrompt,
  generateBridgeSalesPrompt,
  generateThankYouPrompt 
} from "@/lib/prompts/generate-prompt";

interface PromptPreviewProps {
  data: PromptData & Partial<PromptStyleConfig>;
}

export function PromptPreview({ data }: PromptPreviewProps) {
  const [promptText, setPromptText] = useState<string>("");
  const [promptType, setPromptType] = useState<"landing" | "bridge-header" | "bridge-sales" | "thank-you">("landing");

  useEffect(() => {
    try {
      let generatedPrompt = "";
      switch (promptType) {
        case "landing":
          generatedPrompt = generateEnhancedPrompt(data);
          break;
        case "bridge-header":
          generatedPrompt = generateBridgeHeaderPrompt(data);
          break;
        case "bridge-sales":
          generatedPrompt = generateBridgeSalesPrompt(data);
          break;
        case "thank-you":
          generatedPrompt = generateThankYouPrompt(data);
          break;
      }
      setPromptText(generatedPrompt);
    } catch (error) {
      console.error("Failed to generate prompt:", error);
      setPromptText("Error generating prompt. Please try again.");
    }
  }, [data, promptType]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Generated Prompt</h3>
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <Copy size={16} className="mr-2" />
          Copy
        </Button>
      </div>

      <Tabs 
        defaultValue="landing" 
        className="mb-4"
        onValueChange={(value) => setPromptType(value as "landing" | "bridge-header" | "bridge-sales" | "thank-you")}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="landing">Landing Page</TabsTrigger>
          <TabsTrigger value="bridge-header">Bridge Header</TabsTrigger>
          <TabsTrigger value="bridge-sales">Bridge Sales</TabsTrigger>
          <TabsTrigger value="thank-you">Thank You</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-black/20 p-4 rounded-xl overflow-auto max-h-[600px]">
        {promptText}
      </pre>
    </div>
  );
}