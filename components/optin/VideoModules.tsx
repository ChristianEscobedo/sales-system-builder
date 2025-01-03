"use client";

import { Play, Clock, CheckCircle } from "lucide-react";

interface VideoModulesProps {
  resourceName: string;
  modules: string[];
}

export function VideoModules({ resourceName, modules }: VideoModulesProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Play size={20} className="text-purple-400" />
        Inside Your Free {resourceName}:
      </h3>
      
      <div className="space-y-3">
        {modules.map((module, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group border border-white/5"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-colors">
              {index + 1}
            </div>
            
            <div className="flex-grow">
              <p className="text-white/90 font-medium">{module}</p>
            </div>

            <div className="flex items-center gap-2 text-white/60">
              <Clock size={14} />
              <span className="text-sm">10:00</span>
            </div>

            <CheckCircle size={16} className="text-purple-400" />
          </div>
        ))}
      </div>
    </div>
  );
}