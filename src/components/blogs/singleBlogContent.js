export const singleBlogContent = (blog) => {

  return `

    <section class="
      pb-20
      md:pb-28
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

        <!-- IMAGE -->
        <div class="
          rounded-[32px]
          overflow-hidden
        ">

          <img
            src="${blog.image}"
            alt="${blog.title}"
            class="
              w-full
              h-[300px]
              sm:h-[450px]
              lg:h-[600px]
              object-cover
            "
          />

        </div>

        <!-- CONTENT -->
        <div class="
          mt-12
          text-slate-600
          text-base
          md:text-lg
          leading-relaxed
          space-y-8
        ">

          

          <p>

            Healthcare manufacturing requires
            advanced quality systems,
            precision engineering,
            and strict healthcare compliance
            standards to ensure reliability
            and patient safety.

          </p>

          <p>

            Nihal Healthcare focuses on
            delivering trusted medical
            disposable manufacturing
            solutions through innovation,
            certified production systems,
            and healthcare-focused excellence.

          </p>

        </div>

      </div>

    </section>

  `

}