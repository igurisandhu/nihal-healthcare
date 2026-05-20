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

  `,r=(e,t=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`Product`,name:e.name,description:e.fullDescription,image:e.image||`https://nihalhealthcare.com/assets/placeholder-product.jpg`,manufacturer:{"@type":`Organization`,name:`Nihal Healthcare`,url:t},url:`${t}/products/${e.categoryId}/${e.slug}.html`,category:e.categoryName,brand:{"@type":`Brand`,name:`Nihal Healthcare`},aggregateRating:{"@type":`AggregateRating`,ratingValue:`4.8`,ratingCount:`150`,bestRating:`5`,worstRating:`1`},offers:{"@type":`Offer`,priceCurrency:`INR`,price:`Contact for pricing`,availability:`https://schema.org/InStock`,url:`${t}/products/${e.categoryId}/${e.slug}.html`},additionalProperty:[{"@type":`PropertyValue`,name:`Size/Gauge`,value:e.size||e.gauge},{"@type":`PropertyValue`,name:`Material`,value:e.materials?.join(`, `)},{"@type":`PropertyValue`,name:`Sterilization Method`,value:e.sterilization},{"@type":`PropertyValue`,name:`Classification`,value:e.classification},{"@type":`PropertyValue`,name:`EMDN Code`,value:e.emdnCode},{"@type":`PropertyValue`,name:`GMDN Code`,value:e.gmdnCode},{"@type":`PropertyValue`,name:`UDI-DI`,value:e.udiDi}]}),i=(e,t,n=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`CollectionPage`,name:e.name,description:e.description,url:`${n}/products/${e.slug}.html`,mainEntity:{"@type":`Product`,name:e.name,description:e.description,image:e.image||`https://nihalhealthcare.com/assets/placeholder-category.jpg`,manufacturer:{"@type":`Organization`,name:`Nihal Healthcare`,url:n},"@context":`https://schema.org`,potentialAction:{"@type":`SearchAction`,target:{"@type":`EntryPoint`,urlTemplate:`${n}/products/${e.slug}?search={search_term}`}}},hasPart:t.map(e=>({"@type":`Product`,name:e.name,description:e.briefDescription,url:`${n}/products/${e.categoryId}/${e.slug}.html`,image:e.image||`https://nihalhealthcare.com/assets/placeholder-product.jpg`}))}),a=(e,t=!1)=>{let n=`https://nihalhealthcare.com`,r,i,a,o,s;return t?(r=`${e.name} | Medical Syringes & Needles | Nihal Healthcare`,i=`${e.briefDescription}. Available with ${e.needleGauges?.length||e.gauge?`multiple options`:`various sizes`}. ISO 13485 certified. ETO sterilized. Contact for quote.`,a=`${e.name}, ${e.categoryName}, ${e.size||e.gauge}, sterile syringe, hypodermic needle, medical device, ISO 13485, ${e.emdnCode}`,o=e.image||`https://nihalhealthcare.com/assets/images/brand/og-image-nihal-healthcare.jpg`,s=`${n}/products/${e.categoryId}/${e.slug}.html`):(r=`${e.name} | Nihal Healthcare - Medical Supplies`,i=e.description,a=`${e.name}, sterile syringes, hypodermic needles, medical devices, ISO 13485, ETO sterilized, bulk ordering`,o=e.image||`https://nihalhealthcare.com/assets/images/brand/og-image-nihal-healthcare.jpg`,s=`${n}/products/${e.slug}.html`),{title:r,description:i,keywords:a,ogTitle:r,ogDescription:i,ogImage:o,ogUrl:s,twitterCard:`summary_large_image`,twitterTitle:r,twitterDescription:i,twitterImage:o,canonical:s,robots:`index, follow`}},o=()=>{document.querySelectorAll(`link[data-favicon="true"]`).forEach(e=>e.remove()),[{rel:`icon`,type:`image/x-icon`,href:`/assets/favicons/favicon.ico`},{rel:`icon`,type:`image/png`,sizes:`32x32`,href:`/assets/favicons/favicon-32x32.png`},{rel:`icon`,type:`image/png`,sizes:`16x16`,href:`/assets/favicons/favicon-16x16.png`},{rel:`apple-touch-icon`,href:`/assets/favicons/apple-touch-icon.png`},{rel:`icon`,type:`image/png`,sizes:`192x192`,href:`/assets/favicons/android-chrome-192x192.png`},{rel:`icon`,type:`image/png`,sizes:`512x512`,href:`/assets/favicons/android-chrome-512x512.png`}].forEach(({rel:e,type:t,sizes:n,href:r})=>{let i=document.createElement(`link`);i.rel=e,t&&(i.type=t),n&&(i.sizes=n),i.href=r,i.setAttribute(`data-favicon`,`true`),document.head.appendChild(i)})},s=e=>{e.title&&(document.title=e.title),document.querySelectorAll(`meta[data-seo="true"]`).forEach(e=>e.remove());let t=(e,t,n=!1)=>{let r=n?`property`:`name`,i=document.querySelector(`meta[${r}="${e}"]`);i||(i=document.createElement(`meta`),i.setAttribute(r,e),i.setAttribute(`data-seo`,`true`),document.head.appendChild(i)),i.setAttribute(`content`,t)};t(`description`,e.description),t(`keywords`,e.keywords),t(`robots`,e.robots),t(`og:title`,e.ogTitle,!0),t(`og:description`,e.ogDescription,!0),t(`og:image`,e.ogImage,!0),t(`og:url`,e.ogUrl,!0),t(`og:type`,`website`,!0),t(`twitter:card`,e.twitterCard),t(`twitter:title`,e.twitterTitle),t(`twitter:description`,e.twitterDescription),t(`twitter:image`,e.twitterImage);let n=document.querySelector(`link[rel="canonical"]`);n||(n=document.createElement(`link`),n.rel=`canonical`,document.head.appendChild(n)),n.href=e.canonical,o()},c=e=>{document.querySelectorAll(`script[type="application/ld+json"][data-seo="true"]`).forEach(e=>e.remove());let t=document.createElement(`script`);t.type=`application/ld+json`,t.setAttribute(`data-seo`,`true`),t.textContent=JSON.stringify(e,null,2),document.head.appendChild(t)},l=(e,t=null,n=null)=>{let r=e.name,i=t||n||e.size||e.gauge,a=e.materials?.join(`, `)||`As per specifications`,o=e.sterilization,s=e.emdnCode,c=e.gmdnCode,l=`Hi Nihal Healthcare,

