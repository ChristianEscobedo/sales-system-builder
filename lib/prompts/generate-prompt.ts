import { LANDING_PAGE_TEMPLATE, defaultPromptValues } from "./templates/landing-page";
import { BRIDGE_HEADER_TEMPLATE } from "./templates/bridge/header";
import { BRIDGE_SALES_TEMPLATE } from "./templates/bridge/sales-letter";
import { THANK_YOU_TEMPLATE } from "./templates/thank-you";
import { replaceTemplateValues } from "./utils/template";
import type { PromptData } from "@/types/prompt";
import { CHECKOUT_TEMPLATE } from './templates/checkout';

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

export function generateEnhancedPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[RESOURCE_TYPE]", data.resourceType || defaultPromptValues.RESOURCE_TYPE],
    ["[RESOURCE_NAME]", data.resourceName],
    ["[INDUSTRY/NICHE]", data.industryNiche],
    ["[TARGET_AUDIENCE]", data.targetAudience],
    ["[PAIN_POINTS]", data.painPoint],
    ["[DESIRED_OUTCOME]", data.quickWin],
    ["[PRIMARY_COLOR]", data.colorTheme?.primary || defaultPromptValues.PRIMARY_COLOR],
    ["[SECONDARY_COLOR]", data.colorTheme?.secondary || defaultPromptValues.SECONDARY_COLOR],
    ["[SOLVE_PAIN_POINT]", data.painPoint],
    ["[ACHIEVE_QUICK_WIN]", data.quickWin],
    ["[FRUSTRATION_METHOD]", data.frustrationMethod],
    ["[TIME_FRAME]", data.timeFrame || defaultPromptValues.TIME_FRAME]
  ]);

  return replaceTemplateValues(LANDING_PAGE_TEMPLATE, replacements);
}

export function generateBridgeHeaderPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[BIG_RESULT]", data.transformation || "Scale Your Business"],
    ["[DESIRABLE_BENEFIT]", data.quickWin || "Achieve Better Results"], 
    ["[MAJOR_PROBLEM]", data.painPoint || "Current Challenges"],
    ["[PRODUCT_NAME]", data.resourceName],
    ["[ACHIEVING_SUCCESS]", data.transformation || "reaching your goals"],
    ["[TACTIC]", data.resourceType || "Proven System"],
    ["[ACHIEVE_RESULT]", data.quickWin || "Improve Your Results"],
    ["[EASIER_FASTER_BETTER]", data.timeFrame || "more efficiently"],
    ["[INITIAL_BENEFIT]", data.quickWin || "initial improvements"],
    ["[MAIN_PRODUCT]", data.resourceName]
  ]);

  return replaceTemplateValues(BRIDGE_HEADER_TEMPLATE, replacements);
}

export function generateBridgeSalesPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[PRODUCT_NAME]", data.resourceName],
    ["[REGULAR_PURCHASE]", "everyday purchase"],
    ["[TOTAL_VALUE]", `$${data.bonusValue * 3 || "997"}+`],
    ["[SPECIAL_PRICE]", data.productPrice || "$97"],
    ["[VALUE_1]", data.bonusValue?.toString() || "997"],
    ["[VALUE_2]", data.bonusValue?.toString() || "997"], 
    ["[VALUE_3]", data.bonusValue?.toString() || "997"],
    ["[BONUS_VALUE_1]", data.bonusValue?.toString() || "997"],
    ["[BONUS_VALUE_2]", data.bonusValue?.toString() || "497"],
    ["[BONUS_VALUE_3]", data.bonusValue?.toString() || "997"],
    ["[BONUS_COUNT]", data.modules?.length?.toString() || "3"],
    ["[CLIENT_TYPE]", data.targetAudience || "professionals"],
    ["[MAIN_BENEFIT]", data.quickWin || "improved results"]
  ]);

  return replaceTemplateValues(BRIDGE_SALES_TEMPLATE, replacements);
}

export function generateThankYouPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[PRODUCT_NAME]", data.resourceName],
    ["[PRODUCT_PRICE]", data.productPrice || "$97"],
    ["[ORDER_ID]", `#ORD-${Date.now()}`],
    ["[ORDER_DATE]", new Date().toLocaleDateString()],
    ["[DESIRED_OUTCOME]", data.transformation || "achieving your goals"],
    ["[SUPPORT_EMAIL]", data.supportEmail || "support@example.com"],
    ["[COMMUNITY_NAME]", `${data.industryNiche || "Professional"} Community`],
    ["[MEMBER_COUNT]", "1,000+"],
    ["[TARGET_AUDIENCE]", data.targetAudience || "professionals"],
    ["[SHARED_GOAL]", data.transformation || "reach their goals"],
    ["[RESOURCE_NAME]", `${data.industryNiche || "Professional"} Newsletter`],
    ["[RESOURCE_DESCRIPTION]", `Weekly insights and strategies for ${data.targetAudience || "professionals"} to ${data.quickWin || "improve results"}`]
  ]);

  return replaceTemplateValues(THANK_YOU_TEMPLATE, replacements);
}

export function generateCheckoutPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[PRODUCT_NAME]", data.resourceName],
    ["[GUARANTEE_DAYS]", "30"],
    ["[GUARANTEE_DESCRIPTION]", "If you're not completely satisfied with your purchase, simply let us know within 30 days for a full refund."],
    ["[SECURITY_MESSAGE]", "Your information is secured with bank-level encryption"],
    ["[REGULAR_PRICE]", `$${Number(data.productPrice) * 2}`],
    ["[TODAY_PRICE]", data.productPrice],
    ["[SAVINGS_AMOUNT]", `$${Number(data.productPrice)}`],
    ["[PRODUCT_1]", data.resourceName],
    ["[PRODUCT_1_DESCRIPTION]", `Complete ${data.resourceType} system`],
    ["[VALUE_1]", data.bonusValue?.toString() || "997"],
    ["[BONUS_1]", `${data.bonusName || "Fast Action Bonus 1"}`],
    ["[BONUS_1_DESCRIPTION]", "Exclusive bonus content and resources"],
    ["[BONUS_VALUE_1]", data.bonusValue?.toString() || "497"],
    ["[BONUS_2]", "Implementation Guide"],
    ["[BONUS_2_DESCRIPTION]", "Step-by-step implementation blueprint"],
    ["[BONUS_VALUE_2]", (data.bonusValue ? data.bonusValue / 2 : 297).toString()],
    ["[TOTAL_VALUE]", `$${data.bonusValue ? data.bonusValue * 3 : 1997}`],
  ]);

  return replaceTemplateValues(CHECKOUT_TEMPLATE, replacements);
}