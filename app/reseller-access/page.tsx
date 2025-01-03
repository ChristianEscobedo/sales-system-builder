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
  Lock,
  Briefcase,
  Palette,
  Settings,
  DollarSign,
  Repeat,
  Zap,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ResellerAccessPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [includeWhiteLabel, setIncludeWhiteLabel] = useState(false);

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
              RESELLER OPPORTUNITY - EXPIRES IN {formatTime(timeLeft)}
            </h2>
            <p className="text-red-300">
              Become a Reseller and Earn Up to 70% Commission on Every Sale
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
            RESELL THE COMPLETE AI SALES SYSTEM AND KEEP UP TO 70% OF EVERY SALE
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build a profitable business by reselling our proven AI Sales System. Optional white-label rights available.
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
                        Watch Reseller Program Overview
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
                    <span className="text-white/90 text-sm">3:45</span>
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

        {/* Reseller Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Why Become a Reseller?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resellerBenefits.map((benefit, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-gray-400">{benefit.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, j) => (
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

        {/* White Label Option */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Optional: Add White Label Rights
                </h3>
                <p className="text-gray-400">
                  Rebrand the entire system as your own
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Label className="text-white">Include White Label</Label>
                <Switch
                  checked={includeWhiteLabel}
                  onCheckedChange={setIncludeWhiteLabel}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whiteLabelFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Reseller Success Stories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {successStories.map((story, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-purple-400" />
                    <div>
                      <h4 className="text-white font-semibold">{story.name}</h4>
                      <p className="text-sm text-gray-400">{story.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">"{story.quote}"</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-400">
                      <DollarSign size={16} />
                      <span>{story.earnings}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Clock size={16} />
                      <span>{story.timeframe}</span>
                    </div>
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
            <h3 className="text-2xl font-bold text-white mb-4">30-DAY MONEY BACK GUARANTEE</h3>
            <div className="space-y-4 text-gray-300">
              <p>Try the reseller program risk-free for 30 days.</p>
              <p>If you don't make at least $1,000 in commissions, we'll refund your investment.</p>
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
                <div className="text-xl text-gray-400">Regular Reseller License: <span className="line-through">$4,997</span></div>
                <div className="text-xl text-gray-400">White Label Rights: <span className="text-purple-400">+$2,000</span></div>
                <div className="text-2xl font-bold text-white">
                  TODAY ONLY: <span className="text-purple-400">$1,997</span>
                  {includeWhiteLabel && <span> + $997 White Label</span>}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full py-8 text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <span className="flex items-center gap-2">
                  BECOME A RESELLER NOW
                  <ArrowRight size={20} />
                </span>
              </Button>
              
              <Button variant="outline" className="w-full py-6 text-lg">
                <span className="flex items-center gap-2">
                  Or Pay in 3 Installments
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
            <DialogTitle>Wait! Don't Miss This Opportunity</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-300">
              This is your only chance to become a reseller at this special price.
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

const resellerBenefits = [
  {
    title: "High-Ticket Commissions",
    subtitle: "Earn Up to 70% Per Sale",
    description: "Generate significant income with our high-converting sales system.",
    icon: <DollarSign className="w-6 h-6 text-purple-400" />,
    features: [
      "70% commission on direct sales",
      "Recurring revenue opportunities",
      "Fast bi-weekly payouts",
      "Performance bonuses"
    ]
  },
  {
    title: "Done-For-You Marketing",
    subtitle: "Complete Marketing Kit",
    description: "Get everything you need to start selling immediately.",
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    features: [
      "Sales page templates",
      "Email swipe files",
      "Social media content",
      "Promotional videos"
    ]
  },
  {
    title: "Automated Sales System",
    subtitle: "Hands-Off Income",
    description: "Let our proven system do the selling for you.",
    icon: <Repeat className="w-6 h-6 text-purple-400" />,
    features: [
      "Automated sales funnel",
      "Payment processing",
      "Customer support",
      "Lead tracking"
    ]
  },
  {
    title: "Expert Training & Support",
    subtitle: "Comprehensive Resources",
    description: "Get all the training and support you need to succeed.",
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    features: [
      "Sales training program",
      "Marketing strategies",
      "Technical support",
      "Private community"
    ]
  }
];

const whiteLabelFeatures = [
  {
    title: "Complete Rebranding",
    description: "Add your own logo, colors, and branding to the entire system."
  },
  {
    title: "Custom Domain Integration",
    description: "Use your own domain name for a professional appearance."
  },
  {
    title: "Branded Dashboard",
    description: "Customize the user interface with your brand elements."
  },
  {
    title: "White Label Documentation",
    description: "Provide branded documentation and support materials."
  },
  {
    title: "Custom Pricing Control",
    description: "Set your own prices and create custom packages."
  },
  {
    title: "Branded Marketing Materials",
    description: "Get editable marketing materials with your branding."
  }
];

const successStories = [
  {
    name: "Michael Chen",
    location: "Digital Marketing Agency",
    quote: "The reseller program transformed my agency. We now offer AI-powered solutions to all our clients.",
    earnings: "$50K+ Monthly",
    timeframe: "First 6 Months"
  },
  {
    name: "Sarah Thompson",
    location: "Business Coach",
    quote: "I love how easy it is to resell this system. The done-for-you marketing materials save me hours.",
    earnings: "$25K+ Monthly",
    timeframe: "First 3 Months"
  }
];

const faqs = [
  {
    question: "What's included in the reseller license?",
    answer: "The reseller license includes rights to sell the AI Sales System, complete marketing materials, sales training, and ongoing support. You'll earn up to 70% commission on every sale."
  },
  {
    question: "How does the white label option work?",
    answer: "With white label rights, you can rebrand the entire system as your own. This includes custom branding, domain integration, and the ability to set your own prices."
  },
  {
    question: "Do I need technical experience?",
    answer: "No technical experience is required. We provide complete training and done-for-you marketing materials. Our support team handles all technical aspects."
  },
  {
    question: "How quickly can I start selling?",
    answer: "You can start selling immediately after approval. We provide all necessary marketing materials and training to help you get your first sale within days."
  },
  {
    question: "What support do you provide?",
    answer: "We provide comprehensive sales training, marketing materials, technical support, and access to our private reseller community. Our team handles customer support for your clients."
  }
];