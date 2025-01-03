export interface CourseLesson {
  title: string;
  duration: string;
  videoUrl: string;
  type: "video" | "resource" | "quiz";
  description?: string;
  thumbnail?: string;
  sections?: PageSection[];
}

export type SectionType = 
  | "title"
  | "video"
  | "summary"
  | "resources"
  | "action"
  | "checklist"
  | "notes"
  | "quiz"
  | "feedback";

export interface PageSection {
  type: SectionType;
  content: {
    title?: string;
    description?: string;
    videoUrl?: string;
    resources?: string[];
    checklist?: string[];
    buttonText?: string;
    buttonAction?: string;
  };
  order: number;
}

export interface CourseModule {
  title: string;
  description?: string;
  lessons: CourseLesson[];
}

export interface CourseStyle {
  theme: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    hover: {
      text: string;
      icon: string;
      background: string;
    };
    gradients?: {
      enabled: boolean;
      primary: string;
      secondary: string;
    };
  };
}

export interface CourseData {
  title: string;
  subtitle: string;
  duration: string;
  features: string[];
  modules: CourseModule[];
  style: CourseStyle;
}