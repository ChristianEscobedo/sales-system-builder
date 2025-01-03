"use client";

import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { CheckoutGuarantee } from "@/components/checkout/CheckoutGuarantee";
import { SecureCheckout } from "@/components/checkout/SecureCheckout";

const config = {
  header: {
    title: "Complete Your Order",
    subtitle: "You're just one step away from accessing [PRODUCT_NAME]"
  },
  order: {
    productName: "[PRODUCT_NAME]",
    regularPrice: "[REGULAR_PRICE]",
    todayPrice: "[TODAY_PRICE]",
    savings: "[SAVINGS_AMOUNT]",
    items: [
      {
        name: "[PRODUCT_1]",
        description: "[PRODUCT_1_DESCRIPTION]",
        value: "[VALUE_1]"
      },
      {
        name: "[BONUS_1]",
        description: "[BONUS_1_DESCRIPTION]",
        value: "[BONUS_VALUE_1]"
      },
      {
        name: "[BONUS_2]",
        description: "[BONUS_2_DESCRIPTION]",
        value: "[BONUS_VALUE_2]"
      }
    ],
    totalValue: "[TOTAL_VALUE]",
    finalPrice: "[FINAL_PRICE]"
  },
  guarantee: {
    days: "[GUARANTEE_DAYS]",
    description: "[GUARANTEE_DESCRIPTION]"
  },
  security: {
    badges: ["256-bit SSL", "PCI Compliant", "Norton Secured"],
    message: "[SECURITY_MESSAGE]"
  }
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950">
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <CheckoutHeader {...config.header} />
              <PaymentForm />
              <CheckoutGuarantee {...config.guarantee} />
              <SecureCheckout {...config.security} />
            </div>
            <div>
              <OrderSummary {...config.order} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}