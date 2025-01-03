export interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  hoverText: string;
  selectedText: string;
  accent: string;
  gradients?: string[];
}

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
  productPrice: number; // Changed from string to number
  supportEmail: string;
  colorTheme: ColorTheme; // Made required instead of optional
  // AI-generated fields
  painPoints: string[];
  industryStats: string[];
  storyHook: string;
  desiredOutcome: string;
  trustElements: string[];
  socialProof: {
    downloads: number;
    successStories: string[];
    industryRecognition: string[];
  };
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

export interface LayoutConfig {
  sections: string[];
  features: string[];
}

export interface ContentConfig {
  problem: string;
  audience: string;
  uniqueApproach: string;
  trainingModules: string[];
}

export interface PagesConfig {
  auth: string[];
  content: string[];
  community: string[];
}

export interface PromptStyleConfig {
  theme: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  targetAudience?: string;
  industryNiche?: string;
  styleDescriptor?: string;
  layout?: LayoutConfig;
  content?: ContentConfig;
  pages?: PagesConfig;
  cta?: {
    primary: string;
  };
}