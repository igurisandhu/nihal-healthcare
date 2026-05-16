export const feedbackStats = () => {

  return `

    <section class="
      pb-20
      bg-white
    ">

      <div class="
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        <div class="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          ${[
            ['4.9', 'Average Rating'],
            ['500+', 'Healthcare Clients'],
            ['ISO', 'Certified Standards'],
            ['98%', 'Client Satisfaction']
          ].map(item => `

            <div class="
              bg-stone-50
              border
              border-slate-200
              rounded-[28px]
              p-6
              text-center
            ">

              <h3 class="
                text-4xl
                font-extrabold
                text-cyan-500
              ">

                ${item[0]}

              </h3>

              <p class="
                mt-3
                text-slate-600
              ">

                ${item[1]}

              </p>

            </div>

          `).join('')}

        </div>

      </div>

    </section>

  `

}