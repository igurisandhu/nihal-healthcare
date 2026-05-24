import{t as e}from"./productsDatabase-CcTIPkxC.js";import{n as t,t as n}from"./ScrollTrigger-CNrhOlEx.js";var r=()=>`
    <section class="products-hero relative overflow-hidden bg-gradient-to-br from-slate-50 to-cyan-50 py-16 md:py-24 border-b border-slate-200">
      <!-- Background Glow -->
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm mb-6 md:mb-8">
          <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
          <p class="text-sm font-semibold text-slate-700">Comprehensive Product Range</p>
        </div>

        <!-- Title -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-slate-900 mb-6 md:mb-8">
          Our Complete Medical Device Solutions
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8 md:mb-12">
          Explore our comprehensive range of CE certified sterile medical devices. From precision hypodermic syringes to specialized needles, every product is engineered for safety, accuracy, and reliability in clinical and laboratory environments.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div class="bg-white rounded-xl p-4 md:p-6 border border-slate-200">
            <p class="text-2xl md:text-3xl font-bold text-slate-900">23+</p>
            <p class="text-sm text-slate-600 mt-2">Product Variants</p>
          </div>
          <div class="bg-white rounded-xl p-4 md:p-6 border border-slate-200">
            <p class="text-2xl md:text-3xl font-bold text-cyan-600">3</p>
            <p class="text-sm text-slate-600 mt-2">Main Categories</p>
          </div>
          <div class="bg-white rounded-xl p-4 md:p-6 border border-slate-200">
            <p class="text-2xl md:text-3xl font-bold text-slate-900">100%</p>
            <p class="text-sm text-slate-600 mt-2">Sterile & Safe</p>
          </div>
          <div class="bg-white rounded-xl p-4 md:p-6 border border-slate-200">
            <p class="text-2xl md:text-3xl font-bold text-slate-900">ISO</p>
            <p class="text-sm text-slate-600 mt-2">13485 Certified</p>
          </div>
        </div>
      </div>
    </section>
  `,i=()=>{let{categories:t}=e;return`
    ${r()}

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
          ${t.map(e=>`
            <a
              href="/products/${e.slug}.html"
              class="category-card group bg-white border border-slate-200 rounded-[24px] md:rounded-[32px] overflow-hidden hover:border-cyan-500 hover:shadow-2xl transition-all duration-500"
            >
              <!-- Image Container -->
              <div class="relative h-[240px] sm:h-[280px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img 
                  src="${e.image||`https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=600&h=400&fit=crop`}"
                  alt="${e.name}"
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
                  <p class="text-xs font-semibold text-cyan-700">${e.variantCount} Variants</p>
                </div>

                <!-- Title -->
                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  ${e.name}
                </h3>

                <!-- Description -->
                <p class="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  ${e.shortDescription}
                </p>

                <!-- Features -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">CE Certified</span>
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
          `).join(``)}
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
  `};t.registerPlugin(n);var a=()=>{window.innerWidth>=1024&&t.from(`.product-card`,{y:80,opacity:20,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.products-section`,start:`top 75%`}})};export{i as n,a as t};