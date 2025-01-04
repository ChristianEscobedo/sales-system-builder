export interface SavedPrompt {
  id: string;
  user_id: string;
  title: string;
  content: any;
  created_at: string;
  updated_at: string;
}

export type UserTier = 'free' | 'pro' | 'whitelabel' | 'master';

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  tier: UserTier;
  tier_expires_at?: string;
  credits_remaining?: number;
  updated_at?: string;
}

export interface TierFeatures {
  maxPrompts: number;
  maxSaves: number;
  canExport: boolean;
  canWhitelabel: boolean;
  canResell: boolean;
  priceMonthly: number;
  priceYearly: number;
}

export const TIER_FEATURES: Record<UserTier, TierFeatures> = {
  free: {
    maxPrompts: 3,
    maxSaves: 1,
    canExport: false,
    canWhitelabel: false,
    canResell: false,
    priceMonthly: 0,
    priceYearly: 0
  },
  pro: {
    maxPrompts: 100,
    maxSaves: 50,
    canExport: true,
    canWhitelabel: false,
    canResell: false,
    priceMonthly: 47,
    priceYearly: 470
  },
  whitelabel: {
    maxPrompts: 500,
    maxSaves: 250,
    canExport: true,
    canWhitelabel: true,
    canResell: false,
    priceMonthly: 97,
    priceYearly: 970
  },
  master: {
    maxPrompts: -1, // unlimited
    maxSaves: -1, // unlimited
    canExport: true,
    canWhitelabel: true,
    canResell: true,
    priceMonthly: 297,
    priceYearly: 2970
  }
}; 