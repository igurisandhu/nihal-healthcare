import './style.css'


import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { feedbackHero } from './components/feedbackPage/feedbackHero'

import { feedbackStats } from './components/feedbackPage/feedbackStats'

import { testimonials } from './components/testimonials/testimonials'

import { feedback } from './components/feedback/feedback'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'
import { feedbackFunctionality } from './components/feedback/feedbackFunctionality.js'

// SEO Metadata Injection
import { injectMeta, injectMultipleSchemas, generateOrganizationSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Feedback page SEO metadata
const feedbackMetadata = getPageMetadata('feedback')
injectMeta(feedbackMetadata)
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Feedback', url: 'https://nihalhealthcare.com/feedback.html' },
  ]),
])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${feedbackHero()}

    ${feedbackStats()}

    ${testimonials()}

    ${feedback()}
    ${whatsappButton()}

  </main>

  ${footer()}

`
whatsappButtonFunctionality()
feedbackFunctionality()