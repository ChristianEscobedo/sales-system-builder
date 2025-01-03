import type { PromptStyleConfig } from "@/types/prompt";

export const defaultStyleConfig: PromptStyleConfig = {
  theme: "dark",
  colors: {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    accent: "#4F46E5"
  },
  targetAudience: "coaches and agency owners",
  industryNiche: "",
  styleDescriptor: "ultra-modern",
  layout: {
    sections: [
      "Headline",
      "Subheadline",
      "Video",
      "What's Inside",
      "Optin Form"
    ],
    features: [
      "Blur effect for non-logged users",
      "Interactive timeline",
      "Floating testimonials",
      "Social proof bar"
    ]
  },
  content: {
    problem: "",
    audience: "coaches and agency owners",
    uniqueApproach: "",
    trainingModules: []
  },
  pages: {
    auth: ["Login", "Registration"],
    content: [
      "Thank You",
      "Video Training",
      "Prompts Library",
      "Resources"
    ],
    community: ["Join Community", "Community Dashboard"]
  },
  cta: {
    primary: "Join the Community"
  }
};