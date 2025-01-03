"use client";

interface Product {
  name: string;
  feature: string;
  value: string;
}

interface BridgeOfferProps {
  products: Product[];
}

export function BridgeOffer({ products }: BridgeOfferProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">
          Remember – when you order today you get:
        </h3>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between gap-4 p-4 bg-white/5 rounded-lg">
              <div>
                <span className="text-white font-medium">{product.name}</span>
                <span className="text-gray-400"> – Which contains {product.feature}</span>
              </div>
              <span className="text-purple-400 font-bold">${product.value} Value</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}