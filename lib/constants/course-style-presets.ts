export const courseStylePresets = {
  modern: {
    name: "Modern & Clean",
    theme: "dark",
    colors: {
      primary: "#3B82F6",
      secondary: "#60A5FA",
      accent: "#2563EB",
      background: "#0F172A",
      text: "#F8FAFC",
      hover: {
        text: "#60A5FA",
        icon: "#3B82F6",
        background: "#1E293B"
      },
      gradients: {
        enabled: true,
        primary: "#1E40AF",
        secondary: "#3B82F6"
      }
    }
  },
  minimal: {
    name: "Minimal Light",
    theme: "light",
    colors: {
      primary: "#18181B",
      secondary: "#27272A",
      accent: "#3B82F6",
      background: "#FFFFFF",
      text: "#18181B",
      hover: {
        text: "#3B82F6",
        icon: "#2563EB",
        background: "#F8FAFC"
      },
      gradients: {
        enabled: true,
        primary: "#F8FAFC",
        secondary: "#E2E8F0"
      }
    }
  },
  premium: {
    name: "Premium Dark",
    theme: "dark",
    colors: {
      primary: "#B4833E",
      secondary: "#3E4E74",
      accent: "#C69C6D",
      background: "#0C1015",
      text: "#F3EDE4",
      hover: {
        text: "#C69C6D",
        icon: "#B4833E",
        background: "#1A1C2A"
      },
      gradients: {
        enabled: true,
        primary: "#1A1C2A",
        secondary: "#2C1810"
      }
    }
  },
  ocean: {
    name: "Ocean Depth",
    theme: "dark",
    colors: {
      primary: "#06B6D4",
      secondary: "#0EA5E9",
      accent: "#0891B2",
      background: "#0C4A6E",
      text: "#F0F9FF",
      hover: {
        text: "#0EA5E9",
        icon: "#06B6D4",
        background: "#164E63"
      },
      gradients: {
        enabled: true,
        primary: "#0C4A6E",
        secondary: "#164E63"
      }
    }
  },
  forest: {
    name: "Forest Light",
    theme: "light",
    colors: {
      primary: "#166534",
      secondary: "#15803D",
      accent: "#059669",
      background: "#F0FDF4",
      text: "#052E16",
      hover: {
        text: "#059669",
        icon: "#166534",
        background: "#DCFCE7"
      },
      gradients: {
        enabled: true,
        primary: "#F0FDF4",
        secondary: "#DCFCE7"
      }
    }
  },
  sunset: {
    name: "Sunset Vibes",
    theme: "dark",
    colors: {
      primary: "#F97316",
      secondary: "#FB923C",
      accent: "#EA580C",
      background: "#431407",
      text: "#FFF7ED",
      hover: {
        text: "#FB923C",
        icon: "#F97316",
        background: "#7C2D12"
      },
      gradients: {
        enabled: true,
        primary: "#431407",
        secondary: "#7C2D12"
      }
    }
  },
  lavender: {
    name: "Lavender Dreams",
    theme: "light",
    colors: {
      primary: "#7C3AED",
      secondary: "#8B5CF6",
      accent: "#6D28D9",
      background: "#F5F3FF",
      text: "#2E1065",
      hover: {
        text: "#8B5CF6",
        icon: "#7C3AED",
        background: "#EDE9FE"
      },
      gradients: {
        enabled: true,
        primary: "#F5F3FF",
        secondary: "#EDE9FE"
      }
    }
  },
  midnight: {
    name: "Midnight",
    theme: "dark",
    colors: {
      primary: "#6366F1",
      secondary: "#818CF8",
      accent: "#4F46E5",
      background: "#020617",
      text: "#E0E7FF",
      hover: {
        text: "#818CF8",
        icon: "#6366F1",
        background: "#1E1B4B"
      },
      gradients: {
        enabled: true,
        primary: "#020617",
        secondary: "#1E1B4B"
      }
    }
  }
};

export type CourseStylePreset = keyof typeof courseStylePresets;