import{_ as e,c as t,d as n,g as r,h as i,i as a,s as o,t as s,v as c}from"./gtm-DKR_DvNW.js";import{n as l,t as u}from"./ScrollTrigger-CNrhOlEx.js";import{t as d}from"./navbarAnimation-nIwfTKzd.js";import{n as f,r as p,t as m}from"./whatsappButtonFunctionality-Btj1hk3o.js";import{n as h,t as g}from"./productsAnimation-CtR92sP1.js";import{n as _,t as v}from"./leadershipAnimation-DTwcKQ1Y.js";import{n as y,r as b,t as x}from"./feedbackFunctionality-C7D6fBa8.js";import{t as S}from"./footerAnimation-DKeORBd-.js";import{n as C,t as w}from"./certificationsAnimations-CLyFVcRW.js";import{t as T}from"./blogsGrid-CXuAYuvo.js";import{i as E,n as D,r as O,t as k}from"./faqAnimation-zaUhmXAy.js";import{t as A}from"./pageMetadata-CkjekSx3.js";var j=`/assets/hero-1-DP918TK8.jpg`,M=`/assets/hero-2-DwOaF9jL.avif`,N=`/assets/hero-3-ejHO0v_v.avif`,P=`/assets/hero-4-DLpmizSW.jpg`,F=()=>`

    <section class="hero-section relative overflow-hidden bg-stone-50 min-h-screen flex items-center pt-24 lg:pt-20">

      <!-- Background Glow -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">

        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          <!-- Left Content -->
          <div class="text-center lg:text-left">

            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm mb-8">

              <span class="w-2 h-2 rounded-full bg-cyan-500"></span>

              <p class="text-sm font-semibold text-slate-700">
                Trusted Medical Syringe Manufacturer
              </p>

            </div>

            <!-- Heading -->
            <h1 class="hero-title text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] text-slate-900">

              Precision Engineered Syringe Solutions For Modern Healthcare

            </h1>

            <!-- Paragraph -->
            <p class="hero-desc mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">

              Delivering high-quality sterile syringe solutions with advanced manufacturing standards, precision engineering, and trusted medical safety compliance.

            </p>

            <!-- Buttons -->
            <div class="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="/products.html"
                class="inline-flex items-center justify-center bg-slate-900 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Explore Products
              </a>

              <a
                href="/contact.html"
                class="inline-flex items-center justify-center border border-slate-300 hover:border-cyan-500 hover:text-cyan-500 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us
              </a>

            </div>

          </div>

          <!-- Right Image -->
          <div class="relative">

            <!-- Main Image -->
            <div class="relative rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 bg-white">

              <img
                id="hero-image"
                src="${j}"
                alt="Healthcare"
                class="w-full h-[350px] sm:h-[450px] object-cover transition-all duration-700"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  `,I=()=>{l.timeline().from(`.hero-title`,{y:100,opacity:0,duration:1,ease:`power4.out`}).from(`.hero-desc`,{y:40,opacity:0,duration:.8},`-=0.5`).from(`#hero-image`,{scale:1.2,opacity:0,duration:1.2,ease:`power4.out`},`-=0.8`)},L=()=>{let e=document.querySelector(`#hero-image`),t=[j,M,N,P],n=0;setInterval(()=>{l.to(e,{x:100,opacity:0,duration:.5,ease:`power3.inOut`,onComplete:()=>{n++,n>=t.length&&(n=0),e.src=t[n],l.set(e,{x:-100,opacity:0}),l.to(e,{x:0,opacity:1,duration:.7,ease:`power4.out`})}})},2500)};l.registerPlugin(u);var R=()=>{window.innerWidth>=1024&&l.from(`.testimonial-card`,{y:80,opacity:20,stagger:.2,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.testimonials-section`,start:`top 75%`}})},z=()=>`

    <section class="contact-cta-section py-20 md:py-24 lg:py-28 bg-slate-900 overflow-hidden">

      <div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">

        <!-- Small Heading -->
        <span class="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

          Contact Us

        </span>

        <!-- Main Heading -->
        <h2 class="contact-cta-title mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">

          Looking For Trusted Healthcare Manufacturing Solutions?

        </h2>

        <!-- Description -->
        <p class="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">

          Connect with Nihal Healthcare for sterile syringe manufacturing, healthcare supply partnerships, product inquiries, and global distribution opportunities.

        </p>

        <!-- Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          <!-- Contact Button -->
          <a
            href="/contact.html"
            class="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
          >

            Contact Us

          </a>

          <!-- Quote Button -->
          <!-- <a
            href="/contact.html"
            class="inline-flex items-center justify-center border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
          >

            Request Quote

          </a> -->

        </div>

      </div>

    </section>

  `;l.registerPlugin(u);var B=()=>{window.innerWidth>=1024&&l.from(`.contact-cta-title`,{y:80,opacity:0,duration:1,ease:`power4.out`,scrollTrigger:{trigger:`.contact-cta-section`,start:`top 75%`}})},V=()=>`

    <section class="
      py-14
      md:py-20
      lg:py-28
      bg-stone-50
      overflow-hidden
    ">

      <div class="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        lg:px-8
      ">

        <div class="
          grid
          lg:grid-cols-2
          gap-6
          sm:gap-10
          lg:gap-20
          items-center
        ">

          <!-- IMAGE -->
          <div>

            <div class="
              rounded-[32px]
              overflow-hidden
              bg-white
            ">

              <img
                src="${E}"
                alt="About Nihal Healthcare"
                class="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  lg:h-[550px]
                  object-cover
                "
              />

            </div>

          </div>

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

              About Us

            </span>

            <h2 class="
              mt-5
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-extrabold
              text-slate-900
              leading-tight
            ">

              Precision Manufacturing For Modern Healthcare

            </h2>

            <p class="
              mt-6
              text-slate-600
              text-base
              md:text-lg
              leading-relaxed
            ">

              Nihal Healthcare specializes in sterile
              medical disposable manufacturing with
              advanced production standards, certified
              quality systems, and healthcare-focused
              innovation.

            </p>

            <!-- HIGHLIGHTS -->
            <div class="
              mt-10
              grid
              sm:grid-cols-2
              gap-5
            ">

              <div class="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
              ">

                <h3 class="
                  text-3xl
                  font-extrabold
                  text-cyan-500
                ">

                  ISO

                </h3>

                <p class="
                  mt-2
                  text-slate-600
                ">

                  Certified Manufacturing

                </p>

              </div>

              <div class="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
              ">

                <h3 class="
                  text-3xl
                  font-extrabold
                  text-cyan-500
                ">

                  Sterile

                </h3>

                <p class="
                  mt-2
                  text-slate-600
                ">

                  Medical Disposable Solutions

                </p>

              </div>

            </div>

            <!-- BUTTON -->
            <div class="mt-10">

              <a
                href="/about.html"
                class="
                  inline-flex
                  items-center
                  gap-3
                  bg-slate-900
                  hover:bg-cyan-500
                  text-white
                  px-7
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >

                Read More

                <span>→</span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  `;l.registerPlugin(u);var H=()=>{l.from(`.blogs-grid-section h2, .blogs-grid-section h1`,{opacity:20,y:60,duration:1,ease:`power3.out`}),l.from(`.blogs-grid-section p`,{opacity:20,y:40,duration:1,delay:.2,ease:`power3.out`}),l.from(`.blogs-grid-section .group`,{scrollTrigger:{trigger:`.blogs-grid-section`,start:`top 75%`},opacity:20,y:80,stagger:.2,duration:1,ease:`power3.out`}),l.from(`.single-blog-image`,{scrollTrigger:{trigger:`.single-blog-image`,start:`top 80%`},opacity:20,scale:.9,duration:1.2,ease:`power3.out`}),l.from(`.single-blog-content p`,{scrollTrigger:{trigger:`.single-blog-content`,start:`top 80%`},opacity:20,y:50,stagger:.2,duration:1,ease:`power3.out`})};s(),i(A(`home`)),r([n({baseUrl:`https://nihalhealthcare.com`,phone:`+919218511425`,email:`contact@nihalhealthcare.com`,whatsapp:`+919218511425`}),t(`https://nihalhealthcare.com`),o(O),a([{name:`Home`,url:`https://nihalhealthcare.com/`}])]),document.querySelector(`#app`).innerHTML=`
  ${c()}
  ${F()}
  ${f()}
  ${h()}
  ${V()}
  ${_(3,!0,!1)}
  ${b()}
  ${C(3,!0,!0)}
  ${T(3,!0,!0)}
  ${z()}
  ${D()}
  ${y()}
  ${e()}
`,d(),p(),L(),I(),L(),g(),v(),R(),w(),B(),S(),x(),H(),m(),k();