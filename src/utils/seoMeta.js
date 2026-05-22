/**
 * SEO Metadata Generator
 * Generates JSON-LD schemas, meta tags, and SEO-friendly content
 */

/**
 * Generate Product JSON-LD schema for variant detail pages
 */
export const generateProductSchema = (variant, baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: variant.name,
    description: variant.fullDescription,
    image: variant.image || 'https://nihalhealthcare.com/assets/placeholder-product.jpg',
    manufacturer: {
      '@type': 'Organization',
      name: 'Nihal Healthcare',
      url: baseUrl,
    },
    url: `${baseUrl}/products/${variant.categoryId}/${variant.slug}.html`,
    category: variant.categoryName,
    brand: {
      '@type': 'Brand',
      name: 'Nihal Healthcare',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: 'Contact for pricing',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/products/${variant.categoryId}/${variant.slug}.html`,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Size/Gauge',
        value: variant.size || variant.gauge,
      },
      {
        '@type': 'PropertyValue',
        name: 'Material',
        value: variant.materials?.join(', '),
      },
      {
        '@type': 'PropertyValue',
        name: 'Sterilization Method',
        value: variant.sterilization,
      },
      {
        '@type': 'PropertyValue',
        name: 'Classification',
        value: variant.classification,
      },
      {
        '@type': 'PropertyValue',
        name: 'EMDN Code',
        value: variant.emdnCode,
      },
      {
        '@type': 'PropertyValue',
        name: 'GMDN Code',
        value: variant.gmdnCode,
      },
      {
        '@type': 'PropertyValue',
        name: 'UDI-DI',
        value: variant.udiDi,
      },
    ],
  };
};

/**
 * Generate Product Collection schema for category pages
 */
export const generateCollectionSchema = (category, variants, baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `${baseUrl}/products/${category.slug}.html`,
    mainEntity: {
      '@type': 'Product',
      name: category.name,
      description: category.description,
      image: category.image || 'https://nihalhealthcare.com/assets/placeholder-category.jpg',
      manufacturer: {
        '@type': 'Organization',
        name: 'Nihal Healthcare',
        url: baseUrl,
      },
      '@context': 'https://schema.org',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/products/${category.slug}?search={search_term}`,
        },
      },
    },
    hasPart: variants.map((variant) => ({
      '@type': 'Product',
      name: variant.name,
      description: variant.briefDescription,
      url: `${baseUrl}/products/${variant.categoryId}/${variant.slug}.html`,
      image: variant.image || 'https://nihalhealthcare.com/assets/placeholder-product.jpg',
    })),
  };
};

/**
 * Generate meta tags for a page
 */
export const generateMetaTags = (data, isVariant = false) => {
  const baseUrl = 'https://nihalhealthcare.com';
  let title, description, keywords, ogImage, url;

  if (isVariant) {
    // Variant detail page
    title = `${data.name} | Medical Syringes & Needles | Nihal Healthcare`;
    description = `${data.briefDescription}. Available with ${data.needleGauges?.length || data.gauge ? 'multiple options' : 'various sizes'}. ISO 13485 certified. ETO sterilized. Contact for quote.`;
    keywords = `${data.name}, ${data.categoryName}, ${data.size || data.gauge}, sterile syringe, hypodermic needle, medical device, ISO 13485, ${data.emdnCode}`;
    ogImage = data.image || 'https://nihalhealthcare.com/assets/images/brand/og-image-nihal-healthcare-logo.jpg';
    url = `${baseUrl}/products/${data.categoryId}/${data.slug}.html`;
  } else {
    // Category page
    title = `${data.name} | Nihal Healthcare - Medical Supplies`;
    description = data.description;
    keywords = `${data.name}, sterile syringes, hypodermic needles, medical devices, ISO 13485, ETO sterilized, bulk ordering`;
    ogImage = data.image || 'https://nihalhealthcare.com/assets/images/brand/og-image-nihal-healthcare-logo.jpg';
    url = `${baseUrl}/products/${data.slug}.html`;
  }

  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: url,
    ogType: isVariant ? 'product' : 'website',
    ogLogo: 'https://nihalhealthcare.com/assets/images/nihal-healthcare-logo.png',
    ogSiteName: 'Nihal Healthcare',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    canonical: url,
    robots: 'index, follow',
  };
};

