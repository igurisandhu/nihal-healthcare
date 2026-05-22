import{n as e,t}from"./ScrollTrigger-CNrhOlEx.js";var n=[{title:`CE Certification`,desc:`European healthcare manufacturing compliance certification.`,image:`/assets/certificate1-CnNUYaHI.png`,file:`/assets/551118%20-%20NIHAL%20HEALTHCARE%20-%20CERTIFICATE%20-%20englisch%20-%202025-04-07%20-%20MDR2017Q-BTzFblqy.pdf`},{title:`ISO 9001 Certification`,desc:`International quality management systems certification.`,image:`/assets/certificate2-CDUourpJ.png`,file:`/assets/ISO%209001-2015%20RENUAL%202023%20(1)-DERNB-ro.PDF`},{title:`GMP Certification`,desc:`Good Manufacturing Practice certified operations.`,image:`/assets/certificate3-y1lbBD7a.png`,file:`/assets/icmed%2013485%20%20renewal-DZKG69oA.pdf`},{title:`BIS Licence`,desc:`Indian standards certification for syringe manufacturing.`,image:`/assets/certificate4-Bv3_BT2k.png`,file:`/assets/BIS%20LICENCE-D7z3pIG8.pdf`},{title:`EN ISO 13485`,desc:`Medical devices quality management certification.`,image:`/assets/certificate5-Dfk2KdaF.png`,file:`/assets/En%20ISO%2013485%20latestr-DSeHlwr5.PDF`},{title:`Drug Licence`,desc:`Certified healthcare manufacturing drug licence approval.`,image:`/assets/certificate6-B1vNl2IP.png`,file:`/assets/NEW%20DRUG%20LICENCE-C0wTP-Lg.PDF`},{title:`GST Registration`,desc:`Official GST registration certification.`,image:`/assets/certificate7-CU1mhAPc.png`,file:`/assets/GST%20-%20Copy-CO-8F2JU.PDF`}],r=(e=null,t=!0,r=!1)=>`

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

        ${t?`

            <!-- HEADER -->
            <div class="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
              mb-10
              md:mb-14
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
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-bold
                  text-slate-900
                  leading-tight
                ">

                  Certified Healthcare Manufacturing Standards

                </h2>

              </div>

              ${r?`

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

          ${(e?n.slice(0,e):n).map(e=>`

            <a
              href="${e.file}"
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
                  src="${e.image}"
                  alt="${e.title}"
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

                  ${e.title}

                </h3>

                <!-- DESCRIPTION -->
                <p class="
                  mt-3
                  text-slate-600
                  text-sm
                  md:text-base
                  leading-relaxed
                ">

                  ${e.desc}

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

          `).join(``)}

        </div>

      </div>

    </section>

  `;e.registerPlugin(t);var i=()=>{window.innerWidth>=1024&&e.utils.toArray(`.certification-card`).forEach((t,n)=>{e.from(t,{opacity:0,y:30,scale:.96,duration:.7,ease:`power2.out`,scrollTrigger:{trigger:t,start:`top 88%`}})})};export{r as n,i as t};