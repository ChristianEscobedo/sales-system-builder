export interface AscensionEmailData {
  productName: string;
  productPrice: string;
  mainBenefit: string;
  targetAudience: string;
  painPoint: string;
  solution: string;
  webinarDate: string;
  webinarTime: string;
  webinarTitle: string;
  bonusName: string;
  bonusValue: string;
  earlyBirdDiscount: string;
  hiddenBonusName: string;
  hiddenBonusValue: string;
  emails: {
    subject: string;
    content: string;
    type: 'invitation' | 'reminder' | 'lastChance';
    scheduledFor?: string;
  }[];
} 