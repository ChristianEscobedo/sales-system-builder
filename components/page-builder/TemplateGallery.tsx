"use client";

import { Button } from "@/components/ui/button";
import { Layout, FileText, Video, CheckSquare, MessageSquare, HelpCircle } from "lucide-react";
import type { PageSection, PageSectionType } from "@/types/page-builder";

interface TemplateGalleryProps {
  onSelect: (sections: PageSection[]) => void;
}

const templates = {
  landing: {
    name: "Landing Page",
    description: "Basic landing page template",
    sections: [
      {
        type: "hero" as PageSectionType,
        content: { 
          title: "Welcome",
          description: "Your hero section description" 
        }
      },
      {
        type: "features" as PageSectionType,
        content: { 
          title: "Features",
          description: "Your features section" 
        }
      },
      {
        type: "cta" as PageSectionType,
        content: { 
          title: "Get Started",
          description: "Call to action section" 
        }
      }
    ]
  },
  content: {
    name: "Content Page",
    description: "Content-focused page template",
    sections: [
      {
        type: "key-points" as PageSectionType,
        content: { 
          title: "Key Points",
          description: "Main points section" 
        }
      },
      {
        type: "video" as PageSectionType,
        content: { 
          title: "Video Content",
          description: "Video section" 
        }
      },
      {
        type: "community" as PageSectionType,
        content: { 
          title: "Join Community",
          description: "Community section" 
        }
      }
    ]
  }
};

export function TemplateGallery({ onSelect }: TemplateGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Object.entries(templates).map(([key, template]) => (
        <div
          key={key}
          className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group border border-white/10 hover:border-blue-500/50"
          onClick={() => onSelect(template.sections)}
        >
          {/* Template Preview */}
          <div className="aspect-[4/3] bg-gradient-to-br from-black/40 to-black/20 rounded-lg mb-6 overflow-hidden group-hover:ring-2 ring-blue-500/50 transition-all p-4">
            <div className="space-y-3">
              {template.sections.map((section, index) => (
                <div key={index} className="flex items-center gap-3 bg-black/40 rounded-md p-2 text-white/80">
                  {section.type === "hero" && <Layout size={16} />}
                  {section.type === "key-points" && <FileText size={16} />}
                  {section.type === "video" && <Video size={16} />}
                  {section.type === "features" && <CheckSquare size={16} />}
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
            className="w-full bg-white/5 hover:bg-blue-500/10 border-white/20 hover:border-blue-500/50 transition-all py-6 text-white group-hover:text-blue-400"
          >
            Use Template
          </Button>
        </div>
      ))}
    </div>
  );
}