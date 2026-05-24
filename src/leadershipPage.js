import './style.css'


import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { leadership } from './components/leadership/leadership'

import { leadershipAnimation } from './components/leadership/leadershipAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectMeta, injectMultipleSchemas, generateOrganizationSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Leadership page SEO metadata
const leadershipMetadata = getPageMetadata('leadership')
injectMeta(leadershipMetadata)
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Leadership', url: 'https://nihalhealthcare.com/leadership.html' },
  ]),
])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${leadership(null, false, true)}

  </main>

  ${footer()}
  ${whatsappButton()}

`

navbarFunctionality()
leadershipAnimation()
whatsappButtonFunctionality()