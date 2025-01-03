export interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  gradients?: string[];
}

export interface PromptStyleConfig {
  targetAudience: string;
  industryNiche: string;
  styleDescriptor: string;
  quickWin?: string;
  frustrationMethod?: string;
  colorTheme: ColorTheme;
  content: {
    problem: string;
    audience: string;
    uniqueApproach: string;
    trainingModules: string[];
  };
  pages: {
    auth: string[];
    content: string[];
    community: string[];
  };
  cta: {
    primary: string;
    secondary?: string;
  };
}