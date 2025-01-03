"use client";

interface VideoPlayerProps {
  videoUrl?: string;
  title?: string;
  poster?: string;
}

export function VideoPlayer({ videoUrl, title, poster }: VideoPlayerProps) {
  return (
    <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
      {videoUrl ? (
        <video
          src={videoUrl}
          poster={poster}
          controls
          className="w-full h-full object-cover"
          title={title}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">Video not available</p>
        </div>
      )}
    </div>
  );
} 