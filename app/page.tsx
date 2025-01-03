"use client";

import { useState } from "react";
import { Download, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email });
  };

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
          <source src="https://cdn.pixabay.com/vimeo/505790725/abstract-71581.mp4?width=1280&hash=f32407a37fca0da9c934c8c8056e5850385f6c2d" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full text-purple-300 mb-6">
            <Download size={18} />
            <span>FREE MASTERCLASS - NO PURCHASE REQUIRED</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Get Our Free AI Mastery Guide That Shows You How To 10x Your Productivity & Scale Your Business Without Complicated Tech
          </h1>

          <p className="text-xl text-center text-gray-300 mb-8">
            Download this free masterclass and learn the exact steps in just 60 minutes
            <span className="block text-sm text-purple-300 mt-2">
              (No credit card required)
            </span>
          </p>

          {/* Social Proof */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-purple-300">10,000+</span>
              <span className="text-gray-400">Downloads</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* What You'll Get */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Inside Your Free AI Mastery Guide:
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "AI-Powered Content Creation Blueprint",
                "Automation Workflow Templates",
                "ROI Calculator & Strategy Guide",
                "Expert Implementation Roadmap",
                "Private Community Access"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Opt-in Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Your Name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
            />
            <Input
              type="email"
              required
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
            >
              <span className="flex items-center gap-2">
                GET INSTANT ACCESS
                <ArrowRight size={18} />
              </span>
            </Button>
          </form>

          {/* Trust Strip */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-8 opacity-50">
              {["Forbes", "TechCrunch", "Wired", "VentureBeat"].map((brand, i) => (
                <span key={i} className="text-gray-300 font-semibold">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-12 text-center">
            <p className="text-sm text-purple-300">
              Limited Time: Get Bonus AI Prompt Library ($97 Value) Free When You Download Today
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}