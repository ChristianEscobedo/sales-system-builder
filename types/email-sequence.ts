export interface EmailData {
  day: number;
  subject: string;
  body: string;
}

export interface EmailSequenceData {
  productName: string;
  productPrice: string;
  mainBenefit: string;
  targetAudience: string;
  painPoint: string;
  solution: string;
  bonusName: string;
  bonusValue: number;
  emails: EmailData[];
}

export interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  body: string;
}