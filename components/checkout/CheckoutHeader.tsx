"use client";

interface CheckoutHeaderProps {
  title: string;
  subtitle: string;
}

export function CheckoutHeader({ title, subtitle }: CheckoutHeaderProps) {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-300">
        {subtitle}
      </p>
    </div>
  );
}