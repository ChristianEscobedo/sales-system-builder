"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2 } from "lucide-react";
import type { WebinarData } from "@/types/webinar";

interface AutoGenerateWebinarDialogProps {
  onGenerate: (data: WebinarData) => void;
}

export function AutoGenerateWebinarDialog({ onGenerate }: AutoGenerateWebinarDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [brief, setBrief] = useState({
    title: "",
    targetAudience: "",
    mainBenefit: "",
    presenterName: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate a simple template
    const generatedData: WebinarData = {
      title: brief.title,
      type: "webinar",
      subtitle: `How to ${brief.mainBenefit} for ${brief.targetAudience}`,
      presenter: {
        name: brief.presenterName,
        title: "Expert & Industry Leader",
        credentials: "",
        bio: ""
      },
      problem: "",
      solution: "",
      targetAudience: brief.targetAudience,
      mainBenefit: brief.mainBenefit,
      slides: [
        { type: "opening", content: {} },
        { type: "problem", content: {} },
        { type: "solution", content: {} },
        { type: "benefits", content: { points: [] } },
        { type: "case-studies", content: { studies: [] } },
        { type: "offer", content: {} },
        { type: "bonuses", content: { items: [] } },
        { type: "close", content: {} }
      ],
      offer: {
        name: "",
        price: "",
        value: "",
        guarantee: "",
        bonuses: []
      }
    };

    onGenerate(generatedData);
    setIsOpen(false);
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Wand2 className="mr-2 h-4 w-4" />
          Auto Generate
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0A0A0A] border-purple-500/20 text-white">
        <DialogHeader>
          <DialogTitle>Auto Generate Webinar Content</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label>Webinar Title</Label>
            <Input
              required
              value={brief.title}
              onChange={(e) => setBrief(prev => ({ ...prev, title: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
              placeholder="e.g., The Ultimate Agency Growth Blueprint"
            />
          </div>
          <div>
            <Label>Target Audience</Label>
            <Input
              required
              value={brief.targetAudience}
              onChange={(e) => setBrief(prev => ({ ...prev, targetAudience: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
              placeholder="e.g., Agency Owners"
            />
          </div>
          <div>
            <Label>Main Benefit</Label>
            <Input
              required
              value={brief.mainBenefit}
              onChange={(e) => setBrief(prev => ({ ...prev, mainBenefit: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
              placeholder="e.g., Scale to 7-Figures"
            />
          </div>
          <div>
            <Label>Presenter Name</Label>
            <Input
              required
              value={brief.presenterName}
              onChange={(e) => setBrief(prev => ({ ...prev, presenterName: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
              placeholder="e.g., John Smith"
            />
          </div>
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Webinar Content'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}