import type { PromptData } from "@/types/prompt";
import type { APIError } from "./types";
import { createDefaultPromptData } from "@/lib/defaults/prompt";
import type { PromptBrief } from "@/lib/validation/prompt";

export async function generatePrompt(brief: PromptBrief): Promise<PromptData> {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brief)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.details || 'Failed to generate content');
    }

    // Validate and ensure all required fields are present
    const validatedData = validatePromptData(data);
    if (!validatedData) {
      // If the API response is invalid, return a default structure with the brief data
      return createDefaultPromptData({
        courseName: brief.courseName,
        problem: brief.problem,
        audience: brief.audience
      });
    }

    return validatedData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
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
    'bonusValue'
  ];

  // Check if all required fields are present
  const hasAllFields = requiredFields.every(field => {
    if (field === 'modules') {
      return Array.isArray(data[field]) && data[field].length === 5;
    }
    return data[field] !== undefined && data[field] !== null;
  });

  if (!hasAllFields) {
    return null;
  }

  // Ensure all fields are of the correct type
  if (
    typeof data.resourceType !== 'string' ||
    typeof data.resourceName !== 'string' ||
    typeof data.painPoint !== 'string' ||
    typeof data.quickWin !== 'string' ||
    typeof data.frustrationMethod !== 'string' ||
    typeof data.timeFrame !== 'string' ||
    !Array.isArray(data.modules) ||
    typeof data.bonusName !== 'string' ||
    typeof data.bonusValue !== 'number'
  ) {
    return null;
  }

  return data as PromptData;
}