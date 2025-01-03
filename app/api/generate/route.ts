import { NextResponse } from "next/server";
import OpenAI from "openai";
import type { PromptBrief } from "@/types/prompt-brief";
import { createDefaultPromptData } from "@/lib/defaults/prompt";
import { validatePromptData } from "@/lib/validation/prompt-data";

const SYSTEM_PROMPT = `You are an expert in creating landing page content for online courses. Generate content in JSON format that matches the PromptData interface structure.`;

function generateUserPrompt(brief: PromptBrief): string {
  return `Create landing page content for:
    Course: ${brief.courseName}
    Problem: ${brief.problem}
    Audience: ${brief.audience}
    Additional Details: ${brief.description || ''}
    
    Format the response as a JSON object with these exact fields:
    {
      "resourceType": "string (e.g., 'Course', 'Masterclass')",
      "resourceName": "string (the course name)",
      "painPoint": "string (the main problem to solve)",
      "quickWin": "string (the promised quick result)",
      "frustrationMethod": "string (what doesn't work)",
      "timeFrame": "string (e.g., '60 minutes')",
      "modules": ["string (5 module names)"],
      "bonusName": "string (name of bonus resource)",
      "bonusValue": 97
    }`;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const brief = await request.json();
    
    if (!brief.courseName || !brief.problem || !brief.audience) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      console.warn("OpenAI API key not configured, using default data");
      return NextResponse.json(createDefaultPromptData(brief));
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: generateUserPrompt(brief) }
        ]
      });

      const content = completion.choices[0].message.content;
      if (!content) {
        throw new Error("Empty response from OpenAI");
      }

      const data = JSON.parse(content);
      const validatedData = validatePromptData(data);
      
      if (!validatedData) {
        console.error("Invalid data structure from OpenAI");
        return NextResponse.json(createDefaultPromptData(brief));
      }

      return NextResponse.json(validatedData);
    } catch (apiError) {
      console.error("OpenAI API error:", apiError);
      return NextResponse.json(createDefaultPromptData(brief));
    }
  } catch (error) {
    console.error("Request processing error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}