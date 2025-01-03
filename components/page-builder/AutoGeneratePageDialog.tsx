"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Loader2 } from "lucide-react";
import type { PageData } from "@/types/page-builder";

interface AutoGeneratePageDialogProps {
  onGenerate: (data: PageData) => void;
}

export function AutoGeneratePageDialog({ onGenerate }: AutoGeneratePageDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [brief, setBrief] = useState({
    title: "",
    audience: "",
    purpose: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate a simple template
    const generatedData: PageData = {
      title: brief.title,
      subtitle: "The Million-Dollar Blueprint",
      description: `Learn the exact framework used by top marketers to create high-converting sales funnels that consistently generate 6-figure revenues.`,
      sections: [
        {
          type: "key-points",
          content: {
            title: "Key Points",
            points: [
              "Understanding the psychology of high-ticket sales",
              "Creating irresistible value propositions",
              "Mapping the perfect customer journey",
              "Optimizing conversion touchpoints"
            ]
          }
        },
        {
          type: "community",
          content: {
            title: "Join Our Exclusive Community",
            description: "Connect with fellow entrepreneurs, share insights, and get personalized feedback.",
            memberCount: "5,000+",
            features: [
              {
                title: "Live Discussions",
                description: "Weekly group coaching calls",
                icon: "message-circle"
              },
              {
                title: "Resource Sharing",
                description: "Templates & swipe files",
                icon: "share"
              }
            ],
            cta: {
              primary: "Join Community",
              secondary: "Learn More"
            }
          }
        }
      ],
      style: {
        theme: "dark",
        colors: {
          primary: "#3B82F6",
          secondary: "#60A5FA",
          accent: "#2563EB",
          background: "#0F172A",
          text: "#F8FAFC"
        }
      }
    };

    onGenerate(generatedData);
    setIsOpen(false);
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
          <Wand2 className="mr-2 h-4 w-4" />
          Auto Generate
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0A0A0A] border-blue-500/20 text-white">
        <DialogHeader>
          <DialogTitle>Auto Generate Page Content</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label>Page Title</Label>
            <Input
              required
              value={brief.title}
              onChange={(e) => setBrief(prev => ({ ...prev, title: e.target.value }))}
              className="bg-white/10 border-blue-500/30"
              placeholder="e.g., Sales Funnel Mastery"
            />
          </div>
          <div>
            <Label>Target Audience</Label>
            <Input
              required
              value={brief.audience}
              onChange={(e) => setBrief(prev => ({ ...prev, audience: e.target.value }))}
              className="bg-white/10 border-blue-500/30"
              placeholder="e.g., Business Owners"
            />
          </div>
          <div>
            <Label>Page Purpose</Label>
            <Textarea
              required
              value={brief.purpose}
              onChange={(e) => setBrief(prev => ({ ...prev, purpose: e.target.value }))}
              className="bg-white/10 border-blue-500/30"
              placeholder="What is the main goal of this page?"
            />
          </div>
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Page Content'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}