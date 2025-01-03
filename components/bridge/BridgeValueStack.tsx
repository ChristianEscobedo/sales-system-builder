"use client";

interface StackItem {
  name: string;
  value: string;
}

interface BridgeValueStackProps {
  items: StackItem[];
  totalValue: string;
  specialPrice: string;
}

export function BridgeValueStack({ items, totalValue, specialPrice }: BridgeValueStackProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <div className="space-y-4 mb-8">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between text-gray-300">
              <span>{item.name}</span>
              <span className="text-purple-400">${item.value} value</span>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-white">
            TOTAL VALUE: <span className="text-purple-400">{totalValue}</span>
          </div>
          <div className="text-3xl font-bold text-white">
            FOR ONLY <span className="text-green-400">{specialPrice}!</span>
          </div>
        </div>
      </div>
    </div>
  );
}