export const productSpecifications = (product) => {

  return `

    <section class="pb-20 md:pb-28 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="
          bg-stone-50
          border
          border-slate-200
          rounded-[32px]
          p-8
          md:p-12
        ">

          <h2 class="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
          ">

            Product Specifications

          </h2>

          <!-- GRID -->
          <div class="
            mt-10
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            ${product.specifications.map(spec => `

              <div class="
                bg-white
                rounded-2xl
                p-6
                border
                border-slate-200
              ">

                <p class="
                  text-sm
                  text-slate-500
                ">

                  ${spec.label}

                </p>

                <h3 class="
                  mt-3
                  text-2xl
                  font-bold
                  text-slate-900
                ">

                  ${spec.value}

                </h3>

              </div>

            `).join('')}

          </div>

        </div>

      </div>

    </section>

  `

}