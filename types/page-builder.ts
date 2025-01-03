export type PageSectionType = 
  | "hero" 
  | "key-points" 
  | "video" 
  | "features" 
  | "community" 
  | "cta";

export interface PageSection {
  type: PageSectionType;
  content: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
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