"use client";

interface UrgencyElementProps {
  bonusResourceName: string;
  bonusValue?: number;
}

export function UrgencyElement({
  bonusResourceName,
  bonusValue,
}: UrgencyElementProps) {
  return (
    <div className="mt-12 text-center">
      <p className="text-sm text-purple-300">
        Limited Time: Get {bonusResourceName} {bonusValue && `($${bonusValue} Value)`}{" "}
        Free When You Download Today
      </p>
    </div>
  );
}