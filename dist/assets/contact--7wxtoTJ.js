import{g as e,h as t,i as n,l as r,o as i,t as a,v as o,y as s}from"./gtm-C7AcwAx1.js";import{t as c}from"./navbarAnimation-nIwfTKzd.js";import{t as l}from"./navbarFunctionality-DYFdrxFV.js";import{t as u}from"./footerAnimation-DKeORBd-.js";import{n as d,t as f}from"./whatsappButtonFunctionality-DXb-Cey1.js";import{t as p}from"./pageMetadata-BM_zFqmP.js";var m=()=>`

    <section class="contact-page pt-28 md:pt-36 pb-16 md:pb-24 lg:pb-28 bg-stone-50 overflow-hidden">

      <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center max-w-3xl mx-auto">

          <span class="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">

            Contact Us

          </span>

          <h1 class="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">

            Get In Touch With Nihal Healthcare

          </h1>

          <p class="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">

            Connect with Nihal Healthcare for product inquiries, manufacturing partnerships, export opportunities, and healthcare supply solutions.

          </p>

        </div>

        <!-- Contact Section -->
        <div class="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-14 mt-10 md:mt-16">

          <!-- Office Details -->
          <div class="bg-slate-900 rounded-[32px] p-5 sm:p-8 md:p-10 text-white">

            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold">

              Office Details

            </h2>

            <p class="mt-4 text-slate-300 leading-relaxed">

              Reach out to Nihal Healthcare for healthcare manufacturing solutions, product inquiries, and business partnerships.

            </p>

            <div class="mt-10 space-y-8">

              <div>

                <h3 class="text-cyan-400 font-semibold uppercase tracking-wider text-sm">

                  Address

                </h3>

                <p class="mt-3 text-slate-300 leading-relaxed">

                  Plot No.33, EPIP Phase-I, Jharmajri, <br>
                  Tehsil Baddi, Solan, Himachal Pradesh, <br>
                  173205, India

                </p>

              </div>

              <div>

                <h3 class="text-cyan-400 font-semibold uppercase tracking-wider text-sm">

                  Contact Number

                </h3>

                <div class="mt-3 space-y-2 text-slate-300">

                  <p>+91 9218511425</p>

                </div>

              </div>

              <div>

                <h3 class="text-cyan-400 font-semibold uppercase tracking-wider text-sm">

                  Email

                </h3>

                <p class="mt-3 text-slate-300 break-all">

                  nihalhealth2012@gmail.com

                </p>

              </div>

            </div>

          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-[32px] border border-slate-200 p-5 sm:p-8 md:p-10 shadow-sm">

            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">

              Send A Message

            </h2>

            <p class="mt-4 text-slate-600 leading-relaxed">

              Fill out the form below and our team will get back to you shortly.

            </p>

            <!-- FORM -->
            <form
              id="contact-form"
              class="mt-10 space-y-6"
            >

              <!-- Name -->
              <div>

                <label class="block text-sm font-semibold text-slate-700 mb-3">

                  Full Name

                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  class="w-full h-14 rounded-2xl border border-slate-300 px-5 outline-none focus:border-cyan-500 transition-all duration-300"
                />

              </div>

              <!-- Email -->
              <div>

                <label class="block text-sm font-semibold text-slate-700 mb-3">

                  Email Address

                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  class="w-full h-14 rounded-2xl border border-slate-300 px-5 outline-none focus:border-cyan-500 transition-all duration-300"
                />

              </div>

              <!-- Subject -->
              <div>

                <label class="block text-sm font-semibold text-slate-700 mb-3">

                  Subject

                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  class="w-full h-14 rounded-2xl border border-slate-300 px-5 outline-none focus:border-cyan-500 transition-all duration-300"
                />

              </div>

              <!-- Message -->
              <div>

                <label class="block text-sm font-semibold text-slate-700 mb-3">

                  Message

                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  required
                  class="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                ></textarea>

              </div>

              <!-- Button -->
              <button
                type="submit"
                class="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  `,h=()=>{let e=document.querySelector(`#contact-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=new FormData(e),r=`New Contact Form Message

Name: ${n.get(`name`)}

Email: ${n.get(`email`)}

Subject: ${n.get(`subject`)}

Message:
${n.get(`message`)}`,i=`https://wa.me/919218511425?text=${encodeURIComponent(r)}`;window.location.href=i,e.reset()})};a(),t(p(`contact`)),e([r({baseUrl:`https://nihalhealthcare.com`,phone:`+919218511425`,email:`contact@nihalhealthcare.com`}),i({phone:`+919218511425`,email:`contact@nihalhealthcare.com`}),n([{name:`Home`,url:`https://nihalhealthcare.com/`},{name:`Contact`,url:`https://nihalhealthcare.com/contact.html`}])]),document.querySelector(`#app`).innerHTML=`

  ${s()}

  ${m()}

  ${o()}

  ${d()}


`,c(),l(),u(),f(),h();