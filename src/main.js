import './style.css'

import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { navbarFunctionality } from './components/navbar/navbarFunctionality'

import { hero } from './components/hero-section/hero'
import { heroAnimation } from './components/hero-section/heroAnimation'
import { imageSlider } from './components/hero-section/imageSlider'
import { products } from './components/products/products'
import { productsAnimation } from './components/products/productsAnimation'
import { leadership } from './components/leadership/leadership'
import { leadershipAnimation } from './components/leadership/leadershipAnimation'
import { testimonials } from './components/testimonials/testimonials'
import { testimonialsAnimation } from './components/testimonials/testimonialsAnimation'
import { contactCta } from './components/contactCta/contactCta'
import { contactCtaAnimation } from './components/contactCta/contactCtaAnimation'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { certificationsGrid } from './components/certifications-page/certificationsGrid'
import { certificationsAnimation } from './components/certifications-page/certificationsAnimations'
import { blogsGrid } from './components/blogs/blogsGrid'
import { aboutPreview } from './components/about/aboutPreview'
import { feedback } from './components/feedback/feedback'
import { feedbackFunctionality } from './components/feedback/feedbackFunctionality'
import { blogsAnimation } from './components/blogs/blogsAnimation'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectEnhancedMetaTags, injectMultipleSchemas, generateOrganizationSchema, generateHomePageSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject homepage SEO metadata
const homeMetadata = getPageMetadata('home')
injectEnhancedMetaTags(homeMetadata)

// Inject Organization and HomePage schemas
const schemas = [
  generateOrganizationSchema({ baseUrl: 'https://nihalhealthcare.com', phone: '+919218511425', email: 'contact@nihalhealthcare.com', whatsapp: '+919218511425' }),
  generateHomePageSchema('https://nihalhealthcare.com')
]
injectMultipleSchemas(schemas)

document.querySelector("#app").innerHTML = `
  ${navbar()}
  ${hero()}
  ${whatsappButton()}
  ${products()}
  ${aboutPreview()}
  ${leadership(3, true, false)}
  ${testimonials()}
  ${certificationsGrid(3, true, true)}
  ${blogsGrid(3, true, true)}
  ${contactCta()}
  ${feedback()}
  ${footer()}
`

navbarAnimation()
navbarFunctionality()
imageSlider()

heroAnimation() 
imageSlider()
productsAnimation()
leadershipAnimation()
testimonialsAnimation()
certificationsAnimation()
contactCtaAnimation()
footerAnimation()
feedbackFunctionality()
blogsAnimation()
whatsappButtonFunctionality()