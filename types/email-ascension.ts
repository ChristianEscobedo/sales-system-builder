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
  callToAction: "webinar" | "call" | "workshop" | "masterclass";
  highTicketOffer: string;
  highTicketPrice: string;
  bonusName: string;
  bonusValue: number;
  hiddenBonusName: string;
  hiddenBonusValue: number;
  emails: AscensionEmail[];
}

export interface AscensionEmail {
  day: number;
  subject: string;
  body: string;
}

export interface AscensionTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  body: string;
}