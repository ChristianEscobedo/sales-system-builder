import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const { niche, audience, mainTopic, description } = await request.json();

    const prompt = `Generate a complete course content structure based on the following:

Niche: ${niche}
Target Audience: ${audience}
Main Topic: ${mainTopic}
Description: ${description}

Please provide the following details in a JSON format:
- resourceType (string)
- resourceName (string)
- painPoint (string)
- quickWin (string)
- frustrationMethod (string)
- timeFrame (string)
- modules (array of strings)
- bonusName (string)
- bonusValue (number)
- targetAudience (string)
- industryNiche (string)
- productPrice (number)
- supportEmail (string)`;

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
      response_format: { type: "json_object" }
    });

    const content = JSON.parse(completion.choices[0].message.content || "{}");

    return NextResponse.json({ content });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}