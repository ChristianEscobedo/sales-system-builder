import type { PromptData, PromptParams } from "@/types/prompt";

export const defaultPromptParams: PromptParams = {
  courseName: "Your Course Name",
  problem: "The main problem your audience faces",
  solution: "The quick win your course provides",
  currentMethod: "Current ineffective method",
  targetAudience: "Your ideal customer",
  transformation: "The end result they'll achieve",
  expertName: "Your Name",
  expertCredentials: "Your credentials and experience",
  supportEmail: "support@example.com",
  modules: [
    "Module 1: Getting Started",
    "Module 2: Core Strategies",
    "Module 3: Implementation"
  ]
};

export function createDefaultPromptData(params: Partial<PromptParams> = {}): PromptData {
  const mergedParams = { ...defaultPromptParams, ...params };

  return {
    resourceType: "Course",
    resourceName: mergedParams.courseName,
    painPoint: mergedParams.problem,
    quickWin: mergedParams.solution,
    frustrationMethod: mergedParams.currentMethod,
    targetAudience: mergedParams.targetAudience,
    transformation: mergedParams.transformation,
    expertName: mergedParams.expertName,
    expertCredentials: mergedParams.expertCredentials,
    supportEmail: mergedParams.supportEmail,
    modules: mergedParams.modules || [],
    colorTheme: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      background: "#000000",
      text: "#FFFFFF",
      hoverText: "#F3F4F6",
      selectedText: "#4F46E5",
      accent: "#4F46E5",
      gradients: [
        "from-purple-600 to-blue-600",
        "from-purple-500 to-blue-500"
      ]
    },
    style: {
      font: "inter",
      layout: "modern",
      spacing: "comfortable"
    }
  };
}