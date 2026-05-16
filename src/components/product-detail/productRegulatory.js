export const productRegulatory = (product) => {

  return `

    <section class="pb-20 md:pb-28 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <h2 class="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
        ">

          Regulatory Information

        </h2>

        <div class="
          mt-10
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          ${product.regulatory.map(item => `

            <div class="
              bg-stone-50
              border
              border-slate-200
              rounded-2xl
              p-6
            ">

              <p class="
                text-sm
                text-slate-500
              ">

                ${item.label}

              </p>

              <h3 class="
                mt-3
                text-xl
                font-bold
                text-slate-900
              ">

                ${item.value}

              </h3>

            </div>

          `).join('')}

        </div>

      </div>

    </section>

  `

}