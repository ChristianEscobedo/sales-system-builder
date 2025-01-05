import { NextResponse } from 'next/server';
import type { PromptData } from '@/types/prompt';
import { generateCourseContent } from '@/lib/openai';

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API key not configured');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const brief = await request.json();

    if (!brief.niche || !brief.audience || !brief.mainTopic) {
      return NextResponse.json(
        { error: 'Missing required fields: niche, audience, or mainTopic' },
        { status: 400 }
      );
    }

    console.log('Generating content for:', brief); // Debug log

    const aiContent = await generateCourseContent(brief);
    console.log('AI Content generated:', aiContent); // Debug log

    const generatedData: PromptData = {
      ...aiContent,
      industryNiche: brief.niche,
      productPrice: "997",
      supportEmail: "support@example.com",
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
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate content';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 