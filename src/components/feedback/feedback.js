export const feedback = () => {

  const ratingSections = [
    "Rate Your Experience",
    "Service",
    "Product Quality",
    "Product Performance",
    "Packaging",
    "Support"
  ];

  return `

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
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            text-slate-900
            leading-tight
          ">

            Share Your Experience

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

          <form
            id="feedback-form"
            class="
              bg-white
              border
              border-slate-200
              rounded-[32px]
              p-6
              md:p-10
              shadow-sm
              space-y-6
            "
          >

            <!-- INPUTS -->
            <div class="
              grid
              md:grid-cols-2
              gap-5
            ">

              <!-- NAME -->
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
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

              <!-- EMAIL -->
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
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

              <!-- PHONE -->
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                class="
                  md:col-span-2
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

            <!-- RATING SECTIONS -->
            <div class="space-y-5">

              ${ratingSections.map((title) => `

                <div class="
                  rating-card
                  bg-stone-50
                  border
                  border-slate-200
                  rounded-3xl
                  px-5
                  py-3
                  hover:border-cyan-400
                  transition-all
                  duration-300
                ">

                  <div class="
                    flex
                    items-center
                    justify-between
                    gap-4
                    flex-wrap
                  ">

                    <div>

                      <p class="
                        text-base
                        font-semibold
                        text-slate-800
                      ">

                        ${title}

                      </p>

                    </div>

                    <div class="
                      flex
                      items-center
                      gap-2
                      star-rating
                    ">

                      ${[1,2,3,4,5].map((star) => `

                        <button
                          type="button"
                          class="
                            rating-star
                            text-3xl
                            text-slate-300
                            hover:text-yellow-400
                            hover:scale-125
                            active:scale-95
                            transition-all
                            duration-200
                          "
                          data-rating="${star}"
                        >

                          ★

                        </button>

                      `).join("")}

                    </div>

                  </div>

                  <input
                    type="hidden"
                    class="rating-value"
                    name="${title}"
                    value="0"
                  />

                </div>

              `).join("")}

            </div>

            <!-- MESSAGE -->
            <div>

              <textarea
                rows="4"
                name="message"
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
                w-full
                bg-slate-900
                hover:bg-cyan-500
                text-white
                py-4
                rounded-2xl
                font-semibold
                text-base
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              Submit Feedback

            </button>

          </form>

        </div>

      </div>

    </section>

  `;

};