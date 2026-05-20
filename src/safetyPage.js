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
import { injectEnhancedMetaTags, injectMultipleSchemas, generateOrganizationSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Safety Syringes page SEO metadata
const safetyMetadata = getPageMetadata('safetySyringes')
injectEnhancedMetaTags(safetyMetadata)
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Products', url: 'https://nihalhealthcare.com/products.html' },
    { name: 'Safety Syringes', url: 'https://nihalhealthcare.com/safety-syringes.html' },
  ]),
])

const product = productData.safety

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