I am interested in your *${r}* product.

**Product Details:**
• Size/Gauge: ${i}
• Material: ${a}
• Sterilization: ${o}
• Classification: ${e.classification}
• EMDN Code: ${s}
• GMDN Code: ${c}

Please send me a quotation with:
1. Pricing per unit and bulk rates
2. Minimum Order Quantity (MOQ)
3. Lead time for delivery
4. Available payment terms

Thank you!`;return encodeURIComponent(l)},u=(e,t,n=null,r=null)=>`https://wa.me/${e}?text=${l(t,n,r)}`,d=(e={})=>{let t=e.baseUrl||`https://nihalhealthcare.com`,n=e.phone||`+919218511425`,r=e.email||`contact@nihalhealthcare.com`;return e.whatsapp,{"@context":`https://schema.org`,"@type":`Organization`,name:`Nihal Healthcare`,url:t,logo:`${t}/assets/logo.png`,description:`Leading manufacturer and supplier of sterile medical syringes and hypodermic needles. ISO 13485 certified. ETO sterilized medical devices.`,foundingDate:`2007`,foundingLocation:`India`,contactPoint:{"@type":`ContactPoint`,name:`Customer Service`,telephone:n,contactType:`Customer Service`,email:r,areaServed:`IN`,availableLanguageId:`en`},address:{"@type":`PostalAddress`,addressCountry:`IN`,addressLocality:`India`,addressRegion:`India`}}},f=(e={})=>({"@context":`https://schema.org`,"@type":`ContactPoint`,name:`Nihal Healthcare - Customer Support`,telephone:e.phone||`+919218511425`,email:e.email||`contact@nihalhealthcare.com`,contactType:`Customer Service`,areaServed:`IN`,availableLanguageId:`en`}),p=(e={})=>{let t=e.baseUrl||`https://nihalhealthcare.com`,n=e.phone||`+919218511425`,r=e.email||`contact@nihalhealthcare.com`;return{"@context":`https://schema.org`,"@type":`LocalBusiness`,name:`Nihal Healthcare`,description:`Manufacturer and supplier of sterile medical devices - syringes and hypodermic needles. ISO 13485 certified.`,url:t,telephone:n,email:r,image:`${t}/assets/logo.png`,address:{"@type":`PostalAddress`,addressCountry:`IN`,addressLocality:`India`},contactPoint:{"@type":`ContactPoint`,name:`Customer Service`,telephone:n,contactType:`Customer Service`,email:r}}},m=(e,t=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`BlogPosting`,headline:e.title,description:e.description,image:e.image||`${t}/assets/placeholder-blog.jpg`,datePublished:e.publishedDate,dateModified:e.modifiedDate||e.publishedDate,author:{"@type":`Organization`,name:e.author||`Nihal Healthcare`},publisher:{"@type":`Organization`,name:`Nihal Healthcare`,logo:{"@type":`ImageObject`,url:`${t}/assets/logo.png`}},mainEntityOfPage:{"@type":`WebPage`,"@id":e.url||`${t}/blogs`},keywords:e.keywords,wordCount:e.wordCount,articleSection:e.category||`Healthcare News`,url:e.url||`${t}/blogs`}),h=(e=[],t=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`FAQPage`,mainEntity:e.map(e=>({"@type":`Question`,name:e.question,acceptedAnswer:{"@type":`Answer`,text:e.answer}}))}),g=(e,t=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`BreadcrumbList`,itemListElement:e.map((e,n)=>({"@type":`ListItem`,position:n+1,name:e.name,item:e.url.startsWith(`http`)?e.url:`${t}${e.url}`}))}),_=(e=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`WebSite`,name:`Nihal Healthcare`,url:e,description:`Leading manufacturer of sterile medical devices - syringes and hypodermic needles. ISO 13485 certified.`,potentialAction:{"@type":`SearchAction`,target:{"@type":`EntryPoint`,urlTemplate:`${e}/products?search={search_term}`}}}),v=e=>{e.title&&(document.title=e.title),document.querySelectorAll(`meta[data-seo="true"]`).forEach(e=>e.remove());let t=(e,t,n=!1)=>{let r=n?`property`:`name`,i=document.querySelector(`meta[${r}="${e}"]`);i||(i=document.createElement(`meta`),i.setAttribute(r,e),i.setAttribute(`data-seo`,`true`),document.head.appendChild(i)),i.setAttribute(`content`,t)};t(`description`,e.description),t(`keywords`,e.keywords),t(`robots`,e.robots),t(`author`,e.author),t(`viewport`,e.viewport),t(`og:title`,e.ogTitle,!0),t(`og:description`,e.ogDescription,!0),t(`og:image`,e.ogImage,!0),t(`og:url`,e.ogUrl,!0),t(`og:type`,e.ogType,!0),t(`og:locale`,e.ogLocale,!0),t(`twitter:card`,e.twitterCard),t(`twitter:title`,e.twitterTitle),t(`twitter:description`,e.twitterDescription),t(`twitter:image`,e.twitterImage);let n=document.querySelector(`link[rel="canonical"]`);n||(n=document.createElement(`link`),n.rel=`canonical`,document.head.appendChild(n)),n.href=e.canonical,o()},y=e=>{document.querySelectorAll(`script[type="application/ld+json"][data-seo="true"]`).forEach(e=>e.remove()),e.forEach(e=>{let t=document.createElement(`script`);t.type=`application/ld+json`,t.setAttribute(`data-seo`,`true`),t.textContent=JSON.stringify(e,null,2),document.head.appendChild(t)})},b=(e,t=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`BreadcrumbList`,itemListElement:e.map((e,n)=>({"@type":`ListItem`,position:n+1,name:e.name,item:e.url?e.url.startsWith(`http`)?e.url:`${t}${e.url}`:void 0}))}),x=(e,t=`https://nihalhealthcare.com`)=>({"@context":`https://schema.org`,"@type":`ItemList`,name:`Nihal Healthcare Medical Products`,description:`Complete range of ISO 13485 certified sterile medical devices — syringes and hypodermic needles.`,numberOfItems:e.length,itemListElement:e.map((e,n)=>({"@type":`ListItem`,position:n+1,item:{"@type":`Product`,name:e.name,description:e.description,url:e.url.startsWith(`http`)?e.url:`${t}${e.url}`,image:e.image||`${t}/assets/images/brand/og-image-nihal-healthcare.svg`,brand:{"@type":`Brand`,name:`Nihal Healthcare`},manufacturer:{"@type":`Organization`,name:`Nihal Healthcare`,url:t},offers:{"@type":`Offer`,priceCurrency:`INR`,availability:`https://schema.org/InStock`,url:e.url.startsWith(`http`)?e.url:`${t}${e.url}`}}}))}),S=`G-NEDBHTPNWH`,C=()=>{if(document.querySelector(`script[src*="${S}"]`))return;let e=document.createElement(`script`);e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=${S}`,document.head.appendChild(e);let t=document.createElement(`script`);t.textContent=`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${S}');
  `,document.head.appendChild(t)};export{y as _,i as a,t as b,_ as c,d,x as f,s as g,v as h,b as i,p as l,u as m,g as n,f as o,r as p,m as r,h as s,C as t,a as u,c as v,n as y};