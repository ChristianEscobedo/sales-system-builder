"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";

export function StepsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <HelpCircle className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-white/10 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">How to Use This Builder</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex items-start gap-3">
            <Badge variant="default" className="bg-purple-600 shrink-0">Step 1</Badge>
            <p className="text-gray-300">
              Fill out prompt form to dynamically update the prompt on the right
              <span className="text-gray-400 text-sm block mt-1">
                (If you don't know what to input use autogenerate)
              </span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Badge variant="default" className="bg-purple-600 shrink-0">Step 2</Badge>
            <p className="text-gray-300">
              Copy your prompt from the corresponding step you are on - start with 'Landing Page' and work your way over till finished.
              <span className="text-gray-400 text-sm block mt-1">
                (Make sure to clear errors in BOLT before proceeding)
              </span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Badge variant="default" className="bg-purple-600 shrink-0">Step 3</Badge>
            <p className="text-gray-300">
              Paste your prompt in BOLT.new chat interface to build your system using each prompt in order.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Badge variant="default" className="bg-purple-600 shrink-0">Step 4</Badge>
            <p className="text-gray-300">
              Deploy your system to StackBlitz to publish live on the web
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Badge variant="default" className="bg-purple-600 shrink-0">Step 5</Badge>
            <p className="text-gray-300">
              Start making sales
              <span className="text-gray-400 text-sm block mt-1">
                (Watch all videos for detailed overview)
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 