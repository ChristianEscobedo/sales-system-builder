import type { PromptData } from "@/types/prompt";

export function generatePromptContent(data: PromptData): string {
  const template = `Create a ${data.resourceType} called "${data.resourceName}" for ${data.targetAudience} in the ${data.industryNiche} industry.

The main problem to solve: ${data.painPoint}

Quick win offered: ${data.quickWin}

Current frustration: ${data.frustrationMethod}

Timeframe: ${data.timeFrame}

Modules:
${data.modules.map((module, index) => `${index + 1}. ${module}`).join("\n")}

Bonus Offer: ${data.bonusName} (Value: $${data.bonusValue})

Product Price: ${data.productPrice}

Support: ${data.supportEmail}

Please generate comprehensive content for each module, ensuring it aligns with the target audience's needs and delivers the promised quick win.`;

  return template;
}

export function replacePromptVariables(template: string, data: PromptData): string {
  const replacements: [string, string | undefined][] = [
    ["[RESOURCE_TYPE]", data.resourceType],
    ["[RESOURCE_NAME]", data.resourceName],
    ["[TARGET_AUDIENCE]", data.targetAudience],
    ["[INDUSTRY_NICHE]", data.industryNiche],
    ["[PAIN_POINT]", data.painPoint],
    ["[QUICK_WIN]", data.quickWin],
    ["[FRUSTRATION_METHOD]", data.frustrationMethod],
    ["[TIME_FRAME]", data.timeFrame],
    ["[MODULES]", data.modules.join(", ")],
    ["[BONUS_NAME]", data.bonusName],
    ["[BONUS_VALUE]", data.bonusValue?.toString()],
    ["[PRODUCT_PRICE]", data.productPrice],
    ["[SUPPORT_EMAIL]", data.supportEmail]
  ];

  return replacements.reduce((result, [variable, value]) => {
    return result.replace(new RegExp(variable, "g"), value || "");
  }, template);
}