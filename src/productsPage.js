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
import { injectEnhancedMetaTags, injectMultipleSchemas, generateOrganizationSchema, generateBreadcrumbSchema, generateProductListSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Products page SEO metadata
const productsMetadata = getPageMetadata('products')
injectEnhancedMetaTags(productsMetadata)

// Inject ProductList, Organization, and Breadcrumb schemas
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Products', url: 'https://nihalhealthcare.com/products.html' },
  ]),
  generateProductListSchema([
    {
      name: 'Sterile Hypodermic Syringes with Needle',
      description: 'ISO 13485 certified sterile disposable syringes with integrated needles in 1ml–50ml sizes. ETO sterilized.',
      url: '/products/sterile-hypodermic-syringes.html',
    },
    {
      name: 'Sterile Hypodermic Syringes without Needle',
      description: 'Sterile syringes without needles for fluid transfer and injection in 1ml–50ml sizes. ETO sterilized.',
      url: '/products/sterile-hypodermic-syringes-without-needle.html',
    },
    {
      name: 'Sterile Hypodermic Needles',
      description: 'Precision sterile needles in gauges 16G to 26G for aspiration and injection. ETO sterilized.',
      url: '/products/sterile-hypodermic-needles.html',
    },
  ]),
])



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