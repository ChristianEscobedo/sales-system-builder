"use client";

import { Users, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PageSection, PageStyle } from "@/types/page-builder";

interface SectionRendererProps {
  section: PageSection;
  style: PageStyle;
}

export function SectionRenderer({ section, style }: SectionRendererProps) {
  const renderSection = () => {
    switch (section.type) {
      case "key-points":
        return (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">{section.content.title}</h3>
            <div className="space-y-4">
              {section.content.points.map((point: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: style.colors.accent }}
                  />
                  <span className="text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "community":
        return (
          <div className="bg-[#0A0A1A] rounded-2xl p-8 mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
              <Users size={16} className="mr-2" />
              Join {section.content.memberCount} Members
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {section.content.title}
            </h3>
            <p className="text-gray-300 mb-8">
              {section.content.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {section.content.features.map((feature: any, index: number) => (
                <div key={index} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon === "message-circle" && (
                      <MessageCircle className="text-blue-400" />
                    )}
                    {feature.icon === "share" && (
                      <Share2 className="text-blue-400" />
                    )}
                    <h4 className="text-lg font-medium text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              >
                {section.content.cta.primary}
              </Button>
              <Button variant="outline">
                {section.content.cta.secondary}
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderSection();
}