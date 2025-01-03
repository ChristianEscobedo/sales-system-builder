"use client";

interface VideoModule {
  title: string;
  duration?: string;
  description?: string;
  videoUrl?: string;
}

interface VideoModulesProps {
  modules: VideoModule[];
}

export function VideoModules({ modules }: VideoModulesProps) {
  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <div key={index} className="bg-white/5 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-white">{module.title}</h3>
              {module.description && (
                <p className="text-sm text-gray-300 mt-1">{module.description}</p>
              )}
            </div>
            {module.duration && (
              <span className="text-sm text-gray-400">{module.duration}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 