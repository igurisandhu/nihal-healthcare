export const aboutWhyUs = () => {

  const features = [

    'Certified Manufacturing Standards',

    'Advanced Production Facility',

    'Sterile Medical Disposable Solutions',

    'Global Healthcare Quality Certifications',

    'Precision Engineering',

    'Patient Safety Focused',

  ]

  return `

    <section class="
      py-20
      md:py-28
      bg-stone-50
    ">

      <div class="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        <div class="
          max-w-3xl
          mb-16
        ">

          <span class="
            text-cyan-500
            font-semibold
            uppercase
            tracking-[0.2em]
            text-xs
            sm:text-sm
          ">

            Why Choose Us

          </span>

          <h2 class="
            mt-5
            text-3xl
            md:text-5xl
            font-extrabold
            text-slate-900
            leading-tight
          ">

            Trusted Healthcare Manufacturing Excellence

          </h2>

        </div>

        <!-- GRID -->
        <div class="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          ${features.map(feature => `

            <div class="
              bg-white
              border
              border-slate-200
              rounded-[28px]
              p-8
            ">

              <div class="
                w-12
                h-12
                rounded-2xl
                bg-cyan-100
                flex
                items-center
                justify-center
              ">

                <div class="
                  w-4
                  h-4
                  rounded-full
                  bg-cyan-500
                "></div>

              </div>

              <h3 class="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                leading-snug
              ">

                ${feature}

              </h3>

            </div>

          `).join('')}

        </div>

      </div>

    </section>

  `

}