/**
 * Centralized Page Metadata Configuration
 * Contains metadata, description, keywords, and OG data for all pages
 */

const BASE_URL = 'https://nihalhealthcare.com';
const OG_IMAGE = `${BASE_URL}/assets/images/brand/og-image-nihal-healthcare.png`;

export const pageMetadata = {
  home: {
    title: 'Nihal Healthcare - Sterile Medical Syringes & Hypodermic Needles',
    description: 'Leading manufacturer and supplier of ISO 13485 certified sterile medical syringes, hypodermic needles, and medical devices. ETO sterilized. Contact for bulk orders.',
    keywords: 'sterile syringes, hypodermic needles, medical devices, ISO 13485, ETO sterilization, bulk medical supplies, healthcare products',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: BASE_URL,
  },
  about: {
    title: 'About Us | Nihal Healthcare - Medical Device Manufacturer',
    description: 'Discover Nihal Healthcare\'s mission, vision, and commitment to manufacturing high-quality sterile medical devices. ISO 13485 certified with over 100+ years of combined expertise.',
    keywords: 'about nihal healthcare, medical device manufacturer, ISO 13485, company mission, healthcare innovation, sterile manufacturing',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/about.html`,
  },
  products: {
    title: 'Products | Nihal Healthcare - Sterile Syringes & Needles',
    description: 'Browse our complete range of sterile medical products including hypodermic syringes, hypodermic needles, insulin syringes, safety syringes, and disposable syringes. ISO certified.',
    keywords: 'sterile syringes, hypodermic needles, insulin syringes, safety syringes, disposable syringes, medical devices, bulk ordering',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/products.html`,
  },
  contact: {
    title: 'Contact Us | Nihal Healthcare - Medical Device Manufacturer',
    description: 'Get in touch with Nihal Healthcare for product inquiries, bulk orders, and partnerships. Phone: +919218511425 | Email: contact@nihalhealthcare.com | WhatsApp available.',
    keywords: 'contact nihal healthcare, medical device supplier, bulk order inquiry, customer support, medical supplies contact',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/contact.html`,
  },
  blogs: {
    title: 'Blogs | Nihal Healthcare - Healthcare News & Insights',
    description: 'Read latest articles and insights about medical devices, healthcare innovation, sterilization methods, and industry trends from Nihal Healthcare experts.',
    keywords: 'healthcare blogs, medical device news, healthcare innovation, sterilization, medical insights, industry trends',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/blogs.html`,
  },
  certifications: {
    title: 'Certifications & Compliance | Nihal Healthcare',
    description: 'Nihal Healthcare holds ISO 13485, CE marking, and other international certifications ensuring highest quality standards in medical device manufacturing.',
    keywords: 'ISO 13485, CE marking, medical device certifications, compliance, quality standards, regulatory certifications',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/certifications.html`,
  },
  leadership: {
    title: 'Leadership & Team | Nihal Healthcare',
    description: 'Meet the experienced leadership team at Nihal Healthcare driving innovation in medical device manufacturing and supply.',
    keywords: 'nihal healthcare leadership, management team, experienced professionals, medical device experts',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/leadership.html`,
  },
  history: {
    title: 'History & Milestones | Nihal Healthcare',
    description: 'Explore the journey of Nihal Healthcare - from founding to becoming a leading manufacturer of sterile medical devices. Discover our milestones and achievements.',
    keywords: 'nihal healthcare history, company milestones, medical device manufacturer journey, company achievements',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/history.html`,
  },
  feedback: {
    title: 'Feedback & Support | Nihal Healthcare',
    description: 'Share your feedback, suggestions, and experiences with Nihal Healthcare. We value your input to improve our products and services.',
    keywords: 'feedback, customer support, product feedback, nihal healthcare contact',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/feedback.html`,
  },
  
  // Product Categories
  disposableSyringes: {
    title: 'Disposable Syringes | Nihal Healthcare - Sterile Medical Syringes',
    description: 'High-quality disposable sterile syringes available in multiple sizes (1ml-50ml). ISO 13485 certified, ETO sterilized. Suitable for medical and laboratory use. Contact for bulk pricing.',
    keywords: 'disposable syringes, sterile syringes, medical syringes, 1ml 3ml 5ml 10ml 20ml 50ml syringes, ISO certified',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/disposable-syringes.html`,
  },
  safetySyringes: {
    title: 'Safety Syringes | Nihal Healthcare - Needle Safety Syringes',
    description: 'Advanced safety syringes with integrated needle protection mechanisms. ISO 13485 certified. Reduces needlestick injuries. Available in multiple sizes. Contact for quotes.',
    keywords: 'safety syringes, needle safety, safety-engineered devices, needlestick prevention, medical syringes, ISO certified',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/safety-syringes.html`,
  },
  insulinSyringes: {
    title: 'Insulin Syringes | Nihal Healthcare - Sterile Insulin Syringes',
    description: 'Precision insulin syringes designed for accurate dosing. Available with fixed needles or needle-free options. ISO 13485 certified, ETO sterilized. Bulk orders welcome.',
    keywords: 'insulin syringes, diabetes syringes, pre-filled syringes, medical syringes, ISO certified, sterile syringes',
    ogType: 'website',
    ogImage: OG_IMAGE,
    canonical: `${BASE_URL}/insulin-syringes.html`,
  },
};

/**
 * Get metadata for a specific page
 * @param {string} pageName - The key from pageMetadata object (e.g., 'home', 'about', 'contact')
 * @returns {object} Page metadata with all SEO fields
 */
export const getPageMetadata = (pageName) => {
  const metadata = pageMetadata[pageName] || pageMetadata.home;
  
  return {
    baseUrl: BASE_URL,
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    ogType: metadata.ogType || 'website',
    ogImage: metadata.ogImage || OG_IMAGE,
    canonical: metadata.canonical || BASE_URL,
    author: 'Nihal Healthcare',
  };
};

/**
 * Common contact information used across all pages
 */
export const contactInfo = {
  phone: '+919218511425',
  whatsapp: '+919218511425',
  email: 'contact@nihalhealthcare.com',
  baseUrl: BASE_URL,
};

/**
 * Common organization information
 */
export const organizationInfo = {
  name: 'Nihal Healthcare',
  description: 'Leading manufacturer and supplier of sterile medical syringes and hypodermic needles.',
  logo: `${BASE_URL}/assets/logo.png`,
  foundingDate: '2007',
  foundingLocation: 'India',
  socials: {
    facebook: 'https://www.facebook.com/nihalhealthcare',
    linkedin: 'https://www.linkedin.com/company/nihal-healthcare',
    youtube: 'https://www.youtube.com/@nihalhealthcare',
    instagram: 'https://www.instagram.com/nihalhealthcare',
  },
};
