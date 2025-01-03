"use client";

import { useState } from "react";
import { CourseHeader } from "@/components/course/CourseHeader";
import { CourseForm } from "@/components/course/CourseForm";
import { CoursePreview } from "@/components/course/CoursePreview";
import type { CourseData } from "@/types/course";

export default function MiniCourseBuilderPage() {
  const [courseData, setCourseData] = useState<CourseData>({
    title: "",
    subtitle: "",
    duration: "30-Minute System",
    features: [
      "Sales Page Templates",
      "Email Sequences",
      "Thank You Pages",
      "Conversion Optimization"
    ],
    modules: [
      {
        title: "Quick-Start Sales System",
        lessons: [
          {
            title: "System Overview & Strategy",
            duration: "5:20",
            videoUrl: "",
            type: "video"
          },
          {
            title: "Setting Up Your Sales Funnel",
            duration: "8:15",
            videoUrl: "",
            type: "video"
          },
          {
            title: "Conversion Optimization Secrets",
            duration: "7:30",
            videoUrl: "",
            type: "video"
          }
        ]
      },
      {
        title: "High-Converting Pages",
        lessons: [
          {
            title: "Sales Page Blueprint",
            duration: "10:45",
            videoUrl: "",
            type: "resource"
          },
          {
            title: "Thank You Page Psychology",
            duration: "6:30",
            videoUrl: "",
            type: "video"
          }
        ]
      }
    ],
    style: {
      theme: "dark",
      colors: {
        primary: "#3B82F6",
        secondary: "#60A5FA",
        accent: "#2563EB",
        background: "#0F172A",
        text: "#F8FAFC",
        hover: {
          text: "#60A5FA",
          icon: "#3B82F6",
          background: "#1E293B"
        }
      }
    }
  });

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-black to-blue-950/5 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <CourseHeader onGenerate={setCourseData} />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <CourseForm data={courseData} onChange={setCourseData} />
          <CoursePreview data={courseData} />
        </div>
      </div>
    </main>
  );
}