"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";

export function PaymentForm() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
      <form className="space-y-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
              <Input id="firstName" className="bg-white/10 border-purple-500/30 text-white" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
              <Input id="lastName" className="bg-white/10 border-purple-500/30 text-white" />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300">Email Address</Label>
            <Input id="email" type="email" className="bg-white/10 border-purple-500/30 text-white" />
          </div>
        </div>

        {/* Payment Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Payment Information</h3>
          <div>
            <Label htmlFor="cardNumber" className="text-gray-300">Card Number</Label>
            <div className="relative">
              <Input 
                id="cardNumber" 
                className="bg-white/10 border-purple-500/30 text-white pl-10" 
                placeholder="1234 5678 9012 3456"
              />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <Label htmlFor="expiry" className="text-gray-300">Expiry Date</Label>
              <Input 
                id="expiry" 
                className="bg-white/10 border-purple-500/30 text-white" 
                placeholder="MM/YY"
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="text-gray-300">CVV</Label>
              <Input 
                id="cvv" 
                className="bg-white/10 border-purple-500/30 text-white" 
                placeholder="123"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          <Lock className="mr-2 h-4 w-4" />
          Complete Secure Order
        </Button>
      </form>
    </div>
  );
}