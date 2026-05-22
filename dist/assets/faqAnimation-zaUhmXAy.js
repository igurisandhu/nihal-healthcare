var e=`/assets/about-kNUGpdeN.jpg`,t=[{question:`What products does Nihal Healthcare manufacture?`,answer:`Nihal Healthcare manufactures a comprehensive range of sterile medical devices including Sterile Hypodermic Syringes (with and without needle) in sizes 1ml to 50ml, and Sterile Hypodermic Needles in gauges 16G to 26G. All products are ETO-sterilized and comply with international quality standards.`},{question:`Is Nihal Healthcare ISO 13485 certified?`,answer:`Yes. Nihal Healthcare is ISO 13485 certified, which is the internationally recognized standard for Quality Management Systems in medical device manufacturing. Our products also carry CE marking for European market compliance, ensuring the highest levels of safety and regulatory adherence.`},{question:`What sterilization method does Nihal Healthcare use?`,answer:`We use Ethylene Oxide (ETO) sterilization — the gold standard for single-use medical devices. ETO sterilization ensures complete elimination of all microbial life without compromising the integrity of the product or its packaging, making it ideal for heat-sensitive medical instruments like syringes and needles.`},{question:`Does Nihal Healthcare accept bulk and wholesale orders?`,answer:`Yes, Nihal Healthcare specializes in bulk and wholesale supply of sterile medical devices to hospitals, clinics, distributors, and healthcare organizations globally. We offer competitive pricing, reliable lead times, and flexible packaging options. Contact us via phone at +91 92185 11425 or email at contact@nihalhealthcare.com for bulk order inquiries.`},{question:`What countries does Nihal Healthcare export to?`,answer:`Nihal Healthcare exports sterile medical devices to multiple international markets. Our products meet global regulatory standards including ISO 13485, CE marking, and comply with applicable country-specific medical device regulations, enabling us to serve healthcare providers across Asia, Africa, the Middle East, and Europe.`},{question:`How can I verify the quality and certifications of Nihal Healthcare products?`,answer:`All Nihal Healthcare products carry verifiable regulatory documentation. Our ISO 13485 certificate, CE marking, and product-specific compliance documentation are available upon request. Each product batch is tested and released under our Quality Management System. Visit our Certifications page for full details, or contact our team directly.`},{question:`What sizes of syringes are available at Nihal Healthcare?`,answer:`Nihal Healthcare offers sterile syringes in 1ml, 2ml, 3ml, 5ml, 10ml, 20ml, and 50ml capacities — both with integrated needles and without needles. Needle gauge options range from 16G (large bore) to 26G (fine). This wide range ensures suitability for vaccine administration, IV therapy, blood sampling, and specialized clinical procedures.`},{question:`Are Nihal Healthcare syringes and needles single-use only?`,answer:`Yes. All Nihal Healthcare syringes and needles are single-use, sterile, and individually blister-packed or bulk-packed for clinical use. Re-use is strictly contraindicated. Our products are classified as Class IIa medical devices and are designed to maintain sterility until the point of use.`}],n=()=>`
    <section class="faq-section py-14 md:py-20 bg-slate-50">

      <div class="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-14">
          <span class="inline-block text-cyan-500 font-semibold uppercase tracking-widest text-sm mb-3">
            Got Questions?
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about Nihal Healthcare's products, certifications, and ordering process.
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="faq-list flex flex-col gap-3">
          ${t.map((e,t)=>`
    <div class="faq-item border border-slate-200 rounded-2xl overflow-hidden" data-faq="${t}">

      <button
        class="faq-trigger w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
        aria-expanded="false"
        aria-controls="faq-answer-${t}"
      >
        <span class="faq-question text-base md:text-lg font-600 text-slate-800 pr-4">
          ${e.question}
        </span>
        <span class="faq-icon flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center transition-transform duration-300">
          <svg class="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>

      <div
        id="faq-answer-${t}"
        class="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
        role="region"
      >
        <div class="px-6 pb-6 pt-0">
          <div class="w-full h-px bg-slate-100 mb-4"></div>
          <p class="text-slate-600 text-base leading-relaxed">
            ${e.answer}
          </p>
        </div>
      </div>

    </div>
  `).join(``)}
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
          <p class="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="/contact.html"
            class="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Contact Our Team
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

      </div>

    </section>
  `,r=()=>{document.querySelectorAll(`.faq-trigger`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.faq-item`),n=t.querySelector(`.faq-answer`),r=e.querySelector(`.faq-icon`),i=e.getAttribute(`aria-expanded`)===`true`;document.querySelectorAll(`.faq-item`).forEach(e=>{if(e!==t){let t=e.querySelector(`.faq-trigger`),n=e.querySelector(`.faq-answer`),r=e.querySelector(`.faq-icon`);t.setAttribute(`aria-expanded`,`false`),n.style.maxHeight=`0px`,r.style.transform=`rotate(0deg)`,e.classList.remove(`border-cyan-300`),e.classList.add(`border-slate-200`)}}),i?(e.setAttribute(`aria-expanded`,`false`),n.style.maxHeight=`0px`,r.style.transform=`rotate(0deg)`,t.classList.remove(`border-cyan-300`),t.classList.add(`border-slate-200`)):(e.setAttribute(`aria-expanded`,`true`),n.style.maxHeight=n.scrollHeight+`px`,r.style.transform=`rotate(180deg)`,t.classList.remove(`border-slate-200`),t.classList.add(`border-cyan-300`))})})};export{e as i,n,t as r,r as t};