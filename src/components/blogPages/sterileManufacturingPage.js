import '../../style.css'


import { navbar } from '../navbar/navbar'

import { footer } from '../footer/footer'

import { blogsData } from '../blogs/blogsData'

import { singleBlogHero } from '../blogs/singleBlogHero'

import { singleBlogContent } from '../blogs/singleBlogContent'
import { injectGTM } from '../../utils/gtm.js';
import { injectEnhancedMetaTags, injectMultipleSchemas, generateArticleSchema, generateBreadcrumbSchema } from '../../utils/seoMeta.js';

injectGTM();

const blog = blogsData[0]

injectEnhancedMetaTags({
  title: blog.title + ' | Nihal Healthcare',
  description: blog.desc?.replace(/\s+/g, ' ').trim(),
  keywords: 'sterile manufacturing, healthcare manufacturing, ISO 13485, ETO sterilization, medical device quality',
  ogTitle: blog.title,
  ogDescription: blog.desc?.replace(/\s+/g, ' ').trim(),
  ogImage: 'https://nihalhealthcare.com/assets/images/brand/og-image-nihal-healthcare.svg',
  ogUrl: 'https://nihalhealthcare.com/sterile-manufacturing.html',
  ogType: 'article',
  canonical: 'https://nihalhealthcare.com/sterile-manufacturing.html',
  robots: 'index, follow',
  author: 'Nihal Healthcare',
})

injectMultipleSchemas([
  generateArticleSchema({
    title: blog.title,
    description: blog.desc?.replace(/\s+/g, ' ').trim(),
    publishedDate: '2026-03-01',
    modifiedDate: '2026-05-20',
    keywords: 'sterile manufacturing, healthcare manufacturing, ISO 13485, ETO sterilization',
    category: 'Manufacturing',
    url: 'https://nihalhealthcare.com/sterile-manufacturing.html',
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Blogs', url: 'https://nihalhealthcare.com/blogs.html' },
    { name: blog.title },
  ]),
])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${singleBlogHero(blog)}

    ${singleBlogContent(blog)}

  </main>

  ${footer()}

`