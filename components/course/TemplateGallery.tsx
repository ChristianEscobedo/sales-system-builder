"use client";

import { Button } from "@/components/ui/button";
import { Layout, FileText, Video, CheckSquare, MessageSquare, HelpCircle } from "lucide-react";
import type { PageSection } from "@/types/course";

interface TemplateGalleryProps {
  onSelect: (sections: PageSection[]) => void;
}

const templates = {
  lecture: {
    name: "Video Lecture",
    description: "Standard video lecture template with notes and resources",
    sections: [
      { type: "title", content: { title: "Lecture Overview" }, order: 0 },
      { type: "video", content: { title: "Main Lecture" }, order: 1 },
      { type: "notes", content: { title: "Lecture Notes" }, order: 2 },
      { type: "resources", content: { title: "Additional Resources" }, order: 3 }
    ]
  },
  workshop: {
    name: "Interactive Workshop",
    description: "Hands-on workshop with exercises and implementation steps",
    sections: [
      { type: "title", content: { title: "Workshop Overview" }, order: 0 },
      { type: "video", content: { title: "Workshop Introduction" }, order: 1 },
      { type: "checklist", content: { title: "Implementation Steps" }, order: 2 },
      { type: "action", content: { title: "Practice Exercise" }, order: 3 },
      { type: "quiz", content: { title: "Knowledge Check" }, order: 4 }
    ]
  },
  summary: {
    name: "Module Summary",
    description: "End-of-module review with key takeaways and next steps",
    sections: [
      { type: "title", content: { title: "Module Summary" }, order: 0 },
      { type: "summary", content: { title: "Key Takeaways" }, order: 1 },
      { type: "checklist", content: { title: "Action Items" }, order: 2 },
      { type: "resources", content: { title: "Resources & Tools" }, order: 3 }
    ]
  }
};

export function TemplateGallery({ onSelect }: TemplateGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(templates).map(([key, template]) => (
        <div
          key={key}
          className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group relative border border-white/10 hover:border-blue-500/50"
          onClick={() => onSelect(template.sections)}
        >
          {/* Template Preview */}
          <div className="aspect-[4/3] bg-gradient-to-br from-black/40 to-black/20 rounded-lg mb-6 overflow-hidden group-hover:ring-2 ring-blue-500/50 transition-all p-4">
            <div className="space-y-3">
              {template.sections.map((section, index) => (
                <div key={index} className="flex items-center gap-3 bg-black/40 rounded-md p-2 text-white/80">
                  {section.type === "title" && <FileText size={16} />}
                  {section.type === "video" && <Video size={16} />}
                  {section.type === "checklist" && <CheckSquare size={16} />}
                  {section.type === "notes" && <MessageSquare size={16} />}
                  {section.type === "quiz" && <HelpCircle size={16} />}
                  <span className="text-sm font-medium truncate">{section.content.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Template Info */}
          <h3 className="text-xl font-semibold text-white mb-3">{template.name}</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">{template.description}</p>

          <Button
            variant="outline"
            className="w-full bg-white/5 hover:bg-blue-500/10 border-white/20 hover:border-blue-500/50 transition-all py-6 text-white hover:text-blue-400"
          >
            Use Template
          </Button>
        </div>
      ))}
    </div>
  );
}