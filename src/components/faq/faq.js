import { faqData } from '../../data/faqData.js'

export const faq = () => {
  const items = faqData
    .map(
      (item, index) => `
    <div class="faq-item border border-slate-200 rounded-2xl overflow-hidden" data-faq="${index}">

      <button
        class="faq-trigger w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
        aria-expanded="false"
        aria-controls="faq-answer-${index}"
      >
        <span class="faq-question text-base md:text-lg font-600 text-slate-800 pr-4">
          ${item.question}
        </span>
        <span class="faq-icon flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center transition-transform duration-300">
          <svg class="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>

      <div
        id="faq-answer-${index}"
        class="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
        role="region"
      >
        <div class="px-6 pb-6 pt-0">
          <div class="w-full h-px bg-slate-100 mb-4"></div>
          <p class="text-slate-600 text-base leading-relaxed">
            ${item.answer}
          </p>
        </div>
      </div>

    </div>
  `
    )
    .join('')

  return `
    <section class="faq-section py-20 bg-slate-50">

      <div class="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-14">
          <span class="inline-block text-cyan-500 font-semibold uppercase tracking-widest text-sm mb-3">
            Got Questions?
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about Nihal Healthcare's products, certifications, and ordering process.
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="faq-list flex flex-col gap-3">
          ${items}
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
  `
}
