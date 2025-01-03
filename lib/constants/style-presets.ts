// Original dashboard presets
export interface StylePreset {
  id: string;
  name: string;
  colors: string[];
  gradient: {
    from: string;
    to: string;
  };
}

export const dashboardStylePresets: StylePreset[] = [
  {
    id: "modern",
    name: "Modern",
    colors: ["#9333EA", "#2563EB", "#10B981"],
    gradient: {
      from: "#9333EA",
      to: "#2563EB"
    }
  },
  {
    id: "classic",
    name: "Classic",
    colors: ["#1E293B", "#334155", "#475569"],
    gradient: {
      from: "#1E293B",
      to: "#475569"
    }
  },
  {
    id: "minimal",
    name: "Minimal",
    colors: ["#18181B", "#27272A", "#3F3F46"],
    gradient: {
      from: "#18181B",
      to: "#3F3F46"
    }
  },
  {
    id: "vibrant",
    name: "Vibrant",
    colors: ["#F472B6", "#8B5CF6", "#3B82F6"],
    gradient: {
      from: "#F472B6",
      to: "#3B82F6"
    }
  }
];

// New style presets for the prompt system
export type PromptStylePreset = "modern" | "classic" | "minimal" | "vibrant-pink" | "nature-green" | "sunshine";

export const stylePresets = {
  modern: {
    theme: "dark",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#4F46E5",
      background: "#000000",
      text: "#FFFFFF",
      hoverText: "#F3F4F6",
      selectedText: "#4F46E5",
      gradients: [
        "from-purple-600 to-blue-600",
        "from-purple-950/5 via-black to-purple-950/5"
      ]
    },
    gradients: [
      "from-purple-600 to-blue-600",
      "from-purple-950/5 via-black to-purple-950/5"
    ]
  },
  classic: {
    theme: "light",
    colors: {
      primary: "#2563EB",
      secondary: "#7C3AED",
      accent: "#1D4ED8",
      background: "#FFFFFF",
      text: "#000000",
      hoverText: "#4B5563",
      selectedText: "#1D4ED8",
      gradients: [
        "from-blue-600 to-indigo-600",
        "from-blue-50 via-white to-blue-50"
      ]
    },
    gradients: [
      "from-blue-600 to-indigo-600",
      "from-blue-50 via-white to-blue-50"
    ]
  },
  minimal: {
    theme: "light",
    colors: {
      primary: "#000000",
      secondary: "#4B5563",
      accent: "#1F2937",
      background: "#FFFFFF",
      text: "#000000",
      hoverText: "#6B7280",
      selectedText: "#111827",
      gradients: [
        "from-gray-800 to-gray-900",
        "from-gray-50 via-white to-gray-50"
      ]
    },
    gradients: [
      "from-gray-800 to-gray-900",
      "from-gray-50 via-white to-gray-50"
    ]
  },
  "vibrant-pink": {
    theme: "dark",
    colors: {
      primary: "#EC4899",
      secondary: "#F472B6",
      accent: "#BE185D",
      background: "#0F0F0F",
      text: "#FFFFFF",
      hoverText: "#FDF2F8",
      selectedText: "#DB2777",
      gradients: [
        "from-pink-500 to-purple-500",
        "from-pink-950/5 via-black to-pink-950/5"
      ]
    },
    gradients: [
      "from-pink-500 to-purple-500",
      "from-pink-950/5 via-black to-pink-950/5"
    ]
  },
  "nature-green": {
    theme: "light",
    colors: {
      primary: "#059669",
      secondary: "#10B981",
      accent: "#047857",
      background: "#FFFFFF",
      text: "#064E3B",
      hoverText: "#34D399",
      selectedText: "#047857",
      gradients: [
        "from-emerald-500 to-teal-500",
        "from-emerald-50 via-white to-emerald-50"
      ]
    },
    gradients: [
      "from-emerald-500 to-teal-500",
      "from-emerald-50 via-white to-emerald-50"
    ]
  },
  "sunshine": {
    theme: "light",
    colors: {
      primary: "#EAB308",
      secondary: "#FACC15",
      accent: "#CA8A04",
      background: "#FFFBEB",
      text: "#854D0E",
      hoverText: "#F59E0B",
      selectedText: "#D97706",
      gradients: [
        "from-yellow-400 to-amber-500",
        "from-yellow-50 via-white to-yellow-50"
      ]
    },
    gradients: [
      "from-yellow-400 to-amber-500",
      "from-yellow-50 via-white to-yellow-50"
    ]
  }
} as const;

export type PresetTheme = typeof stylePresets[PromptStylePreset];