/**
 * Inject favicon link tags into document head
 */
export const injectFavicons = () => {
  const favicons = [
    { rel: 'icon', type: 'image/x-icon', href: '/assets/favicons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' },
    { rel: 'apple-touch-icon', href: '/assets/favicons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/favicons/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/assets/favicons/android-chrome-512x512.png' },
  ];

  // Remove existing favicon links to avoid duplicates
  document.querySelectorAll('link[data-favicon="true"]').forEach((el) => el.remove());

  favicons.forEach(({ rel, type, sizes, href }) => {
    const link = document.createElement('link');
    link.rel = rel;
    if (type) link.type = type;
    if (sizes) link.sizes = sizes;
    link.href = href;
    link.setAttribute('data-favicon', 'true');
    document.head.appendChild(link);
  });
};

/**
 * Inject meta tags into document head
 */
/**
 * Inject JSON-LD schema into document head
 */
export const injectSchema = (schema) => {
  // Remove existing schemas
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo="true"]');
  existingScripts.forEach((script) => script.remove());

  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo', 'true');
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
};

/**
 * Generate breadcrumb schema and HTML
 */
export const generateBreadcrumbs = (items) => {
  const baseUrl = 'https://nihalhealthcare.com';

  // Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  // HTML
  const breadcrumbHtml = `
    <nav class="breadcrumb" aria-label="breadcrumb">
      <ol class="flex gap-2 text-sm">
        ${items
          .map(
            (item, index) => `
          <li class="flex items-center">
            <a href="${item.url}" class="text-blue-600 hover:underline">${item.name}</a>
            ${index < items.length - 1 ? '<span class="mx-2 text-gray-400">/</span>' : ''}
          </li>
        `
          )
          .join('')}
      </ol>
    </nav>
  `;

  return { schema: breadcrumbSchema, html: breadcrumbHtml };
};

/**
 * Build WhatsApp quote message
 */
export const buildWhatsAppQuoteMessage = (variant, selectedSize = null, selectedGauge = null) => {
  const productName = variant.name;
  const sizeInfo = selectedSize || selectedGauge || variant.size || variant.gauge;
  const materials = variant.materials?.join(', ') || 'As per specifications';
  const sterilization = variant.sterilization;
  const emdn = variant.emdnCode;
  const gmdn = variant.gmdnCode;

  const message = `Hi Nihal Healthcare,

I am interested in your *${productName}* product.

**Product Details:**
• Size/Gauge: ${sizeInfo}
• Material: ${materials}
• Sterilization: ${sterilization}
• Classification: ${variant.classification}
• EMDN Code: ${emdn}
• GMDN Code: ${gmdn}

Please send me a quotation with:
1. Pricing per unit and bulk rates
2. Minimum Order Quantity (MOQ)
3. Lead time for delivery
4. Available payment terms

Thank you!`;

  return encodeURIComponent(message);
};

/**
 * Generate WhatsApp URL with pre-filled message
 */
export const getWhatsAppQuoteUrl = (phoneNumber, variant, selectedSize = null, selectedGauge = null) => {
  const message = buildWhatsAppQuoteMessage(variant, selectedSize, selectedGauge);
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

/**
 * Format phone number for schema.tel URI format
 */
export const formatPhoneForSchema = (phone) => {
  // Convert +919218511425 to tel:+919218511425
  return `tel:${phone.replace(/\s/g, '')}`;
};

/**
 * Format email for schema mailto URI format
 */
export const formatEmailForSchema = (email) => {
  return `mailto:${email}`;
};

/**
 * Generate Organization JSON-LD schema
 */
export const generateOrganizationSchema = (config = {}) => {
  const baseUrl = config.baseUrl || 'https://nihalhealthcare.com';
  const phone = config.phone || '+919218511425';
  const email = config.email || 'contact@nihalhealthcare.com';
  const whatsapp = config.whatsapp || '+919218511425';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nihal Healthcare',
    url: baseUrl,
    logo: `${baseUrl}/assets/nihal-healthcare-logo.png`,
    description: 'Leading manufacturer and supplier of sterile medical syringes and hypodermic needles. ISO 13485 certified. ETO sterilized medical devices.',
    foundingDate: '2007',
    foundingLocation: 'India',
    contactPoint: {
      '@type': 'ContactPoint',
      name: 'Customer Service',
      telephone: phone,
      contactType: 'Customer Service',
      email: email,
      areaServed: 'IN',
      availableLanguageId: 'en',
    },
    // sameAs: [
    //   'https://www.facebook.com/nihalhealthcare',
    //   'https://www.linkedin.com/company/nihal-healthcare',
    //   'https://www.youtube.com/@nihalhealthcare',
    //   'https://www.instagram.com/nihalhealthcare',
    // ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'India',
      addressRegion: 'India',
    },
  };
};

