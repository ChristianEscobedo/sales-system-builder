export const defaultAscensionEmailData = {
  productName: "[Product Name]",
  productPrice: "$97",
  mainBenefit: "[Main Benefit]",
  targetAudience: "[Target Audience]",
  painPoint: "[Pain Point]",
  solution: "[Solution]",
  webinarDate: "[Date]",
  webinarTime: "[Time]",
  webinarTitle: "[Webinar Title]",
  callToAction: "webinar",
  highTicketOffer: "[High-Ticket Offer]",
  highTicketPrice: "$997",
  bonusName: "[Bonus Name]",
  bonusValue: 997,
  emails: Array.from({ length: 14 }, (_, i) => ({
    day: i + 1,
    subject: "",
    body: ""
  }))
};