import dynamic from "next/dynamic";

const YearLongCheckout = dynamic(
  () => import("@/components/checkout/YearLongCheckout"),
  { ssr: false }
);

export default function YearLongCheckoutPage() {
  return <YearLongCheckout />;
}