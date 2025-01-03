export type SectionType = 
  | "hero"
  | "key-points"
  | "features"
  | "testimonials"
  | "pricing"
  | "community"
  | "cta"
  | "faq"
  | "comparison"
  | "stats"
  | "timeline"
  | "team"
  | "contact";

export interface PageSection {
  type: SectionType;
  content: any;
}

export interface PageStyle {
  theme: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  video?: {
    url: string;
    thumbnail?: string;
  };
}

export interface PageData {
  title: string;
  subtitle: string;
  description: string;
  sections: PageSection[];
  style: PageStyle;
}