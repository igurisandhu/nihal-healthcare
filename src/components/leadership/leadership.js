import { leadershipData } from './leadershipData'

export const leadership = (

  limit = null,

  showViewAll = false,

  fullDetails = false

) => {

  const leaders = limit
    ? leadershipData.slice(0, limit)
    : leadershipData

  return `

    <section class="
      leadership-section
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

        <!-- HEADING -->
        <div class="
          text-center
          max-w-3xl
          mx-auto
        ">

          <span class="
            text-cyan-500
            font-semibold
            uppercase
            tracking-[0.25em]
            text-xs
            sm:text-sm
          ">

            Leadership

          </span>

          <h2 class="
            mt-5
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
            leading-tight
          ">

            Thought Leaders

          </h2>

        </div>

        <!-- GRID -->
        <div class="
          mt-10

          ${fullDetails
            ? 'space-y-10'
            : 'grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 xl:gap-12'
          }
        ">

          ${leaders.map(item => `

            <div class="
              leadership-card
              relative

              ${fullDetails
                ? `
                  grid
                  lg:grid-cols-[260px_1fr]
                  gap-8
                  lg:gap-10
                  items-center
                  bg-white
                  border
                  border-slate-200
                  rounded-[32px]
                  p-5
                  sm:p-8
                  lg:p-12
                  shadow-sm
                  text-left
                `
                : `
                  text-center
                `
              }
            ">

              ${!fullDetails ? `

                <!-- LINE -->
                <div class="
                  hidden
                  xl:block
                  absolute
                  top-10
                  right-[-24px]
                  w-[1px]
                  h-[330px]
                  bg-slate-300
                "></div>

              ` : ''}

              <!-- IMAGE -->
              <div class="
                flex
                justify-center

                ${fullDetails
                  ? 'lg:justify-start'
                  : ''
                }
              ">

                <img
                  src="${item.image}"
                  alt="${item.name}"
                  class="
                    w-[160px]
                    h-[160px]
                    sm:w-[200px]
                    sm:h-[200px]
                    md:w-[220px]
                    md:h-[220px]
                    rounded-full
                    object-cover
                    border-[6px]
                    border-white
                    shadow-xl
                  "
                />

              </div>

              <!-- CONTENT -->
              <div>

                <h3 class="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl
                  font-bold
                  text-slate-900
                ">

                  ${item.name}

                </h3>

                <p class="
                  mt-4
                  text-cyan-500
                  uppercase
                  tracking-[0.08em]
                  text-lg
                  font-medium
                ">

                  ${item.role}

                </p>

                ${fullDetails ? `

                  <p class="
                    mt-6
                    text-slate-600
                    leading-relaxed
                    text-base
                    md:text-lg
                  ">

                    ${item.desc}

                  </p>

                ` : ''}

              </div>

            </div>

          `).join('')}

        </div>

        ${showViewAll ? `

          <div class="
            mt-16
            flex
            justify-center
          ">

            <a
              href="/leadership.html"
              class="
                inline-flex
                items-center
                justify-center
                bg-slate-900
                hover:bg-cyan-500
                text-white
                px-8
                py-4
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
              "
            >

              View Full Leadership

            </a>

          </div>

        ` : ''}

      </div>

    </section>

  `

}