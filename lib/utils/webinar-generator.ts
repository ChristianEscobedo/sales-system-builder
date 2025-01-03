import type { WebinarSlide, WebinarData } from "@/types/webinar";
import { slideTemplates } from "@/lib/constants/slide-templates";

export function generateSlideContent(slide: WebinarSlide | undefined, data: WebinarData): string {
  if (!slide) {
    return '<div class="text-white">No slide content available</div>';
  }

  const template = slideTemplates[slide.type];
  if (!template) {
    return '<div class="text-white">Slide content not available</div>';
  }

  const colors = data.style?.colors || {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    background: "#000000",
    text: "#FFFFFF",
    accent: "#4F46E5"
  };

  const generateStyles = (element: string) => {
    switch (element) {
      case "heading":
        return `style="color: ${colors.text}; font-size: 1.75rem; font-weight: bold; margin-bottom: 0.75rem; text-align: center; line-height: 1.2;"`;
      case "subheading":
        return `style="color: ${colors.secondary}; font-size: 1.25rem; margin-bottom: 1rem; text-align: center; line-height: 1.4;"`;
      case "point":
        return `style="color: ${colors.text}; font-size: 1rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"`;
      case "bullet":
        return `style="color: ${colors.accent}; font-size: 1rem; flex-shrink: 0;"`;
      case "feature":
        return `style="color: ${colors.text}; font-size: 1rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;"`;
      case "value":
        return `style="color: ${colors.accent}; font-weight: bold; font-size: 1rem;"`;
      default:
        return `style="color: ${colors.text}; font-size: 1rem;"`;
    }
  };

  const replaceVariables = (text: string) => {
    if (!text) return '';
    
    const replacements: Record<string, string> = {
      "[NAME]": data.presenter.name || "[Presenter Name]",
      "[TITLE]": data.title || "[Title]",
      "[ACHIEVE_DESIRED_OUTCOME]": data.mainBenefit || "[Main Benefit]",
      "[TARGET_AUDIENCE]": data.targetAudience || "[Target Audience]",
      "[PROGRAM_NAME]": data.offer.name || "[Program Name]",
      "[TIMEFRAME]": "30 days",
      "[BONUS_VALUE]": data.offer.value || "$997",
      "[PAIN_POINT]": data.problem || "[Problem]",
      "[SOLUTION]": data.solution || "[Solution]",
      "[COMMON_STRUGGLE]": "Struggling and Stress",
      "[SPECIFIC_RESULT_1]": "Double Your Revenue",
      "[SPECIFIC_RESULT_2]": "Work Less Hours",
      "[SPECIFIC_RESULT_3]": "Scale Your Business",
      "[NICHE]": data.industryNiche || "Business",
      "[COMMON_BELIEF]": "Hard Work Alone Leads to Success",
      "[SYSTEM_NAME]": data.offer.name || "[System Name]",
      "[COMPONENT_1]": "Strategy",
      "[COMPONENT_2]": "Systems",
      "[COMPONENT_3]": "Scale",
    };

    return Object.entries(replacements).reduce(
      (str, [key, value]) => str.replace(new RegExp(escapeRegExp(key), 'g'), value || key),
      text
    );
  };

  let content = '<div class="space-y-6 max-w-4xl mx-auto">';

  // Add title if present
  if (template.title) {
    content += `
      <h2 ${generateStyles("heading")}>
        ${replaceVariables(template.title)}
      </h2>
    `;
  }

  // Add subtitle if present
  if (template.subtitle) {
    content += `
      <p ${generateStyles("subheading")}>
        ${replaceVariables(template.subtitle)}
      </p>
    `;
  }

  // Add points if present
  if (template.points) {
    content += '<div class="space-y-4 mt-8">';
    template.points.forEach(point => {
      content += `
        <div ${generateStyles("point")}>
          <span ${generateStyles("bullet")}>•</span>
          ${replaceVariables(point)}
        </div>
      `;
    });
    content += '</div>';
  }

  // Add features if present
  if (template.features) {
    content += '<div class="space-y-4 mt-6">';
    template.features.forEach(feature => {
      content += `
        <div class="flex justify-between items-center" ${generateStyles("point")}>
          <span>${replaceVariables(feature.name)}</span>
          <span style="color: ${colors.accent};">${replaceVariables(feature.value)}</span>
        </div>
      `;
    });
    content += '</div>';
  }

  content += '</div>';
  return content;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}