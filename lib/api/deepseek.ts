import type { PromptData, PromptParams } from "@/types/prompt";
import { createDefaultPromptData } from "@/lib/defaults/prompt";

interface Brief {
  courseName: string;
  problem: string;
  audience: string;
  solution: string;
  currentMethod: string;
}

export async function generatePromptData(brief: Brief): Promise<PromptData> {
  try {
    const response = await fetch('/api/deepseek', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brief)
    });

    const data = await response.json();
    const validatedData = validatePromptData(data);

    if (!validatedData) {
      // If the API response is invalid, return a default structure with the brief data
      return createDefaultPromptData({
        courseName: brief.courseName,
        problem: brief.problem,
        solution: brief.solution,
        currentMethod: brief.currentMethod,
        audience: brief.audience
      });
    }

    return validatedData;
  } catch (error) {
    console.error('Error generating prompt data:', error);
    // Return default data structure in case of error
    return createDefaultPromptData({
      courseName: brief.courseName,
      problem: brief.problem,
      solution: brief.solution,
      currentMethod: brief.currentMethod,
      audience: brief.audience
    });
  }
}

function validatePromptData(data: any): PromptData | null {
  // Add validation logic here
  // Return null if validation fails
  return data as PromptData;
}