export type WebinarType = "webinar" | "workshop" | "vsl" | "training";

export type SlideType = 
  | "opening"
  | "promise"
  | "story"
  | "problem"
  | "solution"
  | "benefits"
  | "case-studies"
  | "offer"
  | "bonuses"
  | "close"
  | "industry-problem"
  | "common-myth"
  | "real-truth"
  | "hidden-pattern"
  | "current-reality"
  | "cost-of-inaction"
  | "bigger-impact"
  | "future-stakes"
  | "solution-intro"
  | "breakthrough"
  | "framework"
  | "component-1"
  | "component-2"
  | "component-3"
  | "success-pattern"
  | "case-study-1"
  | "case-study-2"
  | "case-study-3"
  | "possibility"
  | "transformation"
  | "new-reality"
  | "time-factor"
  | "program-intro"
  | "program-overview"
  | "component-breakdown"
  | "support-system"
  | "implementation"
  | "bonus-1"
  | "bonus-2"
  | "bonus-3"
  | "fast-action"
  | "value-stack"
  | "special-offer"
  | "payment-options"
  | "guarantee"
  | "objection-1"
  | "objection-2"
  | "objection-3"
  | "objection-4"
  | "success-recap"
  | "decision"
  | "path-comparison"
  | "take-action"
  | "limited-time"
  | "fast-action-reminder"
  | "final-call"
  | "qa";

export interface WebinarSlide {
  type: SlideType;
  content: any; // Will be typed based on slide type
}

export interface SlideContent {
  title?: string;
  subtitle?: string;
  points?: string[];
  benefits?: string[];
  steps?: string[];
  comparison?: {
    before: string[];
    after: string[];
  };
  testimonial?: {
    name: string;
    quote: string;
    result: string;
  };
  pricing?: {
    regular: string;
    special: string;
    savings: string;
  };
  timeframe?: string;
  guarantee?: {
    days: number;
    type: string;
    description: string;
  };
}

export interface SlideTemplate {
  title?: string;
  subtitle?: string;
  points?: string[];
  features?: {
    name: string;
    value: string;
  }[];
  comparison?: {
    before: string[];
    after: string[];
  };
  testimonial?: {
    name: string;
    quote: string;
    result: string;
  };
  pricing?: {
    regular: string;
    special: string;
    savings: string;
  };
  timeframe?: string;
  guarantee?: {
    days: number;
    type: string;
    description: string;
  };
}

export interface Presenter {
  name: string;
  title: string;
  credentials: string;
  bio: string;
}

export interface Bonus {
  name: string;
  value: string;
  description: string;
}

export interface Offer {
  name: string;
  price: string;
  value: string;
  guarantee: string;
  bonuses: Bonus[];
}

export interface WebinarData {
  title: string;
  subtitle: string;
  type: WebinarType;
  presenter: Presenter;
  problem: string;
  solution: string;
  targetAudience: string;
  industryNiche?: string;
  mainBenefit: string;
  slides: WebinarSlide[];
  offer: Offer;
  style?: {
    preset?: string;
    colors?: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
    };
    gradients?: string[];
  };
}