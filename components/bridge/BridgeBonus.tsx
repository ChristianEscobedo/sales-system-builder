"use client";

interface Bonus {
  name: string;
  value: string;
  features: string[];
}

interface BridgeBonusProps {
  bonuses: Bonus[];
  bonusCount: number;
}

export function BridgeBonus({ bonuses, bonusCount }: BridgeBonusProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          ORDER NOW AND GET {bonusCount} BONUS PRODUCTS AS MY GIFT TO YOU!
          <span className="block text-purple-400 text-lg mt-2">
            FOR FREE, BUT ONLY WHEN YOU ORDER TODAY!
          </span>
        </h3>
        
        <div className="space-y-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-white">
                  FREE BONUS #{index + 1} - {bonus.name}
                </h4>
                <span className="text-purple-400 font-bold">${bonus.value} Value</span>
              </div>
              <ul className="space-y-2">
                {bonus.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-purple-400">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}