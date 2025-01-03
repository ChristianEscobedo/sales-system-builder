"use client";

import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

interface AccessInstructionsProps {
  productName: string;
  userEmail: string;
  supportEmail: string;
}

export function AccessInstructions({ productName, userEmail, supportEmail }: AccessInstructionsProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Access Instructions</h3>
          <p className="text-gray-300">
            Click the button below to register and get access to {productName} now.
          </p>
          <div className="bg-purple-500/10 p-4 rounded-lg">
            <p className="text-purple-300">
              <strong>Important:</strong> You must use the same email address you used upon purchase ({userEmail}) to get access.
            </p>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <span className="flex items-center gap-2">
            Get Access Now To {productName}
            <ArrowRight size={18} />
          </span>
        </Button>

        <div className="pt-6 border-t border-white/10">
          <div className="flex items-start gap-3">
            <Mail className="text-purple-400 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-2">Need Help?</h4>
              <p className="text-gray-300 text-sm">
                If you have any questions or need assistance, our support team is here to help:
                <br />
                Email: <a href={`mailto:${supportEmail}`} className="text-purple-400">{supportEmail}</a>
                <br />
                Response Time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}