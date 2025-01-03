export function generateSystemPrompt() {
  return "You are an expert in creating landing page content for online courses. Generate content in JSON format that matches the PromptData interface structure.";
}

export function generateUserPrompt(brief: { 
  courseName: string;
  problem: string;
  audience: string;
  description?: string;
}) {
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