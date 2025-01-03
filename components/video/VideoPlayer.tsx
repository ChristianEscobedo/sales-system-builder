"use client";

import { VideoConfig } from "@/types/video";

interface VideoPlayerProps {
  config: Partial<VideoConfig>;
}

export function VideoPlayer({ config }: VideoPlayerProps) {
  return (
    <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
      <video
        src={config.url}
        poster={config.thumbnail}
        controls
        className="w-full h-full object-cover"
      />
      {config.duration && (
        <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-sm text-white">
          {config.duration}
        </div>
      )}
    </div>
  );
} 