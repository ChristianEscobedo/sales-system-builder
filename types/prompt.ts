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
  productPrice: number;
  supportEmail: string;
  colorTheme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
    gradients?: string[];
  };
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