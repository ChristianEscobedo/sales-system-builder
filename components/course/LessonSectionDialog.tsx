"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PageSectionBuilder } from "./PageSectionBuilder";
import type { CourseLesson, PageSection } from "@/types/course";

interface LessonSectionDialogProps {
  lesson: CourseLesson;
  onUpdate: (sections: PageSection[]) => void;
  trigger: React.ReactNode;
  children?: React.ReactNode;
}

export default function LessonSectionDialog({ lesson, onUpdate, trigger, children }: LessonSectionDialogProps) {
  const [sections, setSections] = useState<PageSection[]>(lesson.sections || []);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    onUpdate(sections);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-[#0A0A0A] border-blue-500/20 text-white max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Page Builder</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="mt-8 pr-4 max-h-[calc(90vh-10rem)]">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-300 text-lg">Start with a pre-built template or create your own from scratch</p>
              {sections.length > 0 && (
                <Button 
                  variant="outline" 
                  onClick={() => setSections([])}
                  className="text-white hover:text-red-400 hover:bg-red-500/10"
                >
                  Clear All
                </Button>
              )}
            </div>
            
            <PageSectionBuilder
              sections={sections}
              onChange={setSections}
            />
          </div>
        </ScrollArea>

        <div className="mt-8 flex justify-end">
          <Button variant="outline" onClick={() => setIsOpen(false)} className="text-white">
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}