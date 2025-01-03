import dynamic from "next/dynamic";

const ResellerCheckout = dynamic(
  () => import("@/components/checkout/ResellerCheckout"),
  { ssr: false }
);

export default function ResellerCheckoutPage() {
  return <ResellerCheckout />;
}