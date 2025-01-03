export type WebinarType = "webinar" | "workshop" | "vsl" | "training";

export type SlideType = 
  | "opening"
  | "problem"
  | "solution"
  | "benefits"
  | "case-studies"
  | "offer"
  | "closing";

export interface SlideTemplate {
  title?: string;
  subtitle?: string;
  points?: string[];
  description?: string;
  features?: {
    name: string;
    value: string;
  }[];
  studies?: Array<{
    name: string;
    result: string;
  }>;
  pricing?: {
    regular: string;
    special: string;
    savings: string;
  };
}

export interface WebinarSlide {
  type: SlideType;
  content: {
    title?: string;
    description?: string;
    points?: string[];
    studies?: Array<{
      name: string;
      result: string;
    }>;
    [key: string]: any;
  };
}

export interface WebinarData {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  targetAudience: string;
  mainBenefit: string;
  slides: WebinarSlide[];
  style?: {
    theme: "light" | "dark";
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
}