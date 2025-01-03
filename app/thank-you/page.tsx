"use client";

import { SuccessHeader } from "@/components/thank-you/SuccessHeader";
import { OrderDetails } from "@/components/thank-you/OrderDetails";
import { WelcomeMessage } from "@/components/thank-you/WelcomeMessage";
import { AccessInstructions } from "@/components/thank-you/AccessInstructions";
import { NextSteps } from "@/components/thank-you/NextSteps";
import type { ThankYouConfig } from "@/types/thank-you";

const config: ThankYouConfig = {
  product: {
    name: "[PRODUCT_NAME]",
    price: "$97",
    orderId: `#ORD-${Date.now()}`,
    orderDate: new Date().toLocaleDateString()
  },
  welcome: {
    desiredOutcome: "building a 7-figure agency"
  },
  access: {
    userEmail: "[USER_EMAIL]",
    supportEmail: "support@example.com"
  },
  community: {
    name: "Agency Accelerator Community",
    memberCount: "5,000",
    targetAudience: "agency owners",
    sharedGoal: "scale their business to 7-figures"
  },
  resources: {
    name: "Agency Growth Newsletter",
    description: "Weekly strategies, case studies, and actionable tips to grow your agency faster"
  }
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950">
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <SuccessHeader />
          <OrderDetails {...config.product} />
          <WelcomeMessage {...config.welcome} productName={config.product.name} />
          <AccessInstructions {...config.access} productName={config.product.name} />
          <NextSteps 
            community={config.community}
            resources={config.resources}
          />
        </div>
      </div>
    </main>
  );
}