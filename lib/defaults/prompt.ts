import type { PromptData, PromptParams } from "@/types/prompt";

export const defaultPromptData: PromptData = {
  resourceType: "Course",
  resourceName: "",
  painPoint: "",
  quickWin: "",
  frustrationMethod: "",
  timeFrame: "",
  modules: [],
  bonusName: "",
  bonusValue: 0,
  targetAudience: "",
  industryNiche: "",
  productPrice: "",
  supportEmail: ""
};

export function createDefaultPromptData(params: PromptParams): PromptData {
  return {
    resourceType: "Course",
    resourceName: params.courseName,
    painPoint: params.problem,
    quickWin: params.solution,
    frustrationMethod: params.currentMethod,
    timeFrame: "30 days",
    modules: params.modules || [],
    bonusName: "VIP Support",
    bonusValue: 997,
    targetAudience: params.audience || "professionals",
    industryNiche: params.niche || "business",
    productPrice: "$997",
    supportEmail: "support@example.com"
  };
}