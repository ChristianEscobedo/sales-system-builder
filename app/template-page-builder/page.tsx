"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-builder/PageHeader";
import { PageForm } from "@/components/page-builder/PageForm";
import { PagePreview } from "@/components/page-builder/PagePreview";
import type { PageData } from "@/types/page-builder";

export default function PageBuilderPage() {
  const [pageData, setPageData] = useState<PageData>({
    title: "Sales Funnel Mastery",
    subtitle: "The Million-Dollar Blueprint",
    description: "Learn the exact framework used by top marketers to create high-converting sales funnels that consistently generate 6-figure revenues.",
    sections: [
      {
        type: "key-points",
        content: {
          title: "Key Points",
          points: [
            "Understanding the psychology of high-ticket sales",
            "Creating irresistible value propositions",
            "Mapping the perfect customer journey",
            "Optimizing conversion touchpoints"
          ]
        }
      },
      {
        type: "community",
        content: {
          title: "Join Our Exclusive Community",
          description: "Connect with fellow entrepreneurs, share insights, and get personalized feedback on your sales funnels from our expert mentors.",
          memberCount: "5,000+",
          features: [
            {
              title: "Live Discussions",
              description: "Weekly group coaching calls",
              icon: "message-circle"
            },
            {
              title: "Resource Sharing",
              description: "Templates & swipe files",
              icon: "share"
            }
          ],
          cta: {
            primary: "Join Community",
            secondary: "Learn More"
          }
        }
      }
    ],
    style: {
      theme: "dark",
      colors: {
        primary: "#3B82F6",
        secondary: "#60A5FA",
        accent: "#2563EB",
        background: "#0F172A",
        text: "#F8FAFC"
      },
      video: {
        url: "https://cdn.pixabay.com/vimeo/505790725/abstract-71581.mp4?width=1280&hash=f32407a37fca0da9c934c8c8056e5850385f6c2d"
      }
    }
  });

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-black to-blue-950/5 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <PageHeader onGenerate={setPageData} />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <PageForm data={pageData} onChange={setPageData} />
          <PagePreview data={pageData} />
        </div>
      </div>
    </main>
  );
}