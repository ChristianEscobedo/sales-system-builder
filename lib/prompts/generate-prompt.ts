import { LANDING_PAGE_TEMPLATE, defaultPromptValues } from "./templates/landing-page";
import { BRIDGE_HEADER_TEMPLATE } from "./templates/bridge/header";
import { BRIDGE_SALES_TEMPLATE } from "./templates/bridge/sales-letter";
import { THANK_YOU_TEMPLATE } from "./templates/thank-you";
import { replaceTemplateValues } from "./utils/template";
import type { PromptData } from "@/types/prompt";

export function generateEnhancedPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[RESOURCE_TYPE]", data.resourceType || defaultPromptValues.RESOURCE_TYPE],
    ["[RESOURCE_NAME]", data.resourceName],
    ["[INDUSTRY/NICHE]", data.industryNiche],
    ["[TARGET_AUDIENCE]", data.targetAudience],
    ["[PAIN_POINTS]", data.painPoints?.join(", ")],
    ["[DESIRED_OUTCOME]", data.desiredOutcome],
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
    ["[BIG_RESULT]", "Scale Your Business to 7-Figures"],
    ["[DESIRABLE_BENEFIT]", "Creates Predictable Revenue"],
    ["[MAJOR_PROBLEM]", "Working 80-Hour Weeks"],
    ["[PRODUCT_NAME]", data.resourceName],
    ["[ACHIEVING_SUCCESS]", "building a scalable agency"],
    ["[TACTIC]", "AI-Powered System"],
    ["[ACHIEVE_RESULT]", "10x Your Client Results"],
    ["[EASIER_FASTER_BETTER]", "in Half the Time"],
    ["[INITIAL_BENEFIT]", "foundation for growth"],
    ["[MAIN_PRODUCT]", "Agency Launch System"]
  ]);

  return replaceTemplateValues(BRIDGE_HEADER_TEMPLATE, replacements);
}

export function generateBridgeSalesPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[PRODUCT_NAME]", data.resourceName],
    ["[REGULAR_PURCHASE]", "coffee"],
    ["[TOTAL_VALUE]", "$4,488"],
    ["[SPECIAL_PRICE]", "$97"],
    ["[VALUE_1]", "1,997"],
    ["[VALUE_2]", "997"],
    ["[VALUE_3]", "997"],
    ["[BONUS_VALUE_1]", "997"],
    ["[BONUS_VALUE_2]", "497"],
    ["[BONUS_VALUE_3]", "997"],
    ["[BONUS_COUNT]", "3"],
    ["[CLIENT_TYPE]", "agency owners"],
    ["[MAIN_BENEFIT]", "predictable scaling"]
  ]);

  return replaceTemplateValues(BRIDGE_SALES_TEMPLATE, replacements);
}

export function generateThankYouPrompt(data: PromptData): string {
  const replacements = new Map([
    ["[PRODUCT_NAME]", data.resourceName],
    ["[PRODUCT_PRICE]", "$97"],
    ["[ORDER_ID]", `#ORD-${Date.now()}`],
    ["[ORDER_DATE]", new Date().toLocaleDateString()],
    ["[DESIRED_OUTCOME]", "building a 7-figure agency"],
    ["[SUPPORT_EMAIL]", "support@example.com"],
    ["[COMMUNITY_NAME]", "Agency Accelerator Community"],
    ["[MEMBER_COUNT]", "5,000"],
    ["[TARGET_AUDIENCE]", "agency owners"],
    ["[SHARED_GOAL]", "scale their business to 7-figures"],
    ["[RESOURCE_NAME]", "Agency Growth Newsletter"],
    ["[RESOURCE_DESCRIPTION]", "Weekly strategies, case studies, and actionable tips to grow your agency faster"]
  ]);

  return replaceTemplateValues(THANK_YOU_TEMPLATE, replacements);
}