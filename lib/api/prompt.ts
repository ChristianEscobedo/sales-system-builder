import type { PromptData } from "@/types/prompt";
import type { PromptBrief } from "@/types/prompt-brief";
import { createDefaultPromptData } from "@/lib/defaults/prompt";
import { validatePromptData } from "@/lib/validation/prompt-data";
import { parseApiResponse } from "@/lib/utils/api";

export async function generatePrompt(brief: PromptBrief): Promise<PromptData> {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brief)
    });

    const data = await parseApiResponse(response);
    
    if (!response.ok) {
      throw new Error(data.error || data.details || 'Failed to generate content');
    }

    const validatedData = validatePromptData(data);
    if (!validatedData) {
      console.error("Invalid response data structure");
      return createDefaultPromptData(brief);
    }

    return validatedData;
  } catch (error) {
    console.error("API call failed:", error);
    return createDefaultPromptData(brief);
  }
}