"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LessonSectionDialog from "@/components/course/LessonSectionDialog";
import { FileUpload } from "@/components/course/FileUpload";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, ChevronUp, Plus, Trash2, Upload, LayoutTemplate } from "lucide-react";
import type { CourseData, CourseModule, CourseLesson } from "@/types/course";

interface ModulesTabProps {
  data: CourseData;
  onChange: (data: CourseData) => void;
}

export function ModulesTab({ data, onChange }: ModulesTabProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const addModule = () => {
    const newModule: CourseModule = {
      title: "New Module",
      lessons: []
    };
    onChange({
      ...data,
      modules: [...data.modules, newModule]
    });
  };

  const updateModule = (index: number, updates: Partial<CourseModule>) => {
    const newModules = [...data.modules];
    newModules[index] = { ...newModules[index], ...updates };
    onChange({ ...data, modules: newModules });
  };

  const removeModule = (index: number) => {
    const newModules = data.modules.filter((_, i) => i !== index);
    onChange({ ...data, modules: newModules });
  };

  const addLesson = (moduleIndex: number) => {
    const newLesson: CourseLesson = {
      title: "New Lesson",
      duration: "0:00",
      videoUrl: "",
      type: "video"
    };
    const newModules = [...data.modules];
    newModules[moduleIndex].lessons.push(newLesson);
    onChange({ ...data, modules: newModules });
  };

  const updateLesson = (moduleIndex: number, lessonIndex: number, updates: Partial<CourseLesson>) => {
    const newModules = [...data.modules];
    newModules[moduleIndex].lessons[lessonIndex] = {
      ...newModules[moduleIndex].lessons[lessonIndex],
      ...updates
    };
    onChange({ ...data, modules: newModules });
  };

  const removeLesson = (moduleIndex: number, lessonIndex: number) => {
    const newModules = [...data.modules];
    newModules[moduleIndex].lessons = newModules[moduleIndex].lessons.filter(
      (_, i) => i !== lessonIndex
    );
    onChange({ ...data, modules: newModules });
  };

  return (
    <div className="space-y-6">
      {data.modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <Input
              value={module.title}
              onChange={(e) => updateModule(moduleIndex, { title: e.target.value })}
              className="bg-white/10 border-blue-500/30 text-white w-auto"
            />
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeModule(moduleIndex)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
                className="text-gray-400 hover:text-white"
              >
                {expandedModule === moduleIndex ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>
          </div>

          {expandedModule === moduleIndex && (
            <div className="space-y-4">
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex gap-4 items-start">
                  <div className="flex-1 space-y-2">
                    <Input
                      value={lesson.title}
                      onChange={(e) => updateLesson(moduleIndex, lessonIndex, { title: e.target.value })}
                      placeholder="Lesson title"
                      className="bg-white/10 border-blue-500/30 text-white"
                    />
                    <div className="flex gap-2">
                      <Input
                        value={lesson.duration}
                        onChange={(e) => updateLesson(moduleIndex, lessonIndex, { duration: e.target.value })}
                        placeholder="Duration (e.g., 5:20)"
                        className="bg-white/10 border-blue-500/30 text-white w-32"
                      />
                      <Select
                        value={lesson.type}
                        onValueChange={(value) => updateLesson(moduleIndex, lessonIndex, { type: value as "video" | "resource" })}
                      >
                        <SelectTrigger className="bg-white/10 border-blue-500/30 text-white w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="resource">Resource</SelectItem>
                        </SelectContent>
                      </Select>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="gap-2">
                            <Upload size={16} />
                            Upload
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0A0A0A] border-blue-500/20 text-white">
                          <DialogHeader>
                            <DialogTitle>Upload {lesson.type === "video" ? "Video" : "Resource"}</DialogTitle>
                          </DialogHeader>
                          <FileUpload
                            type={lesson.type === "video" ? "video" : "resource"}
                            accept={lesson.type === "video" ? 
                              "video/mp4,video/webm" :
                              ".pdf,.doc,.docx,.xls,.xlsx"
                            }
                            onUpload={(file) => {
                              // In a real app, you would upload to a storage service
                              // and get back a URL. For now, we'll use a fake URL
                              const fakeUrl = URL.createObjectURL(file);
                              updateLesson(moduleIndex, lessonIndex, { 
                                videoUrl: lesson.type === "video" ? fakeUrl : undefined,
                                resourceUrl: lesson.type === "resource" ? fakeUrl : undefined
                              });
                            }}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                    <LessonSectionDialog
                      lesson={lesson}
                      onUpdate={(sections) => updateLesson(moduleIndex, lessonIndex, { sections })}
                      trigger={
                        <Button variant="outline" className="gap-2">
                          <LayoutTemplate size={16} />
                          Page Sections
                        </Button>
                      }
                    >
                      <LayoutTemplate size={16} />
                      Page Sections
                    </LessonSectionDialog>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeLesson(moduleIndex, lessonIndex)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
              <Button
                variant="ghost"
                onClick={() => addLesson(moduleIndex)}
                className="text-blue-400 hover:text-blue-300"
              >
                <Plus size={16} className="mr-2" />
                Add Lesson
              </Button>
            </div>
          )}
        </div>
      ))}
      <Button
        variant="outline"
        onClick={addModule}
        className="w-full"
      >
        <Plus size={16} className="mr-2" />
        Add Module
      </Button>
    </div>
  );
}