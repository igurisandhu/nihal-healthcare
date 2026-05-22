import './style.css'


import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { aboutHero } from './components/about/aboutHero'

import { aboutOverview } from './components/about/aboutOverview'

import { aboutMission } from './components/about/aboutMission'

import { aboutWhyUs } from './components/about/aboutWhyUs'

import { aboutCTA } from './components/about/aboutCTA'
import { aboutAnimation } from './components/about/aboutAnimation'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'
import { faq } from './components/faq/faq'
import { faqAnimation } from './components/faq/faqAnimation'
import { footerAnimation } from './components/footer/footerAnimation'

// SEO Metadata Injection
import { injectMeta, injectMultipleSchemas, generateOrganizationSchema, generateFAQSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { faqData } from './data/faqData.js'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject About page SEO metadata
const aboutMetadata = getPageMetadata('about')
injectMeta(aboutMetadata)
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateFAQSchema(faqData),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'About Us', url: 'https://nihalhealthcare.com/about.html' },
  ]),
])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main class="pt-20">

    ${aboutHero()}

    ${aboutOverview()}

    ${aboutMission()}

    ${aboutWhyUs()}

    ${aboutCTA()}

    ${ whatsappButton() }

    ${faq()}

  </main>

  ${footer()}

`

aboutAnimation()
whatsappButtonFunctionality()
faqAnimation()
footerAnimation()