export const dashboardStylePresets = [
  {
    id: "modern",
    name: "Modern & Clean",
    colors: ["#6366F1", "#8B5CF6", "#4F46E5"],
    gradient: {
      from: "#4338CA",
      to: "#6366F1"
    }
  },
  {
    id: "minimal",
    name: "Minimal Light",
    colors: ["#18181B", "#27272A", "#3B82F6"],
    gradient: {
      from: "#F8FAFC",
      to: "#E2E8F0"
    }
  },
  {
    id: "premium",
    name: "Premium Dark",
    colors: ["#B4833E", "#3E4E74", "#C69C6D"],
    gradient: {
      from: "#1A1C2A",
      to: "#2C1810"
    }
  },
  {
    id: "vibrant",
    name: "Vibrant & Dynamic",
    colors: ["#FF3366", "#00CC99", "#FFD60A"],
    gradient: {
      from: "#FF3366",
      to: "#00CC99"
    }
  }
] as const;