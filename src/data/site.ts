export const BRAND = "Sakhi Beauty Parlour & Services";
export const ADDRESS = "Spanish Villa, Chinchoti, Naigaon East";

export const PHONE_DISPLAY = "+91 91675 26063";
export const PHONE_TEL = "+919167526063";
export const WHATSAPP_NUMBER = "919167526063";

export const TEL_LINK = `tel:${PHONE_TEL}`;

export const DEFAULT_WA_MESSAGE = `Hello ${BRAND}, I would like to book a home service appointment. Please share available slots.`;

export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
