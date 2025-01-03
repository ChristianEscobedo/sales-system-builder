"use client";

import { CheckCircle2 } from "lucide-react";

interface OrderItem {
  name: string;
  description: string;
  value: string;
}

interface OrderSummaryProps {
  productName: string;
  regularPrice: string;
  todayPrice: string;
  savings: string;
  items: OrderItem[];
  totalValue: string;
  finalPrice: string;
}

export function OrderSummary({
  productName,
  regularPrice,
  todayPrice,
  savings,
  items,
  totalValue,
  finalPrice
}: OrderSummaryProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
      
      {/* Price Comparison */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Regular Price:</span>
          <span className="text-gray-300 line-through">{regularPrice}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Today's Price:</span>
          <span className="text-green-400 font-bold">{todayPrice}</span>
        </div>
        <div className="flex justify-between items-center text-purple-400">
          <span>Your Savings:</span>
          <span className="font-bold">{savings}</span>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-4 mb-8">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-semibold">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
              <p className="text-purple-400 text-sm">Value: {item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Value */}
      <div className="border-t border-white/10 pt-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Total Value:</span>
          <span className="text-white font-bold">{totalValue}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">You Pay Only:</span>
          <span className="text-green-400 text-2xl font-bold">{finalPrice}</span>
        </div>
      </div>
    </div>
  );
}