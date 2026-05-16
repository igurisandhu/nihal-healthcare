import './style.css'

import { navbar } from './components/navbar/navbar'

import { footer } from './components/footer/footer'

import { productData } from './components/product-detail/productDetails'

import { productHero } from './components/product-detail/productHero'

import { productSpecifications } from './components/product-detail/productSpecifications'

import { productSizes } from './components/product-detail/productSizes'

import { productRegulatory } from './components/product-detail/productRegulatory'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'

// SEO Metadata Injection
import { injectEnhancedMetaTags } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'

// Inject Insulin Syringes page SEO metadata
const insulinMetadata = getPageMetadata('insulinSyringes')
injectEnhancedMetaTags(insulinMetadata)

const product = productData.insulin

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main class="pt-20">

    ${productHero(product)}

    ${productSpecifications(product)}

    ${productSizes(product)}

    ${productRegulatory(product)}

    ${whatsappButton()}

  </main>

  ${footer()}

`

whatsappButtonFunctionality()