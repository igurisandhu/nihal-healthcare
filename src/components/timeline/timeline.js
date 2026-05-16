import { timelineData } from './timelineData'

export const timeline = () => {

  return `

    <section class="timeline-section py-20 md:py-24 lg:py-32 bg-stone-50 overflow-hidden">

      <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="relative">

          <!-- Center Line -->
          <div class="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            w-[2px]
            h-full
            bg-slate-200
            -translate-x-1/2
          "></div>

          <!-- Timeline Items -->
          <div class="space-y-16 md:space-y-28">

            ${timelineData.map((item, index) => `

              <div class="timeline-card relative">

                ${
                  index % 2 === 0
                  ? `
                    <!-- LEFT CARD -->
                    <div class="md:w-1/2 md:pr-16">

                      <div class="
                        group
                        bg-white
                        border
                        border-slate-200
                        rounded-[28px]
                        p-8 md:p-10
                        shadow-sm
                        hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                        hover:border-cyan-300
                        hover:-translate-y-1
                        transition-all
                        duration-500
                      ">

                        <!-- Year -->
                        <span class="
                          inline-flex
                          items-center
                          justify-center
                          bg-cyan-500
                          text-white
                          text-sm
                          font-bold
                          px-5
                          py-2
                          rounded-full
                        ">

                          ${item.year}

                        </span>

                        <!-- Title -->
                        <h3 class="
                          mt-6
                          text-2xl
                          md:text-3xl
                          font-bold
                          text-slate-900
                          leading-tight
                        ">

                          ${item.title}

                        </h3>

                        <!-- Description -->
                        <p class="
                          mt-5
                          text-slate-600
                          leading-relaxed
                          text-sm
                          sm:text-base
                        ">

                          ${item.desc}

                        </p>

                      </div>

                    </div>
                  `
                  : `
                    <!-- RIGHT CARD -->
                    <div class="md:w-1/2 md:ml-auto md:pl-16">

                      <div class="
                        group
                        bg-white
                        border
                        border-slate-200
                        rounded-[28px]
                        p-8 md:p-10
                        shadow-sm
                        hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                        hover:border-cyan-300
                        hover:-translate-y-1
                        transition-all
                        duration-500
                      ">

                        <!-- Year -->
                        <span class="
                          inline-flex
                          items-center
                          justify-center
                          bg-cyan-500
                          text-white
                          text-sm
                          font-bold
                          px-5
                          py-2
                          rounded-full
                        ">

                          ${item.year}

                        </span>

                        <!-- Title -->
                        <h3 class="
                          mt-6
                          text-2xl
                          md:text-3xl
                          font-bold
                          text-slate-900
                          leading-tight
                        ">

                          ${item.title}

                        </h3>

                        <!-- Description -->
                        <p class="
                          mt-5
                          text-slate-600
                          leading-relaxed
                          text-sm
                          sm:text-base
                        ">

                          ${item.desc}

                        </p>

                      </div>

                    </div>
                  `
                }

                <!-- Center Dot -->
                <div class="
                  hidden
                  md:flex
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-6
                  h-6
                  rounded-full
                  bg-cyan-500
                  border-[5px]
                  border-stone-50
                  shadow-[0_0_20px_rgba(6,182,212,0.3)]
                "></div>

              </div>

            `).join('')}

          </div>

        </div>

      </div>

    </section>

  `

}