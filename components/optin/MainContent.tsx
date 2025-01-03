"use client";

interface MainContentProps {
  headline: {
    resourceName: string;
    painPoint: string;
    quickWin: string;
    frustrationMethod: string;
  };
  subheadline: {
    resourceType: string;
    timeFrame: string;
  };
}

export function MainContent({ headline, subheadline }: MainContentProps) {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
        Get Our Free {headline.resourceName} That Shows You How To{" "}
        {headline.painPoint} & {headline.quickWin} Without{" "}
        {headline.frustrationMethod}
      </h1>

      <p className="text-xl text-center text-gray-300 mb-8">
        Download this free {subheadline.resourceType} and learn the exact steps in
        just {subheadline.timeFrame}
        <span className="block text-sm text-purple-300 mt-2">
          (No credit card required)
        </span>
      </p>
    </>
  );
}