export interface AscensionEmail {
  day: number;
  subject: string;
  content: string;
  body: string;
  type: 'invitation' | 'reminder' | 'lastChance';
}

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
  bonusValue: number;
  hiddenBonusName: string;
  hiddenBonusValue: number;
  highTicketOffer: string;
  highTicketPrice: string;
  callToAction: "webinar" | "workshop" | "masterclass" | "call";
  emails: AscensionEmail[];
} 