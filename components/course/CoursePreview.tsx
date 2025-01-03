"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Play, FileText, Layout, Video, CheckSquare, MessageSquare, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourseData, CourseLesson, CourseModule } from "@/types/course";
import { OutlineView } from "./OutlineView";
import { FullPreview } from "./FullPreview";

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

interface CoursePreviewProps {
  data: CourseData;
}

export function CoursePreview({ data }: CoursePreviewProps) {
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [previewMode, setPreviewMode] = useState<"outline" | "full">("outline");

  const currentModule = data.modules[selectedModule];
  const currentLesson = currentModule?.lessons[selectedLesson];

  const colors = data.style.colors;
  const hasGradients = colors.gradients?.enabled;

  return (
    <div 
      className="backdrop-blur-sm rounded-2xl p-6"
      style={{ 
        backgroundColor: hasGradients ? 'transparent' : colors.background,
        background: hasGradients ? `linear-gradient(135deg, ${colors.gradients?.primary}, ${colors.gradients?.secondary})` : undefined,
        color: colors.text
      }}
    >
      {/* Preview Mode Toggle */}
      <div className="flex justify-end mb-4">
        <div className="bg-white/10 rounded-lg p-1 flex gap-1">
          <Button
            variant={previewMode === "outline" ? "default" : "ghost"}
            size="sm"
            onClick={() => setPreviewMode("outline")}
            className={cn(
              "text-sm",
              previewMode === "outline" ? "bg-white/20" : "hover:bg-white/10"
            )}
          >
            Outline
          </Button>
          <Button
            variant={previewMode === "full" ? "default" : "ghost"}
            size="sm"
            onClick={() => setPreviewMode("full")}
            className={cn(
              "text-sm",
              previewMode === "full" ? "bg-white/20" : "hover:bg-white/10"
            )}
          >
            Full Preview
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Course Header */}
        <div className="text-center space-y-4">
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full"
            style={{ 
              backgroundColor: `${colors.primary}20`,
              color: colors.primary
            }}
          >
            <Clock size={16} className="mr-2" />
            {data.duration}
          </div>
          <h1 className="text-2xl font-bold" style={{ color: colors.text }}>{data.title}</h1>
          <p style={{ color: `${colors.text}99` }}>{data.subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {data.features.map((feature, index) => (
              <div 
                key={index} 
                className="text-sm flex items-center"
                style={{ color: `${colors.text}CC` }}
              >
                <div 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: colors.primary }}
                />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Module Navigation */}
        <div className="grid grid-cols-2 gap-4">
          {data.modules.map((module, moduleIndex) => (
            <Button
              key={moduleIndex}
              variant={selectedModule === moduleIndex ? "default" : "outline"}
              className="h-auto py-4 px-6"
              style={selectedModule === moduleIndex ? {
                backgroundColor: colors.primary,
                color: '#fff'
              } : {
                borderColor: `${colors.text}33`,
                color: colors.text
              }}
              onClick={() => {
                setSelectedModule(moduleIndex);
                setSelectedLesson(0);
              }}
            >
              <div className="text-left">
                <div className="font-medium">{module.title}</div>
                <div 
                  className="text-sm mt-1"
                  style={{ color: `${colors.text}99` }}
                >
                  {module.lessons.length} Lessons
                </div>
              </div>
            </Button>
          ))}
        </div>

        {previewMode === "outline" ? (
          <OutlineView
            currentModule={currentModule}
            currentLesson={currentLesson}
            onSelectLesson={setSelectedLesson}
            colors={colors}
          />
        ) : (
          <FullPreview
            lesson={currentLesson}
            colors={colors}
          />
        )}
      </div>
    </div>
  );
}