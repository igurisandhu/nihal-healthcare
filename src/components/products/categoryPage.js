/**
 * CategoryPage Component
 * Displays all variants of a product category
 */
import { injectMeta, generateMetaTags, generateCollectionSchema, generateBreadcrumbSchema, injectMultipleSchemas } from '../../utils/seoMeta.js';
import { WhatsAppQuoteButton } from './whatsappQuoteButton.js';

export function CategoryPage(categoryData) {
  // Inject SEO metadata for category page
  const metaTags = generateMetaTags(categoryData, false);
  injectMeta(metaTags);

  const collectionSchema = generateCollectionSchema(categoryData, categoryData.variants);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Products', url: 'https://nihalhealthcare.com/products.html' },
    { name: categoryData.name },
  ]);
  injectMultipleSchemas([collectionSchema, breadcrumbSchema]);

  const variantsHtml = categoryData.variants
    .map((variant) => {
      const sizeLabel = variant.size || variant.gauge;
      const sizeOrGaugeInfo = variant.needleGauges
        ? `${variant.needleGauges.length} gauge options`
        : variant.gauge
          ? 'Single gauge'
          : 'Multiple sizes';

      const imageUrl = variant.image || 
                      'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=400&h=300&fit=crop';

      return `
        <div onclick="window.location.href='/products/${variant.categoryId}/${variant.slug}.html'" class="variant-card group bg-white rounded-[24px] overflow-hidden border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
        
          <div class="relative h-56 bg-slate-100 overflow-hidden">
            <img 
              src="${imageUrl}"
              alt="${variant.name}"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <span class="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ${sizeLabel}
            </span>
          </div>

          <div class="p-6">

            <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
              ${variant.name}
            </h3>

            <p class="text-sm text-slate-600 mb-4 line-clamp-2">
              ${variant.briefDescription}
            </p>

            <div class="mb-6 space-y-1 text-xs text-slate-500">
              <p>• ${sizeOrGaugeInfo}</p>
              <p>• ${variant.sterilization}</p>
              <p>• ${variant.classification}</p>
            </div>

            <div class="flex gap-2">
              <a 
                href="/products/${variant.categoryId}/${variant.slug}.html"
                class="flex-1 bg-slate-900 hover:bg-cyan-600 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition text-center"
              >
                Details
              </a>

              <a 
                href="https://wa.me/919218511425?text=${encodeURIComponent(`Hi Nihal Healthcare, I am interested in ${variant.name}. Please send me a quote.`)}"
                target="_blank"
                rel="noopener noreferrer"
                onclick="event.stopPropagation()"
                class="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition text-center"
              >
                Get Quote
              </a>
            </div>

          </div>

        </div>
      `;
    })
    .join('');

  return `
    <div class="category-page">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">${categoryData.name}</h1>
          <p class="text-lg text-cyan-100 mb-8 max-w-3xl">${categoryData.description}</p>
          <div class="flex flex-wrap items-center gap-3 text-sm">
            <span class="bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full">
              ${categoryData.variants.length} Variants
            </span>
            <span class="bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full">
              CE Certified
            </span>
            <span class="bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full">
              ETO Sterilized
            </span>
          </div>
        </div>
      </section>

      <!-- Variants Grid -->
      <section class="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-slate-900 mb-2">Available Variants</h2>
            <p class="text-slate-600">
              Select a product to view detailed specifications and request a quote
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            ${variantsHtml}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
          <p class="text-white/90 mb-8 text-lg">
            Contact our specialist team for bulk orders, custom specifications, or technical support.
          </p>
          <a 
            href="https://wa.me/919218511425?text=Hi%20Nihal%20Healthcare,%20I%20am%20interested%20in%20${encodeURIComponent(categoryData.name)}.%20Could%20you%20please%20provide%20more%20information%20and%20pricing?"
            class="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  `;
}

