"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2 } from "lucide-react";
import type { CourseData } from "@/types/course";

interface AutoGenerateCourseDialogProps {
  onGenerate: (data: CourseData) => void;
}

export function AutoGenerateCourseDialog({ onGenerate }: AutoGenerateCourseDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [brief, setBrief] = useState({
    title: "",
    targetAudience: "",
    mainBenefit: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate a simple template
    const generatedData: CourseData = {
      title: brief.title,
      subtitle: `How to ${brief.mainBenefit} for ${brief.targetAudience}`,
      duration: "30-Minute System",
      features: [
        "Step-by-Step Training",
        "Implementation Guides",
        "Resource Templates",
        "Expert Support"
      ],
      modules: [
        {
          title: "Getting Started",
          lessons: [
            {
              title: "System Overview",
              duration: "5:20",
              videoUrl: "",
              type: "video"
            },
            {
              title: "Quick Start Guide",
              duration: "8:15",
              videoUrl: "",
              type: "resource"
            }
          ]
        }
      ],
      style: {
        theme: "dark",
        colors: {
          primary: "#3B82F6",
          secondary: "#60A5FA",
          accent: "#2563EB",
          background: "#0F172A",
          text: "#F8FAFC",
          hover: {
            text: "#60A5FA",
            icon: "#3B82F6",
            background: "#1E293B"
          }
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
          <DialogTitle>Auto Generate Course Content</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label>Course Title</Label>
            <Input
              required
              value={brief.title}
              onChange={(e) => setBrief(prev => ({ ...prev, title: e.target.value }))}
              className="bg-white/10 border-blue-500/30"
              placeholder="e.g., The Ultimate Sales System"
            />
          </div>
          <div>
            <Label>Target Audience</Label>
            <Input
              required
              value={brief.targetAudience}
              onChange={(e) => setBrief(prev => ({ ...prev, targetAudience: e.target.value }))}
              className="bg-white/10 border-blue-500/30"
              placeholder="e.g., Business Owners"
            />
          </div>
          <div>
            <Label>Main Benefit</Label>
            <Input
              required
              value={brief.mainBenefit}
              onChange={(e) => setBrief(prev => ({ ...prev, mainBenefit: e.target.value }))}
              className="bg-white/10 border-blue-500/30"
              placeholder="e.g., Double Your Sales"
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
              'Generate Course Content'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}