"use client";

import { BridgeHeader } from "@/components/bridge/BridgeHeader";
import { BridgeVideo } from "@/components/bridge/BridgeVideo";
import { BridgeSupportingCopy } from "@/components/bridge/BridgeSupportingCopy";
import { BridgeShowcase } from "@/components/bridge/BridgeShowcase";
import { BridgeOffer } from "@/components/bridge/BridgeOffer";
import { BridgeBonus } from "@/components/bridge/BridgeBonus";
import { BridgeGuarantee } from "@/components/bridge/BridgeGuarantee";
import { BridgeValueStack } from "@/components/bridge/BridgeValueStack";
import { BridgeFAQ } from "@/components/bridge/BridgeFAQ";

const config = {
  header: {
    title: "WAIT! SPECIAL ONE-TIME ONLY OFFER",
    subtitle: "Do Not Close This Page… Your Order Is NOT YET COMPLETE.",
    headline: {
      bigResult: "[BIG_RESULT]",
      desirableBenefit: "[DESIRABLE_BENEFIT]",
      majorProblem: "[MAJOR_PROBLEM]"
    }
  },
  video: {
    url: "https://cdn.pixabay.com/vimeo/505790725/abstract-71581.mp4?width=1280&hash=f32407a37fca0da9c934c8c8056e5850385f6c2d",
    thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200",
    title: "Special One-Time Offer",
    duration: "10:00",
    previewDuration: "60-Second"
  },
  videoCta: {
    text: "Watch The Full Presentation",
    subtext: "Learn how to scale your business faster"
  },
  supportingCopy: {
    mainProduct: "[MAIN_PRODUCT]",
    initialBenefit: "[INITIAL_BENEFIT]",
    productName: "[PRODUCT_NAME]",
    achievingSuccess: "[ACHIEVING_SUCCESS]"
  },
  showcase: {
    productName: "[PRODUCT_NAME]",
    solveProblem: "[SOLVE_PROBLEM]",
    runningIntoProblem: "[RUNNING_INTO_PROBLEM]",
    benefits: {
      scaleBenefit: "[SCALE_BENEFIT]",
      automationBenefit: "[AUTOMATION_BENEFIT]",
      leadGenerationBenefit: "[LEAD_GENERATION_BENEFIT]",
      beginnerLimitation: "[BEGINNER_LIMITATION]",
      marketingMistakes: "[MARKETING_MISTAKES]",
      clientAcquisition: "[CLIENT_ACQUISITION]",
      adSpendWaste: "[AD_SPEND_WASTE]",
      revenueGoal: "[REVENUE_GOAL]",
      experienceLimitation: "[EXPERIENCE_LIMITATION]",
      automationToolkit: "[AUTOMATION_TOOLKIT]",
      leadGenOutcome: "[LEAD_GEN_OUTCOME]",
      speedImprovement: "[SPEED_IMPROVEMENT]"
    }
  },
  products: [
    {
      name: "[PRODUCT_1]",
      feature: "[FEATURE_1]",
      value: "1,997"
    },
    {
      name: "[PRODUCT_2]",
      feature: "[FEATURE_2]",
      value: "997"
    },
    {
      name: "[PRODUCT_3]",
      feature: "[FEATURE_3]",
      value: "997"
    }
  ],
  bonuses: [
    {
      name: "[BONUS_1]",
      value: "997",
      features: ["[BONUS_1_FEATURE_1]", "[BONUS_1_FEATURE_2]", "[BONUS_1_FEATURE_3]"]
    },
    {
      name: "[BONUS_2]",
      value: "497",
      features: ["[BONUS_2_FEATURE_1]", "[BONUS_2_FEATURE_2]", "[BONUS_2_FEATURE_3]"]
    },
    {
      name: "[BONUS_3]",
      value: "997",
      features: ["[BONUS_3_FEATURE_1]", "[BONUS_3_FEATURE_2]", "[BONUS_3_FEATURE_3]"]
    }
  ],
  guarantee: {
    productName: "[PRODUCT_NAME]",
    achievementPath: "[ACHIEVEMENT_PATH]",
    clientType: "[CLIENT_TYPE]"
  },
  valueStack: {
    items: [
      { name: "[PRODUCT_1]", value: "1,997" },
      { name: "[PRODUCT_2]", value: "997" },
      { name: "[PRODUCT_3]", value: "997" },
      { name: "[BONUS_1]", value: "997" },
      { name: "[BONUS_2]", value: "497" },
      { name: "[BONUS_3]", value: "997" }
    ],
    totalValue: "$4,488",
    specialPrice: "$97"
  },
  faqs: [
    {
      question: "How is this different from [MAIN_PRODUCT]?",
      answer: "[PRODUCT_NAME] complements [MAIN_PRODUCT] by focusing specifically on [UNIQUE_BENEFIT]. While [MAIN_PRODUCT] gives you [BASE_BENEFIT], this upgrade provides [ADVANCED_BENEFIT]."
    },
    {
      question: "How quickly can I implement this?",
      answer: "You can start implementing these strategies immediately. Most [CLIENT_TYPE] see initial results within [IMPLEMENTATION_TIME], with full implementation taking [FULL_TIME]."
    },
    {
      question: "What if I'm just getting started?",
      answer: "Perfect timing! [PRODUCT_NAME] is designed to work for both beginners and experienced [CLIENT_TYPE]. We include step-by-step guidance so you can [ACHIEVE_RESULT] even if you're just starting out."
    }
  ]
};

export default function BridgePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950">
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <BridgeHeader {...config.header} />
        <BridgeVideo video={config.video} cta={config.videoCta} />
        <BridgeSupportingCopy {...config.supportingCopy} />
        <BridgeShowcase {...config.showcase} />
        <BridgeOffer products={config.products} />
        <BridgeBonus bonuses={config.bonuses} bonusCount={config.bonuses.length} />
        <BridgeGuarantee {...config.guarantee} />
        <BridgeValueStack {...config.valueStack} />
        <BridgeFAQ productName={config.showcase.productName} faqs={config.faqs} />
      </div>
    </main>
  );
}