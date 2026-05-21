const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/variantDetailAnimation-_1X8grQM.js","assets/ScrollTrigger-N39Bzxb5.js"])))=>i.map(i=>d[i]);
import{_ as e,b as t,g as n,m as r,n as i,p as a,t as o,u as s,y as c}from"./gtm-BPRvSvdf.js";import{t as l}from"./navbarAnimation-BVUa5AKH.js";import{t as u}from"./navbarFunctionality-BGGaZaf6.js";import{t as d}from"./footerAnimation-VMZc8zZ3.js";import{n as f,t as p}from"./whatsappButtonFunctionality-CXJGJttH.js";import{t as m}from"./preload-helper-CanIyeJJ.js";var h=`919218511425`,g={"sterile-hypodermic-syringes":{"1ml-syringe-with-needle":`/assets/images/products/1ml-sterile-hypodermic-syringe-with-needle.png`,"2ml-syringe-with-needle":`/assets/images/products/2ml-sterile-hypodermic-syringe-with-needle.png`,"3ml-syringe-with-needle":`/assets/images/products/3ml-sterile-hypodermic-syringe-with-needle.png`,"5ml-syringe-with-needle":`/assets/images/products/5ml-sterile-hypodermic-syringe-with-needle.png`,"10ml-syringe-with-needle":`/assets/images/products/10ml-sterile-hypodermic-syringe-with-needle.png`,"20ml-syringe-with-needle":`/assets/images/products/20ml-sterile-hypodermic-syringe-with-needle.png`,"50ml-syringe-with-needle":`/assets/images/products/50ml-sterile-hypodermic-syringe-with-needle.png`},"sterile-hypodermic-syringes-without-needle":{"1ml-syringe-without-needle":`/assets/images/products/1ml-sterile-hypodermic-syringe-without-needle-(Tuberculin).png`,"2ml-syringe-without-needle":`/assets/images/products/2ml-sterile-hypodermic-syringe-without-needle.png`,"3ml-syringe-without-needle":`/assets/images/products/3ml-sterile-hypodermic-syringe-without-needle.png`,"5ml-syringe-without-needle":`/assets/images/products/5ml-sterile-hypodermic-syringe-without-needle.png`,"10ml-syringe-without-needle":`/assets/images/products/10ml-sterile-hypodermic-syringe-without-needle.png`,"20ml-syringe-without-needle":`/assets/images/products/20ml-sterile-hypodermic-syringe-without-needle.png`,"50ml-syringe-without-needle":`/assets/images/products/50ml-sterile-hypodermic-syringe-without-needle.png`},"sterile-hypodermic-needles":{"16g-hypodermic-needle":`/assets/images/products/16g-steriles-hypodermic-needle.png`,"18g-hypodermic-needle":`/assets/images/products/18g-steriles-hypodermic-needle.png`,"20g-hypodermic-needle":`/assets/images/products/20g-steriles-hypodermic-needle.png`,"21g-hypodermic-needle":`/assets/images/products/21g-steriles-hypodermic-needle.png`,"22g-hypodermic-needle":`/assets/images/products/22g-steriles-hypodermic-needle.png`,"23g-hypodermic-needle":`/assets/images/products/23g-steriles-hypodermic-needle.png`,"24g-hypodermic-needle":`/assets/images/products/24g-steriles-hypodermic-needle.png`,"25g-hypodermic-needle":`/assets/images/products/25g-steriles-hypodermic-needle.png`,"26g-hypodermic-needle":`/assets/images/products/26g-steriles-hypodermic-needle.png`}};function _(e){let t=r(h,e),n=g[e.categoryId]?.[e.slug]||`https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=800&h=600&fit=crop`,i=e.needleGauges?e.needleGauges.map(t=>`
        <a 
          href="${r(h,e,null,t)}"
          target="_blank"
          rel="noopener noreferrer"
          class="gauge-pill inline-flex items-center gap-3 bg-white border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 px-4 py-3 rounded-lg transition group"
        >
          <span class="font-semibold text-slate-900 group-hover:text-cyan-600">${t}</span>
          <span class="text-xs text-green-600 font-bold opacity-0 group-hover:opacity-100 transition">Quote →</span>
        </a>
      `).join(``):``,a=[{label:`Material`,value:e.materials?.join(`, `)},{label:`Sterilization`,value:e.sterilization},{label:`Classification`,value:e.classification},{label:`EMDN Code`,value:e.emdnCode},{label:`GMDN Code`,value:e.gmdnCode},{label:`UDI-DI`,value:e.udiDi},{label:`MDN Code`,value:e.mdn},{label:`MDS Codes`,value:e.mds?.join(`, `)},{label:`MDT Codes`,value:e.mdt?.join(`, `)}].map((e,t)=>`
    <tr class="${t%2==0?`bg-white`:`bg-slate-50`}">
      <td class="px-6 py-4 font-semibold text-slate-900">${e.label}</td>
      <td class="px-6 py-4 text-slate-700">${e.value}</td>
    </tr>
  `).join(``);return`
    <div class="variant-detail-page">
      <!-- Breadcrumb -->
      <nav class="bg-slate-50 border-b border-slate-200 px-6 py-4 md:px-12">
        <div class="max-w-7xl mx-auto">
          <ol class="flex gap-2 text-sm text-slate-600">
            <li><a href="/products.html" class="text-cyan-600 hover:text-cyan-700">Products</a></li>
            <li><span class="text-slate-400">/</span></li>
            <li><a href="/products/${e.categoryId}.html" class="text-cyan-600 hover:text-cyan-700">${e.categoryName}</a></li>
            <li><span class="text-slate-400">/</span></li>
            <li class="text-slate-900 font-semibold">${e.name}</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-[24px] p-8 border border-slate-200">
            <img 
              src="${n}"
              alt="${e.name}"
              class="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <!-- Product Info -->
          <div>
            <div class="mb-6">
              <span class="inline-block bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ${e.size||e.gauge}
              </span>
              <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">${e.name}</h1>
            </div>

            <p class="text-lg text-slate-600 mb-8 leading-relaxed">${e.fullDescription}</p>

            <div class="bg-cyan-50 border-l-4 border-cyan-600 p-6 mb-8 rounded-lg">
              <p class="text-slate-900 mb-2"><strong>Classification:</strong> <span class="text-cyan-600 font-semibold">${e.classification}</span></p>
              <p class="text-slate-900"><strong>Sterilization:</strong> <span class="text-cyan-600 font-semibold">${e.sterilization}</span></p>
            </div>

            <!-- WhatsApp Quote Button (Primary CTA) -->
            <a 
              href="${t}"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition text-center mb-4 shadow-lg"
            >
              Get Quote
            </a>

            <p class="text-xs text-slate-500 text-center">
              Click to send product details via WhatsApp. Our team will respond with pricing & MOQ.
            </p>
          </div>
        </div>
      </section>

      <!-- Specifications Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Technical Specifications</h2>
          
          <div class="overflow-x-auto bg-white rounded-[20px] border border-slate-200 shadow-sm">
            <table class="w-full">
              <thead class="bg-slate-900 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Specification</th>
                  <th class="px-6 py-4 text-left font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                ${a}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Sizes/Gauges Section -->
      ${e.needleGauges?`
        <section class="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-slate-200">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Available Needle Gauges</h2>
            <p class="text-slate-600 mb-12">Hover over any gauge to request a quote for that specific variant:</p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              ${i}
            </div>
          </div>
        </section>
      `:``}

      <!-- Intended Use Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-br from-cyan-50 to-blue-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">Intended Use</h2>
          <p class="text-slate-700 leading-relaxed text-lg">
            ${e.intendedUse}
          </p>
        </div>
      </section>

      <!-- Regulatory Compliance Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Regulatory Compliance</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">EMDN Code</p>
              <p class="text-2xl font-bold text-slate-900">${e.emdnCode}</p>
              <p class="text-xs text-slate-600 mt-3">European Medical Device Nomenclature</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">GMDN Code</p>
              <p class="text-2xl font-bold text-slate-900">${e.gmdnCode}</p>
              <p class="text-xs text-slate-600 mt-3">Global Medical Device Nomenclature</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">Classification</p>
              <p class="text-2xl font-bold text-slate-900">${e.classification}</p>
              <p class="text-xs text-slate-600 mt-3">Device Classification Level</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">Sterilization</p>
              <p class="text-2xl font-bold text-slate-900">${e.sterilization}</p>
              <p class="text-xs text-slate-600 mt-3">Method of Sterilization</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">UDI-DI</p>
              <p class="text-lg font-mono font-bold text-slate-900 break-all">${e.udiDi}</p>
              <p class="text-xs text-slate-600 mt-3">Unique Device Identifier</p>
            </div>

            <div class="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
              <p class="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">Certification</p>
              <p class="text-2xl font-bold text-slate-900">ISO 13485</p>
              <p class="text-xs text-slate-600 mt-3">Medical Device Quality Management</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Materials Section -->
      <section class="py-16 md:py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Materials Used</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${e.materials?.map(e=>`
              <div class="flex items-start gap-4 bg-white p-6 rounded-[20px] border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
                <div class="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span class="text-cyan-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 text-lg">${e}</p>
                  <p class="text-sm text-slate-600 mt-1">High-quality medical grade material</p>
                </div>
              </div>
            `).join(``)||``}
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="bg-gradient-to-r from-slate-900 to-cyan-900 text-white py-16 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-4xl mx-auto text-center relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
          <p class="text-cyan-100 mb-8 text-lg">
            Contact our sales team for detailed pricing, bulk discounts, and lead times
          </p>
          <a 
            href="${t}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-white text-cyan-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  `}o();async function v(r){let{getVariantBySlug:o}=await m(async()=>{let{getVariantBySlug:e}=await import(`./productsDatabase-MIzzNIzA.js`).then(e=>e.n);return{getVariantBySlug:e}},[]),h=o(r);if(!h){console.error(`Variant not found: ${r}`);return}n(s(h,!0)),e([a(h),i([{name:`Home`,url:`/`},{name:`Products`,url:`/products.html`},{name:h.categoryName,url:`/products/${h.categoryId}.html`},{name:h.name,url:`/products/${h.categoryId}/${r}.html`}])]);let g=document.createElement(`div`),v=document.createElement(`main`),y=document.createElement(`div`),b=document.createElement(`div`);v.className=`pt-24 pb-20`,g.innerHTML=t(),y.innerHTML=f(),b.innerHTML=c(),document.body.insertBefore(g,document.querySelector(`main`)||document.body.firstChild);let x=document.getElementById(`variant-detail-root`);v.innerHTML=_(h),x.replaceWith(v),document.body.appendChild(b),document.body.appendChild(y),l(),u(),d(),p();let S=(await m(async()=>{let{variantDetailAnimation:e}=await import(`./variantDetailAnimation-_1X8grQM.js`);return{variantDetailAnimation:e}},__vite__mapDeps([0,1]))).variantDetailAnimation;S()}export{v as t};