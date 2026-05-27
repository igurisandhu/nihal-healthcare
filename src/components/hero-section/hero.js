
import hero1 from '../../assets/images/hero-1.jpg'
import hero2 from '../../assets/images/hero-2.avif'
import hero3 from '../../assets/images/hero-3.avif'
import hero4 from '../../assets/images/hero-4.jpg'


export const hero = () => {

  return `

    <section class="hero-section relative overflow-hidden bg-stone-50 min-h-screen flex items-center pt-24 lg:pt-20">

      <!-- Background Glow -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">

        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          <!-- Left Content -->
          <div class="text-center lg:text-left">

            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm mb-8">

              <span class="w-2 h-2 rounded-full bg-cyan-500"></span>

              <p class="text-sm font-semibold text-slate-700">
                Trusted Medical Syringe Manufacturer
              </p>

            </div>

            <!-- Heading -->
            <h1 class="hero-title text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] text-slate-900">

              Precision Engineered Syringe Solutions For Modern Healthcare

            </h1>

            <!-- Paragraph -->
            <p class="hero-desc mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">

              Delivering high-quality sterile syringe solutions with advanced manufacturing standards, precision engineering, and trusted medical safety compliance.

            </p>

            <!-- Buttons -->
            <div class="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="/products.html"
                class="inline-flex items-center justify-center bg-slate-900 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Explore Products
              </a>

              <a
                href="/contact.html"
                class="inline-flex items-center justify-center border border-slate-300 hover:border-cyan-500 hover:text-cyan-500 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us
              </a>

            </div>

          </div>

          <!-- Right Image -->
          <div class="relative">

            <!-- Main Image -->
              <div class="relative rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                <img
                  id="hero-image"
                  src="${hero1}"
                  alt="Healthcare"
                  class="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

          </div>

        </div>

      </div>

    </section>

  `

}