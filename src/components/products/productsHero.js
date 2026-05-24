/**
 * Products Hero Section
 * Title and description for products page
 */

export const productsHero = () => {
  return `
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
  `;
};
