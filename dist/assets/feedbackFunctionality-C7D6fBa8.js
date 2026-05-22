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

              ${[`Rate Your Experience`,`Service`,`Product Quality`,`Product Performance`,`Packaging`,`Support`].map(e=>`

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

                        ${e}

                      </p>

                    </div>

                    <div class="
                      flex
                      items-center
                      gap-2
                      star-rating
                    ">

                      ${[1,2,3,4,5].map(e=>`

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
                          data-rating="${e}"
                        >

                          ★

                        </button>

                      `).join(``)}

                    </div>

                  </div>

                  <input
                    type="hidden"
                    class="rating-value"
                    name="${e}"
                    value="0"
                  />

                </div>

              `).join(``)}

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

  `,r=()=>{document.querySelectorAll(`.star-rating`).forEach(e=>{let t=e.querySelectorAll(`.rating-star`);t.forEach((n,r)=>{n.addEventListener(`click`,()=>{t.forEach((e,t)=>{t<=r?(e.classList.remove(`text-slate-300`),e.classList.add(`text-yellow-400`,`scale-110`)):(e.classList.remove(`text-yellow-400`,`scale-110`),e.classList.add(`text-slate-300`))});let n=e.closest(`.rating-card`).querySelector(`.rating-value`);n&&(n.value=r+1)})})});let e=document.querySelector(`#feedback-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=new FormData(e),r=n.get(`name`),i=n.get(`email`),a=n.get(`phone`),o=n.get(`message`),s=[];e.querySelectorAll(`.rating-value`).forEach(e=>{s.push(`${e.name}: ${e.value}/5`)});let c=`New Feedback Submission

Name: ${r}

Email: ${i}

Phone: ${a}

${s.join(`
`)}

Additional Feedback:
${o}`,l=`https://wa.me/919218511425?text=${encodeURIComponent(c)}`;window.location.href=l,e.reset()})};export{n,t as r,r as t};