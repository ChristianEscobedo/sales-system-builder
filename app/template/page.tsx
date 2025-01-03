"use client";

import { Header } from "@/components/optin/Header";
import { MainContent } from "@/components/optin/MainContent";
import { SocialProof } from "@/components/optin/SocialProof";
import { Features } from "@/components/optin/Features";
import { OptinForm } from "@/components/optin/OptinForm";
import { TrustStrip } from "@/components/optin/TrustStrip";
import { UrgencyElement } from "@/components/optin/UrgencyElement";
import type { OptinConfig } from "@/types/optin";

// Example configuration - replace with your own data
const config: OptinConfig = {
  header: {
    resourceType: "Masterclass",
    discount: 50,
  },
  headline: {
    resourceName: "[Resource Name]",
    painPoint: "[Solve Immediate Pain Point]",
    quickWin: "[Achieve Quick Win]",
    frustrationMethod: "[Common Frustrating Method]",
  },
  subheadline: {
    resourceType: "[resource type]",
    timeFrame: "[time frame]",
  },
  socialProof: {
    downloads: 10000,
  },
  features: {
    resourceName: "[Resource Name]",
    quickWins: [
      "[Quick Win #1]",
      "[Quick Win #2]",
      "[Quick Win #3]",
      "[Quick Win #4]",
      "[Quick Win #5]",
    ],
  },
  trustStrip: {
    logos: ["[Logo 1]", "[Logo 2]", "[Logo 3]", "[Logo 4]"],
    industryProfessionals: {
      number: 50000,
      type: "[Industry Professionals]",
    },
    metrics: [
      { number: "1M+", label: "[Metric 1]" },
      { number: "500K+", label: "[Metric 2]" },
    ],
  },
  urgency: {
    bonusResourceName: "[Bonus Resource Name]",
    bonusValue: 97,
  },
  video: {
    url: "https://cdn.pixabay.com/vimeo/505790725/abstract-71581.mp4?width=1280&hash=f32407a37fca0da9c934c8c8056e5850385f6c2d",
  },
};

export default function Template() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={config.video.url} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <Header {...config.header} />

        <div className="max-w-4xl mx-auto">
          <MainContent
            headline={config.headline}
            subheadline={config.subheadline}
          />
          <SocialProof {...config.socialProof} />
          <Features {...config.features} />
          <OptinForm />
          <TrustStrip {...config.trustStrip} />
          <UrgencyElement {...config.urgency} />
        </div>
      </div>
    </main>
  );
}