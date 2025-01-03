"use client";

interface BridgePromiseProps {
  tactic: string;
  result: string;
  timeframe: string;
  roadblock: string;
}

export function BridgePromise({ tactic, result, timeframe, roadblock }: BridgePromiseProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          USING THIS {tactic}, YOU CAN {result} EVEN {timeframe}!
        </h2>
        <p className="text-xl text-gray-300">
          You'll be set to take on any {roadblock}!
        </p>
      </div>
    </div>
  );
}