import { testimonialsData } from './testimonialsData'

export const testimonials = () => {

  return `

    <section class="testimonials-section py-20 md:py-24 lg:py-28 bg-slate-900 overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-14 md:mb-16">

          <span class="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

            Testimonials

          </span>

          <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">

            Trusted By Healthcare Professionals

          </h2>

        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          ${testimonialsData.map(testimonial => `

            <div
              class="testimonial-card bg-white/5 border border-white/10 backdrop-blur-md rounded-[28px] p-6 sm:p-8 hover:bg-white/10 transition-all duration-500"
            >

              <!-- Quote Icon -->
              <div class="text-cyan-400 text-5xl font-bold leading-none">
                "
              </div>

              <!-- Review -->
              <p class="mt-5 text-slate-300 leading-relaxed text-sm sm:text-base">

                ${testimonial.review}

              </p>

              <!-- Client -->
              <div class="mt-8 flex items-center gap-4">

                <!-- Image -->
                <div class="w-14 h-14 rounded-full overflow-hidden border border-white/10">

                  <img
                    src="${testimonial.image}"
                    alt="${testimonial.name}"
                    class="w-full h-full object-cover"
                  />

                </div>

                <!-- Info -->
                <div>

                  <h3 class="text-white font-bold text-base">

                    ${testimonial.name}

                  </h3>

                  <p class="text-slate-400 text-sm mt-1">

                    ${testimonial.designation}

                  </p>

                </div>

              </div>

            </div>

          `).join('')}

        </div>

      </div>

    </section>

  `

}