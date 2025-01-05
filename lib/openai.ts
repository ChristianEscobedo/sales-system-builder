import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API key');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateCourseContent(brief: {
  niche: string;
  audience: string;
  mainTopic: string;
  description: string;
}) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ 
        role: "system", 
        content: "You are an expert course creator and copywriter. Create detailed, compelling course content."
      },
      { 
        role: "user", 
        content: `Create a detailed course content for a ${brief.mainTopic} course in the ${brief.niche} niche, targeting ${brief.audience}.
Additional context: ${brief.description}

Return a JSON object with:
- resourceType: "Course"
- resourceName: A compelling course name
- painPoint: The main problem solved
- quickWin: The immediate benefit
- frustrationMethod: Current ineffective methods
- timeFrame: Completion timeframe
- modules: Array of 5 module titles
- bonusName: Name of the bonus
- bonusValue: Numerical value
- targetAudience: Specific audience description
- expertName: A professional name
- expertCredentials: Impressive credentials
- transformation: The end result promise` 
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const response = completion.choices[0].message.content;
    if (!response) throw new Error('No response from OpenAI');

    const parsedResponse = JSON.parse(response);
    
    return {
      ...parsedResponse,
      bonusValue: Number(parsedResponse.bonusValue) || 997,
      modules: Array.isArray(parsedResponse.modules) ? parsedResponse.modules : [],
    };
  } catch (error) {
    console.error('OpenAI error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to generate content');
  }
} 