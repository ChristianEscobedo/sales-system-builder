"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface UpgradeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
}

export function UpgradeDialog({ isOpen, onClose, feature }: UpgradeDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Upgrade to Pro
          </DialogTitle>
          <DialogDescription>
            Unlock {feature} and all premium features
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Webinar Builder</p>
                <p className="text-sm text-muted-foreground">Create high-converting webinar funnels</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Course Builder</p>
                <p className="text-sm text-muted-foreground">Design professional course layouts</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Email Sequence Builder</p>
                <p className="text-sm text-muted-foreground">Create automated email campaigns</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold">$97</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={() => window.location.href = '/pricing'}
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 