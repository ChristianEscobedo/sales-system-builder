"use client";

import { Button } from "@/components/ui/button";
import { Plus, GripVertical, Settings, Trash2 } from "lucide-react";
import type { PageData, PageSectionType } from "@/types/page-builder";
import { PageSectionBuilder } from "../PageSectionBuilder";

interface SectionsTabProps {
  data: PageData;
  onChange: (data: PageData) => void;
}

const sectionTypes: { type: PageSectionType; label: string }[] = [
  { type: "hero", label: "Hero Section" },
  { type: "key-points", label: "Key Points" },
  { type: "video", label: "Video" },
  { type: "features", label: "Features" },
  { type: "community", label: "Community" },
  { type: "cta", label: "Call to Action" }
];

export function SectionsTab({ data, onChange }: SectionsTabProps) {
  const addSection = (type: PageSectionType) => {
    const newSections = [
      ...data.sections,
      {
        type,
        content: {
          title: `New ${type} Section`,
          description: ""
        }
      }
    ];
    onChange({ ...data, sections: newSections });
  };

  const removeSection = (index: number) => {
    const newSections = data.sections.filter((_, i) => i !== index);
    onChange({ ...data, sections: newSections });
  };

  return (
    <div className="space-y-6">
      <PageSectionBuilder
        sections={data.sections}
        onChange={(sections) => onChange({ ...data, sections })}
        trigger={
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
            <Plus className="mr-2 h-4 w-4" />
            Add Section
          </Button>
        }
      />

      <div className="space-y-4 mt-8">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white/5 p-4 rounded-lg"
          >
            <GripVertical className="text-gray-400" />
            <div className="flex-1">
              <h4 className="text-white font-medium capitalize">
                {section.type.replace("-", " ")}
              </h4>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Settings size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeSection(index)}
              className="text-red-400 hover:text-red-300"
            >
              <Trash2 size={16} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function getDefaultContent(type: PageSectionType) {
  switch (type) {
    case "key-points":
      return {
        title: "Key Points",
        points: ["Point 1", "Point 2", "Point 3"]
      };
    case "video":
      return {
        title: "Video Section",
        videoUrl: "",
        description: ""
      };
    case "community":
      return {
        title: "Join Our Community",
        description: "Connect with fellow members",
        memberCount: "1,000+",
        features: []
      };
    default:
      return {
        title: `New ${type} Section`,
        description: ""
      };
  }
}