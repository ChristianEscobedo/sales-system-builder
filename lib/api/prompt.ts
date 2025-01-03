import type { PromptData, PromptParams } from "@/types/prompt";
import { createDefaultPromptData } from "@/lib/defaults/prompt";

export interface PromptBrief {
  courseName: string;
  problem: string;
  audience: string;
  solution: string;
  currentMethod: string;
}

export async function generatePrompt(brief: PromptBrief): Promise<PromptData> {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brief)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to generate content");
    }

    const validatedData = validatePromptData(data);
    if (!validatedData) {
      console.error("Invalid response data structure");
      return createDefaultPromptData({
        courseName: brief.courseName,
        problem: brief.problem,
        solution: brief.solution,
        currentMethod: brief.currentMethod,
        audience: brief.audience
      } as PromptParams);
    }

    return validatedData;
  } catch (error) {
    console.error("Error generating prompt:", error);
    return createDefaultPromptData({
      courseName: brief.courseName,
      problem: brief.problem,
      solution: brief.solution,
      currentMethod: brief.currentMethod,
      audience: brief.audience
    } as PromptParams);
  }
}

function validatePromptData(data: any): PromptData | null {
  const requiredFields = [
    'resourceType',
    'resourceName',
    'painPoint',
    'quickWin',
    'frustrationMethod',
    'timeFrame',
    'modules',
    'bonusName',
    'bonusValue',
    'targetAudience',
    'industryNiche',
    'productPrice',
    'supportEmail'
  ];

  // Check if all required fields are present
  const hasAllFields = requiredFields.every(field => {
    if (field === 'modules') {
      return Array.isArray(data[field]);
    }
    return data[field] !== undefined && data[field] !== null;
  });

  if (!hasAllFields) {
    return null;
  }

  return data as PromptData;
}