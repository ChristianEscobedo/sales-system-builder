"use client";

interface BridgeHeroProps {
  headline: {
    bigResult: string;
    benefit: string;
    problem: string;
  };
  supportingCopy: {
    mainProduct: string;
    initialBenefit: string;
    productName: string;
    achievingSuccess: string;
  };
}

export function BridgeHero({ headline, supportingCopy }: BridgeHeroProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
        HOW WOULD YOU LIKE {headline.bigResult} THAT {headline.benefit} WITHOUT {headline.problem}?
      </h1>
      
      <div className="text-xl text-gray-300 space-y-4">
        <p>What is your goal? Would you like to win more business, keep it longer, and be the best in the field?</p>
        <p>I am certain that you would!</p>
        <p>{supportingCopy.mainProduct} will provide you with a much-needed {supportingCopy.initialBenefit}, but there is one more thing I can do to add to it.</p>
        <p>My goal was to create {supportingCopy.productName} specifically for people like you - those who are hungry for {supportingCopy.achievingSuccess} and who don't want to waste time.</p>
      </div>
    </div>
  );
}