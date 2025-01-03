import type { WebinarData } from "@/types/webinar";
import type { PromptStyleConfig } from "@/types/prompt";

interface StyleColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

export function generateWebinarHTML(data: WebinarData, style: PromptStyleConfig): string {
  const colors: StyleColors = {
    ...style.colors,
    text: style.theme === "dark" ? "#FFFFFF" : "#000000",
    background: style.theme === "dark" ? "#000000" : "#FFFFFF"
  };

  const getElementStyle = (element: string): string => {
    switch (element) {
      case "heading":
        return `style="color: ${colors.text}; font-size: 1.75rem; font-weight: bold; margin-bottom: 0.75rem; text-align: center; line-height: 1.2;"`;
      case "subheading":
        return `style="color: ${colors.secondary}; font-size: 1.25rem; margin-bottom: 1rem; text-align: center; line-height: 1.4;"`;
      case "point":
        return `style="color: ${colors.text}; font-size: 1rem; margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;"`;
      case "container":
        return `style="background-color: ${colors.background}; color: ${colors.text}; padding: 2rem; max-width: 800px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif;"`;
      case "section":
        return `style="margin-bottom: 2rem;"`;
      case "button":
        return `style="background: linear-gradient(to right, ${colors.primary}, ${colors.secondary}); color: white; padding: 1rem 2rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; font-weight: 500; text-align: center; width: 100%; margin-top: 1rem;"`;
      default:
        return "";
    }
  };

  const template = `
    <div ${getElementStyle("container")}>
      <div ${getElementStyle("section")}>
        <h1 ${getElementStyle("heading")}>${data.title}</h1>
        <p ${getElementStyle("subheading")}>${data.subtitle}</p>
      </div>

      <div ${getElementStyle("section")}>
        ${data.slides.map(slide => `
          <div ${getElementStyle("section")}>
            <h2 ${getElementStyle("heading")}>${slide.content.title}</h2>
            ${slide.content.points?.map(point => `
              <p ${getElementStyle("point")}>• ${point}</p>
            `).join("") || ""}
          </div>
        `).join("")}
      </div>

      <a href="#" ${getElementStyle("button")}>Register Now</a>
    </div>
  `;

  return template;
}