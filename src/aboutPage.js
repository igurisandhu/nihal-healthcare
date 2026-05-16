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

// SEO Metadata Injection
import { injectEnhancedMetaTags, injectMultipleSchemas, generateOrganizationSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject About page SEO metadata
const aboutMetadata = getPageMetadata('about')
injectEnhancedMetaTags(aboutMetadata)
injectMultipleSchemas([generateOrganizationSchema()])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main class="pt-20">

    ${aboutHero()}

    ${aboutOverview()}

    ${aboutMission()}

    ${aboutWhyUs()}

    ${aboutCTA()}

    ${ whatsappButton() }

  </main>

  ${footer()}

`

aboutAnimation()
whatsappButtonFunctionality()