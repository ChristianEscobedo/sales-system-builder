"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Video {
  id: string;
  title: string;
  description: string;
}

const VIDEOS: Video[] = [
  {
    id: "uUaevSAMeOU",
    title: "Video 1. The Tools and Examples Of Builds",
    description: "Learn the step-by-step process of building effective sales pages that convert visitors into customers"
  },
  {
    id: "video2",
    title: "Video 2 Title",
    description: "Master the art of sales copywriting"
  },
  {
    id: "video3",
    title: "Video 3 Title",
    description: "Advanced sales page strategies"
  },
  {
    id: "video4",
    title: "Video 4 Title",
    description: "Pro tips for maximum conversions"
  }
];

export function VideoSection() {
  const [currentVideo, setCurrentVideo] = useState<Video>(VIDEOS[0]);

  return (
    <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="aspect-video mb-6">
        <iframe
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <Tabs 
        defaultValue={VIDEOS[0].id} 
        className="w-full"
        onValueChange={(value) => {
          const video = VIDEOS.find(v => v.id === value);
          if (video) setCurrentVideo(video);
        }}
      >
        <TabsList className="grid grid-cols-4 w-full">
          {VIDEOS.map((video) => (
            <TabsTrigger 
              key={video.id} 
              value={video.id}
              className="text-sm"
            >
              {video.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white mb-2">
          {currentVideo.title}
        </h3>
        <p className="text-gray-400">
          {currentVideo.description}
        </p>
      </div>
    </div>
  );
} 