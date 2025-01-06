import type { PromptTemplate } from "@/types/prompt";

export const LANDING_PAGE_TEMPLATE = `This is Part 1 of a Complete Sales System Including Landing Page, Bridge Page, and Thank You Page.

[SYSTEM INSTRUCTIONS]
Create a complete sales system using an ultra-modern design approach with background [BACKGROUND_COLOR] and subtle gradients from [PRIMARY_COLOR] to [SECONDARY_COLOR]. Use a text color of [TEXT_COLOR] and [HOVER_COLOR] and [SELECTED_COLOR] and [ACCENT_COLOR]
Build using Next.js 15+ app router with Shadcn UI components. for any [] shortcodes that are not provided fill them in based on the information giving and answers you find in the [Dynamic Fields] Section. Follow the Instructions below to create the page if you do not complete the entire output let me left off so I can guide you to fill in the rest

[TECHSTACK]
- Next.js 15+ with App Router
- Shadcn UI for components
- Tailwind CSS for custom styling
- Framer Motion for smooth animations
- React Hook Form for interactive elements

[PART 1: LANDING PAGE]

HERO SECTION:
Primary Headline: "HOW WOULD YOU LIKE TO [SOLVE_PAIN_POINT] THAT [ACHIEVE_QUICK_WIN] WITHOUT [FRUSTRATION_METHOD]?"

Secondary Headline: "Get Our Free [RESOURCE_NAME] That Shows You How To [SOLVE_PAIN_POINT] & [ACHIEVE_QUICK_WIN] Without [FRUSTRATION_METHOD]"

Supporting Copy:
Would you like to [RESOURCE_PROMISE] {Make this punchy and grab attention}

[PART 3: CHECKLIST]
CORE PROMISE:
"USING THIS PROVEN SYSTEM, YOU WILL GET INSTANT ACCESS TO"

✅ How to create [MICRO_RESULT] in [TIME_FRAME]

✅ Easily [DESIRED_OUTCOME] without the typical [COMMON_OBSTACLE]...

✅ A new way to [ACHIEVE_QUICK_WIN] using our proprietary strategy '[UNIQUE_MECHANISM]'...

✅ How we drastically decrease [UNWANTED_TASK] with'[SYSTEM_NAME]'

✅ BONUS - Get the [BONUS_NAME] inside [RESOURCE_TYPE]... (Value $[BONUS_VALUE])

KEY BENEFITS PREVIEW:
- Discover the exact blueprint for [SOLVE_PAIN_POINT]
- Learn how to avoid common pitfalls in [INDUSTRY_NICHE]
- Get a complete system for [ACHIEVE_QUICK_WIN]
- Access proven templates and resources

[TARGET AUDIENCE]
Primary: [TARGET_AUDIENCE]
Industry: [INDUSTRY_NICHE]
Pain Points: [PAIN_POINTS]
Desired Outcome: [ACHIEVE_QUICK_WIN]

[DESIGN SYSTEM]
Style: Ultra-modern, premium
Colors:
- Primary: [PRIMARY_COLOR]
- Secondary: [SECONDARY_COLOR]
- Background: [BACKGROUND_COLOR]
- Text: [TEXT_COLOR]
Typography: Inter font family
Animations: Smooth transitions, parallax effects
Components: Modern shadcn/ui elements

[DYNAMIC FIELDS]
RESOURCE_NAME: [RESOURCE_NAME]
SOLVE_PAIN_POINT: [SOLVE_PAIN_POINT]
ACHIEVE_QUICK_WIN: [ACHIEVE_QUICK_WIN]
FRUSTRATION_METHOD: [FRUSTRATION_METHOD]
TIME_FRAME: [TIME_FRAME]
TARGET_AUDIENCE: [TARGET_AUDIENCE]
INDUSTRY_NICHE: [INDUSTRY_NICHE]
PRIMARY_COLOR: [PRIMARY_COLOR]
SECONDARY_COLOR: [SECONDARY_COLOR]
PAIN_POINTS: [PAIN_POINTS]

[PAGE STRUCTURE]
1. Hero Section
2. Problem Agitation
3. Solution Preview
4. Credibility Section
5. Bonus Section
6. Call to Action

[REQUIRED PAGES]
- Landing Page
- Bridge Page
- Checkout Page
- Upsell One Page
- Upsell Checkout Page
- Thank You Page
- Member Access
- Mini Course
- Login Page
- Alternative Copywriting DOC alt-copy.md file
- Resources Library`;

export const defaultPromptValues = {
  RESOURCE_TYPE: "Online Course",
  PRIMARY_COLOR: "#6366F1",
  SECONDARY_COLOR: "#8B5CF6",
  BACKGROUND_COLOR: "#000000",
  TEXT_COLOR: "#FFFFFF",
  HOVER_COLOR: "#F3F4F6",
  SELECTED_COLOR: "#4F46E5",
  ACCENT_COLOR: "#4F46E5",
  TIME_FRAME: "30 days"
};