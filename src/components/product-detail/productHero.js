export const productHero = (product) => {

  return `

    <section class="py-16 bg-white overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <!-- CONTENT -->
          <div>

            <span class="
              text-cyan-500
              font-semibold
              uppercase
              tracking-[0.2em]
              text-xs
              sm:text-sm
            ">

              Our Products

            </span>

            <h1 class="
              mt-5
              text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-extrabold
              text-slate-900
              leading-tight
            ">

              ${product.title}

            </h1>

            <p class="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-relaxed
            ">

              ${product.desc}

            </p>

            <!-- FEATURES -->
            <div class="mt-10 grid sm:grid-cols-2 gap-5">

              ${product.features.map(feature => `

                <div class="flex items-center gap-4">

                  <div class="
                    w-3
                    h-3
                    rounded-full
                    bg-cyan-500
                  "></div>

                  <span class="
                    text-slate-700
                    font-medium
                  ">

                    ${feature}

                  </span>

                </div>

              `).join('')}

            </div>

          </div>

          <!-- IMAGE -->
          <div>

            <div class="
              rounded-[32px]
              overflow-hidden
              bg-stone-100
            ">

              <img
                src="${product.image}"
                alt="${product.title}"
                class="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  `

}