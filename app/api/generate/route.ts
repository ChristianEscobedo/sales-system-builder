import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const { niche, audience, mainTopic, description } = await request.json();

    const prompt = `Generate a complete course content structure based on the following:

Niche: ${niche}
Target Audience: ${audience}
Main Topic: ${mainTopic}
Description: ${description}

Generate a detailed course structure and return it EXACTLY in this JSON format without any additional text or explanation:
{
  "resourceType": "Course",
  "resourceName": "A catchy name for the course",
  "painPoint": "A specific pain point the audience faces",
  "quickWin": "A compelling quick win promise",
  "frustrationMethod": "Current method causing frustration",
  "timeFrame": "30 days",
  "modules": ["Module 1: Title", "Module 2: Title", "Module 3: Title"],
  "bonusName": "An attractive bonus name",
  "bonusValue": 997,
  "targetAudience": "${audience}",
  "industryNiche": "${niche}",
  "productPrice": 997,
  "supportEmail": "support@example.com"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional course creator and copywriter. Generate compelling course content that solves real problems and delivers clear value. Always respond in valid JSON format."
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

    try {
      const parsedContent = JSON.parse(content.trim());
      return NextResponse.json({ content: parsedContent });
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      throw new Error("Failed to parse generated content");
    }

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate content" },
      { status: 500 }
    );
  }
}