"use client";

// ... imports remain the same ...

export default function Template() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/5 via-black to-purple-950/5 z-0" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <Header {...config.header} />

        <div className="max-w-6xl mx-auto">
          <MainContent
            headline={config.headline}
            subheadline={config.subheadline}
          />
          <SocialProof {...config.socialProof} />
          
          {/* Two Column Layout for Video and Modules */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <VideoPlayer {...config.video} />
            </div>
            <div>
              <VideoModules
                resourceName={config.features.resourceName}
                modules={config.features.quickWins}
              />
            </div>
          </div>

          <OptinForm />
          <TrustStrip {...config.trustStrip} />
          <UrgencyElement {...config.urgency} />
        </div>
      </div>
    </main>
  );
}