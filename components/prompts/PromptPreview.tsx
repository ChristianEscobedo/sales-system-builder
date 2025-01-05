"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { PromptData } from "@/types/prompt";
import { 
  generateEnhancedPrompt, 
  generateBridgeHeaderPrompt,
  generateBridgeSalesPrompt,
  generateThankYouPrompt 
} from "@/lib/prompts/generate-prompt";

interface PromptPreviewProps {
  data: PromptData;
  publicVersion?: boolean;
  onExport?: () => void;
  onSave?: () => void;
}

export function PromptPreview({ 
  data, 
  publicVersion = false,
  onExport,
  onSave 
}: PromptPreviewProps) {
  const [promptType, setPromptType] = useState<"landing" | "bridge-header" | "bridge-sales" | "thank-you">("landing");
  const [currentPrompt, setCurrentPrompt] = useState<string>("");

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
      setCurrentPrompt(generatedPrompt);
    } catch (error) {
      console.error("Failed to generate prompt:", error);
      setCurrentPrompt("Error generating prompt. Please try again.");
    }
  }, [data, promptType]); // Re-run when data or promptType changes

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentPrompt);
  };

  return (
    <div className="space-y-8">
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
          onValueChange={(value) => setPromptType(value as typeof promptType)}
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="landing">Landing Page</TabsTrigger>
            <TabsTrigger value="bridge-header">Bridge Header</TabsTrigger>
            <TabsTrigger value="bridge-sales">Bridge Sales</TabsTrigger>
            <TabsTrigger value="thank-you">Thank You</TabsTrigger>
          </TabsList>

          <TabsContent value="landing">
            <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-black/20 p-4 rounded-xl overflow-auto max-h-[600px]">
              {currentPrompt}
            </pre>
          </TabsContent>

          <TabsContent value="bridge-header">
            <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-black/20 p-4 rounded-xl overflow-auto max-h-[600px]">
              {currentPrompt}
            </pre>
          </TabsContent>

          <TabsContent value="bridge-sales">
            <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-black/20 p-4 rounded-xl overflow-auto max-h-[600px]">
              {currentPrompt}
            </pre>
          </TabsContent>

          <TabsContent value="thank-you">
            <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-black/20 p-4 rounded-xl overflow-auto max-h-[600px]">
              {currentPrompt}
            </pre>
          </TabsContent>
        </Tabs>
      </div>

      {!publicVersion && (onExport || onSave) && (
        <div className="flex gap-4">
          {onExport && (
            <Button onClick={onExport}>
              Export
            </Button>
          )}
          {onSave && (
            <Button onClick={onSave}>
              Save
            </Button>
          )}
        </div>
      )}
    </div>
  );
}