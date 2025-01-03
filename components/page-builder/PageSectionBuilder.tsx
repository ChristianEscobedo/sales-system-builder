"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Layout, FileText, Video, CheckSquare, MessageSquare, HelpCircle, Plus, Trash2 } from "lucide-react";
import { TemplateGallery } from "./TemplateGallery";
import type { PageSection } from "@/types/page-builder";

const sectionTypes = [
  { type: "hero", label: "Hero Section", icon: Layout },
  { type: "key-points", label: "Key Points", icon: FileText },
  { type: "features", label: "Features", icon: CheckSquare },
  { type: "video", label: "Video", icon: Video },
  { type: "community", label: "Community", icon: MessageSquare },
  { type: "cta", label: "Call to Action", icon: HelpCircle }
] as const;

function SectionPreview({ section }: { section: PageSection }) {
  const getIcon = () => {
    switch (section.type) {
      case "hero":
        return <Layout className="text-blue-400" />;
      case "key-points":
        return <FileText className="text-blue-400" />;
      case "video":
        return <Video className="text-blue-400" />;
      case "features":
        return <CheckSquare className="text-blue-400" />;
      case "notes":
        return <MessageSquare className="text-blue-400" />;
      case "quiz":
        return <HelpCircle className="text-blue-400" />;
      default:
        return <FileText className="text-blue-400" />;
    }
  };

  return (
    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div>
          <h4 className="text-white font-medium">{section.content.title || section.type}</h4>
          {section.content.description && (
            <p className="text-gray-400 text-sm mt-1">{section.content.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
interface PageSectionBuilderProps {
  sections: PageSection[];
  onChange: (sections: PageSection[]) => void;
  onClose?: () => void;
  trigger: React.ReactNode;
}

export function PageSectionBuilder({ sections, onChange, trigger }: PageSectionBuilderProps) {
  const [showTemplates, setShowTemplates] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="w-full">{trigger}</div>
      </DialogTrigger>
      <DialogContent className="bg-[#0A0A0A] border-blue-500/20 text-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Page Builder</DialogTitle>
        </DialogHeader>
        
        <div className="mt-8">
          {/* Template Gallery Toggle */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">Start with a pre-built template or create your own from scratch</p>
            <Button
              variant="outline"
              onClick={() => setShowTemplates(!showTemplates)}
              className="gap-2 text-white hover:text-blue-400"
            >
              <Layout size={16} />
              {showTemplates ? "Show Section Tools" : "Browse Templates"}
            </Button>
          </div>
          {/* Preview Current Sections */}
          {sections.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-4">Current Page Structure</h3>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <SectionPreview key={index} section={section} />
                ))}
              </div>
            </div>
          )}

          {showTemplates ? (
            <TemplateGallery
              onSelect={(templateSections) => {
                onChange(templateSections);
                setIsOpen(false);
              }}
            />
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sectionTypes.map((type) => (
                  <Button
                    key={type.type}
                    variant="outline"
                    onClick={() => {
                      onChange([...sections, {
                        type: type.type,
                        content: { title: type.label }
                      }]);
                    }}
                    className="h-auto py-4 px-4 flex flex-col items-center gap-2 text-white hover:text-blue-400 hover:border-blue-500/50"
                  >
                    <type.icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{type.label}</span>
                  </Button>
                ))}
              </div>

              {sections.length > 0 && (
                <Button variant="outline" onClick={() => onChange([])} className="w-full text-red-400 hover:text-red-300">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear All Sections
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}