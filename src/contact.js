import { contactPage } from './components/contact/contactPage'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import './style.css'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'
import { contactFormFunctionality } from './components/contact/contactFormFunctionality.js'


// SEO Metadata Injection
import { injectMeta, injectMultipleSchemas, generateLocalBusinessSchema, generateContactPointSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Contact page SEO metadata
const contactMetadata = getPageMetadata('contact')
injectMeta(contactMetadata)

// Inject LocalBusiness, ContactPoint and Breadcrumb schemas
const schemas = [
  generateLocalBusinessSchema({ baseUrl: 'https://nihalhealthcare.com', phone: '+919218511425', email: 'contact@nihalhealthcare.com' }),
  generateContactPointSchema({ phone: '+919218511425', email: 'contact@nihalhealthcare.com' }),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Contact', url: 'https://nihalhealthcare.com/contact.html' },
  ]),
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

whatsappButtonFunctionality()
contactFormFunctionality()