"use client";

import { Button } from "@/components/ui/button";
import { Play, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourseModule, CourseLesson } from "@/types/course";

interface OutlineViewProps {
  currentModule: CourseModule;
  currentLesson: CourseLesson;
  onSelectLesson: (index: number) => void;
  colors: any;
}

export function OutlineView({ currentModule, currentLesson, onSelectLesson, colors }: OutlineViewProps) {
  return (
    <div className="space-y-2">
      {currentModule?.lessons.map((lesson, lessonIndex) => (
        <Button
          key={lessonIndex}
          variant="ghost"
          className={cn(
            "w-full justify-start px-4 py-3 h-auto",
            currentLesson === lesson && "bg-white/10"
          )}
          onClick={() => onSelectLesson(lessonIndex)}
        >
          <div className="flex items-center gap-3">
            {lesson.type === "video" ? (
              <Play size={16} className="text-blue-400" />
            ) : (
              <FileText size={16} className="text-blue-400" />
            )}
            <div className="flex-1 text-left">
              <div className="font-medium text-white">{lesson.title}</div>
              <div className="text-sm text-white/60">{lesson.duration}</div>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}