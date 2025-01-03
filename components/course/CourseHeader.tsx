"use client";

import { AutoGenerateCourseDialog } from "./AutoGenerateCourseDialog";
import type { CourseData } from "@/types/course";

interface CourseHeaderProps {
  onGenerate: (data: CourseData) => void;
}

export function CourseHeader({ onGenerate }: CourseHeaderProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <AutoGenerateCourseDialog onGenerate={onGenerate} />
      </div>
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        Mini Course Builder
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Create a high-converting mini course with video content, resources, and a beautiful interface.
      </p>
    </div>
  );
}