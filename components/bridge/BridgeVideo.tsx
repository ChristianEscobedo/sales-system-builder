"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BridgeVideoProps {
  video: {
    url: string;
    thumbnail: string;
    title: string;
    duration: string;
    previewDuration: string;
  };
  cta: {
    text: string;
    subtext: string;
  };
}

export function BridgeVideo({ video, cta }: BridgeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40">
          {/* Video Thumbnail Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    className="bg-purple-600/90 hover:bg-purple-700/90 text-white rounded-full p-8 backdrop-blur-sm border border-purple-400/20 mb-4"
                  >
                    <Play size={32} className="ml-2" />
                  </Button>
                  <p className="text-white/90 text-lg font-medium backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-white/10">
                    Watch {video.previewDuration} Preview
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Video Element */}
          <video
            className="w-full h-full object-cover"
            poster={video.thumbnail}
            playsInline
            muted={isMuted}
          >
            <source src={video.url} type="video/mp4" />
          </video>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center justify-between">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>

              <div className="flex items-center gap-4">
                <span className="text-white/90 text-sm">{video.duration}</span>
                <Button
                  onClick={() => setIsMuted(!isMuted)}
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <Button className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            {cta.text}
          </Button>
          <p className="mt-2 text-sm text-gray-400">{cta.subtext}</p>
        </div>
      </div>
    </div>
  );
}