/**
 * Products Component - Updated for hierarchical product categories
 * Displays product categories with variants count
 */
import { productsDatabase } from '../../data/productsDatabase.js'
import { productsHero } from './productsHero.js'

export const products = () => {
  const { categories } = productsDatabase

  return `
    ${productsHero()}

    <section class="products-section py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <div>
            <span class="text-cyan-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Product Categories
            </span>
            <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
              Explore Our Collections
            </h2>
          </div>
        </div>

        <!-- Category Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          ${categories
            .map(
              (category) => `
            <a
              href="/products/${category.slug}.html"
              class="category-card group bg-white border border-slate-200 rounded-[24px] md:rounded-[32px] overflow-hidden hover:border-cyan-500 hover:shadow-2xl transition-all duration-500"
            >
              <!-- Image Container -->
              <div class="relative h-[240px] sm:h-[280px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img 
                  src="${category.image || 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=600&h=400&fit=crop'}"
                  alt="${category.name}"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="p-6 sm:p-8">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-3 py-1 mb-4">
                  <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <p class="text-xs font-semibold text-cyan-700">${category.variantCount} Variants</p>
                </div>

                <!-- Title -->
                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  ${category.name}
                </h3>

                <!-- Description -->
                <p class="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  ${category.shortDescription}
                </p>

                <!-- Features -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">ISO 13485</span>
                  <span class="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">ETO Sterilized</span>
                </div>

                <!-- CTA Arrow -->
                <div class="flex items-center gap-2 text-slate-900 font-semibold group-hover:text-cyan-600 transition-colors">
                  <span class="text-sm">Explore Category</span>
                  <svg 
                    class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          `
            )
            .join('')}
        </div>

        <!-- CTA Section -->
        <div class="mt-20 rounded-[32px] bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12 text-center text-white overflow-hidden relative">
          <!-- Decorative Elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24"></div>

          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">Need Help Finding the Right Product?</h3>
            <p class="text-white/90 mb-8 max-w-2xl mx-auto">
              Our specialist team is ready to help you find the perfect medical device solution for your needs
            </p>
            <a 
              href="https://wa.me/919218511425?text=Hi%20Nihal%20Healthcare,%20I%20need%20help%20finding%20the%20right%20product%20for%20my%20requirements."
              class="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}