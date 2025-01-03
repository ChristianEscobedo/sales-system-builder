export interface PromptBrief {
  courseName: string;
  problem: string;
  audience: string;
  description?: string;
}

export interface PromptValidation {
  isValid: boolean;
  error?: string;
}