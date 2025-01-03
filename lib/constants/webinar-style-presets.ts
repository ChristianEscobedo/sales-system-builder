export const webinarStylePresets = {
  modern: {
    name: "Modern & Clean",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      background: "#000000",
      text: "#FFFFFF",
      accent: "#4F46E5",
      hover: {
        text: "#8B5CF6",
        icon: "#6366F1",
        background: "#1E1B4B"
      },
      gradients: {
        enabled: true,
        primary: "#4338CA",
        secondary: "#6366F1"
      }
    },
    gradients: [
      "from-purple-600 to-blue-600",
      "from-purple-950/5 via-black to-purple-950/5"
    ]
  },
  corporate: {
    name: "Professional & Corporate",
    colors: {
      primary: "#0EA5E9",
      secondary: "#0369A1",
      background: "#0F172A",
      text: "#F8FAFC",
      accent: "#38BDF8",
      hover: {
        text: "#38BDF8",
        icon: "#0EA5E9",
        background: "#0C4A6E"
      },
      gradients: {
        enabled: true,
        primary: "#0369A1",
        secondary: "#0EA5E9"
      }
    },
    gradients: [
      "from-sky-600 to-blue-800",
      "from-sky-950/5 via-slate-900 to-blue-950/5"
    ]
  },
  premium: {
    name: "Luxury & Premium",
    colors: {
      primary: "#B4833E",
      secondary: "#3E4E74",
      background: "#0C1015",
      text: "#F3EDE4",
      accent: "#C69C6D",
      hover: {
        text: "#C69C6D",
        icon: "#B4833E",
        background: "#1C1917"
      },
      gradients: {
        enabled: true,
        primary: "#78350F",
        secondary: "#B4833E"
      }
    },
    gradients: [
      "from-amber-600 to-blue-900",
      "from-amber-950/5 via-black to-blue-950/5"
    ]
  },
  impact: {
    name: "Bold & Impactful",
    colors: {
      primary: "#DC2626",
      secondary: "#7F1D1D",
      background: "#18181B",
      text: "#FAFAFA",
      accent: "#EF4444",
      hover: {
        text: "#EF4444",
        icon: "#DC2626",
        background: "#292524"
      },
      gradients: {
        enabled: true,
        primary: "#991B1B",
        secondary: "#DC2626"
      }
    },
    gradients: [
      "from-red-600 to-red-900",
      "from-red-950/5 via-zinc-900 to-red-950/5"
    ]
  }
};

export type WebinarStylePreset = keyof typeof webinarStylePresets;