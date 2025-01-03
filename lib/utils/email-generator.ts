import type { EmailData, EmailSequenceData } from "@/types/email-sequence";

export function generateEmailContent(email: EmailData, data: EmailSequenceData): string {
  let content = email.body || '';
  
  // Define replacements with fallback values
  const replacements = new Map([
    ['[PRODUCT_NAME]', data.productName || '[Product Name]'],
    ['[PRODUCT_PRICE]', data.productPrice || '$97'],
    ['[MAIN_BENEFIT]', data.mainBenefit || '[Main Benefit]'],
    ['[TARGET_AUDIENCE]', data.targetAudience || '[Target Audience]'],
    ['[PAIN_POINT]', data.painPoint || '[Pain Point]'],
    ['[SOLUTION]', data.solution || '[Solution]'],
    ['[BONUS_NAME]', data.bonusName || '[Bonus Name]'],
    ['[BONUS_VALUE]', data.bonusValue?.toString() || '97'],
    ['[FIRST_NAME]', '[FIRST_NAME]'], // Keep dynamic
    ['[SIGNATURE]', '[SIGNATURE]'], // Keep dynamic
    ['[OFFER_LINK]', '[OFFER_LINK]'], // Keep dynamic
    ['[RESOURCE_NAME]', data.productName || '[Resource Name]']
  ]);

  // Replace all placeholders with actual values
  replacements.forEach((value, placeholder) => {
    const regex = new RegExp(escapeRegExp(placeholder), 'g');
    content = content.replace(regex, value);
  });

  return content;
}

// Utility function to escape special characters in regex
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}