/**
 * VariantDetailPage Component
 * Displays detailed information for a single product variant
 */
import { getWhatsAppQuoteUrl } from '../../utils/seoMeta.js';

const WHATSAPP_NUMBER = '919218511425';

// Product variant placeholder images
const variantImages = {
  'sterile-hypodermic-syringes': {
    '1ml-syringe-with-needle': 'https://picsum.photos/800/600?random=111',
    '2ml-syringe-with-needle': 'https://picsum.photos/800/600?random=112',
    '3ml-syringe-with-needle': 'https://picsum.photos/800/600?random=113',
    '5ml-syringe-with-needle': 'https://picsum.photos/800/600?random=114',
    '10ml-syringe-with-needle': 'https://picsum.photos/800/600?random=115',
    '20ml-syringe-with-needle': 'https://picsum.photos/800/600?random=116',
    '50ml-syringe-with-needle': 'https://picsum.photos/800/600?random=117',
  },
  'sterile-hypodermic-syringes-without-needle': {
    '1ml-syringe-without-needle': 'https://picsum.photos/800/600?random=121',
    '2ml-syringe-without-needle': 'https://picsum.photos/800/600?random=122',
    '3ml-syringe-without-needle': 'https://picsum.photos/800/600?random=123',
    '5ml-syringe-without-needle': 'https://picsum.photos/800/600?random=124',
    '10ml-syringe-without-needle': 'https://picsum.photos/800/600?random=125',
    '20ml-syringe-without-needle': 'https://picsum.photos/800/600?random=126',
    '50ml-syringe-without-needle': 'https://picsum.photos/800/600?random=127',
  },
  'sterile-hypodermic-needles': {
    '16g-hypodermic-needle': 'https://picsum.photos/800/600?random=131',
    '18g-hypodermic-needle': 'https://picsum.photos/800/600?random=132',
    '20g-hypodermic-needle': 'https://picsum.photos/800/600?random=133',
    '21g-hypodermic-needle': 'https://picsum.photos/800/600?random=134',
    '22g-hypodermic-needle': 'https://picsum.photos/800/600?random=135',
    '23g-hypodermic-needle': 'https://picsum.photos/800/600?random=136',
    '24g-hypodermic-needle': 'https://picsum.photos/800/600?random=137',
    '25g-hypodermic-needle': 'https://picsum.photos/800/600?random=138',
    '26g-hypodermic-needle': 'https://picsum.photos/800/600?random=139',
  },
};

