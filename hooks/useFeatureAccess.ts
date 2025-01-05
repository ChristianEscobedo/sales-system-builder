"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import type { SubscriptionTier } from "@/types/database";

type Feature = "optin" | "sales" | "webinar" | "course" | "email";

const FEATURE_ACCESS: Record<SubscriptionTier, Feature[]> = {
  free: ["optin", "sales"],
  pro: ["optin", "sales", "webinar", "course", "email"],
  enterprise: ["optin", "sales", "webinar", "course", "email"]
};

export function useFeatureAccess() {
  const { profile } = useAuth();
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<string>("");

  const canAccess = (feature: Feature) => {
    if (!profile) return false;
    const allowedFeatures = FEATURE_ACCESS[profile.subscription_tier];
    return allowedFeatures.includes(feature);
  };

  const checkAccess = (feature: Feature) => {
    if (canAccess(feature)) {
      return true;
    }
    
    setCurrentFeature(feature);
    setShowUpgradeDialog(true);
    return false;
  };

  return {
    checkAccess,
    showUpgradeDialog,
    currentFeature,
    closeUpgradeDialog: () => setShowUpgradeDialog(false),
    subscriptionTier: profile?.subscription_tier
  };
} 