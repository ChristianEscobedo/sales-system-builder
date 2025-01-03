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

export const stylePresets = dashboardStylePresets;