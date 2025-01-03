export interface PromptBrief {
  courseName: string;
  problem: string;
  audience: string;
  description?: string;
}

export function validatePromptBrief(brief: PromptBrief): string | null {
  if (!brief.courseName.trim()) {
    return "Course name is required";
  }
  if (!brief.problem.trim()) {
    return "Problem to solve is required";
  }
  if (!brief.audience.trim()) {
    return "Target audience is required";
  }
  return null;
}