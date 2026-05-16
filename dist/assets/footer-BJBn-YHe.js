(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/logo-D-uZ4MMl.png`,t=()=>`

    <header class="navbar fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div class="flex items-center justify-between h-20">

          <a href="/index.html" class="flex items-center">
            <img 
              src="${e}" 
              alt="Nihal Healthcare Logo"
              class="w-28 md:w-40 object-contain"
            />
          </a>

          <!-- Desktop Navigation Links--> 

          <nav class="hidden lg:block">

            <ul class="flex items-center gap-10">

              <!-- Products Dropdown --> 

              <li class="relative group">

              <a href = "/products.html">

                <button
                  class="flex items-center gap-2 text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all duration-300"
                >
                  Our Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>

                </button>
                </a>

                <div
                  class="absolute left-0 top-[140%] invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white rounded-3xl border border-slate-200 shadow-2xl min-w-[340px] p-6"
                >

                  <ul class="space-y-4">

                    <li class="border-b border-slate-100 pb-3">
                      <a href="/products.html" class="block font-semibold text-slate-900 hover:text-cyan-600 transition-all text-sm">
                        All Products
                      </a>
                      <p class="text-xs text-slate-500 mt-1">View complete catalog</p>
                    </li>

                    <li class="pt-2">
                      <a href="/products/sterile-hypodermic-syringes.html" class="block text-slate-700 hover:text-cyan-600 transition-all font-medium">
                        Sterile Hypodermic Syringes with Needle
                      </a>
                      <p class="text-xs text-slate-500 mt-1">7 size variants</p>
                    </li>

                    <li>
                      <a href="/products/sterile-hypodermic-syringes-without-needle.html" class="block text-slate-700 hover:text-cyan-600 transition-all font-medium">
                        Sterile Hypodermic Syringes without Needle
                      </a>
                      <p class="text-xs text-slate-500 mt-1">7 size variants</p>
                    </li>

                    <li>
                      <a href="/products/sterile-hypodermic-needles.html" class="block text-slate-700 hover:text-cyan-600 transition-all font-medium">
                        Sterile Hypodermic Needles
                      </a>
                      <p class="text-xs text-slate-500 mt-1">9 gauge variants</p>
                    </li>

                  </ul>

                </div>

              </li>

              <li>
                <a href="/certifications.html" class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">
                  Certificates
                </a>
              </li>

              <li>
                <a href="/about.html" class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">
                  About
                </a>
              </li>

              <li>
                <a href="/blogs.html" class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">
                  Blogs
                </a>
              </li>

              <li>
                <a href="/feedback.html" class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">
                  Feedback
                </a>
              </li>

              <li>
                <a href="/leadership.html" class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">
                  Leadership
                </a>
              </li>

              <li>
                <a href="/history.html" class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">
                  History
                </a>
              </li>

              <li>
                <a
                  href="/contact.html"
                  class="text-[15px] font-semibold text-slate-700 hover:text-cyan-600 transition-all">                
                  Contact Us
                </a>
              </li>

            </ul>

          </nav>

          <!-- Mobile Hamburger -->
          <button
            id="menu-btn"
            class="lg:hidden flex flex-col gap-1.5"
          >

            <span class="w-7 h-0.5 bg-slate-900 rounded-full"></span>
            <span class="w-7 h-0.5 bg-slate-900 rounded-full"></span>
            <span class="w-7 h-0.5 bg-slate-900 rounded-full"></span>

          </button>

        </div>

      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="fixed top-0 right-[-100%] w-[85%] max-w-sm h-screen bg-white z-50 transition-all duration-500 shadow-2xl lg:hidden"
      >

        <div class="p-6 border-b border-slate-200 flex items-center justify-between">

          <img 
            src="${e}" 
            alt="Logo"
            class="w-28 object-contain"
          />

          <!-- Close Button -->
          <button id="close-menu">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          </button>

        </div>

        <!-- Mobile Menu Links -->

        <nav class="p-6">

          <ul class="flex flex-col gap-6">

            <li>

            <a href = "/products.html">  
              <p class="text-lg font-bold text-slate-900 mb-4">
                Our Products
              </p>
            </a>

              <ul class="flex flex-col gap-4 pl-4 border-l border-slate-200">

                <li>
                  <a href="/disposable-syringes.html" class="text-slate-600 hover:text-blue-600">
                    Disposable Syringes
                  </a>
                </li>

                <li>
                  <a href="/insulin-syringes.html" class="text-slate-600 hover:text-blue-600">
                    Insulin Syringe
                  </a>
                </li>

                <li>
                  <a href="/safety-syringes.html" class="text-slate-600 hover:text-blue-600">
                    Safety Syringes
                  </a>
                </li>

              </ul>

            </li>

            <li>
              <a href="/certifications.html" class="text-lg font-semibold text-slate-800">
                Certificates
              </a>
            </li>

           <li>
              <a href="/about.html" class="text-lg font-semibold text-slate-800">
                About
              </a>
            </li>

            <li>
              <a href="/blogs.html" class="text-lg font-semibold text-slate-800">
                Blogs
              </a>
            </li>

            <li>
              <a href="/history.html" class="text-lg font-semibold text-slate-800">
                History
              </a>
            </li>



            <li>

              <a href="/contact.html" class="text-lg font-semibold text-slate-800" >
                Contact Us
              </a>

            </li>

          </ul>

        </nav>

      </div>

      <!-- Overlay -->
      <div
        id="overlay"
        class="fixed inset-0 bg-black/40 opacity-0 invisible transition-all duration-500 lg:hidden"
      ></div>

    </header>

  `,n=()=>`

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
                src="${e}"
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

  `;export{t as n,n as t};