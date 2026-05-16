import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import { navbarAnimation } from './components/navbar/navbarAnimation'
import { products } from './components/products/products'
import { productsAnimation } from './components/products/productsAnimation'
import './style.css'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectEnhancedMetaTags } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject Products page SEO metadata
const productsMetadata = getPageMetadata('products')
injectEnhancedMetaTags(productsMetadata)



document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main class="pt-24 pb-20">

    ${products()}

  </main>

  ${footer()}
  ${whatsappButton()}

`

navbarAnimation()
productsAnimation()
footerAnimation()
whatsappButtonFunctionality()