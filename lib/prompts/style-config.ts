import type { PromptStyleConfig } from "@/types/prompt";

export const defaultStyleConfig: PromptStyleConfig = {
  theme: "dark",
  colors: {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    accent: "#4F46E5"
  }
};

export const stylePresets: Record<string, PromptStyleConfig> = {
  modern: {
    theme: "dark",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#4F46E5"
    }
  },
  classic: {
    theme: "light",
    colors: {
      primary: "#2563EB",
      secondary: "#7C3AED",
      accent: "#1D4ED8"
    }
  },
  minimal: {
    theme: "light",
    colors: {
      primary: "#000000",
      secondary: "#4B5563",
      accent: "#1F2937"
    }
  }
};

export function getStylePreset(name: string): PromptStyleConfig {
  return stylePresets[name] || defaultStyleConfig;
}