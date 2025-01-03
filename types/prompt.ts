export interface PromptData {
  resourceType: string;
  resourceName: string;
  painPoint: string;
  quickWin: string;
  frustrationMethod: string;
  timeFrame: string;
  modules: string[];
  bonusName: string;
  bonusValue: number;
  targetAudience: string;
  industryNiche: string;
  productPrice: string;
  supportEmail: string;
}

export interface PromptParams {
  courseName: string;
  problem: string;
  solution: string;
  currentMethod: string;
  modules?: string[];
  audience?: string;
  niche?: string;
}

export interface PromptStyleConfig {
  theme: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}