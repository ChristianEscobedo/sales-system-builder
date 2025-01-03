import type { PromptData } from "@/types/prompt";

interface PromptParams {
  courseName: string;
  problem: string;
  audience: string;
}

export function createDefaultPromptData(params: PromptParams): PromptData {
  return {
    resourceType: "Course",
    resourceName: params.courseName,
    painPoint: params.problem,
    quickWin: `Solve ${params.problem}`,
    frustrationMethod: "Traditional Methods",
    timeFrame: "60 minutes",
    modules: [
      "Understanding the Basics",
      "Core Strategies",
      "Implementation Guide",
      "Advanced Techniques",
      "Results & Case Studies"
    ],
    bonusName: "Quick Start Guide",
    bonusValue: 97
  };
}