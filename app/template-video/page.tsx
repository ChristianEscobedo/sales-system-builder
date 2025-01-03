"use client";

import { Header } from './_components/Header';
import { MainContent } from './_components/MainContent';
import { SocialProof } from './_components/SocialProof';
import { VideoPlayer } from './_components/VideoPlayer';
import { VideoModules } from './_components/VideoModules';
import { OptinForm } from './_components/OptinForm';
import { TrustStrip } from './_components/TrustStrip';
import { UrgencyElement } from './_components/UrgencyElement';

export default function VideoTemplatePage() {
  const config = {
    header: {
      title: "Video Sales Letter",
      subtitle: "Transform Your Business",
      logo: "/logo.png",
      navigation: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" }
      ]
    },
    // Add other config sections as needed
  };

  return (
    <main className="min-h-screen relative bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <Header {...config.header} />

        <div className="max-w-6xl mx-auto">
          <MainContent 
            title="Your Compelling Title"
            description="A powerful description that hooks your audience"
          />
          
          <div className="mt-12">
            <VideoPlayer 
              videoUrl="/path-to-video.mp4"
              title="Main Sales Video"
            />
          </div>

          <div className="mt-12">
            <VideoModules 
              modules={[
                {
                  title: "Module 1: Introduction",
                  duration: "10:00",
                  description: "Getting started with the basics"
                },
                // Add more modules as needed
              ]}
            />
          </div>

          <div className="mt-12">
            <SocialProof />
          </div>

          <div className="mt-12">
            <OptinForm />
          </div>

          <div className="mt-8">
            <TrustStrip />
          </div>

          <div className="mt-8">
            <UrgencyElement />
          </div>
        </div>
      </div>
    </main>
  );
}