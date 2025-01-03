"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2 } from "lucide-react";
import type { EmailSequenceData } from "@/types/email-sequence";

interface AutoGenerateEmailDialogProps {
  onGenerate: (data: EmailSequenceData) => void;
}

export function AutoGenerateEmailDialog({ onGenerate }: AutoGenerateEmailDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [brief, setBrief] = useState({
    productName: "",
    mainBenefit: "",
    targetAudience: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // For now, generate a simple template
    const generatedData: EmailSequenceData = {
      ...brief,
      productPrice: "$97",
      painPoint: "",
      solution: "",
      bonusName: "Quick Start Guide",
      bonusValue: 97,
      emails: Array.from({ length: 7 }, (_, i) => ({
        day: i + 1,
        subject: "",
        body: ""
      }))
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
          <DialogTitle>Auto Generate Email Sequence</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label>Product Name</Label>
            <Input
              required
              value={brief.productName}
              onChange={(e) => setBrief(prev => ({ ...prev, productName: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
            />
          </div>
          <div>
            <Label>Main Benefit</Label>
            <Input
              required
              value={brief.mainBenefit}
              onChange={(e) => setBrief(prev => ({ ...prev, mainBenefit: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
            />
          </div>
          <div>
            <Label>Target Audience</Label>
            <Input
              required
              value={brief.targetAudience}
              onChange={(e) => setBrief(prev => ({ ...prev, targetAudience: e.target.value }))}
              className="bg-white/10 border-purple-500/30"
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
              'Generate Email Sequence'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}