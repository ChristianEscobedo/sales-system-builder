"use client";

interface BridgePricingProps {
  productName: string;
  regularPurchase: string;
  item: string;
}

export function BridgePricing({ productName, regularPurchase, item }: BridgePricingProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12 text-center">
      <div className="space-y-4 text-xl text-gray-300">
        <p>So how much is {productName}?</p>
        <p>Prepare to be surprised…</p>
        <p>How much do you spend a month on {regularPurchase}?</p>
        <p>Could you imagine getting everything you see on this page for an investment that is LESS than what you spend PER MONTH on {item}?</p>
      </div>
    </div>
  );
}