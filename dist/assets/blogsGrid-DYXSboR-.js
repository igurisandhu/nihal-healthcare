import{t as e}from"./blogsData-DQmFCz65.js";var t=(t=null,n=!0,r=!1)=>`

    <section class="
      blogs-grid-section
      py-16
      mb-16
      bg-white
      overflow-hidden
    ">

      <div class="
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        ${n?`

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

              <div>

                <span class="
                  text-cyan-500
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  sm:text-sm
                ">

                  Blogs & Insights

                </span>

                <h2 class="
                  mt-4
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-slate-900
                  leading-tight
                ">

                  Healthcare Industry Articles & Insights

                </h2>

              </div>

              ${r?`

                  <a
                    href="/blogs.html"
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

                    View All Blogs

                    <span>→</span>

                  </a>

                `:``}

            </div>

          `:``}

        <!-- GRID -->
        <div class="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          lg:gap-8
        ">

          ${(t?e.slice(0,t):e).map(e=>`

            <a
              href="${e.link}"
              class="
                group
                bg-stone-50
                border
                border-slate-200
                rounded-[28px]
                overflow-hidden
                hover:shadow-xl
                hover:border-cyan-300
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >

              <!-- IMAGE -->
              <div class="overflow-hidden">

                <img
                  src="${e.image}"
                  alt="${e.title}"
                  class="
                    w-full
                    h-[240px]
                    object-cover
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />

              </div>

              <!-- CONTENT -->
              <div class="p-6">

                <!-- META -->
                <div class="
                  flex
                  items-center
                  gap-3
                  text-sm
                ">

                  <span class="
                    text-cyan-500
                    font-semibold
                  ">

                    ${e.category}

                  </span>

                  <span class="text-slate-400">

                    •

                  </span>

                  <span class="text-slate-500">

                    ${e.date}

                  </span>

                </div>

                <!-- TITLE -->
                <h3 class="
                  mt-5
                  text-2xl
                  font-bold
                  text-slate-900
                  leading-snug
                ">

                  ${e.title}

                </h3>

                <!-- DESCRIPTION -->
                <p class="
                  mt-4
                  text-slate-600
                  leading-relaxed
                ">

                  ${e.desc}

                </p>

                <!-- BUTTON -->
                <div class="mt-6">

                  <span class="
                    inline-flex
                    items-center
                    gap-2
                    text-slate-900
                    font-semibold
                    hover:text-cyan-500
                    transition-all
                    duration-300
                  ">

                    Read Full Article

                    <span>→</span>

                  </span>

                </div>

              </div>

            </a>

          `).join(``)}

        </div>

      </div>

    </section>

  `;export{t};