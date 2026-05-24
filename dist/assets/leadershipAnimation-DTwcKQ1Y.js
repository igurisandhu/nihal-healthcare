import{n as e,t}from"./ScrollTrigger-CNrhOlEx.js";var n=[{id:1,name:`Mr. Gurbhej Singh`,role:`Managing Director`,image:`/assets/leader-1-nUYi6Nzd.jpg`,desc:`
      Mr. Gurbhej Singh leads Nihal Healthcare
      with a strong vision towards healthcare
      innovation, manufacturing excellence,
      and global healthcare quality standards.
    `},{id:2,name:`Mr. Harpeet Singh`,role:`Managing Director`,image:`/assets/leader-2-CPPvHj1A.jpg`,desc:`
      Mr. Harpeet Singh specializes in healthcare
      operations, business strategy, and modern
      healthcare manufacturing development.
    `},{id:3,name:`Mr. K.S Arya`,role:`Plant Head / MR`,image:`/assets/leader-3-BNV6kXhw.jpg`,desc:`
      Mr. K.S Arya oversees plant operations,
      quality management systems, and healthcare
      production excellence standards.
    `}],r=(e=null,t=!1,r=!1)=>{let i=e?n.slice(0,e):n;return`

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

          <p class="
            mt-6
            text-slate-600
            text-base
            md:text-lg
            leading-relaxed
          ">
            With the blessings of Sant Baba Nahar Singh Ji and Sant Baba Kapoor Singh Ji, Nihal Healthcare moves forward under visionary leadership dedicated to innovation, manufacturing excellence, and compassionate care for communities worldwide.
          </p>

        </div>

        <!-- GRID -->
        <div class="
          mt-10

          ${r?`space-y-10`:`grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 xl:gap-12`}
        ">

          ${i.map(e=>`

            <div class="
              leadership-card
              relative

              ${r?`
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
                `:`
                  text-center
                `}
            ">

              ${r?``:`

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

              `}

              <!-- IMAGE -->
              <div class="
                flex
                justify-center

                ${r?`lg:justify-start`:``}
              ">

                <img
                  src="${e.image}"
                  alt="${e.name}"
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

                  ${e.name}

                </h3>

                <p class="
                  mt-4
                  text-cyan-500
                  uppercase
                  tracking-[0.08em]
                  text-lg
                  font-medium
                ">

                  ${e.role}

                </p>

                ${r?`

                  <p class="
                    mt-6
                    text-slate-600
                    leading-relaxed
                    text-base
                    md:text-lg
                  ">

                    ${e.desc}

                  </p>

                `:``}

              </div>

            </div>

          `).join(``)}

        </div>

        ${t?`

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

        `:``}

      </div>

    </section>

  `};e.registerPlugin(t);var i=()=>{e.from(`.leadership-card`,{scrollTrigger:{trigger:`.leadership-section`,start:`top 80%`},opacity:0,y:80,stagger:.2,duration:1,ease:`power3.out`})};export{r as n,i as t};