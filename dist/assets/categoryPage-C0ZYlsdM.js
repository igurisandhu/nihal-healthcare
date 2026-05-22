const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/categoryAnimation-CGr_VJLK.js","assets/ScrollTrigger-CNrhOlEx.js"])))=>i.map(i=>d[i]);
import{_ as e,a as t,h as n,t as r,u as i,v as a,y as o}from"./gtm-CZO3iEIl.js";import{t as s}from"./navbarAnimation-nIwfTKzd.js";import{t as c}from"./navbarFunctionality-DYFdrxFV.js";import{t as l}from"./footerAnimation-DKeORBd-.js";import{n as u,t as d}from"./whatsappButtonFunctionality-DXb-Cey1.js";import{t as f}from"./preload-helper-DX1F7c5z.js";function p(r){n(i(r,!1)),e(t(r,r.variants));let a=r.variants.map(e=>{let t=e.size||e.gauge,n=e.needleGauges?`${e.needleGauges.length} gauge options`:e.gauge?`Single gauge`:`Multiple sizes`,r=e.image||`https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=400&h=300&fit=crop`;return`
        <div onclick="window.location.href='/products/${e.categoryId}/${e.slug}.html'" class="variant-card group bg-white rounded-[24px] overflow-hidden border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
        
          <div class="relative h-56 bg-slate-100 overflow-hidden">
            <img 
              src="${r}"
              alt="${e.name}"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <span class="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ${t}
            </span>
          </div>

          <div class="p-6">

            <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
              ${e.name}
            </h3>

            <p class="text-sm text-slate-600 mb-4 line-clamp-2">
              ${e.briefDescription}
            </p>

            <div class="mb-6 space-y-1 text-xs text-slate-500">
              <p>• ${n}</p>
              <p>• ${e.sterilization}</p>
              <p>• ${e.classification}</p>
            </div>

            <div class="flex gap-2">
              <a 
                href="/products/${e.categoryId}/${e.slug}.html"
                class="flex-1 bg-slate-900 hover:bg-cyan-600 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition text-center"
              >
                Details
              </a>

              <a 
                href="https://wa.me/919218511425?text=${encodeURIComponent(`Hi Nihal Healthcare, I am interested in ${e.name}. Please send me a quote.`)}"
                target="_blank"
                rel="noopener noreferrer"
                onclick="event.stopPropagation()"
                class="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition text-center"
              >
                Get Quote
              </a>
            </div>

          </div>

        </div>
      `}).join(``);return`
    <div class="category-page">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">${r.name}</h1>
          <p class="text-lg text-cyan-100 mb-8 max-w-3xl">${r.description}</p>
          <div class="flex flex-wrap items-center gap-3 text-sm">
            <span class="bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full">
              ${r.variants.length} Variants
            </span>
            <span class="bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full">
              ISO 13485 Certified
            </span>
            <span class="bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full">
              ETO Sterilized
            </span>
          </div>
        </div>
      </section>

      <!-- Variants Grid -->
      <section class="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-slate-900 mb-2">Available Variants</h2>
            <p class="text-slate-600">
              Select a product to view detailed specifications and request a quote
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            ${a}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
          <p class="text-white/90 mb-8 text-lg">
            Contact our specialist team for bulk orders, custom specifications, or technical support.
          </p>
          <a 
            href="https://wa.me/919218511425?text=Hi%20Nihal%20Healthcare,%20I%20am%20interested%20in%20${encodeURIComponent(r.name)}.%20Could%20you%20please%20provide%20more%20information%20and%20pricing?"
            class="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  `}r();async function m(e){let{getCategoryWithVariants:t}=await f(async()=>{let{getCategoryWithVariants:e}=await import(`./productsDatabase-CcTIPkxC.js`).then(e=>e.n);return{getCategoryWithVariants:e}},[]),n=t(e);if(!n){console.error(`Category not found: ${e}`);return}let r=document.createElement(`div`),i=document.createElement(`main`),m=document.createElement(`div`),h=document.createElement(`div`);i.className=`pt-24 pb-20`,r.innerHTML=o(),m.innerHTML=u(),h.innerHTML=a(),document.body.insertBefore(r,document.querySelector(`main`)||document.body.firstChild);let g=document.getElementById(`category-page-root`);i.innerHTML=p(n),g.replaceWith(i),document.body.appendChild(h),document.body.appendChild(m),s(),c(),l(),d();let _=(await f(async()=>{let{categoryPageAnimation:e}=await import(`./categoryAnimation-CGr_VJLK.js`);return{categoryPageAnimation:e}},__vite__mapDeps([0,1]))).categoryPageAnimation;_()}export{m as t};