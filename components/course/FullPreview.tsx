"use client";

import { 
  FileText, 
  Video, 
  Layout,
  Image,
  CheckSquare, 
  MessageSquare, 
  HelpCircle, 
  ThumbsUp,
  ListOrdered,
  Link
} from "lucide-react";
import type { PageSection, SectionType } from "@/types/course";

const sectionIcons = {
  'title': FileText,
  'video': Video,
  'layout': Layout,
  'image': Image,
  'summary': FileText,
  'resources': FileText,
  'action': FileText,
  'checklist': CheckSquare,
  'notes': MessageSquare,
  'quiz': HelpCircle,
  'feedback': ThumbsUp,
  'steps': ListOrdered,
  'cta': Link
} as const;

type IconSectionType = keyof typeof sectionIcons;

interface FullPreviewProps {
  lesson: {
    sections: PageSection[];
  };
  colors?: {
    primary: string;
    text: string;
  };
}

export function FullPreview({ lesson, colors }: FullPreviewProps) {
  if (!lesson.sections.length) {
    return (
      <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
        <p className="text-white/60">No sections added yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {lesson.sections.map((section, index) => {
        const Icon = sectionIcons[section.type as IconSectionType] || FileText;
        return (
          <div key={index} className="bg-white/5 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon 
                className="text-blue-400" 
                size={20}
                style={{ color: colors?.primary }}
              />
              <h3 
                className="text-lg font-semibold text-white"
                style={{ color: colors?.text }}
              >
                {section.content.title || section.type}
              </h3>
            </div>
            {section.content.description && (
              <p style={{ color: `${colors?.text}CC` }}>
                {section.content.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}