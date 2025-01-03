import dynamic from "next/dynamic";

const SystemOTO = dynamic(
  () => import("@/components/checkout/SystemOTO"),
  { ssr: false }
);

export default function SystemOTOPage() {
  return <SystemOTO />;
}