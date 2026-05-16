var e={disposable:{title:`Disposable Syringes`,image:`/assets/product-1-Dngi2HM9.jpg`,desc:`
      High precision disposable syringes manufactured
      using advanced medical-grade materials ensuring
      sterility, smooth administration, and patient safety.
    `,features:[`Sterile & Single Use`,`Leak Resistant Design`,`Smooth Plunger Motion`,`ETO Sterilized`,`Medical Grade Material`,`ISO Certified`],specifications:[{label:`Material`,value:`Polypropylene`},{label:`Sterilization`,value:`ETO Sterilized`},{label:`Classification`,value:`Class IIa`},{label:`Usage`,value:`Single Use`}],sizes:[`1ml`,`2ml`,`3ml`,`5ml`,`10ml`,`20ml`,`50ml`],regulatory:[{label:`EMDN Code`,value:`A020102`},{label:`GMDN Code`,value:`47017`},{label:`Certification`,value:`ISO 13485`},{label:`UDI-DI`,value:`Available`}]},safety:{title:`Safety Syringes`,image:`/assets/product-2-DpwqvLw2.jpg`,desc:`
      Advanced safety syringes designed to prevent
      accidental needle-stick injuries and improve
      healthcare safety during medical procedures.
    `,features:[`Needle Protection`,`Enhanced Healthcare Safety`,`Single Use Design`,`Medical Grade Material`,`Sterile Packaging`,`WHO Standards`],specifications:[{label:`Material`,value:`Medical Polymer`},{label:`Sterilization`,value:`ETO Sterilized`},{label:`Classification`,value:`Class IIa`},{label:`Usage`,value:`Single Use`}],sizes:[`1ml`,`3ml`,`5ml`,`10ml`],regulatory:[{label:`EMDN Code`,value:`A020102`},{label:`GMDN Code`,value:`47017`},{label:`Certification`,value:`ISO 13485`},{label:`UDI-DI`,value:`Available`}]},insulin:{title:`Insulin Syringes`,image:`/assets/product-3-CEuljiS7.jpg`,desc:`
      Reliable insulin syringes engineered for
      accurate dosage administration and enhanced
      patient comfort in diabetic care.
    `,features:[`Precise Dosage Delivery`,`Smooth Injection`,`Fine Needle Technology`,`Sterile Packaging`,`Single Use`,`Enhanced Comfort`],specifications:[{label:`Material`,value:`Medical Grade Polymer`},{label:`Sterilization`,value:`ETO Sterilized`},{label:`Classification`,value:`Class IIa`},{label:`Usage`,value:`Single Use`}],sizes:[`0.3ml`,`0.5ml`,`1ml`],regulatory:[{label:`EMDN Code`,value:`A020102`},{label:`GMDN Code`,value:`47017`},{label:`Certification`,value:`ISO 13485`},{label:`UDI-DI`,value:`Available`}]}},t=e=>`

    <section class="py-16 bg-white overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

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

              Our Products

            </span>

            <h1 class="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              text-slate-900
              leading-tight
            ">

              ${e.title}

            </h1>

            <p class="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-relaxed
            ">

              ${e.desc}

            </p>

            <!-- FEATURES -->
            <div class="mt-10 grid sm:grid-cols-2 gap-5">

              ${e.features.map(e=>`

                <div class="flex items-center gap-4">

                  <div class="
                    w-3
                    h-3
                    rounded-full
                    bg-cyan-500
                  "></div>

                  <span class="
                    text-slate-700
                    font-medium
                  ">

                    ${e}

                  </span>

                </div>

              `).join(``)}

            </div>

          </div>

          <!-- IMAGE -->
          <div>

            <div class="
              rounded-[32px]
              overflow-hidden
              bg-stone-100
            ">

              <img
                src="${e.image}"
                alt="${e.title}"
                class="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  `,n=e=>`

    <section class="pb-20 md:pb-28 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="
          bg-stone-50
          border
          border-slate-200
          rounded-[32px]
          p-8
          md:p-12
        ">

          <h2 class="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
          ">

            Product Specifications

          </h2>

          <!-- GRID -->
          <div class="
            mt-10
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            ${e.specifications.map(e=>`

              <div class="
                bg-white
                rounded-2xl
                p-6
                border
                border-slate-200
              ">

                <p class="
                  text-sm
                  text-slate-500
                ">

                  ${e.label}

                </p>

                <h3 class="
                  mt-3
                  text-2xl
                  font-bold
                  text-slate-900
                ">

                  ${e.value}

                </h3>

              </div>

            `).join(``)}

          </div>

        </div>

      </div>

    </section>

  `,r=e=>`

    <section class="pb-20 md:pb-28 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <h2 class="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
        ">

          Available Sizes

        </h2>

        <div class="
          mt-10
          flex
          flex-wrap
          gap-4
        ">

          ${e.sizes.map(e=>`

            <div class="
              px-6
              py-4
              rounded-full
              bg-cyan-50
              border
              border-cyan-200
              text-cyan-700
              font-semibold
            ">

              ${e}

            </div>

          `).join(``)}

        </div>

      </div>

    </section>

  `,i=e=>`

    <section class="pb-20 md:pb-28 bg-white">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <h2 class="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
        ">

          Regulatory Information

        </h2>

        <div class="
          mt-10
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          ${e.regulatory.map(e=>`

            <div class="
              bg-stone-50
              border
              border-slate-200
              rounded-2xl
              p-6
            ">

              <p class="
                text-sm
                text-slate-500
              ">

                ${e.label}

              </p>

              <h3 class="
                mt-3
                text-xl
                font-bold
                text-slate-900
              ">

                ${e.value}

              </h3>

            </div>

          `).join(``)}

        </div>

      </div>

    </section>

  `;export{e as a,t as i,r as n,n as r,i as t};