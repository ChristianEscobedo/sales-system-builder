"use client";

import { Receipt } from "lucide-react";

interface OrderDetailsProps {
  name: string;
  price: string;
  orderId: string;
  orderDate: string;
}

export function OrderDetails({ name, price, orderId, orderDate }: OrderDetailsProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <Receipt className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Your Product Receipt</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <span className="text-gray-300">{name}</span>
          <span className="text-white font-bold">{price}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400 block">Order ID</span>
            <span className="text-white font-mono">{orderId}</span>
          </div>
          <div>
            <span className="text-gray-400 block">Date</span>
            <span className="text-white">{orderDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}