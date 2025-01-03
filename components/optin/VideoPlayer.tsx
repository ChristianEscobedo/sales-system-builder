"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  url: string;
  thumbnail: string;
  duration: string;
  previewDuration: number;
}

export function VideoPlayer({ url, thumbnail, duration, previewDuration }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10">
      {/* Video Thumbnail Overlay */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        poster={thumbnail}
        playsInline
        muted={isMuted}
      >
        <source src={url} type="video/mp4" />
      </video>

      {/* Controls Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {!isPlaying && (
          <div className="text-center">
            <Button
              onClick={togglePlay}
              className="bg-purple-600/90 hover:bg-purple-700/90 text-white rounded-full p-8 backdrop-blur-sm border border-purple-400/20"
            >
              <Play size={32} className="ml-2" />
            </Button>
            <p className="mt-4 text-white/90 text-lg font-medium backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-white/10">
              Watch {previewDuration} Second Preview
            </p>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-between">
          <Button
            onClick={togglePlay}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>

          <div className="flex items-center gap-4">
            <span className="text-white/90 text-sm">{duration}</span>
            <Button
              onClick={toggleMute}
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}