/**
 * Generate ContactPoint schema for contact pages
 */
export const generateContactPointSchema = (config = {}) => {
  const phone = config.phone || '+919218511425';
  const email = config.email || 'contact@nihalhealthcare.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    name: 'Nihal Healthcare - Customer Support',
    telephone: phone,
    email: email,
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguageId: 'en',
  };
};

/**
 * Generate LocalBusiness schema for contact pages
 */
export const generateLocalBusinessSchema = (config = {}) => {
  const baseUrl = config.baseUrl || 'https://nihalhealthcare.com';
  const phone = config.phone || '+919218511425';
  const email = config.email || 'contact@nihalhealthcare.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nihal Healthcare',
    description: 'Manufacturer and supplier of sterile medical devices - syringes and hypodermic needles. ISO 13485 certified.',
    url: baseUrl,
    telephone: phone,
    email: email,
    image: `${baseUrl}/assets/nihal-healthcare-logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      name: 'Customer Service',
      telephone: phone,
      contactType: 'Customer Service',
      email: email,
    },
  };
};

/**
 * Generate Article/BlogPosting schema for blog posts
 */
export const generateArticleSchema = (articleData, baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: articleData.title,
    description: articleData.description,
    image: articleData.image || `${baseUrl}/assets/placeholder-blog.jpg`,
    datePublished: articleData.publishedDate,
    dateModified: articleData.modifiedDate || articleData.publishedDate,
    author: {
      '@type': 'Organization',
      name: articleData.author || 'Nihal Healthcare',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nihal Healthcare',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/nihal-healthcare-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleData.url || `${baseUrl}/blogs`,
    },
    keywords: articleData.keywords,
    wordCount: articleData.wordCount,
    articleSection: articleData.category || 'Healthcare News',
    url: articleData.url || `${baseUrl}/blogs`,
  };
};

/**
 * Generate FAQPage schema with multiple questions and answers
 */
export const generateFAQSchema = (faqItems = [], baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

/**
 * Generate BreadcrumbList schema with HTML rendering for product detail pages
 */
export const addBreadcrumbsToProductDetail = (items, baseUrl = 'https://nihalhealthcare.com') => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return breadcrumbSchema;
};

/**
 * Extend product schema with medical device codes
 */
export const enhanceProductSchema = (baseSchema, medicalCodes = {}) => {
  if (medicalCodes.ean) {
    baseSchema.sku = medicalCodes.ean;
  }
  
  if (medicalCodes.gtin) {
    baseSchema.gtin13 = medicalCodes.gtin;
  }
  
  if (medicalCodes.udiDi) {
    if (!baseSchema.additionalProperty) {
      baseSchema.additionalProperty = [];
    }
    baseSchema.additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'UDI-DI Code',
      value: medicalCodes.udiDi,
    });
  }
  
  // Add certification information
  if (medicalCodes.certifications) {
    baseSchema.certifications = {
      '@type': 'ItemList',
      itemListElement: medicalCodes.certifications.map((cert, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: cert,
      })),
    };
  }
  
  return baseSchema;
};

/**
 * Generate HomePage schema for homepage
 */
export const generateHomePageSchema = (baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nihal Healthcare',
    url: baseUrl,
    description: 'Leading manufacturer of sterile medical devices - syringes and hypodermic needles. ISO 13485 certified.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/products?search={search_term}`,
      },
    },
  };
};

