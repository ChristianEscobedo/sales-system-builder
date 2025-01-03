"use client";

interface BridgeSupportingCopyProps {
  mainProduct: string;
  initialBenefit: string;
  productName: string;
  achievingSuccess: string;
}

export function BridgeSupportingCopy({ 
  mainProduct, 
  initialBenefit, 
  productName, 
  achievingSuccess 
}: BridgeSupportingCopyProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <div className="text-gray-300 space-y-4">
          <p className="text-lg">What is your goal? Would you like to win more business, keep it longer, and be the best in the field?</p>
          <p className="text-base">I am certain that you would!</p>
          <p className="text-base">{mainProduct} will provide you with a much-needed {initialBenefit}, but there is one more thing I can do to add to it.</p>
          <p className="text-base">My goal was to create {productName} specifically for people like you - those who are hungry for {achievingSuccess} and who don't want to waste time.</p>
        </div>
      </div>
    </div>
  );
}