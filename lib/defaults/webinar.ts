import type { WebinarData } from "@/types/webinar";

export const defaultWebinarData: WebinarData = {
  title: "Sample Webinar",
  subtitle: "Learn Something Amazing",
  description: "A comprehensive webinar about important topics",
  duration: "60 minutes",
  targetAudience: "Professionals",
  mainBenefit: "Master new skills",
  slides: [
    {
      type: "opening",
      content: {
        title: "Welcome",
        description: "Let's get started on your journey"
      }
    }
  ],
  style: {
    theme: "dark",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#4F46E5"
    }
  }
}; 