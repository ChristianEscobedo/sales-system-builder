import type { PromptData } from "@/types/prompt";

export function validatePromptData(data: any): PromptData | null {
  if (!data || typeof data !== 'object') {
    return null;
  }

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