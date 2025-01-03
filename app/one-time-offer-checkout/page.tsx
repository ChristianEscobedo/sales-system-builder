"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  Shield, 
  Lock,
  Zap,
  ArrowRight,
  Star,
  Infinity,
  Rocket,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OneTimeOfferCheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle payment processing
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/3" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Your 2x Credits Upgrade
            </h1>
            <p className="text-xl text-gray-300">
              You're just one step away from doubling your AI credits for life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">Payment Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          className="bg-white/10 border-purple-500/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          className="bg-white/10 border-purple-500/30 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-white/10 border-purple-500/30 text-white"
                      />
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        className="bg-white/10 border-purple-500/30 text-white"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          className="bg-white/10 border-purple-500/30 text-white"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          className="bg-white/10 border-purple-500/30 text-white"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <span className="flex items-center gap-2 text-lg">
                      {isLoading ? "Processing..." : "Complete Purchase - $97"}
                      <ArrowRight size={20} />
                    </span>
                  </Button>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Lock size={16} />
                    <span>Secure Payment - 256-bit SSL Encryption</span>
                  </div>
                </form>
              </div>

              {/* Guarantee */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">30-Day Money Back Guarantee</h3>
                <p className="text-gray-300 text-sm">
                  If you're not completely satisfied with your doubled credits, we'll refund your entire investment.
                  No questions asked.
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                
                {/* Core Features */}
                <div className="space-y-6 mb-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Regular Price</span>
                    <span className="line-through">$497</span>
                  </div>
                  <div className="flex justify-between text-purple-400">
                    <span>One-Time Offer Discount</span>
                    <span>-$400</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10">
                    <span>Today's Price</span>
                    <span>$97</span>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-4">What Our Users Say</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{testimonial.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{testimonial.quote}</p>
                      <div className="text-purple-400 font-semibold text-sm">
                        {testimonial.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "2x Credits for Life",
    description: "Double your AI content generation credits forever with this one-time upgrade."
  },
  {
    title: "Premium Support",
    description: "Get priority access to our expert support team for faster assistance."
  },
  {
    title: "Advanced Features",
    description: "Unlock premium features and templates for better results."
  },
  {
    title: "Early Access",
    description: "Be first to try new features and improvements before everyone else."
  },
  {
    title: "Performance Analytics",
    description: "Access detailed analytics to optimize your content performance."
  },
  {
    title: "No Monthly Fees",
    description: "One-time payment for lifetime access to doubled credits."
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    date: "2 days ago",
    quote: "The 2x credits upgrade was a game-changer for my business. I can create twice the content in half the time!"
  },
  {
    name: "Michael R.",
    date: "1 week ago",
    quote: "Best decision I made for my content strategy. The extra credits help me stay ahead of competitors."
  }
];