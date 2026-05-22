import { blogsGrid } from './components/blogs/blogsGrid'
import { blogHero } from './components/blogs/blogsHero'
import { footer } from './components/footer/footer'
import { footerAnimation } from './components/footer/footerAnimation'
import { navbar } from './components/navbar/navbar'
import './style.css'
import { whatsappButton } from './components/whatsapp/whatsappButton'
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality'


// SEO Metadata Injection
import { injectMeta, injectMultipleSchemas, generateOrganizationSchema, generateBreadcrumbSchema } from './utils/seoMeta'
import { getPageMetadata } from './utils/pageMetadata'
import { injectGTM } from './utils/gtm.js';

injectGTM();

// Inject Blogs page SEO metadata
const blogsMetadata = getPageMetadata('blogs')
injectMeta(blogsMetadata)
injectMultipleSchemas([
  generateOrganizationSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Blogs', url: 'https://nihalhealthcare.com/blogs.html' },
  ]),
])


document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${blogHero()}

    ${blogsGrid(null, false, false)}

  </main>

  ${footer()}
  ${ whatsappButton()}

`

footerAnimation()
whatsappButtonFunctionality()