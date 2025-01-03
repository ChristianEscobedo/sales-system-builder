"use client";

interface TrustStripProps {
  logos: string[];
  industryProfessionals: {
    number: number;
    type: string;
  };
  metrics?: {
    number: string;
    label: string;
  }[];
}

export function TrustStrip({
  logos,
  industryProfessionals,
  metrics,
}: TrustStripProps) {
  return (
    <div className="mt-12 text-center">
      <p className="text-gray-400 mb-4">Trusted by industry leaders</p>
      <div className="flex justify-center items-center gap-8 opacity-50">
        {logos.map((brand, i) => (
          <span key={i} className="text-gray-300 font-semibold">
            {brand}
          </span>
        ))}
      </div>
      <div className="mt-4 text-gray-300">
        Used by {industryProfessionals.number.toLocaleString()}{" "}
        {industryProfessionals.type}
      </div>
      {metrics && (
        <div className="flex justify-center gap-8 mt-4">
          {metrics.map((metric, i) => (
            <div key={i} className="text-gray-300">
              <div className="font-bold">{metric.number}</div>
              <div className="text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}