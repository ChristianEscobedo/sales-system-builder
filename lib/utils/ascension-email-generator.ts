import type { AscensionEmail, AscensionEmailData } from "@/types/email-ascension";

export function generateAscensionEmailContent(email: AscensionEmail, data: AscensionEmailData): string {
  let content = email.body || '';
  
  const replacements = new Map([
    ['[PRODUCT_NAME]', data.productName || '[Product Name]'],
    ['[PRODUCT_PRICE]', data.productPrice || '$97'],
    ['[MAIN_BENEFIT]', data.mainBenefit || '[Main Benefit]'],
    ['[TARGET_AUDIENCE]', data.targetAudience || '[Target Audience]'],
    ['[PAIN_POINT]', data.painPoint || '[Pain Point]'],
    ['[SOLUTION]', data.solution || '[Solution]'],
    ['[WEBINAR_DATE]', data.webinarDate || '[Date]'],
    ['[WEBINAR_TIME]', data.webinarTime || '[Time]'],
    ['[WEBINAR_TITLE]', data.webinarTitle || '[Webinar Title]'],
    ['[CALL_TO_ACTION]', data.callToAction || 'webinar'],
    ['[HIGH_TICKET_OFFER]', data.highTicketOffer || '[High-Ticket Offer]'],
    ['[HIGH_TICKET_PRICE]', data.highTicketPrice || '$997'],
    ['[BONUS_NAME]', data.bonusName || '[Bonus Name]'],
    ['[BONUS_VALUE]', data.bonusValue?.toString() || '997'],
    ['[FIRST_NAME]', '[FIRST_NAME]'],
    ['[SIGNATURE]', '[SIGNATURE]'],
    ['[REGISTRATION_LINK]', '[REGISTRATION_LINK]'],
    ['[WEBINAR_LINK]', '[WEBINAR_LINK]'],
    ['[OFFER_LINK]', '[OFFER_LINK]'],
    ['[REGULAR_PRICE]', (parseInt(data.highTicketPrice?.replace(/[^0-9]/g, '') || '997') * 2).toString()]
  ]);

  replacements.forEach((value, placeholder) => {
    const regex = new RegExp(escapeRegExp(placeholder), 'g');
    content = content.replace(regex, value);
  });

  return content;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}