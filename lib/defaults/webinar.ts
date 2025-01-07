import type { WebinarData } from "@/types/webinar";

export const defaultWebinarData: WebinarData = {
  title: "Sample Webinar",
  subtitle: "Learn Something Amazing",
  type: "webinar",
  presenter: {
    name: "Presenter Name",
    title: "Expert Title",
    credentials: "Credentials",
    bio: "Bio"
  },
  targetAudience: "Professionals",
  problem: "Problem statement",
  solution: "Solution offered",
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
  offer: {
    name: "Offer Name",
    price: "$997",
    value: "$2997",
    guarantee: "30-day money back guarantee",
    bonuses: []
  },
  style: {
    preset: "dark",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      background: "#000000",
      text: "#FFFFFF",
      accent: "#4F46E5"
    }
  }
}; 