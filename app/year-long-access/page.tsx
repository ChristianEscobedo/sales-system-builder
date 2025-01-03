"use client";

import { useState, useEffect } from "react";
import { 
  Download, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Clock,
  Users,
  BarChart,
  Zap,
  Lock,
  X,
  Layout,
  MessageSquare,
  Target,
  Rocket,
  Sparkles,
  Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function YearLongAccessPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [showExitDialog, setShowExitDialog] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Format time remaining
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle page exit attempt
  const handleExit = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  // Add exit intent detection
  useEffect(() => {
    window.addEventListener('beforeunload', handleExit);
    return () => window.removeEventListener('beforeunload', handleExit);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/3" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Special Offer Banner */}
          <div className="inline-flex flex-col items-center gap-2 bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20 mb-8">
            <h2 className="text-2xl font-bold text-red-400">
              SPECIAL UPGRADE OFFER - EXPIRES IN {formatTime(timeLeft)}
            </h2>
            <p className="text-red-300">
              Get Unlimited Credits & Access to All Premium Modules for 12 Months
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
            UNLOCK UNLIMITED AI CREDITS & ALL PREMIUM MODULES FOR A FULL YEAR
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scale your business faster with unlimited access to our complete AI Sales System, 
            including the new Community Builder and Ads Module.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40">
              {/* Video Thumbnail Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Button
                        onClick={() => setIsPlaying(true)}
                        className="bg-purple-600/90 hover:bg-purple-700/90 text-white rounded-full p-8 backdrop-blur-sm border border-purple-400/20 mb-4"
                      >
                        <Play size={32} className="ml-2" />
                      </Button>
                      <p className="text-white/90 text-lg font-medium backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-white/10">
                        Watch 2-Minute Overview
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Element */}
              <video
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200"
                playsInline
                muted={isMuted}
              >
                <source src="https://cdn.pixabay.com/vimeo/505790725/abstract-71581.mp4?width=1280&hash=f32407a37fca0da9c934c8c8056e5850385f6c2d" type="video/mp4" />
              </video>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center justify-between">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </Button>

                  <div className="flex items-center gap-4">
                    <span className="text-white/90 text-sm">2:00</span>
                    <Button
                      onClick={() => setIsMuted(!isMuted)}
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Modules */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Unlock These Powerful New Modules
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {newModules.map((module, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      {module.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{module.name}</h4>
                      <p className="text-sm text-gray-400">{module.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{module.description}</p>
                  <div className="space-y-2">
                    {module.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 size={16} className="text-purple-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Bonuses */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Special Year-End Bonuses (Worth $4,997)
            </h3>
            <div className="space-y-6">
              {bonuses.map((bonus, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold text-white">
                      BONUS #{i + 1} - {bonus.name}
                    </h4>
                    <span className="text-purple-400 font-bold">${bonus.value} Value</span>
                  </div>
                  <p className="text-gray-300 mb-4">{bonus.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {bonus.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">365-DAY MONEY BACK GUARANTEE</h3>
            <div className="space-y-4 text-gray-300">
              <p>Try everything risk-free for an entire year.</p>
              <p>If you don't see a massive improvement in your business, we'll refund every penny.</p>
              <p>No questions asked.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full text-purple-300 mb-4">
                <Clock size={18} />
                <span>OFFER EXPIRES IN {formatTime(timeLeft)}</span>
              </div>
              <div className="space-y-2">
                <div className="text-xl text-gray-400">Regular Yearly Price: <span className="line-through">$1,997</span></div>
                <div className="text-xl text-gray-400">Bonus Value: <span className="text-purple-400">$4,997</span></div>
                <div className="text-2xl font-bold text-white">
                  TOTAL VALUE: <span className="text-purple-400">$6,994</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  TODAY ONLY: <span className="text-green-400">$997</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full py-8 text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <span className="flex items-center gap-2">
                  GET UNLIMITED ACCESS NOW
                  <ArrowRight size={20} />
                </span>
              </Button>
              
              <Button variant="outline" className="w-full py-6 text-lg">
                <span className="flex items-center gap-2">
                  Or Pay in 3 Installments of $397
                </span>
              </Button>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Lock size={16} />
                <span>Secure Payment - 256-bit SSL Encryption</span>
              </div>
              <p className="text-center text-sm text-purple-300">
                Special pricing expires when the timer hits zero
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-white font-semibold">{faq.question}</h4>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Dialog */}
      <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <DialogContent className="bg-[#0A0A0A] border-purple-500/20 text-white">
          <DialogHeader>
            <DialogTitle>Wait! Special One-Time Offer</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-300">
              This is your only chance to get unlimited credits and all premium modules at this special yearly price.
              Are you sure you want to leave?
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowExitDialog(false)}
                className="flex-1"
              >
                Stay on Page
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowExitDialog(false)}
                className="flex-1 text-gray-400"
              >
                Leave Anyway
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

const newModules = [
  {
    name: "Community Builder",
    subtitle: "Build & Monetize Your Community",
    description: "Create an engaged community that drives recurring revenue.",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    features: [
      "Community platform templates",
      "Engagement automation",
      "Monetization strategies",
      "Member retention tools"
    ]
  },
  {
    name: "Ads Module",
    subtitle: "High-Converting Ad Campaigns",
    description: "Create and optimize ad campaigns that actually convert.",
    icon: <Target className="w-6 h-6 text-purple-400" />,
    features: [
      "Ad copy generator",
      "Audience targeting",
      "Performance analytics",
      "Split testing tools"
    ]
  },
  {
    name: "Agency Accelerator",
    subtitle: "Scale Your Agency Fast",
    description: "Everything you need to grow your agency to 7-figures.",
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    features: [
      "Client acquisition system",
      "Service delivery templates",
      "Team scaling blueprints",
      "Profit optimization tools"
    ]
  },
  {
    name: "AI Marketing Suite",
    subtitle: "Advanced AI Marketing Tools",
    description: "Leverage AI to automate and optimize your marketing.",
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    features: [
      "Content generation",
      "Marketing automation",
      "Personalization engine",
      "Analytics & insights"
    ]
  }
];

const bonuses = [
  {
    name: "7-Figure Agency Blueprint",
    value: 1997,
    description: "Complete roadmap to scaling your agency to 7-figures using our AI system.",
    features: [
      "Client acquisition framework",
      "Service delivery templates",
      "Team building system",
      "SOPs and workflows",
      "Scaling strategies",
      "Profit optimization"
    ]
  },
  {
    name: "AI Marketing Mastery",
    value: 997,
    description: "Advanced training on leveraging AI for maximum marketing impact.",
    features: [
      "AI prompt engineering",
      "Content optimization",
      "Conversion strategies",
      "Automation workflows",
      "Testing frameworks",
      "ROI tracking"
    ]
  },
  {
    name: "Private Coaching Calls",
    value: 1497,
    description: "Get personalized guidance and feedback from our expert team.",
    features: [
      "Monthly group coaching",
      "Implementation support",
      "Strategy reviews",
      "Tech guidance",
      "Q&A sessions",
      "Accountability"
    ]
  },
  {
    name: "DFY Campaign Templates",
    value: 497,
    description: "Ready-to-use campaign templates for faster implementation.",
    features: [
      "Email sequences",
      "Sales pages",
      "Webinar slides",
      "Ad campaigns",
      "Social media content",
      "Analytics dashboards"
    ]
  }
];

const faqs = [
  {
    question: "What's included in the yearly access?",
    answer: "You get unlimited AI credits, access to all premium modules including Community Builder and Ads Module, plus all future updates and new features we release during your subscription period."
  },
  {
    question: "How is this different from the monthly plan?",
    answer: "The yearly plan includes unlimited credits (vs. monthly limits), all premium modules, exclusive bonuses worth $4,997, and significant savings compared to monthly billing."
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes, but this special offer with unlimited credits and all bonuses is only available now. The regular price is significantly higher."
  },
  {
    question: "What happens after the year ends?",
    answer: "You can renew at our regular yearly rate, or switch to a monthly plan. All your work and data remains accessible even if you don't renew."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes, we offer a full 365-day money-back guarantee. If you're not completely satisfied with the results you're getting, we'll refund your entire investment."
  }
];