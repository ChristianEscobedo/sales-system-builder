"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { GripVertical, Plus, Trash2, Video, FileText, CheckSquare, MessageSquare, HelpCircle, ThumbsUp, Layout, Image, Link, ListOrdered } from "lucide-react";
import type { PageSection, SectionType } from "@/types/course";
import { TemplateGallery } from "./TemplateGallery";

interface PageSectionBuilderProps {
  sections: PageSection[];
  onChange: (sections: PageSection[]) => void;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const sectionTypes: { value: SectionType; label: string; icon: React.ReactNode }[] = [
  { value: "title", label: "Title & Description", icon: <FileText size={16} /> },
  { value: "video", label: "Video Player", icon: <Video size={16} /> },
  { value: "layout", label: "Layout Grid", icon: <Layout size={16} /> },
  { value: "image", label: "Image", icon: <Image size={16} /> },
  { value: "summary", label: "Summary", icon: <FileText size={16} /> },
  { value: "resources", label: "Resources", icon: <FileText size={16} /> },
  { value: "action", label: "Action Button", icon: <FileText size={16} /> },
  { value: "checklist", label: "Checklist", icon: <CheckSquare size={16} /> },
  { value: "steps", label: "Step-by-Step", icon: <ListOrdered size={16} /> },
  { value: "notes", label: "Notes", icon: <MessageSquare size={16} /> },
  { value: "quiz", label: "Quiz", icon: <HelpCircle size={16} /> },
  { value: "feedback", label: "Feedback", icon: <ThumbsUp size={16} /> },
  { value: "cta", label: "Call to Action", icon: <Link size={16} /> }
];

export function PageSectionBuilder({ sections, onChange }: PageSectionBuilderProps) {
  const [showTemplates, setShowTemplates] = useState(false);

  const addSection = (type: SectionType) => {
    const newSection: PageSection = {
      type,
      content: {},
      order: sections.length
    };
    onChange([...sections, newSection]);
  };

  const updateSection = (index: number, updates: Partial<PageSection>) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], ...updates };
    onChange(newSections);
  };

  const removeSection = (index: number) => {
    onChange(sections.filter((_, i) => i !== index));
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order values
    const reorderedSections = items.map((item, index) => ({
      ...item,
      order: index
    }));

    onChange(reorderedSections);
  };

  return (
    <div className="space-y-6">
      {/* Template Gallery Toggle */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">Add Page Section</h3>
        <Button
          variant="outline"
          onClick={() => setShowTemplates(!showTemplates)}
          className="gap-2 text-white hover:text-blue-400"
        >
          <Layout size={16} />
          {showTemplates ? "Show Section Tools" : "Browse Templates"}
        </Button>
      </div>

      {showTemplates ? (
        <div className="mt-6">
          <TemplateGallery
            onSelect={(templateSections) => {
              onChange(templateSections);
              setShowTemplates(false);
            }}
          />
        </div>
      ) : (
        <div className="mt-6">
          {/* Section Type Gallery */}
          <div className="flex flex-wrap gap-2">
            {sectionTypes.map((type) => (
              <Button
                key={type.value}
                variant="outline"
                size="sm"
                onClick={() => addSection(type.value)}
                className="gap-2 hover:bg-blue-500/10 hover:border-blue-500/50 transition-colors text-white"
              >
                {type.icon}
                {type.label}
              </Button>
            ))}
          </div>

          {/* Visual Preview */}
          <div className="bg-white/5 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Live Preview</h3>
              <p className="text-sm text-gray-400">Drag sections to rearrange</p>
            </div>
            <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
              {sections.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-white/60">Add sections to preview content</p>
                </div>
              ) : (
                <div className="h-full overflow-y-auto p-6">
                  {sections.map((section, index) => (
                    <SectionPreview key={index} section={section} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-8">
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="sections">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-medium text-white mb-4">Page Sections</h3>
                    {sections.map((section, index) => (
                      <Draggable
                        key={index}
                        draggableId={`section-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors group"
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div {...provided.dragHandleProps}>
                                <GripVertical className="text-gray-400 group-hover:text-gray-300" />
                              </div>
                              <div className="flex-1">
                                <Select
                                  value={section.type}
                                  onValueChange={(value) => updateSection(index, { type: value as SectionType })}
                                >
                                  <SelectTrigger className="bg-white/10 border-blue-500/30 text-white w-48 group-hover:border-blue-500/50 hover:text-white">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#1A1A1A] border-blue-500/30">
                                    {sectionTypes.map((type) => (
                                      <SelectItem key={type.value} value={type.value} className="text-white hover:bg-blue-500/10">
                                        <div className="flex items-center gap-2">
                                          {type.icon}
                                          {type.label}
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeSection(index)}
                                className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>

                            <div className="space-y-4">
                              {section.type === "title" && (
                                <>
                                  <div>
                                    <Label className="text-white">Title</Label>
                                    <Input
                                      value={section.content.title || ""}
                                      onChange={(e) => updateSection(index, {
                                        content: { ...section.content, title: e.target.value }
                                      })}
                                      className="bg-white/10 border-blue-500/30 text-white"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-white">Description</Label>
                                    <Textarea
                                      value={section.content.description || ""}
                                      onChange={(e) => updateSection(index, {
                                        content: { ...section.content, description: e.target.value }
                                      })}
                                      className="bg-white/10 border-blue-500/30 text-white"
                                    />
                                  </div>
                                </>
                              )}

                              {section.type === "video" && (
                                <div>
                                  <Label className="text-white">Video URL</Label>
                                  <Input
                                    value={section.content.videoUrl || ""}
                                    onChange={(e) => updateSection(index, {
                                      content: { ...section.content, videoUrl: e.target.value }
                                    })}
                                    className="bg-white/10 border-blue-500/30 text-white"
                                  />
                                </div>
                              )}

                              {section.type === "layout" && (
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label className="text-white">Layout Type</Label>
                                    <Select
                                      value={section.content.layout || "2-col"}
                                      onValueChange={(value) => updateSection(index, {
                                        content: { ...section.content, layout: value }
                                      })}
                                    >
                                      <SelectTrigger className="bg-white/10 border-blue-500/30 text-white">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="2-col">Two Columns</SelectItem>
                                        <SelectItem value="3-col">Three Columns</SelectItem>
                                        <SelectItem value="sidebar">Sidebar</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              )}
                              {section.type === "action" && (
                                <>
                                  <div>
                                    <Label className="text-white">Button Text</Label>
                                    <Input
                                      value={section.content.buttonText || ""}
                                      onChange={(e) => updateSection(index, {
                                        content: { ...section.content, buttonText: e.target.value }
                                      })}
                                      className="bg-white/10 border-blue-500/30 text-white"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-white">Button Action</Label>
                                    <Input
                                      value={section.content.buttonAction || ""}
                                      onChange={(e) => updateSection(index, {
                                        content: { ...section.content, buttonAction: e.target.value }
                                      })}
                                      className="bg-white/10 border-blue-500/30 text-white"
                                    />
                                  </div>
                                </>
                              )}

                              {section.type === "steps" && (
                                <div className="space-y-4">
                                  <Label className="text-white">Steps</Label>
                                  {(section.content.steps || []).map((step: string, stepIndex: number) => (
                                    <div key={stepIndex} className="flex gap-2">
                                      <Input
                                        value={step}
                                        onChange={(e) => {
                                          const newSteps = [...(section.content.steps || [])];
                                          newSteps[stepIndex] = e.target.value;
                                          updateSection(index, {
                                            content: { ...section.content, steps: newSteps }
                                          });
                                        }}
                                        className="bg-white/10 border-blue-500/30 text-white"
                                      />
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                          const newSteps = (section.content.steps || []).filter((_: string, i: number) => i !== stepIndex);
                                          updateSection(index, {
                                            content: { ...section.content, steps: newSteps }
                                          });
                                        }}
                                        className="text-red-400 hover:text-red-300"
                                      >
                                        <Trash2 size={16} />
                                      </Button>
                                    </div>
                                  ))}
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      const newSteps = [...(section.content.steps || []), ""];
                                      updateSection(index, {
                                        content: { ...section.content, steps: newSteps }
                                      });
                                    }}
                                    className="text-blue-400 hover:text-blue-300"
                                  >
                                    <Plus size={16} className="mr-2" />
                                    Add Step
                                  </Button>
                                </div>
                              )}

                              {section.type === "checklist" && (
                                <div className="space-y-4">
                                  <div className="flex justify-between items-center mb-2">
                                    <Label className="text-white">Checklist Items</Label>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => {
                                        const newItems = [...(section.content.checklist || []), ""];
                                        updateSection(index, {
                                          content: { ...section.content, checklist: newItems }
                                        });
                                      }}
                                      className="text-blue-400 hover:text-blue-300"
                                    >
                                      <Plus size={16} className="mr-2" />
                                      Add Item
                                    </Button>
                                  </div>
                                  {(section.content.checklist || [
                                    "Complete this task",
                                    "Review materials",
                                    "Practice exercises"
                                  ]).map((item: string, i: number) => (
                                    <div key={i} className="flex gap-2">
                                      <Input
                                        value={item}
                                        onChange={(e) => {
                                          const newItems = [...(section.content.checklist || [])];
                                          newItems[i] = e.target.value;
                                          updateSection(index, {
                                            content: { ...section.content, checklist: newItems }
                                          });
                                        }}
                                        className="bg-white/10 border-blue-500/30 text-white"
                                      />
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                          const newItems = (section.content.checklist || [])
                                            .filter((_: string, j: number) => j !== i);
                                          updateSection(index, {
                                            content: { ...section.content, checklist: newItems }
                                          });
                                        }}
                                        className="text-red-400 hover:text-red-300"
                                      >
                                        <Trash2 size={16} />
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {section.type === "quiz" && (
                                <div className="space-y-6">
                                  <div className="flex justify-between items-center mb-2">
                                    <Label className="text-white">Quiz Questions</Label>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => {
                                        const newQuestions = [...(section.content.questions || []), {
                                          question: "",
                                          options: ["", "", "", ""],
                                          correctAnswer: 0
                                        }];
                                        updateSection(index, {
                                          content: { ...section.content, questions: newQuestions }
                                        });
                                      }}
                                      className="text-blue-400 hover:text-blue-300"
                                    >
                                      <Plus size={16} className="mr-2" />
                                      Add Question
                                    </Button>
                                  </div>
                                  {(section.content.questions || []).map((q: QuizQuestion, qIndex: number) => (
                                    <div key={qIndex} className="space-y-4 bg-white/5 p-4 rounded-lg">
                                      <div className="flex gap-2">
                                        <Input
                                          value={q.question}
                                          onChange={(e) => {
                                            const newQuestions = [...(section.content.questions || [])];
                                            newQuestions[qIndex] = { ...q, question: e.target.value };
                                            updateSection(index, {
                                              content: { ...section.content, questions: newQuestions }
                                            });
                                          }}
                                          placeholder="Enter question..."
                                          className="bg-white/10 border-blue-500/30 text-white"
                                        />
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => {
                                            const newQuestions = (section.content.questions || [])
                                              .filter((_: QuizQuestion, i: number) => i !== qIndex);
                                            updateSection(index, {
                                              content: { ...section.content, questions: newQuestions }
                                            });
                                          }}
                                          className="text-red-400 hover:text-red-300"
                                        >
                                          <Trash2 size={16} />
                                        </Button>
                                      </div>
                                      <div className="space-y-2 pl-4">
                                        {q.options.map((option: string, oIndex: number) => (
                                          <div key={oIndex} className="flex items-center gap-2">
                                            <input
                                              type="radio"
                                              name={`question-${qIndex}`}
                                              checked={q.correctAnswer === oIndex}
                                              onChange={() => {
                                                const newQuestions = [...(section.content.questions || [])];
                                                newQuestions[qIndex] = { ...q, correctAnswer: oIndex };
                                                updateSection(index, {
                                                  content: { ...section.content, questions: newQuestions }
                                                });
                                              }}
                                              className="text-blue-500"
                                            />
                                            <Input
                                              value={option}
                                              onChange={(e) => {
                                                const newQuestions = [...(section.content.questions || [])];
                                                newQuestions[qIndex].options[oIndex] = e.target.value;
                                                updateSection(index, {
                                                  content: { ...section.content, questions: newQuestions }
                                                });
                                              }}
                                              placeholder={`Option ${oIndex + 1}`}
                                              className="bg-white/10 border-blue-500/30 text-white"
                                            />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionPreview({ section }: { section: PageSection }) {
  switch (section.type) {
    case "title":
      return (
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">
            {section.content.title || "Section Title"}
          </h1>
          <p className="text-gray-300">
            {section.content.description || "Add a description to provide more context about this section."}
          </p>
        </div>
      );

    case "video":
      return (
        <div className="mb-8">
          <div className="aspect-video bg-black/40 rounded-lg relative overflow-hidden">
            {section.content.videoUrl ? (
              <video
                src={section.content.videoUrl}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-400">Video Player</p>
                  <p className="text-sm text-gray-500">Add a video URL to preview content</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );

    case "checklist":
      return (
        <div className="mb-8 bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {section.content.title || "Checklist"}
          </h3>
          <div className="space-y-3">
            {(section.content.checklist || [
              "Complete this task",
              "Review materials",
              "Practice exercises"
            ]).map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <CheckSquare className="text-blue-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "resources":
      return (
        <div className="mb-8 bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {section.content.title || "Additional Resources"}
          </h3>
          <div className="grid gap-4">
            {(section.content.resources || [
              "Course Workbook.pdf",
              "Implementation Guide.pdf",
              "Resource Links.txt"
            ]).map((resource: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <FileText className="text-blue-400 flex-shrink-0" />
                <span>{resource}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "quiz":
      return (
        <div className="mb-8 bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {section.content.title || "Knowledge Check"}
          </h3>
          <div className="space-y-6">
            {(section.content.questions || [
              "What is the main concept covered in this lesson?",
              "How would you implement this in your business?",
              "What results can you expect from this strategy?"
            ]).map((question: string, i: number) => (
              <div key={i} className="space-y-2">
                <p className="text-gray-300">{question}</p>
                <div className="pl-6 space-y-2">
                  {["A", "B", "C"].map((option: string) => (
                    <div key={option} className="flex items-center gap-2 text-gray-400">
                      <div className="w-4 h-4 rounded-full border border-gray-500" />
                      <span>Option {option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="mb-8 bg-white/5 rounded-xl p-6">
          <div className="flex items-center gap-3 text-gray-300">
            <FileText className="text-blue-400" />
            <span className="capitalize">{section.type} Section</span>
          </div>
        </div>
      );
  }
}