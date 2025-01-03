export const LANDING_PAGE_TEMPLATE = `
This is Part 1 of a Complete Sales System Including Landing Page, Bridge Page, and Thank You Page.

[SYSTEM INSTRUCTIONS]
Create a complete sales system using an ultra-modern design approach with gradients from [PRIMARY_COLOR] to [SECONDARY_COLOR]. 
Build using Next.js 15+ app router with Shadcn UI components. for any [] shortcodes that are not provided fill them in based on the information giving and answers you find in the [Dynamic Fields] Section 

[TECHSTACK]
- Next.js 15+ with App Router
- Shadcn UI for components
- Tailwind CSS for custom styling
- Framer Motion for smooth animations
- React Hook Form for interactive elements

[PART 1: LANDING PAGE]
Primary Headline: "Get Our Free [RESOURCE_NAME] That Shows You How To [SOLVE_PAIN_POINT] & [ACHIEVE_QUICK_WIN] Without [FRUSTRATION_METHOD]"

[PART 2: BRIDGE HEADER]
ONE-TIME OFFER BANNER:
"WAIT! SPECIAL ONE-TIME ONLY OFFER"
"Do Not Close This Page… Your Order Is NOT YET COMPLETE."

HERO SECTION:
Primary Headline: "HOW WOULD YOU LIKE TO [SOLVE_PAIN_POINT] THAT [ACHIEVE_QUICK_WIN] WITHOUT [FRUSTRATION_METHOD]?"

Supporting Copy:
"What is your goal? Would you like to win more [INDUSTRY_NICHE] business, keep it longer, and be the best in the field?
I am certain that you would!
[RESOURCE_NAME] will provide you with a much-needed foundation, but there is one more thing I can do to add to it.
My goal was to create this specifically for [TARGET_AUDIENCE] - those who are hungry for success and who don't want to waste time."

[PART 3: BRIDGE SALES]
CORE PROMISE:
"USING THIS PROVEN SYSTEM, YOU CAN ACHIEVE YOUR GOALS IN [TIME_FRAME]!"

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
- Background: Black with gradient overlay
- Text: White with premium contrast
Typography: Inter font family
Animations: Smooth transitions, parallax effects
Components: Modern shadcn/ui elements

[DYNAMIC FIELDS]
RESOURCE_NAME: Input from form
SOLVE_PAIN_POINT: Input from form
ACHIEVE_QUICK_WIN: Input from form
FRUSTRATION_METHOD: Input from form
TIME_FRAME: Input from form
TARGET_AUDIENCE: Input from form
INDUSTRY_NICHE: Input from form
PRIMARY_COLOR: Input from form (default: #6366F1)
SECONDARY_COLOR: Input from form (default: #8B5CF6)
PAIN_POINTS: [AI generated based on user's pain point input]

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
- Thank You Page
- Member Access
- Resources Library`;

export const defaultPromptValues = {
  RESOURCE_TYPE: "AI-Powered Solution",
  PRIMARY_COLOR: "#6366F1",
  SECONDARY_COLOR: "#8B5CF6",
  TIME_FRAME: "60 minutes",
  DOWNLOAD_COUNT: "10,000",
  BONUS_VALUE: "97",
  PRIMARY_CTA: "Get Instant Access"
};