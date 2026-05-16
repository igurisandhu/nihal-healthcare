import logo from '../../assets/images/logo.png'

export const footer = () => {

  return `

    <footer class="
      footer-section
      bg-slate-950
      text-white
      pt-20
      pb-10
      overflow-hidden
    ">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- TOP FOOTER -->
        <div class="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-12
          pb-16
          border-b
          border-white/10
        ">

          <!-- COMPANY -->
          <div>

            <!-- LOGO -->
            <a
              href="/index.html"
              class="inline-flex items-center gap-4"
            >

              <img
                src="${logo}"
                alt="Nihal Healthcare Logo"
                class="
                  w-14
                  h-14
                  object-contain
                  rounded-xl
                  bg-white
                  p-2
                "
              />

              <div>

                <h2 class="
                  text-2xl
                  font-extrabold
                  tracking-wide
                ">

                  Nihal Healthcare

                </h2>

              </div>

            </a>

            <!-- DESCRIPTION -->
            <p class="
              mt-6
              text-slate-400
              leading-relaxed
              text-sm
              sm:text-base
              max-w-sm
            ">

              Nihal Healthcare specializes in sterile
              medical disposable manufacturing with
              advanced production standards and
              global healthcare quality certifications.

            </p>

          </div>

          <!-- QUICK LINKS -->
          <div>

            <h3 class="
              text-xl
              font-bold
            ">

              Quick Links

            </h3>

            <ul class="
              mt-6
              space-y-4
            ">

              <li>

                <a
                  href="/index.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Home

                </a>

              </li>

              <li>

                <a
                  href="/history.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  History

                </a>

              </li>

              <li>

                <a
                  href="/products.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Products

                </a>

              </li>

              <li>

                <a
                  href="/certifications.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Certifications

                </a>

              </li>

              <li>

                <a
                  href="/contact.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Contact

                </a>

              </li>

            </ul>

          </div>

          <!-- PRODUCTS -->
          <div>

            <h3 class="
              text-xl
              font-bold
            ">

              Our Products

            </h3>

            <ul class="
              mt-6
              space-y-4
            ">

              <li>

                <a
                  href="/products/sterile-hypodermic-syringes.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Syringes with Needle

                </a>

              </li>

              <li>

                <a
                  href="/products/sterile-hypodermic-syringes-without-needle.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Syringes without Needle

                </a>

              </li>

              <li>

                <a
                  href="/products/sterile-hypodermic-needles.html"
                  class="
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  Hypodermic Needles

                </a>

              </li>

            </ul>

          </div>

          <!-- CONTACT -->
          <div>

            <h3 class="
              text-xl
              font-bold
            ">

              Contact

            </h3>

            <div class="
              mt-6
              space-y-5
              text-slate-400
              text-sm
              sm:text-base
            ">

              <p class="leading-relaxed">

                Plot No.33, EPIP Phase-I,
                Jharmajri, Tehsil Baddi,
                Solan, Himachal Pradesh,
                India

              </p>

              <a
                href="tel:+919218511425"
                class="
                  block
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >

                +91 9218511425

              </a>

              <a
                href="mailto:contact@nihalhealthcare.com"
                class="
                  block
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  break-all
                "
              >

                contact@nihalhealthcare.com

              </a>

            </div>

          </div>

        </div>

        <!-- BOTTOM FOOTER -->
        <div class="
          pt-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        ">

          <!-- COPYRIGHT -->
          <p class="
            text-slate-500
            text-sm
            text-center
            md:text-left
          ">

            © 2026 Nihal Healthcare.
            All rights reserved.

          </p>

          <!-- FOOTER LINKS -->
          <div class="
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
            text-sm
          ">

            <a
              href="#"
              class="
                text-slate-500
                hover:text-cyan-400
                transition-all
                duration-300
              "
            >

              Privacy Policy

            </a>

            <a
              href="#"
              class="
                text-slate-500
                hover:text-cyan-400
                transition-all
                duration-300
              "
            >

              Terms & Conditions

            </a>

          </div>

        </div>

      </div>

    </footer>

  `

}