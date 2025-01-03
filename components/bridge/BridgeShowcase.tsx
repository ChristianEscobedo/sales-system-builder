"use client";

import { CheckCircle2 } from "lucide-react";

interface BridgeShowcaseProps {
  productName: string;
  solveProblem: string;
  runningIntoProblem: string;
  benefits: {
    scaleBenefit: string;
    automationBenefit: string;
    leadGenerationBenefit: string;
    beginnerLimitation: string;
    marketingMistakes: string;
    clientAcquisition: string;
    adSpendWaste: string;
    revenueGoal: string;
    experienceLimitation: string;
    automationToolkit: string;
    leadGenOutcome: string;
    speedImprovement: string;
  };
}

export function BridgeShowcase({ productName, solveProblem, runningIntoProblem, benefits }: BridgeShowcaseProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          {productName} – THE MOST EFFECTIVE WAY TO {solveProblem} WITHOUT {runningIntoProblem}!
        </h2>
        
        <div className="space-y-4">
          <h3 className="text-xl text-white mb-4">If you order now, you will receive:</h3>
          <div className="grid gap-4">
            <BenefitItem benefit={benefits.scaleBenefit} />
            <BenefitItem benefit={benefits.automationBenefit} />
            <BenefitItem benefit={benefits.leadGenerationBenefit} />
            <BenefitItem benefit={benefits.beginnerLimitation} />
            <BenefitItem benefit={benefits.marketingMistakes} />
            <BenefitItem benefit={benefits.clientAcquisition} />
            <BenefitItem benefit={benefits.adSpendWaste} />
            <BenefitItem benefit={benefits.revenueGoal} />
            <BenefitItem benefit={benefits.experienceLimitation} />
            <BenefitItem benefit={benefits.automationToolkit} />
            <BenefitItem benefit={benefits.leadGenOutcome} />
            <BenefitItem benefit={benefits.speedImprovement} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ benefit }: { benefit: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="text-purple-400 flex-shrink-0" />
      <span className="text-gray-200">{benefit}</span>
    </div>
  );
}