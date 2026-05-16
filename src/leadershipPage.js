import './style.css'

import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { leadership } from './components/leadership/leadership'

import { leadershipAnimation } from './components/leadership/leadershipAnimation'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectEnhancedMetaTags, injectMultipleSchemas, generateOrganizationSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject Leadership page SEO metadata
const leadershipMetadata = getPageMetadata('leadership')
injectEnhancedMetaTags(leadershipMetadata)
injectMultipleSchemas([generateOrganizationSchema()])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${leadership(null, false, true)}

  </main>

  ${footer()}
  ${whatsappButton()}

`

leadershipAnimation()
whatsappButtonFunctionality()