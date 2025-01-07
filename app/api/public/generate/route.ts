import { NextResponse } from 'next/server';
import { generatePromptContent as generatePrompt } from '@/lib/prompts/generate-prompt';
import type { PromptData } from '@/types/prompt';

export async function POST(request: Request) {
  try {
    const data: PromptData = await request.json();
    
    // Generate content without authentication
    const generatedContent = await generatePrompt(data);
    
    return NextResponse.json(generatedContent);
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
} 