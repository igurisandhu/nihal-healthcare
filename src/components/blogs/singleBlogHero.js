export const singleBlogHero = (blog) => {

  return `

    <section class="
      pt-32
      pb-10
      md:pt-40
      md:pb-14
      bg-white
      overflow-hidden
    ">

      <div class="
        max-w-5xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

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

            ${blog.category}

          </span>

          <span class="text-slate-400">

            •

          </span>

          <span class="text-slate-500">

            ${blog.date}

          </span>

        </div>

        <!-- TITLE -->
        <h1 class="
          mt-6
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          text-slate-900
          leading-tight
        ">

          ${blog.title}

        </h1>

        <!-- DESCRIPTION -->
        <p class="
          mt-6
          text-slate-600
          text-base
          md:text-lg
          leading-relaxed
          max-w-3xl
        ">

          ${blog.desc}

        </p>

      </div>

    </section>

  `

}