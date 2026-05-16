import { certificationsData } from './certificationsData'

export const certificationsGrid = (
  limit = null,
  showHeader = true,
  showViewAll = false
) => {

  return `

    <section class="
      certifications-grid-section
      py-16
      md:py-20
      lg:py-24
      bg-stone-50
      overflow-hidden
    ">

      <div class="
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        ${
          showHeader
          ? `

            <!-- HEADER -->
            <div class="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-8
              mb-14
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

                  Certifications

                </span>

                <h2 class="
                  mt-4
                  text-4xl
                  font-bold
                  text-slate-900
                  leading-tight
                ">

                  Certified Healthcare Manufacturing Standards

                </h2>

              </div>

              ${
                showViewAll
                ? `

                  <!-- BUTTON -->
                  <a
                    href="/certifications.html"
                    class="
                      inline-flex
                      items-center
                      gap-2
                      text-slate-900
                      font-semibold
                      hover:text-cyan-500
                      transition-all
                      duration-300
                    "
                  >

                    View All Certifications

                    <span>→</span>

                  </a>

                `
                : ''
              }

            </div>

          `
          : ''
        }

        <!-- GRID -->
        <div class="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          lg:gap-8
        ">

          ${(limit
            ? certificationsData.slice(0, limit)
            : certificationsData
          ).map(certification => `

            <a
              href="${certification.file}"
              target="_blank"
              class="
                certification-card
                group
                bg-white
                border
                border-slate-200
                shadow-sm
                rounded-[24px]
                overflow-hidden
                hover:shadow-xl
                hover:border-cyan-300
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >

              <!-- IMAGE -->
              <div class="
                overflow-hidden
              ">

                <img
                  src="${certification.image}"
                  alt="${certification.title}"
                  class="
                    w-full
                    h-[200px]
                    sm:h-[420px]
                    object-contain
                    p-4
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />

              </div>

              <!-- CONTENT -->
              <div class="
                p-5
                md:p-6
              ">

                <!-- TITLE -->
                <h3 class="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-slate-900
                  leading-tight
                ">

                  ${certification.title}

                </h3>

                <!-- DESCRIPTION -->
                <p class="
                  mt-3
                  text-slate-600
                  text-sm
                  md:text-base
                  leading-relaxed
                ">

                  ${certification.desc}

                </p>

                <!-- BUTTON -->
                <div class="mt-6">

                  <span class="
                    inline-flex
                    items-center
                    justify-center
                    bg-slate-900
                    hover:bg-cyan-500
                    text-white
                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  ">

                    View Certificate

                  </span>

                </div>

              </div>

            </a>

          `).join('')}

        </div>

      </div>

    </section>

  `

}