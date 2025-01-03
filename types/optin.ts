export interface OptinConfig {
  header: {
    resourceType: string;
    discount?: number;
  };
  headline: {
    resourceName: string;
    painPoint: string;
    quickWin: string;
    frustrationMethod: string;
  };
  subheadline: {
    resourceType: string;
    timeFrame: string;
  };
  socialProof: {
    downloads: number;
  };
  features: {
    resourceName: string;
    quickWins: string[];
  };
  trustStrip: {
    logos: string[];
    industryProfessionals: {
      number: number;
      type: string;
    };
    metrics?: {
      number: string;
      label: string;
    }[];
  };
  urgency: {
    bonusResourceName: string;
    bonusValue?: number;
  };
  video: {
    url: string;
    thumbnail: string;
    duration: string;
    previewDuration: number;
  };
}