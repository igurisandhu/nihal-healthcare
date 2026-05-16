import heroImg from '../../assets/images/about.jpg'

export const aboutHero = () => {

  return `

    <section class="
      py-20
      md:py-28
      bg-white
      overflow-hidden
    ">

      <div class="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        <div class="
          grid
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        ">

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

              About Nihal Healthcare

            </span>

            <h1 class="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              text-slate-900
              leading-tight
            ">

              Building Trust Through Healthcare Innovation

            </h1>

            <p class="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-relaxed
            ">

              Nihal Healthcare specializes in sterile
              medical disposable manufacturing with
              advanced healthcare production standards,
              precision engineering, and commitment
              towards patient safety and innovation.

            </p>

          </div>

          <!-- IMAGE -->
          <div>

            <div class="
              rounded-[32px]
              overflow-hidden
              bg-stone-100
            ">

              <img
                src="${heroImg}"
                alt="About Nihal Healthcare"
                class="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  lg:h-[600px]
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