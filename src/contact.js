import { contactPage } from './components/contact/contactPage'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import './style.css'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectEnhancedMetaTags, injectMultipleSchemas, generateLocalBusinessSchema, generateContactPointSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject Contact page SEO metadata
const contactMetadata = getPageMetadata('contact')
injectEnhancedMetaTags(contactMetadata)

// Inject LocalBusiness and ContactPoint schemas
const schemas = [
  generateLocalBusinessSchema({ baseUrl: 'https://nihalhealthcare.com', phone: '+919218511425', email: 'contact@nihalhealthcare.com' }),
  generateContactPointSchema({ phone: '+919218511425', email: 'contact@nihalhealthcare.com' })
]
injectMultipleSchemas(schemas)


document.querySelector("#app").innerHTML = `

  ${navbar()}

  ${contactPage()}

  ${footer()}

  ${whatsappButton()}


`

navbarAnimation()
navbarFunctionality()
footerAnimation()

contactAnimation()
whatsappButtonFunctionality()