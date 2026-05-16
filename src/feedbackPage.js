import './style.css'

import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { feedbackHero } from './components/feedbackPage/feedbackHero'

import { feedbackStats } from './components/feedbackPage/feedbackStats'

import { testimonials } from './components/testimonials/testimonials'

import { feedback } from './components/feedback/feedback'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectEnhancedMetaTags } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject Feedback page SEO metadata
const feedbackMetadata = getPageMetadata('feedback')
injectEnhancedMetaTags(feedbackMetadata)

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