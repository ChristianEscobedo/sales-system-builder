import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import type { PromptBrief } from "@/lib/api/prompt";
import { generatePromptContent } from "@/lib/prompts/generate-prompt";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY environment variable");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const brief: PromptBrief = await request.json();

    const prompt = generatePromptContent({
      resourceType: "Course",
      resourceName: brief.courseName,
      painPoint: brief.problem,
      quickWin: brief.solution,
      frustrationMethod: brief.currentMethod,
      timeFrame: "30 days",
      modules: [],
      bonusName: "VIP Support",
      bonusValue: 997,
      targetAudience: brief.audience,
      industryNiche: brief.audience,
      productPrice: "$997",
      supportEmail: "support@example.com"
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional course creator and copywriter."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const content = completion.choices[0].message.content;

    if (!content) {
      throw new Error("No content generated");
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}