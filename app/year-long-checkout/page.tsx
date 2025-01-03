"use client";

import { useState } from "react";
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
  Infinity,
  Crown,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function SystemOneTimeOfferPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showExitDialog, setShowExitDialog] = useState(false);

  // Handle page exit attempt
  const handleExit = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  // Add exit intent detection
  useState(() => {
    window.addEventListener('beforeunload', handleExit);
    return () => window.removeEventListener('beforeunload', handleExit);
  });

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
          {/* One-Time Offer Banner */}
          <div className="inline-flex flex-col items-center gap-2 bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20 mb-8">
            <h2 className="text-2xl font-bold text-red-400">WAIT! SPECIAL ONE-TIME ONLY OFFER</h2>
            <p className="text-red-300">Do Not Close This Page... Your Order Is NOT YET COMPLETE</p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
            DOUBLE YOUR CREDITS FOR LIFE & GET UNLIMITED ACCESS TO THE SALES SYSTEM BUILDER
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the full power of our AI Sales System and create unlimited high-converting sales pages, 
            email sequences, and webinar presentations at a fraction of the normal price.
          </p>
        </div>

        {/* Social Proof Bar */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Users className="text-purple-400" />
            <span className="text-gray-300">2,500+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="text-purple-400" />
            <span className="text-gray-300">95% Success Rate</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
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
                        Watch 60-Second Preview
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
                    <span className="text-white/90 text-sm">1:00</span>
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

            {/* CTA Button */}
            <div className="mt-6 text-center">
              <Button className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Watch The Full Presentation
              </Button>
              <p className="mt-2 text-sm text-gray-400">Learn how to scale your business faster</p>
            </div>
          </div>
        </div>

        {/* Problem Agitation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Are You Making These Costly Mistakes?
            </h3>
            <div className="grid gap-4">
              {[
                "Spending hours writing sales copy that doesn't convert",
                "Wasting money on expensive copywriters and designers",
                "Using generic templates that everyone else uses",
                "Struggling to create consistent, high-quality content",
                "Missing out on sales due to poor messaging",
                "Falling behind competitors who use AI effectively"
              ].map((mistake, i) => (
                <div key={i} className="flex items-center gap-3">
                  <X className="text-red-400 flex-shrink-0" />
                  <span className="text-gray-200">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution & Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Upgrade Now To Get:
            </h3>
            <div className="grid gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Real Results From Our Users
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((study, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Users className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{study.name}</h4>
                      <p className="text-sm text-gray-400">{study.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{study.quote}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-400">
                      <BarChart size={16} />
                      <span>{study.result}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Clock size={16} />
                      <span>{study.timeframe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Compare Free vs Premium Features
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1" />
              <div className="text-center font-semibold text-gray-400">Free</div>
              <div className="text-center font-semibold text-purple-400">Premium</div>
              
              {featureComparison.map((feature, i) => (
                <>
                  <div key={`feature-${i}`} className="text-white">{feature.name}</div>
                  <div key={`free-${i}`} className="text-center">
                    {feature.free ? (
                      <CheckCircle2 className="mx-auto text-gray-400" />
                    ) : (
                      <X className="mx-auto text-gray-600" />
                    )}
                  </div>
                  <div key={`premium-${i}`} className="text-center">
                    <CheckCircle2 className="mx-auto text-purple-400" />
                  </div>
                </>
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
              <p>Try the premium features risk-free for 30 days.</p>
              <p>If you're not completely satisfied, we'll refund every penny.</p>
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
                <span>LIMITED TIME OFFER</span>
              </div>
              <div className="text-2xl font-bold text-white">
                TOTAL VALUE: <span className="text-purple-400">$1,997</span>
              </div>
              <div className="text-3xl font-bold text-white">
                TODAY ONLY: <span className="text-green-400">$97</span>
              </div>
            </div>
            
            <Button className="w-full py-8 text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <span className="flex items-center gap-2">
                UPGRADE NOW & GET 2X CREDITS FOR LIFE
                <ArrowRight size={20} />
              </span>
            </Button>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Lock size={16} />
                <span>Secure Payment - 256-bit SSL Encryption</span>
              </div>
              <p className="text-center text-sm text-purple-300">
                This offer expires when you leave this page
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
              This is your only chance to get lifetime access at this special price.
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

const benefits = [
  {
    title: "2x Credits for Life",
    description: "Generate twice as much content forever with our lifetime double credits offer."
  },
  {
    title: "Unlimited Access to Premium Templates",
    description: "Get instant access to our complete library of proven, high-converting templates."
  },
  {
    title: "Priority Support & Feature Updates",
    description: "Jump to the front of the line with VIP support and early access to new features."
  },
  {
    title: "Advanced AI Training & Strategies",
    description: "Learn expert techniques to maximize your results with our AI system."
  },
  {
    title: "Custom Branding & White Label Options",
    description: "Add your own branding and create white-label content for clients."
  },
  {
    title: "Team Collaboration Features",
    description: "Work together efficiently with multi-user access and team workflows."
  }
];

const caseStudies = [
  {
    name: "Sarah Thompson",
    role: "Marketing Agency Owner",
    quote: "The AI Sales System has completely transformed how we create content for clients. We're producing better results in half the time.",
    result: "3x Revenue",
    timeframe: "90 Days"
  },
  {
    name: "Michael Chen",
    role: "Course Creator",
    quote: "I was skeptical about AI, but this system is incredible. My course launch emails are performing better than ever.",
    result: "85% Open Rate",
    timeframe: "30 Days"
  }
];

const featureComparison = [
  { name: "AI Content Generation", free: true },
  { name: "Basic Templates", free: true },
  { name: "Community Access", free: true },
  { name: "2x Generation Credits", free: false },
  { name: "Premium Templates", free: false },
  { name: "Priority Support", free: false },
  { name: "White Label Options", free: false },
  { name: "Team Access", free: false },
  { name: "Advanced Training", free: false }
];

const faqs = [
  {
    question: "How is the premium version different?",
    answer: "The premium version includes 2x credits for life, unlimited access to all templates, priority support, and advanced features like white-labeling and team collaboration."
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes, but this special offer with 2x lifetime credits is only available now. The regular price is significantly higher."
  },
  {
    question: "Is there a monthly fee?",
    answer: "No, this is a one-time payment that gives you lifetime access to all premium features."
  },
  {
    question: "What if it's not for me?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase - no questions asked."
  }
];

const features = [
  {
    title: "Unlimited AI Credits",
    description: "Create unlimited content with our AI system for a full year.",
    icon: () => <Infinity className="text-purple-400 flex-shrink-0 mt-1 w-5 h-5" />
  },
  {
    title: "All Premium Modules",
    description: "Access every module including Community Builder and Ads Module.",
    icon: () => <Crown className="text-purple-400 flex-shrink-0 mt-1 w-5 h-5" />
  },
  {
    title: "Priority Support",
    description: "Get VIP support with 24/7 access to our expert team.",
    icon: () => <Zap className="text-purple-400 flex-shrink-0 mt-1 w-5 h-5" />
  },
  {
    title: "Private Community",
    description: "Join our exclusive community of successful entrepreneurs.",
    icon: () => <Users className="text-purple-400 flex-shrink-0 mt-1 w-5 h-5" />
  },
  {
    title: "Advanced Features",
    description: "Access all premium features and future updates.",
    icon: () => <Rocket className="text-purple-400 flex-shrink-0 mt-1 w-5 h-5" />
  }
];