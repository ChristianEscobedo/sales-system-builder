import type { PromptData } from "@/types/prompt";

// Extend from base type to ensure compatibility
export interface PromptParams extends Pick<PromptData, 
  | 'targetAudience'
  | 'transformation'
  | 'expertName'
  | 'expertCredentials'
  | 'supportEmail'
  | 'timeFrame'
  | 'bonusName'
  | 'bonusValue'
  | 'industryNiche'
  | 'productPrice'
> {
  courseName: string;
  problem: string;
  solution: string;
  currentMethod: string;
  modules?: string[];
  audience?: string;
  niche?: string;
}

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
  timeFrame: "30 days",
  bonusName: "Quick Start Guide",
  bonusValue: 997,
  industryNiche: "Digital Marketing",
  productPrice: "997",
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
    timeFrame: mergedParams.timeFrame || "30 days",
    bonusName: mergedParams.bonusName || "Quick Start Guide",
    bonusValue: mergedParams.bonusValue || 997,
    industryNiche: mergedParams.industryNiche || "Digital Marketing",
    productPrice: mergedParams.productPrice || "997",
    painPoints: [],
    industryStats: [],
    storyHook: "",
    desiredOutcome: "",
    trustElements: [],
    socialProof: {
      downloads: 0,
      successStories: [],
      industryRecognition: []
    },
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