/**
 * WhatsAppQuoteButton Component
 * Reusable component for WhatsApp quote CTAs
 */
import { getWhatsAppQuoteUrl } from '../../utils/seoMeta.js';

const WHATSAPP_NUMBER = '919855511552';

export function WhatsAppQuoteButton(variant, text = 'Request Quote', size = 'md') {
  const whatsappLink = getWhatsAppQuoteUrl(WHATSAPP_NUMBER, variant);
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return `
    <a 
      href="${whatsappLink}"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition ${sizeClasses[size]}"
    >
      <span>💬</span>
      <span>${text}</span>
    </a>
  `;
}
