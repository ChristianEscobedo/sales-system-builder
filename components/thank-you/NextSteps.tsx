"use client";

import { Button } from "@/components/ui/button";
import { Users, Newspaper } from "lucide-react";

interface NextStepsProps {
  community: {
    name: string;
    memberCount: string;
    targetAudience: string;
    sharedGoal: string;
  };
  resources: {
    name: string;
    description: string;
  };
}

export function NextSteps({ community, resources }: NextStepsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white text-center">YOUR NEXT STEPS</h2>
      
      <div className="grid gap-6">
        {/* Community Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                STEP 1: Join Our {community.name}
              </h3>
              <p className="text-gray-300">
                Connect with {community.memberCount}+ {community.targetAudience} just like you who want to {community.sharedGoal}.
                We help each other succeed, and we want you to be part of our tribe.
              </p>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            YES! I want to join {community.name}
          </Button>
        </div>

        {/* Resources Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <Newspaper className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                STEP 2: Subscribe to {resources.name}
              </h3>
              <p className="text-gray-300">{resources.description}</p>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Subscribe to {resources.name}
          </Button>
        </div>
      </div>
    </div>
  );
}