export function VariantDetailPage(variant) {
  const whatsappLink = getWhatsAppQuoteUrl(WHATSAPP_NUMBER, variant);
  const imageUrl = variantImages[variant.categoryId]?.[variant.slug] || 
                  'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=800&h=600&fit=crop';

  const gaugesOrSizesHtml = variant.needleGauges
    ? variant.needleGauges
        .map((gauge) => {
          const gaugeLink = getWhatsAppQuoteUrl(WHATSAPP_NUMBER, variant, null, gauge);
          return `
        <a 
          href="${gaugeLink}"
          target="_blank"
          rel="noopener noreferrer"
          class="gauge-pill inline-flex items-center gap-3 bg-white border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 px-4 py-3 rounded-lg transition group"
        >
          <span class="font-semibold text-slate-900 group-hover:text-cyan-600">${gauge}</span>
          <span class="text-xs text-green-600 font-bold opacity-0 group-hover:opacity-100 transition">Quote →</span>
        </a>
      `;
        })
        .join('')
    : '';

  const specificationsRows = [
    { label: 'Material', value: variant.materials?.join(', ') },
    { label: 'Sterilization', value: variant.sterilization },
    { label: 'Classification', value: variant.classification },
    { label: 'EMDN Code', value: variant.emdnCode },
    { label: 'GMDN Code', value: variant.gmdnCode },
    { label: 'UDI-DI', value: variant.udiDi },
    { label: 'MDN Code', value: variant.mdn },
    { label: 'MDS Codes', value: variant.mds?.join(', ') },
    { label: 'MDT Codes', value: variant.mdt?.join(', ') },
  ];

  const specsTableHtml = specificationsRows
    .map(
      (spec, idx) => `
    <tr class="${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}">
      <td class="px-6 py-4 font-semibold text-slate-900">${spec.label}</td>
      <td class="px-6 py-4 text-slate-700">${spec.value}</td>
    </tr>
  `
    )
    .join('');

  return `
    <div class="variant-detail-page">
      <!-- Breadcrumb -->
      <nav class="bg-slate-50 border-b border-slate-200 px-6 py-4 md:px-12">
        <div class="max-w-7xl mx-auto">
          <ol class="flex gap-2 text-sm text-slate-600">
            <li><a href="/products.html" class="text-cyan-600 hover:text-cyan-700">Products</a></li>
            <li><span class="text-slate-400">/</span></li>
            <li><a href="/products/${variant.categoryId}.html" class="text-cyan-600 hover:text-cyan-700">${variant.categoryName}</a></li>
            <li><span class="text-slate-400">/</span></li>
            <li class="text-slate-900 font-semibold">${variant.name}</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-[24px] p-8 border border-slate-200">
            <img 
              src="${imageUrl}"
              alt="${variant.name}"
              class="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <!-- Product Info -->
          <div>
            <div class="mb-6">
              <span class="inline-block bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ${variant.size || variant.gauge}
              </span>
              <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">${variant.name}</h1>
            </div>

            <p class="text-lg text-slate-600 mb-8 leading-relaxed">${variant.fullDescription}</p>

            <div class="bg-cyan-50 border-l-4 border-cyan-600 p-6 mb-8 rounded-lg">
              <p class="text-slate-900 mb-2"><strong>Classification:</strong> <span class="text-cyan-600 font-semibold">${variant.classification}</span></p>
              <p class="text-slate-900"><strong>Sterilization:</strong> <span class="text-cyan-600 font-semibold">${variant.sterilization}</span></p>
            </div>

            <!-- WhatsApp Quote Button (Primary CTA) -->
            <a 
              href="${whatsappLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition text-center mb-4 shadow-lg"
            >
              💬 Message for Quote
            </a>

            <p class="text-xs text-slate-500 text-center">
              Click to send product details via WhatsApp. Our team will respond with pricing & MOQ.
            </p>
          </div>
        </div>
      </section>

      <!-- Specifications Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Technical Specifications</h2>
          
          <div class="overflow-x-auto bg-white rounded-[20px] border border-slate-200 shadow-sm">
            <table class="w-full">
              <thead class="bg-slate-900 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Specification</th>
                  <th class="px-6 py-4 text-left font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                ${specsTableHtml}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Sizes/Gauges Section -->
      ${
        variant.needleGauges
          ? `
        <section class="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-slate-200">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Available Needle Gauges</h2>
            <p class="text-slate-600 mb-12">Hover over any gauge to request a quote for that specific variant:</p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              ${gaugesOrSizesHtml}
            </div>
          </div>
        </section>
      `
          : ''
      }

      <!-- Intended Use Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-br from-cyan-50 to-blue-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">Intended Use</h2>
          <p class="text-slate-700 leading-relaxed text-lg">
            ${variant.intendedUse}
          </p>
        </div>
      </section>

      <!-- Regulatory Compliance Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Regulatory Compliance</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">EMDN Code</p>
              <p class="text-2xl font-bold text-slate-900">${variant.emdnCode}</p>
              <p class="text-xs text-slate-600 mt-3">European Medical Device Nomenclature</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">GMDN Code</p>
              <p class="text-2xl font-bold text-slate-900">${variant.gmdnCode}</p>
              <p class="text-xs text-slate-600 mt-3">Global Medical Device Nomenclature</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">Classification</p>
              <p class="text-2xl font-bold text-slate-900">${variant.classification}</p>
              <p class="text-xs text-slate-600 mt-3">Device Classification Level</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">Sterilization</p>
              <p class="text-2xl font-bold text-slate-900">${variant.sterilization}</p>
              <p class="text-xs text-slate-600 mt-3">Method of Sterilization</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">UDI-DI</p>
              <p class="text-lg font-mono font-bold text-slate-900 break-all">${variant.udiDi}</p>
              <p class="text-xs text-slate-600 mt-3">Unique Device Identifier</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">Certification</p>
              <p class="text-2xl font-bold text-slate-900">ISO 13485</p>
              <p class="text-xs text-slate-600 mt-3">Medical Device Quality Management</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Materials Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Materials Used</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${variant.materials
              ?.map(
                (material) => `
              <div class="flex items-start gap-4 bg-white p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
                <div class="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span class="text-cyan-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 text-lg">${material}</p>
                  <p class="text-sm text-slate-600 mt-1">High-quality medical grade material</p>
                </div>
              </div>
            `
              )
              .join('') || ''
            }
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="bg-gradient-to-r from-slate-900 to-cyan-900 text-white py-16 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-4xl mx-auto text-center relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
          <p class="text-cyan-100 mb-8 text-lg">
            Contact our sales team for detailed pricing, bulk discounts, and lead times
          </p>
          <a 
            href="${whatsappLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-white text-cyan-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition"
          >
            💬 Request Quote on WhatsApp
          </a>
        </div>
      </section>
    </div>
  `;
}
