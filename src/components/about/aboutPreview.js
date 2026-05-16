import aboutImg from '../../assets/images/about.jpg'

export const aboutPreview = () => {

  return `

    <section class="
      py-20
      md:py-28
      bg-stone-50
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

          <!-- IMAGE -->
          <div>

            <div class="
              rounded-[32px]
              overflow-hidden
              bg-white
            ">

              <img
                src="${aboutImg}"
                alt="About Nihal Healthcare"
                class="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  lg:h-[550px]
                  object-cover
                "
              />

            </div>

          </div>

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

              About Us

            </span>

            <h2 class="
              mt-5
              text-4xl
              md:text-5xl
              font-extrabold
              text-slate-900
              leading-tight
            ">

              Precision Manufacturing For Modern Healthcare

            </h2>

            <p class="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-relaxed
            ">

              Nihal Healthcare specializes in sterile
              medical disposable manufacturing with
              advanced production standards, certified
              quality systems, and healthcare-focused
              innovation.

            </p>

            <!-- HIGHLIGHTS -->
            <div class="
              mt-10
              grid
              sm:grid-cols-2
              gap-5
            ">

              <div class="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
              ">

                <h3 class="
                  text-3xl
                  font-extrabold
                  text-cyan-500
                ">

                  ISO

                </h3>

                <p class="
                  mt-2
                  text-slate-600
                ">

                  Certified Manufacturing

                </p>

              </div>

              <div class="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
              ">

                <h3 class="
                  text-3xl
                  font-extrabold
                  text-cyan-500
                ">

                  Sterile

                </h3>

                <p class="
                  mt-2
                  text-slate-600
                ">

                  Medical Disposable Solutions

                </p>

              </div>

            </div>

            <!-- BUTTON -->
            <div class="mt-10">

              <a
                href="/about.html"
                class="
                  inline-flex
                  items-center
                  gap-3
                  bg-slate-900
                  hover:bg-cyan-500
                  text-white
                  px-7
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >

                Read More

                <span>→</span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  `

}