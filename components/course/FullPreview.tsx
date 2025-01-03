"use client";

import { FileText, Video, Layout, CheckSquare, MessageSquare, HelpCircle } from "lucide-react";
import type { CourseLesson } from "@/types/course";

const sectionIcons = {
  title: FileText,
  video: Video,
  summary: FileText,
  resources: FileText,
  action: Layout,
  checklist: CheckSquare,
  notes: MessageSquare,
  quiz: HelpCircle
};

interface FullPreviewProps {
  lesson: CourseLesson;
  colors: any;
}

export function FullPreview({ lesson, colors }: FullPreviewProps) {
  if (!lesson?.sections?.length) {
    return (
      <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
        <p className="text-white/60">No sections added yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {lesson.sections.map((section, index) => {
        const Icon = sectionIcons[section.type];
        return (
          <div key={index} className="bg-white/5 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              {Icon && <Icon className="text-blue-400" />}
              <h3 className="text-lg font-medium text-white">
                {section.content.title || section.type.charAt(0).toUpperCase() + section.type.slice(1)}
              </h3>
            </div>
            {section.content.description && (
              <p className="text-white/80">{section.content.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}