/**
 * Inject meta tags into document head.
 * The single entry point for all meta tag injection across all page types.
 * Accepts the shape returned by getPageMetadata() or generateMetaTags().
 */
export const injectMeta = (tags) => {
  // Set page title
  if (tags.title) {
    document.title = tags.title;
  }

  // Remove existing meta tags (to avoid duplicates)
  const existingMeta = document.querySelectorAll('meta[data-seo="true"]');
  existingMeta.forEach((tag) => tag.remove());

  // Helper function to add or update meta tag
  const addOrUpdateMeta = (name, content, property = false) => {
    if (!content) return;
    const attr = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, name);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Add standard meta tags
  addOrUpdateMeta('description', tags.description);
  addOrUpdateMeta('keywords', tags.keywords);
  addOrUpdateMeta('robots', tags.robots || 'index, follow');
  addOrUpdateMeta('author', tags.author);
  addOrUpdateMeta('viewport', tags.viewport || 'width=device-width, initial-scale=1.0');

  // Add Open Graph tags — fall back to base fields if og-specific ones are not set
  addOrUpdateMeta('og:title', tags.ogTitle || tags.title, true);
  addOrUpdateMeta('og:description', tags.ogDescription || tags.description, true);
  addOrUpdateMeta('og:image', tags.ogImage, true);
  addOrUpdateMeta('og:url', tags.ogUrl || tags.canonical, true);
  addOrUpdateMeta('og:type', tags.ogType || 'website', true);
  addOrUpdateMeta('og:locale', tags.ogLocale || 'en_US', true);
  addOrUpdateMeta('og:logo', tags.ogLogo || 'https://nihalhealthcare.com/assets/images/nihal-healthcare-logo.png', true);
  addOrUpdateMeta('og:site_name', tags.ogSiteName || 'Nihal Healthcare', true);

  // Add Twitter Card tags — fall back to OG / base fields
  addOrUpdateMeta('twitter:card', tags.twitterCard || 'summary_large_image');
  addOrUpdateMeta('twitter:title', tags.twitterTitle || tags.ogTitle || tags.title);
  addOrUpdateMeta('twitter:description', tags.twitterDescription || tags.ogDescription || tags.description);
  addOrUpdateMeta('twitter:image', tags.twitterImage || tags.ogImage);

  // Add canonical tag
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = tags.canonical;

  // Inject favicons
  injectFavicons();
};

/**
 * Inject multiple JSON-LD schemas at once
 */
export const injectMultipleSchemas = (schemas) => {
  // Remove existing SEO schemas
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo="true"]');
  existingScripts.forEach((script) => script.remove());

  // Add new schemas
  schemas.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'true');
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
  });
};

/**
 * Generate BreadcrumbList schema for any page
 * @param {Array} items - [{ name, url }] — last item url can be omitted
 */
export const generateBreadcrumbSchema = (items, baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
        ? item.url.startsWith('http')
          ? item.url
          : `${baseUrl}${item.url}`
        : undefined,
    })),
  };
};

/**
 * Generate ItemList schema for a product listing page
 * @param {Array} products - [{ name, url, description, image }]
 */
export const generateProductListSchema = (products, baseUrl = 'https://nihalhealthcare.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nihal Healthcare Medical Products',
    description: 'Complete range of ISO 13485 certified sterile medical devices — syringes and hypodermic needles.',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        url: product.url.startsWith('http') ? product.url : `${baseUrl}${product.url}`,
        image: product.image || `${baseUrl}/assets/images/brand/og-image-nihal-healthcare-logo.jpg`,
        brand: { '@type': 'Brand', name: 'Nihal Healthcare' },
        manufacturer: { '@type': 'Organization', name: 'Nihal Healthcare', url: baseUrl },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: product.url.startsWith('http') ? product.url : `${baseUrl}${product.url}`,
        },
      },
    })),
  };
};
