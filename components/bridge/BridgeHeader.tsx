"use client";

interface BridgeHeaderProps {
  title: string;
  subtitle: string;
  headline: {
    bigResult: string;
    desirableBenefit: string;
    majorProblem: string;
  };
}

export function BridgeHeader({ title, subtitle, headline }: BridgeHeaderProps) {
  return (
    <div className="text-center mb-12">
      {/* One-Time Offer Banner */}
      <div className="inline-flex flex-col items-center gap-2 bg-red-500/10 px-6 py-4 rounded-2xl border border-red-500/20 mb-8">
        <h2 className="text-2xl font-bold text-red-400">{title}</h2>
        <p className="text-red-300">{subtitle}</p>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
        HOW WOULD YOU LIKE TO {headline.bigResult} THAT {headline.desirableBenefit} WITHOUT {headline.majorProblem}?
      </h1>
    </div>
  );
}