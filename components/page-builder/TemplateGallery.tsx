"use client";

import { Button } from "@/components/ui/button";
import { Layout, FileText, Video, CheckSquare } from "lucide-react";
import type { PageSection } from "@/types/page-builder";

interface TemplateGalleryProps {
  onSelect: (sections: PageSection[]) => void;
}

const templates = {
  basic: {
    name: "Basic Page",
    description: "Start with a clean, simple layout that includes all essential sections",
    preview: "basic-template.png",
    sections: [
      { type: "hero", content: { title: "Welcome to Our Service" } },
      { type: "key-points", content: { title: "Key Benefits" } },
      { type: "features", content: { title: "Features" } },
      { type: "cta", content: { title: "Get Started" } }
    ]
  },
  professional: {
    name: "Professional Landing",
    description: "High-converting sales page template with proven conversion elements",
    preview: "pro-template.png",
    sections: [
      { type: "hero", content: { title: "Transform Your Business" } },
      { type: "key-points", content: { title: "Why Choose Us" } },
      { type: "testimonials", content: { title: "Success Stories" } },
      { type: "pricing", content: { title: "Pricing Plans" } },
      { type: "faq", content: { title: "Common Questions" } }
    ]
  },
  community: {
    name: "Community Hub",
    description: "Engage your audience with this community-focused template",
    preview: "community-template.png",
    sections: [
      { type: "hero", content: { title: "Join Our Community" } },
      { type: "features", content: { title: "Member Benefits" } },
      { type: "community", content: { title: "Community Features" } },
      { type: "testimonials", content: { title: "Member Stories" } }
    ]
  }
};

export function TemplateGallery({ onSelect }: TemplateGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
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