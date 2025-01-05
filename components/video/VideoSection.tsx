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
    id: "1miVu99587g",
    title: "Video 2. Understanding Sales Systems",
    description: "Deep dive into how sales systems work and how to create effective funnels that convert"
  }
];

export function VideoSection() {
  const [currentVideo, setCurrentVideo] = useState(VIDEOS[0]);

  return (
    <div className="mb-12">
      <div className="aspect-video w-full max-w-3xl mx-auto mb-4">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <Tabs defaultValue={currentVideo.id} onValueChange={(value) => {
        const video = VIDEOS.find(v => v.id === value);
        if (video) setCurrentVideo(video);
      }}>
        <TabsList className="grid grid-cols-2 w-full max-w-2xl mx-auto">
          {VIDEOS.map((video) => (
            <TabsTrigger key={video.id} value={video.id}>
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