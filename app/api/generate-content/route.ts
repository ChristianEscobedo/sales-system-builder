import { NextResponse } from 'next/server';
import type { PromptData } from '@/types/prompt';

interface GenerateRequest {
  niche: string;
  audience: string;
  mainTopic: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const { niche, audience, mainTopic, description }: GenerateRequest = await request.json();

    // This is where you'd integrate with your AI service
    // For now, we'll return sample data based on the input
    const generatedData: PromptData = {
      resourceType: "Course",
      resourceName: `${mainTopic} Mastery`,
      painPoint: `Struggling to succeed with ${mainTopic} in the ${niche} industry`,
      quickWin: `Master ${mainTopic} in 30 days`,
      frustrationMethod: "Outdated and ineffective methods",
      timeFrame: "30 days",
      modules: [
        `Module 1: ${mainTopic} Foundations`,
        `Module 2: Advanced ${niche} Strategies`,
        "Module 3: Implementation & Success",
        "Module 4: Scaling Your Results"
      ],
      bonusName: "Quick Start Implementation Guide",
      bonusValue: 997,
      targetAudience: audience,
      colorTheme: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        background: "#000000",
        text: "#FFFFFF",
        hoverText: "#F3F4F6",
        selectedText: "#4F46E5",
        accent: "#4F46E5",
        gradients: [
          "from-purple-600 to-blue-600",
          "from-purple-500 to-blue-500"
        ]
      },
      style: {
        font: "inter",
        layout: "modern",
        spacing: "comfortable"
      }
    };

    return NextResponse.json(generatedData);
  } catch (error) {
    console.error('Generate content error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
} 