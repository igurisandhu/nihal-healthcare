import { certificationsAnimation } from './components/certifications-page/certificationsAnimations'
import { certificationsGrid } from './components/certifications-page/certificationsGrid'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'
import './style.css'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'


// SEO Metadata Injection
import { injectEnhancedMetaTags, injectMultipleSchemas, generateOrganizationSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Certifications page SEO metadata
const certificationsMetadata = getPageMetadata('certifications')
injectEnhancedMetaTags(certificationsMetadata)
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Certifications', url: 'https://nihalhealthcare.com/certifications.html' },
  ]),
])

document.querySelector("#app").innerHTML = `

  ${navbar()}
  ${certificationsGrid()}
  ${footer()}
  ${whatsappButton()}

`

navbarAnimation()
navbarFunctionality()

certificationsAnimation()

footerAnimation()
whatsappButtonFunctionality()