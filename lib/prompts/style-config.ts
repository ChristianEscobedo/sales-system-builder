import type { PromptStyleConfig } from "@/types/prompt-extended";

export const defaultStyleConfig: PromptStyleConfig = {
  targetAudience: "coaches and agency owners",
  industryNiche: "",
  styleDescriptor: "ultra-modern",
  colorTheme: {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    background: "#000000",
    gradients: [
      "from-purple-600 to-blue-600",
      "from-purple-950/5 via-black to-purple-950/5"
    ]
  },
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