"use client";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Layout, FileText, MessageSquare, Users, Star, CheckCircle2, ArrowRight } from "lucide-react";
import type { PageData, PageSection, PageStyle } from "@/types/page-builder";

function SectionRenderer({ section, style }: { section: PageSection; style: PageStyle }) {
  switch (section.type) {
    case "hero":
      return (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-black/40 to-black/20 p-8">
          {/* Background Video/Image */}
          {style.video?.url && (
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={style.video.url} type="video/mp4" />
              </video>
            </div>
          )}
          
          <div className="relative z-10 text-center space-y-6 py-20">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Download size={18} style={{ color: style.colors.accent }} />
              <span style={{ color: style.colors.accent }}>FREE DOWNLOAD</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight" style={{ color: style.colors.text }}>
              {section.content.title || "Transform Your Business With Our Proven System"}
            </h1>
            
            <p className="text-xl max-w-2xl mx-auto" style={{ color: `${style.colors.text}99` }}>
              {section.content.subtitle || "Learn the exact framework used by top performers to achieve extraordinary results"}
            </p>
            
            <div className="mt-8">
              <Button 
                className="h-12 px-8 text-lg"
                style={{ 
                  background: `linear-gradient(to right, ${style.colors.primary}, ${style.colors.secondary})`,
                  color: style.colors.text
                }}
              >
                Get Started Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      );

    case "key-points":
      return (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-6" style={{ color: style.colors.text }}>
            {section.content.title || "Key Points"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {section.content.points?.map((point: string, index: number) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 
                  className="mt-1 transition-transform group-hover:scale-110" 
                  style={{ color: style.colors.accent }} 
                />
                <div>
                  <span 
                    className="block font-medium mb-1" 
                    style={{ color: style.colors.text }}
                  >
                    {point}
                  </span>
                  <span style={{ color: `${style.colors.text}80` }}>
                    Detailed explanation of this key benefit and how it helps achieve results.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "community":
      return (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-bold" style={{ color: style.colors.text }}>
              {section.content.title || "Join Our Community"}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `${style.colors.text}99` }}>
              {section.content.description || "Connect with fellow members"}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" 
              style={{ backgroundColor: `${style.colors.accent}20`, color: style.colors.accent }}>
              <Users size={16} />
              <span>{section.content.memberCount || "1,000+"} Members</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {(section.content.features || defaultFeatures).map((feature: any, index: number) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  {feature.icon === "message-circle" && <MessageSquare style={{ color: style.colors.accent }} />}
                  {feature.icon === "star" && <Star style={{ color: style.colors.accent }} />}
                  <h4 className="text-lg font-medium" style={{ color: style.colors.text }}>
                    {feature.title}
                  </h4>
                </div>
                <p className="leading-relaxed" style={{ color: `${style.colors.text}99` }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3">
            <Layout className="text-gray-400" />
            <span className="text-gray-400 capitalize">{section.type} Section</span>
          </div>
        </div>
      );
  }
}

interface PagePreviewProps {
  data: PageData;
}

export function PagePreview({ data }: PagePreviewProps) {
  const downloadPage = () => {
    // Implementation for downloading page
    console.log("Downloading page...");
  };

  const openPreview = () => {
    // Implementation for opening preview
    console.log("Opening preview...");
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Page Preview</h3>
        <div className="flex gap-2">
          <Button
            onClick={openPreview}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <ExternalLink size={16} className="mr-2" />
            Preview
          </Button>
          <Button
            onClick={downloadPage}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <Download size={16} className="mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div 
        className="rounded-lg p-8 overflow-y-auto max-h-[800px]"
        style={{ backgroundColor: data.style.colors.background }}
      >
        {data.sections.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No sections added yet. Choose a template or add sections to get started.</p>
          </div>
        ) : data.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} style={data.style} />
        ))}
      </div>
    </div>
  );
}

const defaultFeatures = [
  {
    title: "Live Discussions",
    description: "Weekly group coaching calls and live Q&A sessions with experts",
    icon: "message-circle"
  },
  {
    title: "Resource Library",
    description: "Access our complete library of templates, scripts, and tools",
    icon: "star"
  }
];