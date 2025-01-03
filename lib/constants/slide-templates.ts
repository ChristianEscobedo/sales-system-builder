import type { SlideTemplate } from "@/types/webinar";

export const slideTemplates: Record<string, SlideTemplate> = {
  opening: {
    title: "How to [ACHIEVE_DESIRED_OUTCOME] Without [COMMON_STRUGGLE]",
    subtitle: "Welcome! I'm [NAME]",
    points: [
      "Today you'll discover the exact system to [ACHIEVE_DESIRED_OUTCOME]",
      "Stay until the end for a special bonus worth [BONUS_VALUE]"
    ]
  },
  promise: {
    title: "By the end of this presentation, you'll discover:",
    points: [
      "The [NICHE] Success Framework",
      "How to achieve [SPECIFIC_RESULT_1] in [TIMEFRAME]",
      "The exact steps to [SPECIFIC_RESULT_2]",
      "A breakthrough approach to [SPECIFIC_RESULT_3]"
    ]
  },
  story: {
    title: "My Story",
    points: [
      "Started struggling with [PAIN_POINT]",
      "Tried everything: [COMMON_SOLUTION_1], [COMMON_SOLUTION_2], [COMMON_SOLUTION_3]",
      "Finally discovered the solution that changed everything"
    ]
  },
  "industry-problem": {
    title: "The Industry Problem",
    subtitle: "The [NICHE] industry has been lying to you about what really creates success..."
  },
  "common-myth": {
    title: "The Common Myth",
    subtitle: "Most people believe [COMMON_BELIEF], but this actually makes things worse"
  },
  "real-truth": {
    title: "The Real Truth",
    subtitle: "After working with thousands of [TARGET_AUDIENCE], we discovered something shocking..."
  },
  "hidden-pattern": {
    title: "The Hidden Pattern",
    subtitle: "Success in [NICHE] comes down to one critical factor most people miss..."
  },
  "current-reality": {
    title: "Right now, most [TARGET_AUDIENCE] are:",
    points: [
      "Struggling with [PAIN_POINT_1]",
      "Frustrated by [PAIN_POINT_2]",
      "Overwhelmed by [PAIN_POINT_3]"
    ]
  },
  "cost-of-inaction": {
    title: "Every day without a solution costs you:",
    points: [
      "[SPECIFIC_COST_1]",
      "[SPECIFIC_COST_2]",
      "[SPECIFIC_COST_3]"
    ]
  },
  "bigger-impact": {
    title: "This affects more than just [PRIMARY_PAIN]:",
    points: [
      "Your [IMPACT_AREA_1]",
      "Your [IMPACT_AREA_2]",
      "Your [IMPACT_AREA_3]"
    ]
  },
  "future-stakes": {
    title: "If nothing changes:",
    points: [
      "[NEGATIVE_OUTCOME_1]",
      "[NEGATIVE_OUTCOME_2]",
      "[NEGATIVE_OUTCOME_3]"
    ]
  },
  "solution-intro": {
    title: "Introducing the [SYSTEM_NAME]...",
    subtitle: "The complete solution for [TARGET_AUDIENCE]"
  },
  breakthrough: {
    title: "The [KEY_CONCEPT] that changes everything...",
    subtitle: "A revolutionary approach to [DESIRED_OUTCOME]"
  },
  framework: {
    title: "Three critical components:",
    points: [
      "[COMPONENT_1]",
      "[COMPONENT_2]",
      "[COMPONENT_3]"
    ]
  },
  "component-1": {
    title: "[COMPONENT_1] creates breakthrough results by...",
    subtitle: "The first pillar of success"
  },
  "component-2": {
    title: "[COMPONENT_2] accelerates your success through...",
    subtitle: "The second pillar of success"
  },
  "component-3": {
    title: "[COMPONENT_3] makes your results permanent by...",
    subtitle: "The third pillar of success"
  },
  "success-pattern": {
    title: "Here's what happens when you implement this system:",
    subtitle: "The proven path to success"
  },
  "case-study-1": {
    title: "[NAME_1] achieved [RESULT_1] in just [TIMEFRAME_1]",
    subtitle: "Real results from a real [TARGET_AUDIENCE]"
  },
  "case-study-2": {
    title: "[NAME_2] experienced [RESULT_2] within [TIMEFRAME_2]",
    subtitle: "Another success story"
  },
  "case-study-3": {
    title: "[NAME_3] broke through to [RESULT_3] after [TIMEFRAME_3]",
    subtitle: "Yet another transformation"
  },
  possibility: {
    title: "Imagine being able to:",
    points: [
      "Finally achieve [DESIRED_OUTCOME_1]",
      "Experience [DESIRED_OUTCOME_2]",
      "Never worry about [PAIN_POINT] again"
    ]
  },
  transformation: {
    title: "Your journey from [CURRENT_STATE] to [DESIRED_STATE]",
    subtitle: "The transformation process"
  },
  "new-reality": {
    title: "Wake up every day:",
    points: [
      "Knowing [EMOTIONAL_BENEFIT_1]",
      "Experiencing [EMOTIONAL_BENEFIT_2]",
      "Living [EMOTIONAL_BENEFIT_3]"
    ]
  },
  "time-factor": {
    title: "Why now is the perfect time to start...",
    subtitle: "The opportunity is here"
  },
  "program-intro": {
    title: "Introducing [PROGRAM_NAME]...",
    subtitle: "Your complete solution"
  },
  "program-overview": {
    title: "A complete system for [ACHIEVING_OUTCOME]",
    subtitle: "Everything you need to succeed"
  },
  "component-breakdown": {
    title: "Core Program Features:",
    features: [
      { name: "[FEATURE_1]", value: "[PRICE_1]" },
      { name: "[FEATURE_2]", value: "[PRICE_2]" },
      { name: "[FEATURE_3]", value: "[PRICE_3]" }
    ]
  },
  "support-system": {
    title: "You'll never implement alone:",
    points: [
      "[SUPPORT_ELEMENT_1]",
      "[SUPPORT_ELEMENT_2]",
      "[SUPPORT_ELEMENT_3]"
    ]
  },
  implementation: {
    title: "Your success path:",
    points: [
      "Week 1: [MILESTONE_1]",
      "Week 2: [MILESTONE_2]",
      "Week 3: [MILESTONE_3]",
      "Week 4: [MILESTONE_4]"
    ]
  },
  "bonus-1": {
    title: "[BONUS_1_NAME] - Value: [BONUS_1_PRICE]",
    points: [
      "[BENEFIT_1]",
      "[BENEFIT_2]",
      "[BENEFIT_3]"
    ]
  },
  "bonus-2": {
    title: "[BONUS_2_NAME] - Value: [BONUS_2_PRICE]",
    points: [
      "[BENEFIT_1]",
      "[BENEFIT_2]",
      "[BENEFIT_3]"
    ]
  },
  "bonus-3": {
    title: "[BONUS_3_NAME] - Value: [BONUS_3_PRICE]",
    points: [
      "[BENEFIT_1]",
      "[BENEFIT_2]",
      "[BENEFIT_3]"
    ]
  },
  "fast-action": {
    title: "Only for action takers today:",
    subtitle: "[FAST_ACTION_BONUS] - Value: [FAST_ACTION_VALUE]"
  },
  "value-stack": {
    title: "Total Value:",
    points: [
      "Core Program: [CORE_PRICE]",
      "Bonus 1: [BONUS_1_PRICE]",
      "Bonus 2: [BONUS_2_PRICE]",
      "Bonus 3: [BONUS_3_PRICE]",
      "Fast Action: [FAST_ACTION_VALUE]"
    ],
    subtitle: "Total Value: [TOTAL_VALUE]"
  },
  "special-offer": {
    title: "Your Investment Today: [OFFER_PRICE]",
    subtitle: "(Save [SAVINGS_AMOUNT])"
  },
  "payment-options": {
    title: "Choose Your Payment Option:",
    points: [
      "Option 1: Single Payment of [FULL_PRICE]",
      "Option 2: [PAYMENT_COUNT] payments of [PAYMENT_AMOUNT]"
    ]
  },
  guarantee: {
    title: "Our [TIMEFRAME] [GUARANTEE_TYPE] Guarantee",
    subtitle: "Your success is our priority"
  },
  "objection-1": {
    title: "\"I don't have time...\"",
    subtitle: "Here's the truth about time..."
  },
  "objection-2": {
    title: "\"I can't afford it...\"",
    subtitle: "Let's talk about the real cost..."
  },
  "objection-3": {
    title: "\"I've tried other things...\"",
    subtitle: "Why this is different..."
  },
  "objection-4": {
    title: "\"I need to think about it...\"",
    subtitle: "The cost of waiting..."
  },
  "success-recap": {
    title: "Remember [NAME] who achieved [RESULT]...",
    subtitle: "Their transformation story"
  },
  decision: {
    title: "You're at a crossroads...",
    subtitle: "The choice is yours"
  },
  "path-comparison": {
    title: "Two Paths Forward:",
    points: [
      "Path A: Continue struggling with [PAIN_POINT]",
      "Path B: Finally achieve [DESIRED_OUTCOME]"
    ]
  },
  "take-action": {
    title: "Here's how to get started:",
    points: [
      "1. [STEP_1]",
      "2. [STEP_2]",
      "3. [STEP_3]"
    ]
  },
  "limited-time": {
    title: "This offer expires in [TIMEFRAME]",
    subtitle: "Don't miss out"
  },
  "fast-action-reminder": {
    title: "Remember:",
    subtitle: "[FAST_ACTION_BONUS] is only available today"
  },
  "final-call": {
    title: "The only question is...",
    subtitle: "Are you ready for [DESIRED_OUTCOME]?"
  },
  qa: {
    title: "Let's answer your questions...",
    subtitle: "What would you like to know?"
  }
};

export const defaultSlides = [
  "opening",
  "promise",
  "story",
  "industry-problem",
  "common-myth",
  "real-truth",
  "hidden-pattern",
  "current-reality",
  "cost-of-inaction",
  "bigger-impact",
  "future-stakes",
  "solution-intro",
  "breakthrough",
  "framework",
  "component-1",
  "component-2",
  "component-3",
  "success-pattern",
  "case-study-1",
  "case-study-2",
  "case-study-3",
  "possibility",
  "transformation",
  "new-reality",
  "time-factor",
  "program-intro",
  "program-overview",
  "component-breakdown",
  "support-system",
  "implementation",
  "bonus-1",
  "bonus-2",
  "bonus-3",
  "fast-action",
  "value-stack",
  "special-offer",
  "payment-options",
  "guarantee",
  "objection-1",
  "objection-2",
  "objection-3",
  "objection-4",
  "success-recap",
  "decision",
  "path-comparison",
  "take-action",
  "limited-time",
  "fast-action-reminder",
  "final-call",
  "qa"
] as const;