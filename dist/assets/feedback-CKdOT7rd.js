var e=[{id:1,image:`/assets/client-1-BmBI487x.jpg`,name:`Dr. Amit Sharma`,designation:`Healthcare Distributor`,review:`Nihal Healthcare consistently delivers high-quality sterile syringe solutions with exceptional manufacturing precision and dependable service standards.`},{id:2,image:`/assets/client-2-Al0pPLX0.jpg`,name:`Rajiv Mehta`,designation:`Medical Supply Partner`,review:`Their commitment to healthcare quality, sterile production, and timely supply chain management makes them a trusted manufacturing partner.`},{id:3,image:`/assets/client-3-STMOKSvt.jpg`,name:`Dr. Neha Kapoor`,designation:`Hospital Procurement`,review:`The product quality, packaging standards, and consistency maintained by Nihal Healthcare have been excellent throughout our collaboration.`}],t=()=>`

    <section class="testimonials-section py-20 md:py-24 lg:py-28 bg-slate-900 overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-14 md:mb-16">

          <span class="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

            Testimonials

          </span>

          <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">

            Trusted By Healthcare Professionals

          </h2>

        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          ${e.map(e=>`

            <div
              class="testimonial-card bg-white/5 border border-white/10 backdrop-blur-md rounded-[28px] p-6 sm:p-8 hover:bg-white/10 transition-all duration-500"
            >

              <!-- Quote Icon -->
              <div class="text-cyan-400 text-5xl font-bold leading-none">
                "
              </div>

              <!-- Review -->
              <p class="mt-5 text-slate-300 leading-relaxed text-sm sm:text-base">

                ${e.review}

              </p>

              <!-- Client -->
              <div class="mt-8 flex items-center gap-4">

                <!-- Image -->
                <div class="w-14 h-14 rounded-full overflow-hidden border border-white/10">

                  <img
                    src="${e.image}"
                    alt="${e.name}"
                    class="w-full h-full object-cover"
                  />

                </div>

                <!-- Info -->
                <div>

                  <h3 class="text-white font-bold text-base">

                    ${e.name}

                  </h3>

                  <p class="text-slate-400 text-sm mt-1">

                    ${e.designation}

                  </p>

                </div>

              </div>

            </div>

          `).join(``)}

        </div>

      </div>

    </section>

  `,n=()=>`

    <section class="
      feedback-section
      py-20
      bg-stone-50
      overflow-hidden
    ">

      <div class="
        max-w-4xl
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
            tracking-[0.2em]
            text-xs
            sm:text-sm
          ">

            Quick Feedback

          </span>

          <h2 class="
            mt-5
            text-4xl
            font-bold
            text-slate-900
            leading-tight
          ">

            Share Your Healthcare Experience

          </h2>

          <p class="
            mt-6
            text-slate-600
            text-base
            leading-relaxed
          ">

            Your feedback helps Nihal Healthcare
            improve healthcare manufacturing,
            product quality, and customer experience.

          </p>

        </div>

        <!-- FORM -->
        <div class="mt-14">

          <form class="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-6
            md:p-10
            shadow-sm
          ">

            <!-- TOP GRID -->
            <div class="
              grid
              md:grid-cols-2
              gap-5
            ">

              <!-- NAME -->
              <div>

                <input
                  type="text"
                  placeholder="Your Name"
                  class="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-stone-50
                    outline-none
                    focus:border-cyan-500
                    transition-all
                    duration-300
                  "
                />

              </div>

              <!-- EMAIL -->
              <div>

                <input
                  type="email"
                  placeholder="Your Email"
                  class="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-stone-50
                    outline-none
                    focus:border-cyan-500
                    transition-all
                    duration-300
                  "
                />

              </div>

            </div>

            <!-- RATING -->
<div class="mt-8">

  <p class="
    text-sm
    font-semibold
    text-slate-700
  ">

    Rate Your Experience

  </p>

  <div class="
    mt-4
    flex
    items-center
    gap-3
    star-rating
  ">

    ${[1,2,3,4,5].map((e,t)=>`

      <button
        type="button"
        class="
          rating-star
          text-4xl
          text-slate-300
          hover:text-yellow-400
          transition-all
          duration-300
        "
        data-rating="${t+1}"
      >

        ★

      </button>

    `).join(``)}

  </div>

</div>

            <!-- CATEGORY -->
            <div class="mt-8">

              <p class="
                text-sm
                font-semibold
                text-slate-700
              ">

                Feedback Category

              </p>

              <div class="
                mt-4
                flex
                flex-wrap
                gap-3
              ">

               ${[`Products`,`Manufacturing`,`Quality`,`Support`].map(e=>`

  <button
    type="button"
    class="
      feedback-option
      px-5
      py-3
      rounded-full
      border
      border-slate-200
      bg-stone-50
      text-slate-700
      hover:bg-slate-900
      hover:text-white
      transition-all
      duration-300
      text-sm
      font-medium
    "
  >

    ${e}

  </button>

`).join(``)}

              </div>

            </div>

            <!-- QUICK TAGS -->
            <div class="mt-8">

              <p class="
                text-sm
                font-semibold
                text-slate-700
              ">

                Select Feedback

              </p>

              <div class="
                mt-4
                flex
                flex-wrap
                gap-3
              ">
${[`Excellent Quality`,`Fast Support`,`Trusted Products`,`Professional Team`].map(e=>`

  <button
    type="button"
    class="
      feedback-tag
      px-5
      py-3
      rounded-full
      text-slate-700
      hover:bg-slate-900
      hover:text-white
      border
      border-transparent
      transition-all
      duration-300
      text-sm
      font-medium
    "
  >

    ${e}

  </button>

`).join(``)}

              </div>

            </div>

            <!-- MESSAGE -->
            <div class="mt-8">

              <textarea
                rows="3"
                placeholder="Additional feedback..."
                class="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-stone-50
                  outline-none
                  resize-none
                  focus:border-cyan-500
                  transition-all
                  duration-300
                "
              ></textarea>

            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="
                mt-8
                w-full
                bg-slate-900
                hover:bg-cyan-500
                text-white
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
              "
            >

              Submit Feedback

            </button>

          </form>

        </div>

      </div>

    </section>

  `;export{t as n,n as t};