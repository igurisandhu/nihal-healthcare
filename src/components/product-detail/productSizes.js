export const productSizes = (product) => {

  return `

    <section class="pb-20 md:pb-28 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <h2 class="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
        ">

          Available Sizes

        </h2>

        <div class="
          mt-10
          flex
          flex-wrap
          gap-4
        ">

          ${product.sizes.map(size => `

            <div class="
              px-6
              py-4
              rounded-full
              bg-cyan-50
              border
              border-cyan-200
              text-cyan-700
              font-semibold
            ">

              ${size}

            </div>

          `).join('')}

        </div>

      </div>

    </section>

  `

}